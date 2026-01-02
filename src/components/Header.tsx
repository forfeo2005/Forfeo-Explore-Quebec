import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa'; // On revient aux icônes qui marchaient

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO QUI REVIENT */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-white p-2 rounded-full text-blue-900 group-hover:scale-110 transition-transform">
             <FaMapMarkedAlt size={24} />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            Forfeo <span className="text-blue-200 font-light">Explore Québec</span>
          </span>
        </Link>

        {/* NAVIGATION PC */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-yellow-300 font-medium transition-colors">Accueil</Link>
          <Link to="/regions" className="hover:text-yellow-300 font-medium transition-colors">Régions</Link>
          <a href="/#carte" className="hover:text-yellow-300 font-medium transition-colors">Carte Interactive</a>
          
          {/* BOUTON LANGUE */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition"
            >
              <FaGlobe size={14} />
              <span className="text-sm font-bold uppercase">FR</span>
            </button>
          </div>
        </nav>

        {/* MENU MOBILE */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* LISTE MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 border-t border-blue-800 p-4 space-y-4">
          <Link to="/" className="block text-lg hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link to="/regions" className="block text-lg hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Régions</Link>
          <a href="/#carte" className="block text-lg hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Carte</a>
        </div>
      )}
    </header>
  );
}
