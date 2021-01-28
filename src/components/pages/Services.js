import '../../App.css';
import Navbar from '../Navbar/Navbar'
import Gallery from 'react-photo-gallery'
import imazhi2 from '../Services/webpage.png';
import imazhi3 from '../Services/webservice.png';
import imazhi from '../Services/webhook.png';
import image1 from './img-8.jpg';
import image2 from './img-9.jpg';
import './services.css'

const photos = [
  {
    src: image1,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1
  },
  {
    src: image2,
    sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
    width: 1,
    height: 1
  }
];
 


function Services() {
  return (
    <>
      <Navbar />
      <section>
        <div className='services-content'>
            <div className='image'>
            <img src={imazhi2} width="100" height="100" alt='imazhi'></img>
            </div>
            <h1>WEB SERVICES & PRODUCTS</h1>
            <div className='sherbimet'>

            {/* <ul>
              <li>E-commerce​</li>
            </ul>
            <ul>
              <li>Static web-pages​</li>
            </ul>
            <ul>
              <li>Interactive web-pages​</li>
            </ul>
            </div> */}
            <p>The idea that our services might help a business, is the greatest boost we have. We hope that you are our companion during our jurney, and our paths will help each other. </p>

          </div>
        </div>
      </section>
      <section>
        <div className='services-content'>
          <div className='image'>
            <img src={imazhi} width="100" height="100" alt='imazhi2'></img>
            </div>
            <h1>BUSSINESS IDENTITY​</h1>
            <div className='sherbimet2'>
            
            {/* <ul>
              <li>Logo</li>
            </ul>
            <ul>
              <li>Branding</li>
            </ul>
            <ul>
              <li>Social media content & offerts​</li>
            </ul> */}
            <p>Just like a book needs its cover, so do businesses need their branding. Our restless team will efficently offer great logos, branding and Social Media related services. </p>


          </div>
        </div>
      </section>
      <section>
        <div className='services-content'>
          <div className='image'>
          <img src={imazhi3} width="100" height="100" alt='imazhi2'></img>
            </div>
              <h1>WEB RELATED SERVICES</h1>
            <div className='sherbimet3'>
              <p>We also offer services like Social Media boosts, SEO and Digital Representation to help your business thrive</p>
              {/* <ul>
                <li>Social Media boosts​</li>
              </ul>
              <ul>
                <li>SEO</li>
              </ul>
              <ul>
                <li>Digital Representation​</li>
              </ul> */}
            </div>
        </div>
      </section>
      <Gallery  photos={photos} />;
      {/* <GridGallery /> */}
    </>
  );
}
export default Services;

