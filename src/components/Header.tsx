import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-quebec-dark to-quebec-light text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-white p-2 rounded-full transform group-hover:scale-110 transition-transform duration-300">
             {/* Placeholder pour le logo SVG */}
            <span className="text-quebec-dark font-bold text-xl">F</span>
          </div>
          <span className="text-2xl font-bold font-sans tracking-tight">
            Forfeo <span className="font-light">Explore Québec</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-blue-200 transition-colors font-medium">Accueil</Link>
          <a href="#regions" className="hover:text-blue-200 transition-colors font-medium">Régions</a>
          <button className="flex items-center space-x-1 border border-white/30 px-3 py-1 rounded-full hover:bg-white/10 transition-colors">
            <Globe size={16} />
            <span className="text-sm">FR</span>
          </button>
        </nav>

        {/* Menu Mobile Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-quebec-dark border-t border-white/10 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-lg" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <a href="#regions" className="text-lg" onClick={() => setIsMenuOpen(false)}>Régions</a>
            <button className="flex items-center space-x-2 text-left">
              <Globe size={18} />
              <span>Français</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
