import "./index.css";
import Navbar from './components/layout/Navbar';
import Service from "./components/pages/Service";
import Gallery  from "./components/pages/Gallery";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import React from 'react'

const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Service />
        <Gallery />
        <About /> 
    </div>
  );
}


export default App;

