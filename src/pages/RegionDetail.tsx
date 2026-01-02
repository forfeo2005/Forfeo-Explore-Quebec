import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegionDetail() {
  const { id } = useParams(); // Récupère l'ID dans l'URL (ex: capitale-nationale)
  const region = regions.find(r => r.id === id);

  if (!region) {
    return <div className="p-20 text-center">Région introuvable <Link to="/" className="text-blue-500">Retour</Link></div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">← Retour à l'accueil</Link>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{region.nom}</h1>
          <p className="text-xl text-slate-600 mb-8">{region.description}</p>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h2 className="font-bold text-xl mb-4">Villes principales</h2>
            <div className="flex gap-2">
              {region.villes.map(ville => (
                <span key={ville} className="bg-white px-4 py-2 rounded-full shadow-sm text-blue-800 font-medium">
                  {ville}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
