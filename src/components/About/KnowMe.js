import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './KnowMe.css';

const KnowMe = () => {
  return (
    <BrowserRouter>
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
          I have a strong foundation in <span>MERN Stack</span> and I am skilled in creating
          interactive and visually appealing websites.
        </p>
        <p>
          I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you
          have a good opportunity that matches my skills and experience then don't hesitate to
          <span> contact</span> me.
        </p>
      </div>

      <Link to="#contact" smooth style={{ textDecoration: 'none' }}>
        <button className="css-button-rounded--sky">Contact</button>
      </Link>
    </BrowserRouter>
  );
};

export default KnowMe;
