import '../../App.css';
import HeroSection from '../hero/HeroSection.js';
import WhyChooseUs from "../pages/WhyChooseUs"
import GridGallery from '../Grid/GridGallery'
import Footer from '../footer/Footer.js';
import main_div from './main_div.css';


function Home() {
  return (
    <div className='maindiv'>
      <HeroSection />
      <WhyChooseUs />
      <GridGallery />
      <Footer />
    </div>
  );
}

export default Home;
