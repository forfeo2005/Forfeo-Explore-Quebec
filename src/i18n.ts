import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Les traductions pour vos 5 langues
const resources = {
  fr: {
    translation: {
      "hero_title": "Votre Aventure au <1>Québec</1> Commence Ici",
      "hero_subtitle": "Explorez les 17 régions touristiques, de la métropole vibrante aux grands espaces sauvages.",
      "cta_explore": "Commencer l'exploration",
      "regions_title": "Choisissez votre destination",
      "regions_subtitle": "Cliquez sur une région pour voir la carte",
      "map_active_region": "Région Active",
      "filter_title": "Filtrer par activité",
      "places_found": "{{count}} lieux trouvés",
      "footer_rights": "Tous droits réservés.",
      "legal_privacy": "Politique de confidentialité",
      "legal_terms": "Conditions d'utilisation",
      "nav_home": "Accueil",
      "nav_regions": "Régions",
      "nav_map": "Carte Interactive"
    }
  },
  en: {
    translation: {
      "hero_title": "Your Adventure in <1>Quebec</1> Starts Here",
      "hero_subtitle": "Explore the 17 tourist regions, from the vibrant metropolis to the great wild outdoors.",
      "cta_explore": "Start Exploring",
      "regions_title": "Choose Your Destination",
      "regions_subtitle": "Click on a region to view the map",
      "map_active_region": "Active Region",
      "filter_title": "Filter by Activity",
      "places_found": "{{count}} places found",
      "footer_rights": "All rights reserved.",
      "legal_privacy": "Privacy Policy",
      "legal_terms": "Terms of Use",
      "nav_home": "Home",
      "nav_regions": "Regions",
      "nav_map": "Interactive Map"
    }
  },
  es: {
    translation: {
      "hero_title": "Tu Aventura en <1>Quebec</1> Comienza Aquí",
      "hero_subtitle": "Explora las 17 regiones turísticas, desde la vibrante metrópolis hasta los grandes espacios salvajes.",
      "cta_explore": "Comenzar a Explorar",
      "regions_title": "Elige tu Destino",
      "regions_subtitle": "Haz clic en una región para ver el mapa",
      "map_active_region": "Región Activa",
      "filter_title": "Filtrar por Actividad",
      "places_found": "{{count}} lugares encontrados",
      "footer_rights": "Todos los derechos reservados.",
      "legal_privacy": "Política de Privacidad",
      "legal_terms": "Condiciones de Uso",
      "nav_home": "Inicio",
      "nav_regions": "Regiones",
      "nav_map": "Mapa Interactivo"
    }
  },
  de: {
    translation: {
      "hero_title": "Ihr Abenteuer in <1>Quebec</1> Beginnt Hier",
      "hero_subtitle": "Entdecken Sie die 17 touristischen Regionen, von der pulsierenden Metropole bis zur wilden Natur.",
      "cta_explore": "Erkundung Starten",
      "regions_title": "Wählen Sie Ihr Reiseziel",
      "regions_subtitle": "Klicken Sie auf eine Region, um die Karte anzuzeigen",
      "map_active_region": "Aktive Region",
      "filter_title": "Nach Aktivität filtern",
      "places_found": "{{count}} Orte gefunden",
      "footer_rights": "Alle Rechte vorbehalten.",
      "legal_privacy": "Datenschutzrichtlinie",
      "legal_terms": "Nutzungsbedingungen",
      "nav_home": "Startseite",
      "nav_regions": "Regionen",
      "nav_map": "Interaktive Karte"
    }
  },
  it: {
    translation: {
      "hero_title": "La Tua Avventura in <1>Quebec</1> Inizia Qui",
      "hero_subtitle": "Esplora le 17 regioni turistiche, dalla vibrante metropoli ai grandi spazi selvaggi.",
      "cta_explore": "Inizia a Esplorare",
      "regions_title": "Scegli la tua Destinazione",
      "regions_subtitle": "Clicca su una regione per vedere la mappa",
      "map_active_region": "Regione Attiva",
      "filter_title": "Filtra per Attività",
      "places_found": "{{count}} luoghi trovati",
      "footer_rights": "Tutti i diritti riservati.",
      "legal_privacy": "Informativa sulla Privacy",
      "legal_terms": "Condizioni d'Uso",
      "nav_home": "Home",
      "nav_regions": "Regioni",
      "nav_map": "Mappa Interattiva"
    }
  }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur (ex: fr-CA)
  .use(initReactI18next) // Passe i18n à React
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut si la détection échoue
    interpolation: {
      escapeValue: false // React protège déjà contre les attaques XSS
    }
  });

export default i18n;
