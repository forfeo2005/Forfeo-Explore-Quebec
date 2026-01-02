import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail'; // Importation de la nouvelle page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* C'est cette ligne qui active les nouvelles pages ! */}
      <Route path="/region/:id" element={<RegionDetail />} />
    </Routes>
  );
}

export default App;
