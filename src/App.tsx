import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog'; 

// J'ai retiré <Header /> d'ici pour ne pas l'avoir en double sur l'accueil.
// Nous allons l'ajouter manuellement dans la page Blog à l'étape suivante.

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regions" element={<Blog />} />
          <Route path="/region/:id" element={<RegionDetail />} />
          <Route path="/blog/:id" element={<RegionDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
