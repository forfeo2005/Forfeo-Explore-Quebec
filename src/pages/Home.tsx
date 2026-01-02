import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaMapMarkedAlt, 
  FaTaxi, FaHotel, FaSubway, FaUtensils, FaHiking, FaLandmark, FaCloudSun, FaCar
} from 'react-icons/fa'; 
import Footer from '../components/Footer'; 
import GoogleSearchBar from '../components/GoogleSearchBar'; // Import du nouveau composant

export default function Home() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  const [address, setAddress] = useState('');
  const [mapQuery, setMapQuery] = useState('Quebec+City,QC');
  const [activeTab, setActiveTab] = useState('places');
  const [weather, setWeather] = useState<{temp: number, code: number} | null>(null);

  // Météo Réelle (API Gratuite OpenMeteo pour Québec)
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=46.81&longitude=-71.20&current_weather=true')
      .then(res => res.json())
      .then(data => {
        setWeather({
          temp: data.current_weather.temperature,
          code: data.current_weather.weathercode
        });
      })
      .catch(err => console.error("Erreur météo", err));
  }, []);

  const services = [
    { id: 'places', label: 'Lieux', icon: FaLandmark, query: 'Tourist+attractions' },
    { id: 'taxi', label: 'Taxis', icon: FaTaxi, query: 'Taxi' },
    { id: 'hotel', label: 'Hôtels', icon: FaHotel, query: 'Hotels' },
    { id: 'resto', label: 'Restaurants', icon: FaUtensils, query: 'Restaurants' },
    { id: 'activity', label: 'Activités', icon: FaHiking, query: 'Things+to+do' },
    { id: 'transport', label: 'Transports', icon: FaSubway, query: 'Transit+station' },
  ];

  // Nouvelle fonction de recherche connectée au composant intelligent
  const handleSmartSearch = (newAddress: string) => {
    setAddress(newAddress);
    if (newAddress) {
      // On cherche le service actif (ex: Restaurants) PRÈS de la nouvelle adresse
      const serviceQuery = services.find(s => s.id === activeTab)?.query || 'Tourist+attractions';
      setMapQuery(`${serviceQuery}+near+${newAddress}`);
    }
  };

  // Fonction pour changer d'onglet (Lieux, Taxi, etc.)
  const handleTabChange = (serviceId: string, serviceQuery: string) => {
    setActiveTab(serviceId);
    // Si on a déjà une adresse, on cherche près de là, sinon on cherche à Québec par défaut
    const location = address ? `near+${address}` : 'in+Quebec+City';
    setMapQuery(`${serviceQuery}+${location}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      
      {/* SECTION HÉROS */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Bienvenue sur <span className="text-yellow-400">Forfeo Explore</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Découvrez le Québec, trouvez un restaurant, commandez un Uber et vivez des expériences inoubliables.
          </p>
          
          <Link 
            to="/regions" 
            className="inline-flex items-center bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-xl border-2 border-yellow-500"
          >
            Explorer les Régions <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* STATISTIQUES */}
      <section className="py-12 bg-white shadow-xl -mt-10 relative z-20 mx-4 md:mx-auto max-w-6xl rounded-2xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div className="p-4"><h3 className="text-4xl font-black text-gray-900">10M+</h3><p className="text-gray-500 uppercase font-bold">Touristes Informés</p></div>
          <div className="p-4"><h3 className="text-4xl font-black text-gray-900">17</h3><p className="text-gray-500 uppercase font-bold">Régions Uniques</p></div>
          <div className="p-4"><h3 className="text-4xl font-black text-gray-900">500+</h3><p className="text-gray-500 uppercase font-bold">Activités Locales</p></div>
        </div>
      </section>

      {/* SECTION CARTE & SERVICES */}
      <section id="carte" className="py-20 container mx-auto px-4">
        
        {/* BARRE DE RECHERCHE + MÉTÉO */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
          {/* Widget Météo */}
          <div className="bg-white px-6 py-3 rounded-full shadow-md flex items-center border border-blue-100 min-w-[200px]">
            <FaCloudSun className="text-yellow-500 text-3xl mr-3" />
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold">Météo Québec</p>
              <p className="text-xl font-bold text-blue-900">{weather ? `${weather.temp}°C` : 'Chargement...'}</p>
            </div>
          </div>

          {/* NOUVEAU : Composant de Recherche Intelligent */}
          <GoogleSearchBar onSearch={handleSmartSearch} />
          
        </div>

        {/* ONGLETS SERVICES */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
           {services.map((service) => (
             <button
               key={service.id}
               onClick={() => handleTabChange(service.id, service.query)}
               className={`flex items-center px-5 py-2 rounded-full shadow-sm border transition-all ${
                 activeTab === service.id 
                 ? 'bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-300' 
                 : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
               }`}
             >
               <service.icon className={`mr-2 ${activeTab === service.id ? 'text-yellow-400' : 'text-blue-600'}`} />
               <span className="font-bold text-sm">{service.label}</span>
             </button>
           ))}
        </div>

        {/* INTEGRATION UBER & UBER EATS */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="https://m.uber.com/ul/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-lg">
            <FaCar className="mr-2" /> Commander un Uber
          </a>
          <a href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition shadow-lg">
            <FaUtensils className="mr-2" /> Commander Uber Eats
          </a>
        </div>

        {/* LA CARTE */}
        <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-2xl h-[500px] relative border-4 border-white">
           {apiKey ? (
             <iframe
               title="Carte Google Maps"
               width="100%"
               height="100%"
               style={{ border: 0 }}
               loading="lazy"
               allowFullScreen
               // Utilisation de l'URL Embed API standard et sécurisée
               src={`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${mapQuery}&zoom=13`}
             ></iframe>
           ) : (
             <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-500 p-8 text-center">
               <FaMapMarkedAlt size={48} className="mb-4 text-gray-400" />
               <p className="font-bold text-lg text-red-500">Clé API manquante.</p>
               <p className="text-sm mt-2">Ajoutez VITE_GOOGLE_MAPS_API_KEY dans votre fichier .env</p>
             </div>
           )}
        </div>
      </section>

      {/* BANNIÈRE COOKIES */}
      <div className="fixed bottom-0 w-full bg-gray-900 text-white p-4 text-xs z-50 flex justify-between items-center opacity-95">
        <p>Ce site utilise des cookies pour améliorer votre expérience conformément à la Loi 25.</p>
        <button className="bg-yellow-400 text-blue-900 px-4 py-1 rounded font-bold ml-4 hover:bg-yellow-300" onClick={(e) => e.currentTarget.parentElement!.style.display = 'none'}>
          Accepter
        </button>
      </div>

      <Footer />
    </div>
  );
}
