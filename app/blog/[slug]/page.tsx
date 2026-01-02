import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// ON RÉUTILISE LES MÊMES DONNÉES (Plus tard, on les mettra dans un fichier commun)
const regionsQuebec = [
  {
    id: "capitale-nationale",
    title: "Capitale-Nationale",
    description: "Le cœur historique du Québec, mêlant patrimoine mondial et nature grandiose.",
    content: "Bienvenue dans la Capitale-Nationale... (Ici tu mettras ton article complet plus tard).",
  },
  {
    id: "montreal",
    title: "Montréal",
    description: "La métropole vibrante, reconnue pour sa culture, sa gastronomie et ses festivals.",
    content: "Découvrez Montréal, la ville aux cent clochers... (Contenu à venir).",
  },
  {
    id: "gaspesie",
    title: "Gaspésie–Îles-de-la-Madeleine",
    description: "Une péninsule légendaire offrant mer, montagnes et le célèbre Rocher Percé.",
    content: "La Gaspésie vous attend avec ses paysages à couper le souffle...",
  },
  {
    id: "laurentides",
    title: "Laurentides",
    description: "La destination de villégiature par excellence avec ses lacs et ses stations de ski.",
    content: "Les Laurentides, c'est le pays des lacs et des forêts...",
  },
  {
    id: "outaouais",
    title: "Outaouais",
    description: "Porte d’entrée de l’ouest québécois, riche en forêts et musées nationaux.",
    content: "L'Outaouais offre une richesse culturelle unique...",
  },
  {
    id: "saguenay",
    title: "Saguenay–Lac-Saint-Jean",
    description: "Le royaume du fjord et du bleuet, offrant des paysages démesurés.",
    content: "Le Fjord du Saguenay est une merveille naturelle...",
  },
  {
    id: "charlevoix",
    title: "Charlevoix",
    description: "Entre fleuve et montagnes, une région inspirante pour les artistes et gourmets.",
    content: "Charlevoix, là où le fleuve rencontre les montagnes...",
  }
];

// Cette fonction génère les pages statiques pour chaque région (Optionnel mais recommandé pour le SEO)
export async function generateStaticParams() {
  return regionsQuebec.map((region) => ({
    slug: region.id,
  }));
}

export default function RegionPage({ params }: { params: { slug: string } }) {
  // On cherche la région qui correspond à l'URL (le "slug")
  const region = regionsQuebec.find((r) => r.id === params.slug);

  // Si la région n'existe pas dans notre liste, on affiche une page 404
  if (!region) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Retour aux régions
      </Link>

      <h1 className="text-5xl font-bold mb-6 text-gray-900">{region.title}</h1>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
        <p className="text-xl text-blue-900 font-medium leading-relaxed">
          {region.description}
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p>{region.content}</p>
        <p className="italic text-gray-400 mt-10">
          (Ceci est une page modèle. Le vrai contenu de l'article pour {region.title} ira ici.)
        </p>
      </div>
    </div>
  );
}
