import React from 'react';
import './About.css';
import MySkill from './MySkill';
import KnowMe from './KnowMe';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Me</h2>
      <div className="container-div">
        <h4 className="about-des">
          Here you will find more information about me, what I do, and my current skills mostly in
          terms of programming and technology
        </h4>
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div className="know-me-container">
              <h3 className="text-center about-boxes-heading">Get Know to me</h3>
              <KnowMe />
            </div>
          </div>
          <div className="col text-center">
            <div className="know-me-container">
              <h3 className="about-boxes-heading">My Skills</h3>
              <MySkill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
