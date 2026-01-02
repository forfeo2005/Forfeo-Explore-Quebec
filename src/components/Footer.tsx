import React, { useState } from 'react';
import LegalModal from './LegalModal'; 
// Assurez-vous que LegalModal.tsx existe dans le même dossier

const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  const openLegal = (tab: 'privacy' | 'terms') => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 py-12 mt-auto border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            {/* Colonne 1 : Identité */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Forfeo Explore Québec</h4>
              <p className="text-sm text-slate-400">
                Votre compagnon numérique pour découvrir les trésors cachés de la Belle Province.
              </p>
            </div>
            
            {/* Colonne 2 : Liens Rapides / Business */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h4 className="text-white font-bold mb-2">Liens Rapides</h4>
              {/* Lien transactionnel vers ISOW comme demandé */}
              <a href="https://isow.forfeo.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-yellow-500 hover:text-yellow-400 transition">
                Réserver un forfait (ISOW)
              </a>
              <a href="#" className="text-sm hover:text-yellow-400 transition">Contactez-nous</a>
            </div>

            {/* Colonne 3 : Légal */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h4 className="text-white font-bold mb-2">Légal</h4>
              <button onClick={() => openLegal('privacy')} className="text-sm hover:text-white transition text-left underline decoration-dotted">
                Politique de confidentialité
              </button>
              <button onClick={() => openLegal('terms')} className="text-sm hover:text-white transition text-left underline decoration-dotted">
                Conditions d'utilisation
              </button>
              <div className="mt-2 inline-flex items-center px-2 py-1 rounded border border-green-800 bg-green-900/30 text-xs text-green-400">
                <span className="mr-1">✓</span> Conformité Loi 25 (Québec)
              </div>
            </div>
          </div>

          {/* Copyright et Mentions Officielles (Votre demande spécifique) */}
          <div className="border-t border-slate-800 pt-8 text-center space-y-2">
            <p className="text-xs text-slate-400">
              Forfeo Explore Québec est une division exploitée par <strong>FORFEO INC.</strong>, société par actions enregistrée au Québec.
            </p>
            <p className="text-xs text-slate-500">
              © 2025 Forfeo Inc. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Intégration de la Modale */}
      <LegalModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialTab={activeTab} 
      />
    </>
  );
};

export default Footer;
