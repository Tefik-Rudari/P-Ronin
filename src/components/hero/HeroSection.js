import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './hero.css';

function HeroSection() {
  return (
    <div className='hero-container'>
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

      </div>
    </div>
  );
}

export default HeroSection;
