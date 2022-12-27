import React from 'react';
import './About.css';
import MySkill from './MySkill';

const About = () => {
  return (
    <>
      <h2 className="about-heading">About Me</h2>
      <div className="container-div">
        {/* <h4 className="about-des">
          Here you will find more information about me, what I do, and my current skills mostly in
          terms of programming and technology
        </h4> */}
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div className="know-me-container">
              <h3 className="text-center">Get Know to me</h3>
              <p>
                I'm a Frontend Web Developer building the Front-end of Websites and Web Applications
                that leads to the success of the overall product. Check out some of my work in the
                Projects section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years
                in Web Development so it can help other people of the Dev Community. Feel free to
                Connect or Follow me on my Linkedin where I post useful content related to Web
                Development and Programming
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a
                good opportunity that matches my skills and experience then don't hesitate to
                contact me.
              </p>
            </div>
          </div>
          <div className="col text-center">
            <MySkill />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
