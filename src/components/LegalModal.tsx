import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'privacy' | 'terms';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold text-quebec-dark mb-6">Mentions Légales</h2>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h3 className="text-xl font-semibold mb-2 text-quebec-light">Politique de Confidentialité</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Géolocalisation :</strong> Nous collectons des données de géolocalisation de manière strictement anonyme uniquement pour permettre la fonctionnalité de calcul d'itinéraire GPS.
                </li>
                <li>
                  <strong>Services Tiers :</strong> Ce site utilise Google Maps API. En l'utilisant, vous acceptez les règles de confidentialité de Google.
                </li>
                <li>
                  <strong>Données Personnelles :</strong> Le site ne stocke aucune donnée personnelle identifiable sur ses serveurs.
                </li>
              </ul>
            </section>

            <div className="border-t border-gray-200 my-4"></div>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-quebec-light">Conditions d'Utilisation</h3>
              <p className="mb-2">
                En utilisant Forfeo Explore Québec, vous acceptez les conditions suivantes :
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Exactitude des informations :</strong> Bien que nous nous efforcions de maintenir les données à jour, nous ne garantissons pas l'exactitude des horaires, prix ou disponibilités des lieux répertoriés.
                </li>
                <li>
                  <strong>Liens externes :</strong> Nous ne sommes pas responsables du contenu des sites tiers accessibles via nos liens.
                </li>
              </ul>
            </section>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-quebec-light text-white rounded-lg hover:bg-quebec-dark transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
