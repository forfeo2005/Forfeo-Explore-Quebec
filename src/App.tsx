import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog';
import Legal from './pages/Legal'; // Import de la nouvelle page

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
          <Route path="/legal" element={<Legal />} /> {/* Nouvelle route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
