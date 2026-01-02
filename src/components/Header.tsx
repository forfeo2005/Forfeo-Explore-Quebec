import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkedAlt, FaBars, FaTimes, FaGlobe, FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('FR');

  const languages = [
    { code: 'FR', label: 'Français' },
    { code: 'EN', label: 'English' },
    { code: 'ES', label: 'Español' },
    { code: 'DE', label: 'Deutsch' },
    { code: 'IT', label: 'Italiano' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO */}
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
          
          {/* SÉLECTEUR DE LANGUE (Réparé) */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition border border-white/20"
            >
              <FaGlobe size={14} />
              <span className="text-sm font-bold uppercase">{currentLang}</span>
              <FaChevronDown size={10} />
            </button>

            {/* Menu Déroulant */}
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in-down">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors ${currentLang === lang.code ? 'font-bold text-blue-900 bg-blue-50' : ''}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
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
          
          <div className="pt-4 border-t border-blue-800">
            <p className="text-xs text-blue-300 mb-2 uppercase">Langue</p>
            <div className="flex flex-wrap gap-2">
               {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setCurrentLang(lang.code); setIsMenuOpen(false); }}
                    className={`text-sm px-3 py-1 rounded border transition ${
                        currentLang === lang.code 
                        ? 'bg-white text-blue-900 border-white font-bold' 
                        : 'border-blue-400 text-blue-100 hover:bg-blue-800'
                    }`}
                  >
                    {lang.code}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
