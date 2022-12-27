import React from 'react';
import './KnowMe.css';

const KnowMe = () => {
  return (
    <>
      <h6 className="knowMe-box-header">Education</h6>
      <div className="abc">
        <p className="mb-1">B.Tech in Production Engineering</p>
        <ul>
          <li className="mb-1">College of Engineering, Pune (COEP)</li>
          <li className="mb-1">Aug 2019 - June 2022</li>
        </ul>

        <p className="mb-1">Diploma in Production Engineering</p>
        <ul>
          <li className="mb-1">Government Polytechnic, Ahmednagar</li>
          <li className="mb-1">Aug 2016 - May 2019</li>
        </ul>
      </div>
      <h6 className="knowMe-box-header">More</h6>

      <div className="abc">
        <p>
          I'm an engineer passionate about coding. Always ready to try hands-on new and emerging
          technologies.
        </p>
        <p>
          I have a strong foundation in MERN Stack and I am skilled in creating interactive and
          visually appealing websites.
        </p>
        <p>
          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good
          opportunity that matches my skills and experience then don't hesitate to contact me.
        </p>
      </div>
      <button className="ContactbuttonClass">Contact</button>
    </>
  );
};

export default KnowMe;
