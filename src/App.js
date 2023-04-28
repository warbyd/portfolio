import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cv from './components/Cv';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
