import React from 'react'
import HeroSction from '../section/HeroSction'
import ServiceSection from "../section/ServiceSection";
import GallerySection from "../section/GallerySection";
import AboutSection from "../section/AboutSection";

const Home = () => {
  return (
    <div>
      <HeroSction />
      <ServiceSection />
      <GallerySection />
      <AboutSection />
    </div>
  );
}

export default Home