import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegionDetail() {
  const { id } = useParams(); // Récupère "montreal" ou "gaspesie" depuis l'URL
  const region = regions.find(r => r.id === id);

  if (!region) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Région introuvable</h2>
          <Link to="/" className="text-blue-600 hover:underline">Retourner à l'accueil</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header />
      
      {/* --- Contenu de la Page --- */}
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:underline mb-6 font-medium">
          ← Retour à la carte
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* En-tête bleu */}
          <div className="bg-blue-900 text-white p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{region.nom}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">{region.description}</p>
          </div>

          {/* Informations */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">À propos</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Bienvenue dans la magnifique région de {region.nom}. Cette section sera bientôt enrichie avec des articles de blogue, des itinéraires et des secrets locaux.
                </p>
                <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition shadow-md">
                  Réserver une expérience ici
                </button>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Villes principales</h3>
                <div className="flex flex-wrap gap-2">
                  {region.villes.map(ville => (
                    <span key={ville} className="bg-white px-3 py-1 rounded-full text-sm text-slate-600 shadow-sm border">
                      {ville}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
