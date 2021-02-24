import '../../App.css';
import HeroSection from '../hero/HeroSection.js';
import ServicesDetails from '../Services/ServicesDetails.js';
import WhyChooseUs from "../pages/WhyChooseUs"
import GridGallery from '../Grid/GridGallery'
import Footer from '../footer/Footer.js';
import Stats from '../pages/Stats.js';
import main_div from './main_div.css';



function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesDetails />
      <GridGallery />
      <Stats />
      <Footer />
    </>
  );
}

export default Home;
