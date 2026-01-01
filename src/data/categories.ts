import { IconType } from 'react-icons';
import { FaCar, FaUtensils, FaShoppingBag, FaHiking, FaBed } from 'react-icons/fa';

export interface Category {
  id: string;
  nom: string;
  sous_categories: string[];
  icone: IconType;
  color: string; // Ajout de la propriété couleur pour le design
}

export const categories: Category[] = [
  {
    id: "transport",
    nom: "Se Déplacer",
    sous_categories: ["Taxi", "Uber", "Location de voiture", "Transports en commun"],
    icone: FaCar,
    color: "bg-yellow-500"
  },
  {
    id: "restauration",
    nom: "Se Restaurer",
    sous_categories: ["Restaurants", "Cafés", "Boulangeries", "Microbrasseries"],
    icone: FaUtensils,
    color: "bg-red-500"
  },
  {
    id: "magasinage",
    nom: "Magasiner",
    sous_categories: ["Commerces locaux", "Centres commerciaux", "Souvenirs"],
    icone: FaShoppingBag,
    color: "bg-purple-500"
  },
  {
    id: "activites",
    nom: "Activités & Loisirs",
    sous_categories: ["Musées", "Parcs nationaux", "Festivals", "Spas", "Ski"],
    icone: FaHiking,
    color: "bg-green-500"
  },
  {
    id: "hebergement",
    nom: "Hébergement",
    sous_categories: ["Hôtels", "Auberges", "Chalets", "Campings"],
    icone: FaBed,
    color: "bg-blue-500"
  }
];
