import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './hero.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className='hero-content'>

      <h1>ADVENTURE AWAITS</h1>
      <p>We are a focuesed, hard-working team, determined only on the greater good of the company!</p>
      <h3>Do not wait, join us!</h3>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
          GET STARTED
        </Button>
          </div>
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
