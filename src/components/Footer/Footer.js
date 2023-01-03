import React from 'react';
import './Footer.css';
import Instagram from './../../assests/instagram.png';
import Linkedin from './../../assests/linkedin.png';
import GitHubL from './../../assests/github-logo.png';

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <div className="footer-col-1">
          <h3 className="footer-my-name">Satyam Pund</h3>
          <p>
            Cricket is my first love followed by coding! Love cricket as much as I do? Let's talk
            about how awesome it is! We can code while we watch cricket!
          </p>
          <a href="https://www.linkedin.com/in/satyam-pund/">
            <img src={Linkedin} className="social-media" alt="linkedin"></img>
          </a>
          <a href="https://github.com/satyampund">
            <img src={GitHubL} className="social-media git-hub" alt="githublogo"></img>
          </a>
          <a href="https://www.instagram.com/satyam_2602/">
            <img src={Instagram} className="social-media" alt="Instgram"></img>
          </a>
        </div>
        <hr></hr>
        <p className="copyright">Copyright © Satyam Pund 2023.</p>
      </div>
    </>
  );
};

export default Footer;
