import React from 'react'
import HeroSction from '../section/HeroSction'
import ServiceSection from "../section/ServiceSection";
import GallerySection from "../section/GallerySection";
import AboutSection from "../section/AboutSection";
import ContactSection from "../section/ContactSection";
import ReviewSection from '../section/ReviewSection';

const Home = () => {
  return (
    <div>
      <HeroSction />
      <ServiceSection />
      <GallerySection />
      <AboutSection />
      <ReviewSection />
      <ContactSection />
    </div>
  );
}

export default Home