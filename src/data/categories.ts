import { IconType } from 'react-icons';
import { FaCar, FaUtensils, FaShoppingBag, FaHiking, FaBed } from 'react-icons/fa';

export interface Category {
  id: string;
  nom: string;
  sous_categories: string[];
  icone: IconType;
}

export const categories: Category[] = [
  {
    id: "transport",
    nom: "Se Déplacer",
    sous_categories: ["Taxi", "Uber", "Location de voiture", "Transports en commun"],
    icone: FaCar
  },
  {
    id: "restauration",
    nom: "Se Restaurer",
    sous_categories: ["Restaurants", "Cafés", "Boulangeries", "Microbrasseries"],
    icone: FaUtensils
  },
  {
    id: "magasinage",
    nom: "Magasiner",
    sous_categories: ["Commerces locaux", "Centres commerciaux", "Souvenirs"],
    icone: FaShoppingBag
  },
  {
    id: "activites",
    nom: "Activités & Loisirs",
    sous_categories: ["Musées", "Parcs nationaux", "Festivals", "Spas", "Ski"],
    icone: FaHiking
  },
  {
    id: "hebergement",
    nom: "Hébergement",
    sous_categories: ["Hôtels", "Auberges", "Chalets", "Campings"],
    icone: FaBed
  }
];
