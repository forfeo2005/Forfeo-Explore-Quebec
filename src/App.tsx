import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail'; // <--- Importation de la nouvelle page

function App() {
  return (
    <Routes>
      {/* Route Accueil */}
      <Route path="/" element={<Home />} />
      
      {/* Route Dynamique : "id" changera selon la région cliquée */}
      <Route path="/region/:id" element={<RegionDetail />} />
    </Routes>
  );
}

export default App;
