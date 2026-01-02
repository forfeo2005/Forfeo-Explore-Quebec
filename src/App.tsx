import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog'; // <--- ASSURE-TOI QUE CE FICHIER EXISTE DANS SRC/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* 1. La page principale du Blog (La grille avec les cartes) */}
      <Route path="/blog" element={<Blog />} />

      {/* 2. La page de détail (Quand on clique sur une région)
          J'ai ajouté les deux chemins pour être sûr que ça marche peu importe le lien */}
      <Route path="/blog/:id" element={<RegionDetail />} />
      <Route path="/region/:id" element={<RegionDetail />} />
    </Routes>
  );
}

export default App;
