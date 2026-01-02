import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Menu, X, Globe } from 'lucide-react'; // Utilise lucide-react comme le reste

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-white p-2 rounded-full text-blue-900 group-hover:scale-110 transition-transform">
             <Map size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Forfeo <span className="text-blue-200 font-light">Québec</span>
          </span>
        </Link>

        {/* NAVIGATION PC */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-yellow-300 font-medium transition-colors">Accueil</Link>
          <Link to="/regions" className="hover:text-yellow-300 font-medium transition-colors">Régions</Link>
          
          {/* SÉLECTEUR DE LANGUE */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition"
            >
              <Globe size={16} />
              <span className="text-sm font-bold">FR</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded shadow-xl py-2 border border-gray-100 z-50">
                <button className="block w-full text-left px-4 py-2 hover:bg-blue-50 text-blue-600 font-bold">Français</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-blue-50">English</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-blue-50">Español</button>
              </div>
            )}
          </div>
        </nav>

        {/* MENU MOBILE */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* LISTE MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 p-4 space-y-4 border-t border-blue-700">
          <Link to="/" className="block text-lg hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link to="/regions" className="block text-lg hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Régions</Link>
        </div>
      )}
    </header>
  );
}
