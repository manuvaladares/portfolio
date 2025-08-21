import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import WorkPage from './pages/WorkPage/WorkPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import './assets/styles/global.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/contact" element={<ContactPage />} /> 
      <Route path="/skills" element={<SkillsPage />} />
    </Routes>
  );
}

export default App;