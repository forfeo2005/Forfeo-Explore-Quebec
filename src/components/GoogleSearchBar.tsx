import React, { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

// Cette interface permet d'éviter les erreurs TypeScript
declare global {
  interface Window {
    google: any;
  }
}

interface Props {
  onSearch: (address: string) => void;
}

export default function GoogleSearchBar({ onSearch }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Si l'API n'est pas chargée, on ne fait rien
    if (!window.google || !window.google.maps || !window.google.maps.places) return;

    const options = {
      componentRestrictions: { country: "ca" }, // Limite au Canada
      fields: ["formatted_address", "geometry", "name"], // On récupère l'adresse formatée
      types: ["address"], // On cherche des adresses précises
    };

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, options);

    // Quand l'utilisateur clique sur une suggestion
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const address = place.formatted_address || place.name || "";
      
      setInputValue(address);
      onSearch(address); // On lance la recherche automatiquement
    });
  }, [onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-lg z-40">
      <input
        ref={inputRef}
        type="text"
        placeholder="Entrez votre adresse (ex: 123 Rue Principale)..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-sm text-gray-700"
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      
      <button 
        type="submit" 
        className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-6 rounded-full font-bold hover:bg-blue-700 transition"
      >
        Voir
      </button>
    </form>
  );
}
