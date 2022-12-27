import React from 'react';
import './SkillBox.css';

const SkillBox = (props) => {
  return (
    <>
      <div className="skill-box">
        <img src={props.skillImg} alt={props.alt} className="skill-img"></img>
        <h6 className="skill-name">{props.skillName}</h6>
      </div>
    </>
  );
};

export default SkillBox;
