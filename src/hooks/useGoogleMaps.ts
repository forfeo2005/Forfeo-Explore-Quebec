import { useJsApiLoader } from '@react-google-maps/api';

// Définition des bibliothèques nécessaires
const libraries: ("places" | "geometry" | "drawing" | "visualization")[] = ["places"];

export const useGoogleMaps = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    // Récupération sécurisée de la clé API depuis .env.local
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    libraries,
    language: 'fr', // Force l'interface de la carte en français
  });

  return { isLoaded, loadError };
};
