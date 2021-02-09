import '../../App.css';
// import React from 'react';
import Navigacionbar from '../Navbar/Navigacionbar'
import HeroSection from '../hero/HeroSection.js';
import ServicesDetails from '../Services/ServicesDetails.js';
import WhyChooseUs from "../pages/WhyChooseUs"
import Footer from '../footer/Footer.js';


function Home() {
  return (
    <div className='maindiv'>
      <Navigacionbar />
      <HeroSection />
      <ServicesDetails />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Home;
