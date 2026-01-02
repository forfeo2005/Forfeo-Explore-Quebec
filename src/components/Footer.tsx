import React, { useEffect, useState } from 'react';
import { FaTimes, FaShieldAlt, FaFileContract, FaGavel } from 'react-icons/fa';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'privacy' | 'terms';
}

export default function LegalModal({ isOpen, onClose, initialTab }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        
        {/* En-tête */}
        <div className="bg-blue-900 text-white p-4 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Mentions Légales & Confidentialité
          </h2>
          <button onClick={onClose} className="hover:bg-blue-800 p-2 rounded-full transition">
            <FaTimes />
          </button>
        </div>

        {/* Onglets */}
        <div className="flex border-b shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-3 font-semibold text-sm flex items-center justify-center gap-2 transition ${
              activeTab === 'privacy' 
                ? 'border-b-4 border-blue-600 text-blue-900 bg-blue-50' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <FaShieldAlt /> Confidentialité (Loi 25)
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex-1 py-3 font-semibold text-sm flex items-center justify-center gap-2 transition ${
              activeTab === 'terms' 
                ? 'border-b-4 border-blue-600 text-blue-900 bg-blue-50' 
                : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <FaFileContract /> Conditions d'Utilisation
          </button>
        </div>

        {/* Contenu */}
        <div className="p-6 overflow-y-auto text-gray-700 space-y-5">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-lg border-b pb-2">
                <FaShieldAlt /> Politique de Confidentialité
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm">
                <strong>Responsable du traitement :</strong><br/>
                Les données sont gérées par <strong>FORFEO INC.</strong>, en conformité avec la Loi 25 sur la protection des renseignements personnels au Québec.
              </div>

              <h4 className="font-bold text-gray-900 mt-2">1. Collecte de données</h4>
              <p className="text-sm">
                [cite_start]Actuellement, ce site est consultatif. Nous ne stockons aucune donnée personnelle identifiable (nom, courriel) sur nos serveurs sans votre consentement explicite[cite: 120].
              </p>

              <h4 className="font-bold text-gray-900 mt-2">2. Géolocalisation</h4>
              <p className="text-sm">
                Pour améliorer votre expérience (calcul d'itinéraires), nous utilisons la géolocalisation de votre appareil. [cite_start]Ces données sont anonymes, instantanées et ne sont jamais conservées après votre visite[cite: 118].
              </p>

              <h4 className="font-bold text-gray-900 mt-2">3. Services Tiers & Cookies</h4>
              <p className="text-sm">
                Nous utilisons Google Maps Platform pour l'affichage cartographique. [cite_start]L'utilisation de ces services est soumise aux règles de confidentialité de Google[cite: 119].
              </p>
            </div>
          ) : (
            <div className="space-y-4">
               <div className="flex items-center gap-2 text-blue-900 font-bold text-lg border-b pb-2">
                <FaGavel /> Conditions d'Utilisation
              </div>

              <h4 className="font-bold text-gray-900 mt-2">1. Propriété Intellectuelle</h4>
              <p className="text-sm">
                <strong>Forfeo Explore Québec</strong> est une division exploitée par <strong>FORFEO INC.</strong> Tout le contenu (textes, images, logos) est la propriété exclusive de Forfeo Inc. ou de ses partenaires.
              </p>

              <h4 className="font-bold text-gray-900 mt-2">2. Limitation de responsabilité</h4>
              <p className="text-sm">
                [cite_start]Nous nous efforçons de garder les informations à jour. Toutefois, Forfeo Inc. ne garantit pas l'exactitude des horaires, prix ou adresses des tiers mentionnés[cite: 121].
              </p>

              <h4 className="font-bold text-gray-900 mt-2">3. Liens Externes</h4>
              <p className="text-sm">
                Ce site contient des liens vers des partenaires ou des services tiers. [cite_start]Nous ne sommes pas responsables de leurs politiques de confidentialité[cite: 121].
              </p>
            </div>
          )}
        </div>

        {/* Pied */}
        <div className="p-4 border-t bg-gray-50 flex justify-between items-center shrink-0">
          <span className="text-xs text-gray-400">© 2025 Forfeo Inc.</span>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium shadow-md"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}
