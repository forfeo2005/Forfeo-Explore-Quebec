import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40 transform transition-transform duration-500 ease-in-out">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm md:text-base">
          Nous utilisons des cookies pour améliorer votre expérience et permettre la géolocalisation via Google Maps. 
          En continuant, vous acceptez notre politique de confidentialité.
        </p>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap px-6 py-2 bg-quebec-light text-white font-medium rounded-full hover:bg-quebec-dark transition-colors shadow-md hover:shadow-lg transform active:scale-95"
        >
          J'accepte
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
