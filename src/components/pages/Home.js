import '../../App.css';
import HeroSection from '../hero/HeroSection.js';
import ServicesDetails from '../Services/ServicesDetails.js';
import WhyChooseUs from "../pages/WhyChooseUs"
import GridGallery from '../Grid/GridGallery'
import Footer from '../footer/Footer.js';


function Home() {
  return (
    <div className='maindiv'>
      <HeroSection />
      <ServicesDetails />
      <WhyChooseUs />
      <GridGallery />
      <Footer />
    </div>
  );
}

export default Home;
