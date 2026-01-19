import "./index.css";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Service from "./components/pages/Service";
import Gallery  from "./components/pages/Gallery";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import React from 'react'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Service />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
             </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

