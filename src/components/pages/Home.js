import '../../App.css';
import React from 'react';
import HeroSection from '../hero/HeroSection.js';
import Servicesinfo from '../Services/Servicesinfo.js';
import Footer from '../footer/Footer.js';


function Home() {
  return (
    <>
      <HeroSection />
      <Servicesinfo />
      <Footer />
    </>
  );
}

export default Home;
