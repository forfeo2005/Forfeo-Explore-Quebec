import React, { useState } from 'react';
import { FaMapMarkedAlt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // On enlève les traductions complexes pour l'instant pour éviter les bugs
  // On met le texte directement en français

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300 text-blue-900">
             <FaMapMarkedAlt size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Forfeo <span className="text-blue-200 font-light">Explore Québec</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-blue-200 transition-colors font-medium">Accueil</Link>
          <Link to="/regions" className="hover:text-blue-200 transition-colors font-medium">Régions</Link>
          <a href="/#carte" className="hover:text-blue-200 transition-colors font-medium">Carte Interactive</a>
          
          {/* Bouton langue simplifié */}
          <button className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20">
              <FaGlobe size={14} />
              <span className="text-sm uppercase font-bold">FR</span>
          </button>
        </nav>

        {/* Menu Mobile */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Menu Mobile Déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/regions" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Régions</Link>
            <a href="/#carte" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>Carte Interactive</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
