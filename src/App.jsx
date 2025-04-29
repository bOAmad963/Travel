import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Serveces from './pages/serveces';
import About from './pages/about';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Serveces />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
