import React from 'react';
import { FaShieldAlt, FaGavel, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Colonne 1 : Marque */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Forfeo Explore</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Votre guide de confiance pour découvrir le Québec. Nous nous engageons à fournir des informations précises et à protéger vos données personnelles conformément aux lois canadiennes.
            </p>
          </div>

          {/* Colonne 2 : Légal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <FaGavel className="mr-2 text-yellow-500" /> Juridique
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition">Conditions d'utilisation</a></li>
              <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition">Gestion des cookies</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <FaEnvelope className="mr-2 text-yellow-500" /> Aide
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition">Nous contacter</a></li>
              <li><a href="#" className="hover:text-white transition">Signaler une erreur</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Forfeo Explore Québec. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
