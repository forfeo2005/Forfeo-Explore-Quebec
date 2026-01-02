import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegionDetail from './pages/RegionDetail';
import Blog from './Blog'; // <--- 1. IMPORT DE LA NOUVELLE PAGE

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* 2. LA NOUVELLE PAGE BLOG */}
      <Route path="/blog" element={<Blog />} />

      {/* 3. PAGE DE DÉTAIL 
          J'ai ajouté "/blog/:id" pour que les liens de ta page Blog (ex: /blog/montreal) fonctionnent.
          Si tu préfères garder "/region/", dis-le-moi, mais il faudra modifier les liens dans Blog.tsx 
      */}
      <Route path="/blog/:id" element={<RegionDetail />} />
      
      {/* (Optionnel) Je laisse l'ancienne route au cas où tu as d'autres liens qui l'utilisent */}
      <Route path="/region/:id" element={<RegionDetail />} />
    </Routes>
  );
}

export default App;
