import React, { useState, useMemo } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaArrowRight, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // <--- Import pour la navigation

import Header from '../components/Header';
import Footer from '../components/Footer';
import MapView from '../components/MapView';
import CookieConsent from '../components/CookieConsent';
import { regions } from '../data/regions';
import { categories } from '../data/categories';
import { places } from '../data/places';

export default function Home() {
  const { t } = useTranslation();
  
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPlaces = useMemo(() => {
    return places.filter(place => {
      const isCorrectRegion = place.regionId === selectedRegion.id;
      const isCorrectCategory = activeCategory ? place.category === activeCategory : true;
      return isCorrectRegion && isCorrectCategory;
    });
  }, [selectedRegion, activeCategory]);

  const handleCategoryClick = (catId: string) => {
    if (activeCategory === catId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(catId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Header />

      {/* --- HERO --- */}
      <section className="relative bg-blue-900 text-white py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-900 z-0"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            <Trans i18nKey="hero_title" components={{ 1: <span className="text-yellow-400" /> }} />
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl text-blue-100 mb-8 font-light">
            {t('hero_subtitle')}
          </motion.p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors">
            {t('cta_explore')}
          </motion.button>
        </div>
      </section>

      {/* --- RÉGIONS (AVEC LIENS) --- */}
      <section id="regions" className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-800">{t('regions_title')}</h3>
          <p className="text-slate-500 mt-2">{t('regions_subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            // C'est ici que la magie opère : Link vers la page de détails
            <Link to={`/region/${region.id}`} key={region.id} className="block h-full">
              <motion.div 
                whileHover={{ y: -5 }}
                className="cursor-pointer bg-white p-6 rounded-xl border-2 border-transparent hover:border-blue-300 transition-all shadow-sm hover:shadow-xl h-full flex flex-col"
              >
                <h4 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  {region.nom}
                </h4>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {t(`reg_${region.id}_desc`, region.description)}
                </p>
                <div className="text-blue-600 font-bold text-sm flex items-center mt-auto uppercase tracking-wide">
                  Explorer <FaArrowRight className="ml-2" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- CARTE & CATÉGORIES (Section Carte conservée en dessous) --- */}
      <section id="carte" className="bg-slate-100 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Carte Interactive Globale</h3>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row h-[600px] border border-slate-200">
             <div className="w-full lg:w-1/3 p-6 overflow-y-auto border-r border-slate-200 bg-white z-10">
                 <div className="mb-4"><h3 className="font-bold">{t('filter_title')}</h3></div>
                 {/* Liste simplifiée pour la démo */}
                 <div className="space-y-2">
                    {categories.map(cat => (
                        <button key={cat.id} onClick={() => handleCategoryClick(cat.id)} className={`w-full text-left p-2 rounded ${activeCategory === cat.id ? 'bg-blue-100 text-blue-800' : 'hover:bg-slate-50'}`}>
                            {cat.nom}
                        </button>
                    ))}
                 </div>
             </div>
             <div className="w-full lg:w-2/3 relative h-full">
                <MapView center={selectedRegion.centre} places={filteredPlaces} />
             </div>
          </div>
        </div>
      </section>

      <CookieConsent />
      <Footer />
    </div>
  );
}
