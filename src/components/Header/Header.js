import React from 'react';
import StudyBoy from './../../assests/header.png';
import './Header.css';
const Header = () => {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6">
            <h1 className="heading">Hey, I'm Satyam Pund</h1>
            <h4 className="heading-description mt-4 mb-3">
              A MERN Stack Developer Passionate About Coding. Always ready to try Hands-on New and
              Emerging Technologies.
            </h4>
            <button className="css-button-arrow--sky me-5 mt-4">Resume</button>
            <button className="css-button-sliding-to-left--sky mt-4">Hire Me</button>
          </div>
          <div class="col-md-6">
            <img src={StudyBoy} className="header-img" alt="study"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
