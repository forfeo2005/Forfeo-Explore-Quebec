import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
// ⚠️ J'ai retiré l'import du Header ici car il est déjà dans App.tsx

const regionsQuebec = [
  {
    id: "capitale-nationale",
    title: "Capitale-Nationale",
    description: "Le cœur historique du Québec, mêlant patrimoine mondial et nature grandiose.",
    link: "/region/capitale-nationale"
  },
  {
    id: "montreal",
    title: "Montréal",
    description: "La métropole vibrante, reconnue pour sa culture, sa gastronomie et ses festivals.",
    link: "/region/montreal"
  },
  {
    id: "gaspesie",
    title: "Gaspésie–Îles-de-la-Madeleine",
    description: "Une péninsule légendaire offrant mer, montagnes et le célèbre Rocher Percé.",
    link: "/region/gaspesie"
  },
  {
    id: "laurentides",
    title: "Laurentides",
    description: "La destination de villégiature par excellence avec ses lacs et ses stations de ski.",
    link: "/region/laurentides"
  },
  {
    id: "outaouais",
    title: "Outaouais",
    description: "Porte d’entrée de l’ouest québécois, riche en forêts et musées nationaux.",
    link: "/region/outaouais"
  },
  {
    id: "saguenay",
    title: "Saguenay–Lac-Saint-Jean",
    description: "Le royaume du fjord et du bleuet, offrant des paysages démesurés.",
    link: "/region/saguenay"
  },
  {
    id: "charlevoix",
    title: "Charlevoix",
    description: "Entre fleuve et montagnes, une région inspirante pour les artistes et gourmets.",
    link: "/region/charlevoix"
  }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">Explorez le Québec</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionsQuebec.map((region) => (
          <div key={region.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <MapPin className="text-blue-600 w-5 h-5 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">{region.title}</h2>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              {region.description}
            </p>
            <Link 
              to={region.link} 
              className="inline-flex items-center text-blue-600 font-semibold text-sm hover:underline tracking-wide uppercase"
            >
              EXPLORER <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
