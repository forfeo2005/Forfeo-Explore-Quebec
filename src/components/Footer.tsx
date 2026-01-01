import React, { useState } from 'react';
import LegalModal from './LegalModal';

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  const openLegal = (tab: 'privacy' | 'terms') => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4 text-sm">
            <button 
              onClick={() => openLegal('terms')}
              className="hover:text-white transition-colors underline decoration-dotted"
            >
              Conditions d'utilisation
            </button>
            <button 
              onClick={() => openLegal('privacy')}
              className="hover:text-white transition-colors underline decoration-dotted"
            >
              Politique de confidentialité
            </button>
          </div>
          <p className="text-xs opacity-70">
            &copy; {new Date().getFullYear()} Forfeo Explore Québec. Tous droits réservés.
          </p>
        </div>
      </footer>
      
      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={activeTab} 
      />
    </>
  );
};

export default Footer;
