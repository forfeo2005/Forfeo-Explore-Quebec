import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importation de la page que nous venons de créer

// C'est ici que tu ajouteras tes futures pages (Blog, Contact, etc.)
function App() {
  return (
    <Routes>
      {/* Route par défaut : affiche Home quand on est sur la racine "/" */}
      <Route path="/" element={<Home />} />
      
      {/* Exemple pour le futur (ne décommente pas encore) : */}
      {/* <Route path="/blog" element={<Blog />} /> */}
    </Routes>
  );
}

export default App;
