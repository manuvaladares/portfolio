import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando as páginas
import AboutPage from './pages/AboutPage/AboutPage';

// Estilos globais
import './assets/styles/global.css';

function App() {
  return (
    <Routes>
      {/* Rota padrão redireciona para "/about" */}
      <Route path="/" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;