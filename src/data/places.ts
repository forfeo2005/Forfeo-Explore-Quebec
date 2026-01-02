export interface Place {
  id: string;
  name: string;
  category: string; // Doit correspondre EXACTEMENT aux IDs dans categories.ts
  regionId: string; // Doit correspondre EXACTEMENT aux IDs dans regions.ts
  position: { lat: number; lng: number };
  description: string;
  image?: string; // Optionnel pour plus tard
}

export const places: Place[] = [
  // --- CAPITALE-NATIONALE ---
  // Hébergement
  {
    id: "chateau-frontenac",
    name: "Fairmont Le Château Frontenac",
    category: "hebergement", // ID correspondant à categories.ts
    regionId: "capitale-nationale",
    position: { lat: 46.8119, lng: -71.2050 },
    description: "L'hôtel emblématique de Québec surplombant le fleuve."
  },
  // Restauration
  {
    id: "cochon-dingue",
    name: "Le Cochon Dingue",
    category: "restauration",
    regionId: "capitale-nationale",
    position: { lat: 46.8142, lng: -71.2020 },
    description: "Bistro familial au cœur du Petit-Champlain."
  },
  {
    id: "boulangerie-paillard",
    name: "Paillard",
    category: "restauration",
    regionId: "capitale-nationale",
    position: { lat: 46.8135, lng: -71.2095 },
    description: "Boulangerie artisanale renommée pour ses croissants."
  },
  // Activités
  {
    id: "musee-civilisation",
    name: "Musée de la civilisation",
    category: "activites",
    regionId: "capitale-nationale",
    position: { lat: 46.8155, lng: -71.2033 },
    description: "Musée interactif sur l'histoire et la culture."
  },
  // Magasinage
  {
    id: "quartier-petit-champlain",
    name: "Quartier Petit Champlain",
    category: "magasinage",
    regionId: "capitale-nationale",
    position: { lat: 46.8125, lng: -71.2025 },
    description: "Rue commerçante pittoresque avec artisans locaux."
  },
  // Transport
  {
    id: "gare-palais",
    name: "Gare du Palais (VIA Rail / Bus)",
    category: "transport",
    regionId: "capitale-nationale",
    position: { lat: 46.8166, lng: -71.2133 },
    description: "Hub principal de transport ferroviaire et autobus."
  },

  // --- MONTRÉAL ---
  {
    id: "basilique-nd",
    name: "Basilique Notre-Dame",
    category: "activites",
    regionId: "montreal",
    position: { lat: 45.5045, lng: -73.5560 },
    description: "Chef-d'œuvre de l'architecture néo-gothique."
  },
  {
    id: "schwartz",
    name: "Schwartz's Deli",
    category: "restauration",
    regionId: "montreal",
    position: { lat: 45.5163, lng: -73.5777 },
    description: "Institution du smoked meat montréalais."
  },
];
