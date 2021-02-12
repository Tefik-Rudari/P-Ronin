import '../../App.css';
// import React from 'react';
import Navigacionbar from '../Navbar/Navigacionbar'
import HeroSection from '../hero/HeroSection.js';
import ServicesDetails from '../Services/ServicesDetails.js';
import WhyChooseUs from "../pages/WhyChooseUs"
import GridGallery from '../Grid/GridGallery'
import Footer from '../footer/Footer.js';


function Home() {
  return (
    <div className='maindiv'>
      <Navigacionbar />
      <HeroSection />
      <ServicesDetails />
      <WhyChooseUs />
      <GridGallery />
      <Footer />
    </div>
  );
}

export default Home;
