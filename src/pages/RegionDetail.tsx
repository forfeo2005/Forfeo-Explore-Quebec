import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { regions } from '../data/regions';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegionDetail() {
  const { id } = useParams(); // Récupère l'ID (ex: montreal) dans l'adresse URL
  const region = regions.find(r => r.id === id);

  if (!region) return <div>Région introuvable</div>;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block font-bold">
          ← Retour à la carte
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-900 text-white p-10">
            <h1 className="text-4xl font-extrabold mb-2">{region.nom}</h1>
            <p className="text-blue-200">{region.description}</p>
          </div>
          
          <div className="p-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Explorer {region.nom}</h2>
            <p className="text-slate-600 mb-6">
              Ici, nous afficherons bientôt les articles de blogue, les hôtels et les activités spécifiques à {region.nom}.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="font-bold text-yellow-800">🚧 Page en construction</p>
              <p className="text-sm text-yellow-700">Le système de navigation fonctionne ! Vous êtes sur une nouvelle page.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
