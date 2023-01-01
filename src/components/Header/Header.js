import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import StudyBoy from './../../assests/header.png';
import './Header.css';
const Header = () => {
  return (
    <BrowserRouter>
      <div class="container text-center" id="home">
        <div class="row">
          <div class="col-md-6 order-2 order-md-1">
            <h1 className="heading">Hey, I'm Satyam Pund</h1>
            <h4 className="heading-description mt-md-4 mb-md-3">
              A MERN Stack Developer Passionate About Coding. Always ready to try Hands-on New and
              Emerging Technologies.
            </h4>
            <button className="css-button-arrow--sky me-5 mt-4">Resume</button>
            <Link to="#contact" smooth style={{ textDecoration: 'none' }}>
              <button className="css-button-sliding-to-left--sky mt-4">Hire Me</button>
            </Link>
          </div>
          <div class="col-md-6 order-1 order-md-2">
            <img src={StudyBoy} className="header-img" alt="study"></img>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Header;
