import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import du menu
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog'; // Ta page avec la grille des régions

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Le Header est placé ICI pour être visible sur TOUTES les pages */}
      <Header />

      <main className="flex-grow">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* Page qui liste toutes les régions (La grille) */}
          <Route path="/regions" element={<Blog />} />

          {/* Page de détail d'une région */}
          <Route path="/region/:id" element={<RegionDetail />} />
          
          {/* (Sécurité) Si un ancien lien utilise /blog, on le redirige vers le détail */}
          <Route path="/blog/:id" element={<RegionDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
