import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';
import { Navigation, MapPin } from 'lucide-react';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

// Styles du conteneur de la carte
const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.75rem',
};

// Centre par défaut (Centre approximatif du Québec)
const center = {
  lat: 52.0,
  lng: -72.0,
};

// Données fictives pour la démonstration (Points d'Intérêt)
const POIs = [
  { id: 1, name: "Château Frontenac", position: { lat: 46.8123, lng: -71.2050 }, type: "Hôtel" },
  { id: 2, name: "Basilique Notre-Dame", position: { lat: 45.5045, lng: -73.5560 }, type: "Activité" },
  { id: 3, name: "Rocher Percé", position: { lat: 48.5209, lng: -64.2127 }, type: "Nature" },
];

const MapView: React.FC = () => {
  const { isLoaded, loadError } = useGoogleMaps();
  
  // États locaux
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedPOI, setSelectedPOI] = useState<typeof POIs[0] | null>(null);
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [isLoadingRoute, setIsLoadingRoute] = useState(false);

  // Callbacks pour charger/décharger la carte sans re-renders inutiles
  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Fonction de calcul d'itinéraire (GPS)
  const calculateRoute = async () => {
    if (!selectedPOI) return;
    setIsLoadingRoute(true);

    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
      setIsLoadingRoute(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const origin = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const directionsService = new google.maps.DirectionsService();

        directionsService.route(
          {
            origin: origin,
            destination: selectedPOI.position,
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
              setDirectionsResponse(result);
            } else {
              console.error(`Erreur de calcul d'itinéraire: ${status}`);
              alert("Impossible de calculer l'itinéraire vers ce lieu.");
            }
            setIsLoadingRoute(false);
          }
        );
      },
      (error) => {
        console.error("Erreur de géolocalisation:", error);
        alert("Impossible d'accéder à votre position. Vérifiez que la localisation est activée.");
        setIsLoadingRoute(false);
      }
    );
  };

  if (loadError) return <div className="text-red-500 p-4 font-bold text-center">Erreur de chargement de Google Maps. Vérifiez votre clé API.</div>;
  
  if (!isLoaded) return (
    <div className="flex justify-center items-center h-full bg-gray-100 rounded-xl animate-pulse text-gray-500">
      Chargement de la carte...
    </div>
  );

  return (
    <div className="relative w-full h-[500px] md:h-[600px] shadow-xl rounded-xl overflow-hidden border-4 border-white bg-gray-200">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        {/* Marqueurs POI */}
        {POIs.map((poi) => (
          <Marker
            key={poi.id}
            position={poi.position}
            onClick={() => setSelectedPOI(poi)}
          />
        ))}

        {/* Fenêtre d'info au clic */}
        {selectedPOI && (
          <InfoWindow
            position={selectedPOI.position}
            onCloseClick={() => {
              setSelectedPOI(null);
              setDirectionsResponse(null);
            }}
          >
            <div className="p-2 min-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="text-quebec-light" size={18} />
                <h3 className="font-bold text-lg text-gray-800">{selectedPOI.name}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-3">{selectedPOI.type}</p>
              
              <button
                onClick={calculateRoute}
                disabled={isLoadingRoute}
                className="w-full bg-quebec-light hover:bg-quebec-dark text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                {isLoadingRoute ? (
                  <span className="animate-spin">⟳</span>
                ) : (
                  <Navigation size={16} />
                )}
                <span>{isLoadingRoute ? 'Calcul...' : 'Itinéraire GPS'}</span>
              </button>
            </div>
          </InfoWindow>
        )}

        {/* Tracé de l'itinéraire */}
        {directionsResponse && (
          <DirectionsRenderer
            options={{
              directions: directionsResponse,
              polylineOptions: {
                strokeColor: "#0055A4",
                strokeWeight: 5,
                strokeOpacity: 0.8
              }
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapView;
