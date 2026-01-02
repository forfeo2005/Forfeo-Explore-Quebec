import React from 'react';
import { Link } from 'react-router-dom'; // Important pour les liens internes
import { FaGavel, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Forfeo Explore</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Votre guide de confiance pour découvrir le Québec.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <FaGavel className="mr-2 text-yellow-500" /> Juridique
            </h4>
            <ul className="space-y-2 text-sm">
              {/* Ces liens mènent maintenant vers la page légale */}
              <li><Link to="/legal" className="hover:text-white transition">Politique de confidentialité (Loi 25)</Link></li>
              <li><Link to="/legal" className="hover:text-white transition">Conditions d'utilisation</Link></li>
              <li><Link to="/legal" className="hover:text-white transition">Mentions légales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <FaEnvelope className="mr-2 text-yellow-500" /> Aide
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@forfeo.com" className="hover:text-white transition">Nous contacter</a></li>
              <li><a href="#" className="hover:text-white transition">Centre d'aide</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Forfeo Explore Québec. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
