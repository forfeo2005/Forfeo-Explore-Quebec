import React, { useEffect, useState } from 'react';
import { FaTimes, FaShieldAlt, FaFileContract } from 'react-icons/fa';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'privacy' | 'terms';
}

export default function LegalModal({ isOpen, onClose, initialTab }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  // Met à jour l'onglet si la prop change
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        
        {/* En-tête de la modale */}
        <div className="bg-blue-900 text-white p-4 flex justify-between items-center shrink-0">
          <h2 className="text-xl font-bold flex items-center gap-2">
            Information Légale
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
            <FaShieldAlt /> Politique de Confidentialité
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

        {/* Contenu défilable */}
        <div className="p-6 overflow-y-auto text-gray-700 space-y-4">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-900">Respect de votre vie privée</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-sm">
                <strong>Important :</strong> Ce site ne stocke aucune donnée personnelle identifiable sur ses serveurs[cite: 120].
              </div>

              <h4 className="font-bold mt-4">1. Géolocalisation</h4>
              <p className="text-sm">
                Nous utilisons vos données de géolocalisation uniquement pour calculer les itinéraires et afficher votre position sur la carte. Ces données sont anonymes et ne sont pas conservées une fois la session terminée[cite: 118].
              </p>

              <h4 className="font-bold mt-4">2. Services Tiers (Google Maps)</h4>
              <p className="text-sm">
                Ce site utilise l'API Google Maps pour l'affichage cartographique. En utilisant cette fonctionnalité, vous êtes également lié par les règles de confidentialité de Google[cite: 119].
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-900">Conditions d'utilisation</h3>
              
              <h4 className="font-bold mt-4">1. Exactitude de l'information</h4>
              <p className="text-sm">
                Bien que nous nous efforcions de maintenir les informations à jour, Forfeo Explore Québec ne garantit pas l'exactitude des horaires d'ouverture, des adresses ou de la disponibilité des lieux mentionnés[cite: 121].
              </p>

              <h4 className="font-bold mt-4">2. Liens externes</h4>
              <p className="text-sm">
                Ce site peut contenir des liens vers d'autres sites web. Nous ne sommes pas responsables du contenu ou des pratiques de confidentialité de ces sites tiers[cite: 121].
              </p>

              <h4 className="font-bold mt-4">3. Licence</h4>
              <p className="text-sm">
                Ce projet est un démonstrateur technique. Tous les droits sur les logos et noms commerciaux appartiennent à leurs propriétaires respectifs.
              </p>
            </div>
          )}
        </div>

        {/* Pied de la modale */}
        <div className="p-4 border-t bg-gray-50 text-right shrink-0">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition font-medium"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}
