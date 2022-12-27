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
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book
            </h5>
            <button className="buttonClass me-5 mt-4">Resume</button>
            <button className="buttonClass mt-4">Hire Me</button>
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
