import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div class="footer-dark">
      <hr />
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">SEO, Consulting and Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm-12 col-md-4 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div class="col-sm-12 col-md-4 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
          </div>
          <div class="col item social">
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          <hr />
          <p class="copyright">PRonins © 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
