import React from 'react';
import { Link } from 'react-router-dom';
// On utilise les icônes classiques qui fonctionnaient
import { FaArrowRight, FaUsers, FaMapMarkedAlt, FaStar, FaTaxi, FaHotel, FaSubway, FaLandmark } from 'react-icons/fa'; 
import Footer from '../components/Footer'; 

export default function Home() {
  // 1. RÉCUPÉRATION DE LA CLÉ API
  // Assure-toi que dans .env.local, ta variable s'appelle bien VITE_GOOGLE_MAPS_API_KEY
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      
      {/* SECTION HÉROS : Bienvenue + CTA */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Fond décoratif subtil */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Bienvenue sur <span className="text-yellow-400">Forfeo</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Votre compagnon numérique intelligent pour découvrir les trésors cachés, les taxis et les hôtels du Québec.
          </p>
          
          <Link 
            to="/regions" 
            className="inline-flex items-center bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-xl border-2 border-yellow-500"
          >
            Explorer les Régions <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* SECTION STATISTIQUES (Style Flashy) */}
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

      {/* SECTION CARTE INTERACTIVE & SERVICES */}
      <section id="carte" className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Carte Interactive & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilisez notre carte pour localiser instantanément les services essentiels autour de vous.
          </p>
        </div>

        {/* Boutons d'accès rapide (Taxi, Hôtel, etc.) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
           <button className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition border border-gray-100 group">
             <FaTaxi className="text-4xl text-yellow-500 mb-3 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-gray-800">Trouver un Taxi</span>
           </button>
           <button className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition border border-gray-100 group">
             <FaHotel className="text-4xl text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-gray-800">Hôtels à proximité</span>
           </button>
           <button className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition border border-gray-100 group">
             <FaSubway className="text-4xl text-green-600 mb-3 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-gray-800">Transports</span>
           </button>
           <button className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition border border-gray-100 group">
             <FaLandmark className="text-4xl text-red-500 mb-3 group-hover:scale-110 transition-transform" />
             <span className="font-bold text-gray-800">Lieux Touristiques</span>
           </button>
        </div>

        {/* LA CARTE AVEC TA CLÉ API */}
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
               // On utilise l'API Embed. Si tu as activé "Maps JavaScript API", ça marchera aussi.
               // q=Quebec+City centre la carte sur Québec.
               src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Quebec+City,QC&zoom=12`}
             ></iframe>
           ) : (
             <div className="flex flex-col items-center justify-center h-full bg-gray-100 text-gray-500 p-8 text-center">
               <FaMapMarkedAlt size={48} className="mb-4 text-gray-400" />
               <p className="font-bold text-lg text-red-500">Clé API manquante ou mal nommée.</p>
               <p className="text-sm mt-2">
                 Vérifie ton fichier <code>.env.local</code>.<br/>
                 La variable doit s'appeler exactement : <strong>VITE_GOOGLE_MAPS_API_KEY</strong>
               </p>
             </div>
           )}
        </div>
        
        {/* Clause de non-responsabilité (Touch "Avocat") */}
        <div className="mt-4 text-center">
           <p className="text-xs text-gray-400 italic">
             Forfeo n'est pas une agence de voyage. Les services de cartographie sont fournis par Google Maps™. 
             L'exactitude des informations dépend des fournisseurs tiers.
           </p>
        </div>
      </section>

      {/* PIED DE PAGE (Footer) */}
      <Footer />
      
    </div>
  );
}
