import React from 'react';
import './Footer.css';



function Footer() {
  return (
    <div class="footer-dark">
      <hr />
      <footer id="Contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-4 item">
              <h3>Services</h3>
              <ul>
                <li><a>Web Development</a></li>
                <li><a>Design</a></li>
                <li><a>SEO, Consulting and Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm-12 col-md-4 item">
              <h3>Contact</h3>
              <ul>
                <li>+ 383 49 649 275 | + 383 44 370 300</li>
                <li>info@pronins.net</li>
              </ul>
            </div>
            <div class="col-sm-12 col-md-4 item">
              <ul>
                <div class="block">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d1631.3235903848079!2d21.16118683521574!3d42.659238195988586!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d42.6589307!2d21.1612258!5e0!3m2!1sen!2sus!4v1614891642193!5m2!1sen!2sus" width="300" height="250"  allowfullscreen="" loading="lazy"></iframe>
                </div>
              </ul>
            </div>
          </div>
          <div class="col item social">
            <a href="https://www.facebook.com/TeamPRonins"
              target='_blank'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a href="https://www.instagram.com/pronnins"
              target='_blank'
            >
              <i class='fab fa-instagram' />
            </a>
            <a href="https://www.linkedin.com/in/pronins-team-769907202/"
              target='_blank'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
          <hr />
          <p class="copyright">PRonins © 2021</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
