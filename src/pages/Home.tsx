import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Map, Star } from 'lucide-react';

// Si tu n'as pas lucide-react, remplace les icônes par du texte ou installe-le : npm install lucide-react

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* SECTION HÉROS (Bienvenue) */}
      <section className="bg-blue-900 text-white py-20 px-4 text-center relative overflow-hidden">
        {/* Un petit effet de fond (optionnel) */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 transform -skew-y-3 origin-top-left z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Bienvenue sur <span className="text-blue-300">Forfeo</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Votre compagnon numérique intelligent pour découvrir les trésors cachés et les expériences inoubliables de la Belle Province.
          </p>
          
          <Link 
            to="/regions" 
            className="inline-flex items-center bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full text-lg hover:bg-yellow-300 transition-transform transform hover:scale-105 shadow-lg"
          >
            Explorer les Régions <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* SECTION STATISTIQUES FLASHY */}
      <section className="py-12 bg-white shadow-md -mt-8 relative z-20 mx-4 md:mx-auto max-w-6xl rounded-xl border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          
          {/* Stat 1 */}
          <div className="p-4 group">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-2">10M+</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Touristes Informés</p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 group">
            <div className="flex justify-center mb-4">
               <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                <Map size={32} />
              </div>
            </div>
            <h3 className="text-4xl font-black text-gray-900 mb-2">17</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Régions Uniques</p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 group">
             <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 group-hover:scale-110 transition-transform">
                  <Star size={32} />
                </div>
             </div>
            <h3 className="text-4xl font-black text-gray-900 mb-2">500+</h3>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Activités Locales</p>
          </div>

        </div>
      </section>

      {/* APERÇU RAPIDE */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Prêt pour l'aventure ?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Que vous cherchiez la nature sauvage, la gastronomie urbaine ou l'histoire culturelle, 
          Forfeo vous guide vers l'expérience parfaite.
        </p>
      </section>

    </div>
  );
}
