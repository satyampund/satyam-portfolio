import React from 'react';
import './KnowMe.css';

const KnowMe = () => {
  return (
    <>
      <h6 className="knowMe-box-header">Education</h6>
      <p className="mb-0">B.Tech in Production Engineering</p>
      <ul>
        <li>College of Engineering, Pune (COEP)</li>
        <li>Aug 2019 - June 2022</li>
      </ul>

      <p className="mb-0">Diploma in Production Engineering</p>
      <ul>
        <li>Government Polytechnic, Ahmednagar</li>
        <li>Aug 2016 - May 2019</li>
      </ul>

      <h6 className="knowMe-box-header">More</h6>
    </>
  );
};

export default KnowMe;
