import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaMapMarkedAlt, FaStar, FaTaxi, FaHotel, FaSubway, FaUtensils, FaHiking, FaLandmark } from 'react-icons/fa'; 
import Footer from '../components/Footer'; 

export default function Home() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  // État pour savoir ce qu'on cherche sur la carte (par défaut: Québec City)
  const [mapQuery, setMapQuery] = useState('Quebec+City,QC');

  // Liste des services (Design "Pillules" comme demandé)
  const services = [
    { id: 'taxi', label: 'Taxis', icon: FaTaxi, query: 'Taxi+in+Quebec+City' },
    { id: 'hotel', label: 'Hôtels', icon: FaHotel, query: 'Hotels+in+Quebec+City' },
    { id: 'resto', label: 'Restaurants', icon: FaUtensils, query: 'Restaurants+in+Quebec+City' },
    { id: 'activity', label: 'Activités', icon: FaHiking, query: 'Things+to+do+in+Quebec+City' },
    { id: 'transport', label: 'Transports', icon: FaSubway, query: 'Transit+station+in+Quebec+City' },
    { id: 'places', label: 'Lieux', icon: FaLandmark, query: 'Tourist+attractions+in+Quebec+City' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      
      {/* SECTION HÉROS */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Bienvenue sur <span className="text-yellow-400">Forfeo</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Votre compagnon numérique intelligent pour découvrir les trésors cachés, les taxis et les meilleurs restaurants du Québec.
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
          <div className="p-4 group">
            <FaUsers className="mx-auto text-5xl text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-4xl font-black text-gray-900">10M+</h3>
            <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Touristes Informés</p>
          </div>
          <div className="p-4 group">
            <FaMapMarkedAlt className="mx-auto text-5xl text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-4xl font-black text-gray-900">17</h3>
            <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Régions Uniques</p>
          </div>
          <div className="p-4 group">
            <FaStar className="mx-auto text-5xl text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="text-4xl font-black text-gray-900">500+</h3>
            <p className="text-gray-500 text-sm uppercase font-bold tracking-widest">Activités Locales</p>
          </div>
        </div>
      </section>

      {/* SECTION CARTE & SERVICES */}
      <section id="carte" className="py-20 container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Carte Interactive & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sélectionnez un service ci-dessous pour le voir apparaître sur la carte.
          </p>
        </div>

        {/* BARRE DE SERVICES (Style Scroll Horizontal / Boutons Pills) */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
           {services.map((service) => (
             <button
               key={service.id}
               onClick={() => setMapQuery(service.query)}
               className={`flex items-center px-6 py-3 rounded-full shadow-sm border transition-all transform hover:scale-105 ${
                 mapQuery === service.query 
                 ? 'bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-300' 
                 : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
               }`}
             >
               <service.icon className={`mr-2 ${mapQuery === service.query ? 'text-yellow-400' : 'text-blue-600'}`} />
               <span className="font-bold">{service.label}</span>
             </button>
           ))}
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
               referrerPolicy="no-referrer-when-downgrade"
               // Utilisation de l'API Embed CORRECTE
               src={`https://www.google.com/maps/embed/v1/search?key=${apiKey}&q=${mapQuery}&zoom=13`}
             ></iframe>
           ) : (
             <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-500 p-8 text-center">
               <FaMapMarkedAlt size={48} className="mb-4 text-gray-400" />
               <p className="font-bold text-lg text-red-500">Clé API manquante.</p>
             </div>
           )}
        </div>
        
        <div className="mt-4 text-center">
           <p className="text-xs text-gray-400 italic">
             Cliquez sur les boutons ci-dessus (Taxi, Restaurant...) pour mettre à jour la carte en temps réel.
           </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
