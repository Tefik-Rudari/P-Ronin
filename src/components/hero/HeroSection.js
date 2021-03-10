import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import './hero.css';
import photo from './image2.png';
import Navigacionbar from '../Navbar/Navigacionbar'




function HeroSection() {
  return (
    <>


      <div className='hero'>
        <Navigacionbar />
        <div className='hero-con'>

        <div className='hero-container'>
    <Container className="hero-konteiner">
      <Row className="rreshti">
        <Col md="8" className="Kolona1"> 

          <div className='hero-content'>

            <h1>Programming  Ronins</h1>
            <p>We are a focused, hard-working team,</p>
            <p>determined to deliver nothing short than the very best!</p>
            <h3>Do not wait, join us!</h3>
            <div className='hero-btns'>
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                Our Projects
        </Button>
            </div>
          </div>
                  </Col>
                  <Col md="8" className="Kolona2">
          <div className='info-image'>
            <img src={photo} alt="image" width='100%' height='100%' />


          </div>
                  </Col>
                  </Row>
                </Container>
        </div>
      </div>
      </div>
    </>
  );
}

export default HeroSection;
