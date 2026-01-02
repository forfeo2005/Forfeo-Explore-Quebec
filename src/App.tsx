import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog';
import Legal from './pages/Legal';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regions" element={<Blog />} />
          <Route path="/region/:id" element={<RegionDetail />} />
          <Route path="/blog/:id" element={<RegionDetail />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>

      {/* AJOUT : Le footer légal qui s'affiche sur toutes les pages */}
      <footer className="footer-legal bg-white border-t border-gray-100 py-6 text-center mt-auto">
        <p className="text-xs text-gray-500 font-medium">
          FORFEO EXPLORE est une division exploitée par FORFEO INC. société par actions enregistrée au Québec.
        </p>
      </footer>
    </div>
  );
}

export default App;
