import React, { useEffect, useRef, useState } from 'react';

// Cette interface permet d'éviter les erreurs TypeScript si window.google n'est pas encore défini
declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleSearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Vérification que l'API Google est bien chargée
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error("Google Maps API pas encore chargée");
      return;
    }

    if (inputRef.current) {
      const options = {
        componentRestrictions: { country: "ca" }, // Limite au Canada
        fields: ["address_components", "geometry", "icon", "name"],
        types: ["address"],
      };

      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);

      // Écouteur quand l'utilisateur sélectionne une adresse
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        
        if (!place.geometry) {
          console.log("Adresse non sélectionnée dans la liste");
          return;
        }

        // C'est ici que tu récupéreras les infos pour la météo plus tard
        console.log("Adresse choisie :", place.name);
        console.log("Lat/Lng :", place.geometry.location.lat(), place.geometry.location.lng());
        
        // Mise à jour de l'état local
        setAddress(place.name);
      });
    }
  }, []);

  return (
    <div className="flex w-full max-w-2xl bg-white rounded-full shadow-xl overflow-hidden border border-gray-100 p-1">
      <input
        ref={inputRef}
        type="text"
        className="flex-grow px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none text-lg"
        placeholder="Entrez votre adresse (ex: 123 Rue Principale)..."
        defaultValue={address} // Utilise defaultValue pour laisser Google gérer l'input
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-md">
        Voir
      </button>
    </div>
  );
}
