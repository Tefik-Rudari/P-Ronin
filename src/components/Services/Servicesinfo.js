import React from 'react';
import './servicesinfo.css';
import imazhi from './webhook.png';
import imazhi2 from './webpage.png';
import imazhi3 from './webservice.png';


function Servicesinfo() {
  return (

    <div className='services-container'>


      <div className='box'>
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
      </div>
      <div className='box'>
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
      </div>
      <div className='box'>
        <div className='services-content'>
        <div className='image'>
        <img src={imazhi3} width="100" height="100" alt='imazhi2'></img>
          </div>
          <h1>WEB RELATED SERVICES</h1>
        <div className='sherbimet3'>
          <ul>
            <li>Social Media boosts​</li>
          </ul>
          <ul>
            <li>SEO</li>
          </ul>
          <ul>
            <li>Digital Representation​</li>
          </ul>


        </div>
        </div>
      </div>
    </div>

  );
}

export default Servicesinfo;



