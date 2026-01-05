import "./index.css";
import Navbar from './components/layout/Navbar';
import HeroSction from "./components/section/HeroSction";
import Service from "./components/pages/Service";
import Gallery  from "./components/pages/Gallery";

import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSction />
      <Service />
      <Gallery />
    </div>
  )
}


export default App;

