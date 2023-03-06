import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card';
import IceKingdom from './pages/IceKingdom';
import CandyLand from './pages/CandyLand';
import Nightosphere from './pages/Nightosphere';
import Homepage from './pages/Homepage';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}  />
        <Route path="/candy-land" element={<CandyLand />} />
        <Route path="/ice-kingdom" element={<IceKingdom/>} />
        <Route path="/nightosphere" element={<Nightosphere />} />
      </Routes>
    </Router>

  );
}
export default App;


// <Card title="Ice World" description="Come Visit the Ice World" image="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2c8ef337376715.Y3JvcCw0NjQsMzYzLDU4LDA.png" />

