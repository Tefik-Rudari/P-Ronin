import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import './Navigacionbar.css';
import logo from './Logo2.png';
import { Link } from 'react-scroll';

function Navigacionbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='nav-bar'>
        <div className='nav-bar-container'>
          <div className='logo'>
            <Link to='/' className='nav-bar-logo' onClick={closeMobileMenu}>
              <img src={logo} alt="This is our logo!" />
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='About'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our company
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='WhyChooseUs'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Why choose us?
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='whatwedocontainer'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                What we do?
                
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='Projects'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects

              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='Contact'
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact

              </Link>
            </li>
   

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigacionbar;
