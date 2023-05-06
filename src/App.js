import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Cv from './components/Cv';
import Contact from './components/Contact';
import LilyPad from './components/LilyPad'; // Import the LilyPad component
import EventsPlanner from './components/EventsPlanner';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/lilypad" element={<LilyPad />} /> {/* Add the route for the LilyPad component */}
        <Route path="/eventsplanner" element={<EventsPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
