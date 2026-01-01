import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';

function App() {
  // Le basename est essentiel pour le déploiement sur GitHub Pages (sous-dossier)
  const basename = import.meta.env.BASE_URL;

  return (
    <BrowserRouter basename={basename}>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Route temporaire pour les régions en attendant la page spécifique */}
            <Route path="/region/:id" element={<div className="p-10 text-center">Détail de la région à venir...</div>} />
          </Routes>
        </main>

        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}

export default App;
