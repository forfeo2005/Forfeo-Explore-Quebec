export interface Region {
  id: string;
  nom: string;
  centre: {
    lat: number;
    lng: number;
  };
  villes: string[];
}

export const regions: Region[] = [
  {
    id: "bas-saint-laurent",
    nom: "Bas-Saint-Laurent",
    centre: { lat: 48.00, lng: -69.00 },
    villes: ["Rimouski", "Rivière-du-Loup", "Matane"]
  },
  {
    id: "saguenay-lac-saint-jean",
    nom: "Saguenay–Lac-Saint-Jean",
    centre: { lat: 49.00, lng: -72.00 },
    villes: ["Saguenay", "Alma", "Dolbeau-Mistassini"]
  },
  {
    id: "capitale-nationale",
    nom: "Capitale-Nationale",
    centre: { lat: 47.20, lng: -71.50 },
    villes: ["Québec", "Charlevoix", "Portneuf"]
  },
  {
    id: "mauricie",
    nom: "Mauricie",
    centre: { lat: 47.50, lng: -73.50 },
    villes: ["Trois-Rivières", "Shawinigan", "La Tuque"]
  },
  {
    id: "estrie",
    nom: "Estrie",
    centre: { lat: 45.40, lng: -71.90 },
    villes: ["Sherbrooke", "Magog", "Granby"]
  },
  {
    id: "montreal",
    nom: "Montréal",
    centre: { lat: 45.50, lng: -73.60 },
    villes: ["Montréal", "Westmount", "Outremont"]
  },
  {
    id: "outaouais",
    nom: "Outaouais",
    centre: { lat: 46.00, lng: -76.00 },
    villes: ["Gatineau", "Maniwaki"]
  },
  {
    id: "abitibi-temiscamingue",
    nom: "Abitibi-Témiscamingue",
    centre: { lat: 48.00, lng: -78.00 },
    villes: ["Rouyn-Noranda", "Val-d'Or", "Amos"]
  },
  {
    id: "cote-nord",
    nom: "Côte-Nord",
    centre: { lat: 51.00, lng: -67.00 },
    villes: ["Sept-Îles", "Baie-Comeau"]
  },
  {
    id: "nord-du-quebec",
    nom: "Nord-du-Québec",
    centre: { lat: 53.00, lng: -75.00 },
    villes: ["Chibougamau", "Lebel-sur-Quévillon"]
  },
  {
    id: "gaspesie-iles-de-la-madeleine",
    nom: "Gaspésie–Îles-de-la-Madeleine",
    centre: { lat: 48.50, lng: -65.50 },
    villes: ["Gaspé", "Matane", "Percé"]
  },
  {
    id: "chaudiere-appalaches",
    nom: "Chaudière-Appalaches",
    centre: { lat: 46.50, lng: -71.00 },
    villes: ["Lévis", "Thetford Mines", "Saint-Georges"]
  },
  {
    id: "laval",
    nom: "Laval",
    centre: { lat: 45.60, lng: -73.70 },
    villes: ["Laval"]
  },
  {
    id: "lanaudiere",
    nom: "Lanaudière",
    centre: { lat: 46.50, lng: -74.00 },
    villes: ["Terrebonne", "Repentigny", "Joliette"]
  },
  {
    id: "laurentides",
    nom: "Laurentides",
    centre: { lat: 46.20, lng: -74.50 },
    villes: ["Saint-Jérôme", "Mont-Tremblant", "Blainville"]
  },
  {
    id: "monteregie",
    nom: "Montérégie",
    centre: { lat: 45.30, lng: -73.20 },
    villes: ["Longueuil", "Saint-Jean-sur-Richelieu", "Brossard"]
  },
  {
    id: "centre-du-quebec",
    nom: "Centre-du-Québec",
    centre: { lat: 46.00, lng: -72.00 },
    villes: ["Drummondville", "Victoriaville", "Bécancour"]
  }
];
