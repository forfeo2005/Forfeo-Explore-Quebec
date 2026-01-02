import React, { useState } from 'react';
import { FaMapMarkedAlt, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import pour la traduction

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // Hook pour utiliser les traductions

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangMenuOpen(false);
  };

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' }
  ];

  return (
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
          <a href="#" className="hover:text-blue-200 transition-colors font-medium">{t('nav_home')}</a>
          <a href="#regions" className="hover:text-blue-200 transition-colors font-medium">{t('nav_regions')}</a>
          <a href="#carte" className="hover:text-blue-200 transition-colors font-medium">{t('nav_map')}</a>
          
          {/* Sélecteur de langue */}
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-1 border border-white/30 px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaGlobe size={14} />
              <span className="text-sm uppercase">{i18n.language.split('-')[0]}</span>
            </button>
            
            {/* Menu déroulant langues */}
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-xl py-2 animate-fade-in border border-gray-100">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
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
            <a href="#" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>{t('nav_home')}</a>
            <a href="#regions" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>{t('nav_regions')}</a>
            <a href="#carte" className="text-lg font-medium hover:text-blue-200" onClick={() => setIsMenuOpen(false)}>{t('nav_map')}</a>
            
            <div className="flex flex-wrap gap-2 pt-2 border-t border-blue-800">
               {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { changeLanguage(lang.code); setIsMenuOpen(false); }}
                    className={`text-xs px-2 py-1 rounded border ${i18n.language === lang.code ? 'bg-white text-blue-900' : 'border-blue-400 text-blue-200'}`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
