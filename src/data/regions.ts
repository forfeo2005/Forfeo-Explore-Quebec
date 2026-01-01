export interface Region {
  id: string;
  nom: string;
  centre: {
    lat: number;
    lng: number;
  };
  villes: string[];
  description: string; // Ajout pour le design
}

export const regions: Region[] = [
  {
    id: "capitale-nationale",
    nom: "Capitale-Nationale",
    centre: { lat: 46.8139, lng: -71.2080 },
    villes: ["Québec", "Charlevoix", "Portneuf"],
    description: "Le cœur historique du Québec, mêlant patrimoine mondial et nature grandiose."
  },
  {
    id: "montreal",
    nom: "Montréal",
    centre: { lat: 45.5017, lng: -73.5673 },
    villes: ["Montréal", "Westmount", "Outremont"],
    description: "La métropole vibrante, reconnue pour sa culture, sa gastronomie et ses festivals."
  },
  {
    id: "gaspesie",
    nom: "Gaspésie–Îles-de-la-Madeleine",
    centre: { lat: 48.3644, lng: -64.3352 },
    villes: ["Gaspé", "Matane", "Percé"],
    description: "Une péninsule légendaire offrant mer, montagnes et le célèbre Rocher Percé."
  },
  {
    id: "laurentides",
    nom: "Laurentides",
    centre: { lat: 46.1186, lng: -74.4704 },
    villes: ["Saint-Jérôme", "Mont-Tremblant"],
    description: "La destination de villégiature par excellence avec ses lacs et ses stations de ski."
  },
  {
    id: "outaouais",
    nom: "Outaouais",
    centre: { lat: 45.4275, lng: -75.7068 },
    villes: ["Gatineau", "Maniwaki"],
    description: "Porte d'entrée de l'ouest québécois, riche en forêts et musées nationaux."
  },
  {
    id: "saguenay",
    nom: "Saguenay–Lac-Saint-Jean",
    centre: { lat: 48.4285, lng: -71.0700 },
    villes: ["Saguenay", "Alma"],
    description: "Le royaume du fjord et du bleuet, offrant des paysages démesurés."
  },
   // (J'ai gardé les principales pour l'affichage, vous pouvez ajouter les autres avec le même format)
  {
    id: "charlevoix",
    nom: "Charlevoix", // Souvent classé à part touristiquement
    centre: { lat: 47.6262, lng: -70.3664 },
    villes: ["Baie-Saint-Paul", "La Malbaie"],
    description: "Entre fleuve et montagnes, une région inspirante pour les artistes et gourmets."
  }
];
