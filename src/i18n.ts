import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  // --- FRANÇAIS (FR) ---
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
      "nav_home": "Accueil",
      "nav_regions": "Régions",
      "nav_map": "Carte Interactive",
      
      "cat_transport_name": "Se Déplacer",
      "cat_transport_desc": "Taxi, Uber, Location, Bus",
      "cat_restauration_name": "Se Restaurer",
      "cat_restauration_desc": "Restos, Cafés, Microbrasseries",
      "cat_magasinage_name": "Magasiner",
      "cat_magasinage_desc": "Boutiques, Souvenirs, Mode",
      "cat_activites_name": "Activités & Loisirs",
      "cat_activites_desc": "Musées, Parcs, Festivals, Ski",
      "cat_hebergement_name": "Hébergement",
      "cat_hebergement_desc": "Hôtels, Auberges, Chalets",

      "reg_capitale-nationale_desc": "Le cœur historique du Québec, mêlant patrimoine mondial et nature grandiose.",
      "reg_montreal_desc": "La métropole vibrante, reconnue pour sa culture, sa gastronomie et ses festivals.",
      "reg_gaspesie_desc": "Une péninsule légendaire offrant mer, montagnes et le célèbre Rocher Percé.",
      "reg_laurentides_desc": "La destination de villégiature par excellence avec ses lacs et ses stations de ski.",
      "reg_outaouais_desc": "Porte d'entrée de l'ouest québécois, riche en forêts et musées nationaux.",
      "reg_saguenay-lac-saint-jean_desc": "Le royaume du fjord et du bleuet, offrant des paysages démesurés.",
      "reg_charlevoix_desc": "Entre fleuve et montagnes, une région inspirante pour les artistes et gourmets.",
    }
  },
  
  // --- ANGLAIS (EN) ---
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
      "nav_home": "Home",
      "nav_regions": "Regions",
      "nav_map": "Interactive Map",

      "cat_transport_name": "Getting Around",
      "cat_transport_desc": "Taxi, Uber, Rental, Bus",
      "cat_restauration_name": "Eat & Drink",
      "cat_restauration_desc": "Restaurants, Cafes, Breweries",
      "cat_magasinage_name": "Shopping",
      "cat_magasinage_desc": "Shops, Souvenirs, Fashion",
      "cat_activites_name": "Activities",
      "cat_activites_desc": "Museums, Parks, Festivals, Ski",
      "cat_hebergement_name": "Accommodation",
      "cat_hebergement_desc": "Hotels, Inns, Chalets",

      "reg_capitale-nationale_desc": "The historic heart of Quebec, blending world heritage and grand nature.",
      "reg_montreal_desc": "The vibrant metropolis, renowned for its culture, gastronomy, and festivals.",
      "reg_gaspesie_desc": "A legendary peninsula offering sea, mountains, and the famous Percé Rock.",
      "reg_laurentides_desc": "The ultimate resort destination with its lakes and ski resorts.",
      "reg_outaouais_desc": "Gateway to western Quebec, rich in forests and national museums.",
      "reg_saguenay-lac-saint-jean_desc": "The kingdom of the fjord and blueberries, offering oversized landscapes.",
      "reg_charlevoix_desc": "Between river and mountains, an inspiring region for artists and foodies.",
    }
  },

  // --- ESPAGNOL (ES) ---
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
      "nav_home": "Inicio",
      "nav_regions": "Regiones",
      "nav_map": "Mapa Interactivo",

      "cat_transport_name": "Transporte",
      "cat_transport_desc": "Taxi, Uber, Alquiler, Autobús",
      "cat_restauration_name": "Gastronomía",
      "cat_restauration_desc": "Restaurantes, Cafés, Cervecerías",
      "cat_magasinage_name": "Compras",
      "cat_magasinage_desc": "Tiendas, Recuerdos, Moda",
      "cat_activites_name": "Actividades",
      "cat_activites_desc": "Museos, Parques, Festivales, Esquí",
      "cat_hebergement_name": "Alojamiento",
      "cat_hebergement_desc": "Hoteles, Posadas, Cabañas",

      "reg_capitale-nationale_desc": "El corazón histórico de Quebec, mezclando patrimonio mundial y naturaleza grandiosa.",
      "reg_montreal_desc": "La metrópolis vibrante, reconocida por su cultura, gastronomía y festivales.",
      "reg_gaspesie_desc": "Una península legendaria que ofrece mar, montañas y la famosa Roca Percé.",
      "reg_laurentides_desc": "El destino vacacional por excelencia con sus lagos y estaciones de esquí.",
      "reg_outaouais_desc": "Puerta de entrada al oeste de Quebec, rica en bosques y museos nacionales.",
      "reg_saguenay-lac-saint-jean_desc": "El reino del fiordo y los arándanos, con paisajes desmesurados.",
      "reg_charlevoix_desc": "Entre río y montaña, una región inspiradora para artistas y gourmets.",
    }
  },

  // --- ALLEMAND (DE) ---
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
      "nav_home": "Startseite",
      "nav_regions": "Regionen",
      "nav_map": "Interaktive Karte",

      "cat_transport_name": "Transport",
      "cat_transport_desc": "Taxi, Uber, Mietwagen, Bus",
      "cat_restauration_name": "Essen & Trinken",
      "cat_restauration_desc": "Restaurants, Cafés, Brauereien",
      "cat_magasinage_name": "Einkaufen",
      "cat_magasinage_desc": "Geschäfte, Souvenirs, Mode",
      "cat_activites_name": "Aktivitäten",
      "cat_activites_desc": "Museen, Parks, Festivals, Ski",
      "cat_hebergement_name": "Unterkunft",
      "cat_hebergement_desc": "Hotels, Gasthöfe, Chalets",

      "reg_capitale-nationale_desc": "Das historische Herz von Quebec, eine Mischung aus Weltkulturerbe und grandioser Natur.",
      "reg_montreal_desc": "Die pulsierende Metropole, bekannt für ihre Kultur, Gastronomie und Festivals.",
      "reg_gaspesie_desc": "Eine legendäre Halbinsel mit Meer, Bergen und dem berühmten Rocher Percé.",
      "reg_laurentides_desc": "Das Urlaubsziel schlechthin mit seinen Seen und Skigebieten.",
      "reg_outaouais_desc": "Das Tor zum Westen Quebecs, reich an Wäldern und Nationalmuseen.",
      "reg_saguenay-lac-saint-jean_desc": "Das Königreich des Fjords und der Blaubeeren mit riesigen Landschaften.",
      "reg_charlevoix_desc": "Zwischen Fluss und Bergen, eine inspirierende Region für Künstler und Feinschmecker.",
    }
  },

  // --- ITALIEN (IT) ---
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
      "nav_home": "Home",
      "nav_regions": "Regioni",
      "nav_map": "Mappa Interattiva",

      "cat_transport_name": "Trasporti",
      "cat_transport_desc": "Taxi, Uber, Noleggio, Bus",
      "cat_restauration_name": "Ristorazione",
      "cat_restauration_desc": "Ristoranti, Caffè, Birrerie",
      "cat_magasinage_name": "Shopping",
      "cat_magasinage_desc": "Negozi, Souvenir, Moda",
      "cat_activites_name": "Attività",
      "cat_activites_desc": "Musei, Parchi, Festival, Sci",
      "cat_hebergement_name": "Alloggio",
      "cat_hebergement_desc": "Hotel, Locande, Chalet",

      "reg_capitale-nationale_desc": "Il cuore storico del Quebec, che unisce patrimonio mondiale e natura grandiosa.",
      "reg_montreal_desc": "La metropoli vibrante, rinomata per la sua cultura, gastronomia e festival.",
      "reg_gaspesie_desc": "Una penisola leggendaria che offre mare, montagne e la famosa Roccia di Percé.",
      "reg_laurentides_desc": "La destinazione turistica per eccellenza con i suoi laghi e le stazioni sciistiche.",
      "reg_outaouais_desc": "Porta d'ingresso al Quebec occidentale, ricca di foreste e musei nazionali.",
      "reg_saguenay-lac-saint-jean_desc": "Il regno del fiordo e dei mirtilli, che offre paesaggi smisurati.",
      "reg_charlevoix_desc": "Tra fiume e montagne, una regione stimolante per artisti e buongustai.",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
