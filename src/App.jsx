import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import './assets/styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} /> */}
    </Routes>
  );
}

export default App;