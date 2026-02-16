import "./index.css";
import Navbar from './components/layout/Navbar';
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";


import React from 'react'

const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}


export default App;

