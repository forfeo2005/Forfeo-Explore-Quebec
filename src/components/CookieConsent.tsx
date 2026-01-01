import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Vérifie si l'utilisateur a déjà accepté
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 shadow-2xl z-50 animate-fade-in-up">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300 text-center md:text-left">
          Nous utilisons des cookies techniques pour le fonctionnement de la carte Google Maps et la géolocalisation.
        </p>
        <button 
          onClick={acceptCookies}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm transition shadow-lg whitespace-nowrap"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
