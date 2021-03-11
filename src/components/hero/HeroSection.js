import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import { Container } from 'react-bootstrap'
import { Row, Col, Image } from 'react-bootstrap'
import './hero.css';
import Girl from './image2.png';
import Navigacionbar from '../Navbar/Navigacionbar'





function HeroSection() {
  return (
    <>


      <div className='hero'>
        <Navigacionbar />

        <div className='hero-container'>
          <Container fluid="true" className="hero-konteiner">
            <Row>
              <Col lg="6">


                <div className='hero-content'>

                  <h1>Programming  Ronins</h1>
                  <p>We are a focused, hard-working team,</p>
                  <p>determined to deliver nothing short than the very best!</p>
                  <div className='hero-btns'>
                    <Button
                      to='Projects'
                      className='btns'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                    >
                      Statistics
        </Button>
                  </div>
                </div>
              </Col>
              <Col lg="6" className="Kolona2">
                <Image src={Girl} alt={Girl} className="w-image" />


              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
