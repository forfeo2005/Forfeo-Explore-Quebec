import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Info, Calendar, MapPin } from 'lucide-react';

// 1. LA BASE DE DONNÉES DU CONTENU (Ajoute tes textes ici !)
const regionData: Record<string, { title: string; description: string; longText: string; activities: string[] }> = {
  "montreal": {
    title: "Montréal",
    description: "La métropole vibrante, culturelle et gastronomique.",
    longText: "Montréal est la plus grande ville du Québec. Métropole insulaire, elle est reconnue pour sa scène artistique dynamique, ses festivals internationaux comme le Festival de Jazz et Juste pour rire, ainsi que sa gastronomie variée allant des bagels au smoked meat en passant par la haute cuisine.",
    activities: ["Vieux-Port de Montréal", "Mont-Royal", "Jardin Botanique", "Oratoire Saint-Joseph"]
  },
  "capitale-nationale": {
    title: "Capitale-Nationale (Québec)",
    description: "Le berceau de l'Amérique française.",
    longText: "Québec est l'une des plus vieilles villes d'Amérique du Nord. Son quartier historique, le Vieux-Québec, est classé au patrimoine mondial de l'UNESCO. C'est une ville fortifiée unique offrant une architecture européenne et une histoire riche.",
    activities: ["Château Frontenac", "Quartier Petit Champlain", "Chute Montmorency", "Plaines d'Abraham"]
  },
  "gaspesie": {
    title: "Gaspésie",
    description: "Mer, montagnes et le célèbre Rocher Percé.",
    longText: "La Gaspésie est une péninsule majestueuse. C'est la destination rêvée pour les amateurs de plein air : randonnée dans les Chic-Chocs, observation des baleines et découverte du parc national Forillon.",
    activities: ["Rocher Percé", "Parc national de la Gaspésie", "Île Bonaventure", "Jardins de Métis"]
  },
  "outaouais": {
    title: "Outaouais",
    description: "Culture et nature à la porte de l'ouest.",
    longText: "Voisine d'Ottawa, l'Outaouais offre le meilleur des deux mondes : des musées nationaux de classe mondiale et le vaste Parc de la Gatineau pour les activités de plein air.",
    activities: ["Musée canadien de l'histoire", "Parc de la Gatineau", "Parc Oméga", "Nordik Spa-Nature"]
  },
  // ... Tu peux ajouter les autres régions ici (laurentides, saguenay, charlevoix) ...
};

export default function RegionDetail() {
  const { id } = useParams<{ id: string }>();
  
  // On récupère les données, ou on met des données par défaut si l'ID n'existe pas
  const data = (id && regionData[id]) ? regionData[id] : {
    title: "Région à découvrir",
    description: "Information à venir prochainement.",
    longText: "Le contenu pour cette région est en cours de rédaction par notre équipe.",
    activities: []
  };

  return (
    <div className="min-h-screen bg-white">
      {/* En-tête de la région */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/regions" className="text-blue-200 hover:text-white flex items-center mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux régions
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-blue-100">{data.description}</p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        
        {/* Description détaillée */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center mb-4 text-blue-900">
            <Info className="w-6 h-6 mr-3" />
            <h2 className="text-2xl font-bold">À propos</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {data.longText}
          </p>
        </div>

        {/* Liste d'activités (seulement si on en a) */}
        {data.activities.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="flex items-center mb-6 text-blue-900">
              <Calendar className="w-6 h-6 mr-3" />
              <h2 className="text-2xl font-bold">Activités Incontournables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.activities.map((activity, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded shadow-sm">
                  <MapPin className="text-yellow-500 w-5 h-5 mr-3" />
                  <span className="font-medium text-gray-800">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
