import '../../App.css';
// import React from 'react';
import Navbar from '../Navbar/Navbar'
import HeroSection from '../hero/HeroSection.js';
import ServicesDetails from '../Services/ServicesDetails.js';
import Footer from '../footer/Footer.js';


function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesDetails />
      <Footer />
    </>
  );
}

export default Home;
