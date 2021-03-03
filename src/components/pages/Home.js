import '../../App.css';
import HeroSection from '../hero/HeroSection.js';
import WhyChooseUs from "../pages/WhyChooseUs"
import GridGallery from '../Grid/GridGallery'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import Footer from '../footer/Footer.js';
import Stats from '../pages/Stats.js';
import main_div from './main_div.css';



function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <WhatWeDo />
      <GridGallery />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
