import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapView from './components/MapView';
import CookieConsent from './components/CookieConsent';
// Importation des données
import { regions } from './data/regions';
import { categories } from './data/categories';
// Importation des icônes et animations
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  // État pour gérer la région sélectionnée (par défaut : Capitale-Nationale ou la 1ère de la liste)
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* --- SECTION HÉROS (Design "Flashy" & Moderne ) --- */}
      <section className="relative bg-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        {/* Dégradé de fond immersif */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 z-0"></div>
        {/* Motif subtil en arrière-plan */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Votre Aventure au <span className="text-yellow-400">Québec</span> Commence Ici
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 mb-8 font-light"
          >
            Explorez les 17 régions touristiques, de la métropole vibrante aux grands espaces sauvages.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors"
          >
            Commencer l'exploration
          </motion.button>
        </div>
      </section>

      {/* --- SECTION SÉLECTEUR DE RÉGIONS  --- */}
      <section id="regions" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800">Choisissez votre destination</h3>
          <p className="text-slate-500 mt-2">Cliquez sur une région pour la voir sur la carte</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <motion.div 
              key={region.id}
              whileHover={{ y: -5 }}
              onClick={() => {
                setSelectedRegion(region);
                document.getElementById('carte')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`cursor-pointer bg-white p-6 rounded-xl border-2 transition-all shadow-sm hover:shadow-xl ${
                selectedRegion.id === region.id 
                  ? 'border-blue-500 ring-2 ring-blue-100 bg-blue-50' 
                  : 'border-transparent hover:border-blue-300'
              }`}
            >
              <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-2" />
                {region.nom}
              </h4>
              {/* Affichage de la description ajoutée dans regions.ts */}
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {region.description || `Découvrez les merveilles de ${region.nom}.`}
              </p>
              <div className="text-blue-600 font-bold text-sm flex items-center mt-auto uppercase tracking-wide">
                Voir sur la carte <FaArrowRight className="ml-2" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION CARTE INTERACTIVE & CATÉGORIES [cite: 82, 103] --- */}
      <section id="carte" className="bg-slate-100 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[700px] border border-slate-200">
            
            {/* Sidebar Gauche: Infos & Catégories */}
            <div className="w-full lg:w-1/3 p-6 overflow-y-auto border-r border-slate-200 bg-white z-10">
              <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Région Active</span>
                <h2 className="text-2xl font-bold text-blue-900 mt-1">{selectedRegion.nom}</h2>
                <div className="flex flex-wrap gap-2 mt-3">
                   {selectedRegion.villes.map(ville => (
                     <span key={ville} className="bg-white text-blue-800 text-xs px-2 py-1 rounded shadow-sm border border-blue-100">{ville}</span>
                   ))}
                </div>
              </div>

              <h3 className="font-bold text-slate-700 mb-4 uppercase tracking-wider text-sm">Services Disponibles</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <div key={cat.id} className="flex items-center p-3 rounded-lg hover:bg-slate-50 transition border border-transparent hover:border-slate-200 cursor-default group">
                    <div className={`p-3 rounded-lg text-white mr-4 shadow-sm group-hover:scale-110 transition-transform ${cat.color || 'bg-gray-500'}`}>
                      <cat.icone className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{cat.nom}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {cat.sous_categories.join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="w-full lg:w-2/3 relative h-full">
              {/* On passe le centre de la région sélectionnée au composant MapView */}
              <MapView center={selectedRegion.centre} />
            </div>
            
          </div>
        </div>
      </section>

      {/* Consentement aux Cookies  */}
      <CookieConsent />
      
      {/* Pied de page [cite: 116] */}
      <Footer />
    </div>
  );
}

export default App;
