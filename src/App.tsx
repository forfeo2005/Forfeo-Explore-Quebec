import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog'; // Ton fichier avec la grille

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* 👇 CORRECTION ICI : J'ai changé "/blog" par "/regions" pour que ton menu marche ! */}
      <Route path="/regions" element={<Blog />} />

      {/* Routes pour les détails (je garde les deux options pour être sûr) */}
      <Route path="/region/:id" element={<RegionDetail />} />
      <Route path="/blog/:id" element={<RegionDetail />} />
    </Routes>
  );
}

export default App;
