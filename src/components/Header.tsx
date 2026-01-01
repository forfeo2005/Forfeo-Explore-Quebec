import React, { useState } from 'react';
import { FaMapMarkedAlt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Utilisation de couleurs standards (blue-900) pour garantir l'affichage du dégradé
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="bg-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300 text-blue-900">
             <FaMapMarkedAlt size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Forfeo <span className="text-blue-200 font-light">Explore Québec</span>
          </span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-blue-200 transition-colors font-medium">Accueil</a>
          <a href="#regions" className="hover:text-blue-200 transition-colors font-medium">Régions</a>
          <a href="#carte" className="hover:text-blue-200 transition-colors font-medium">Carte Interactive</a>
          
          <button className="flex items-center space-x-1 border border-white/30 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
            <FaGlobe size={14} />
            <span className="text-sm">FR</span>
          </button>
        </nav>

        {/* Menu Mobile Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 animate-fade-in shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </a>
            <a href="#regions" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
              Régions
            </a>
            <a href="#carte" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>
              Carte
            </a>
            <button className="flex items-center space-x-2 text-left text-blue-200">
              <FaGlobe size={18} />
              <span>Français</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
