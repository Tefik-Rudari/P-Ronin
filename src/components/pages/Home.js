import '../../App.css';
// import React from 'react';
import Navbar from '../Navbar/Navbar'
import HeroSection from '../hero/HeroSection.js';
import Servicesinfo from '../Services/Servicesinfo.js';
import Footer from '../footer/Footer.js';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Servicesinfo />
      <Footer />
    </>
  );
}

export default Home;
