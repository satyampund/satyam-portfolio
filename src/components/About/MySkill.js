import React from 'react';
import './MySkill.css';
import HMTLImg from './../../assests/html.png';
import CSS from './../../assests/css-3.png';
import JavaScript from './../../assests/js.png';
import BootStrapImg from './../../assests/bootstrap.png';
import ReactImg from './../../assests/react.png';
import NodeJs from './../../assests/nodejs.png';
import Mongodb from './../../assests/mongodb.png';
import ExpressImg from './../../assests/express.png';
import Cprogramming from './../../assests/c-programming.png';
import Cpp from './../../assests/c++.png';
import Python from './../../assests/python.png';
import Java from './../../assests/java.png';
import Git from './../../assests/git-icon.png';
import GitHub from './../../assests/github.png';
import Postman from './../../assests/postman.png';

const MySkill = () => {
  return (
    <>
      <div className="know-me-container">
        <h3>My Skills</h3>
        <h6 className="skill-box-header">Web development</h6>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div className="skill-box">
                <img src={HMTLImg} alt="HTMLImg" className="skill-img"></img>
                <h6 className="skill-name">HTML</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={CSS} alt="CSSImg" className="skill-img"></img>
                <h6 className="skill-name">CSS</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={JavaScript} alt="JavaScript" className="skill-img"></img>
                <h6 className="skill-name">JS</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={BootStrapImg} alt="Bootstrap" className="skill-img"></img>
                <h6 className="skill-name">Bootstrap</h6>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div className="skill-box">
                <img src={ReactImg} alt="reactJS" className="skill-img"></img>
                <h6 className="skill-name">React JS</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={NodeJs} alt="nodeJS" className="skill-img"></img>
                <h6 className="skill-name">Node JS</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={ExpressImg} alt="expressJs" className="skill-img"></img>
                <h6 className="skill-name">Express JS</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={Mongodb} alt="mongoDB" className="skill-img"></img>
                <h6 className="skill-name">MongoDB</h6>
              </div>
            </div>
          </div>

          <h6 className="skill-box-header">Languages</h6>
          <div class="row">
            <div class="col">
              <div className="skill-box">
                <img src={Cprogramming} alt="C" className="skill-img"></img>
                <h6 className="skill-name">C</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={Cpp} alt="cpp" className="skill-img"></img>
                <h6 className="skill-name">C++</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={Python} alt="python" className="skill-img"></img>
                <h6 className="skill-name">Python</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={Java} alt="java" className="skill-img"></img>
                <h6 className="skill-name">Java</h6>
              </div>
            </div>
          </div>

          <h6 className="skill-box-header">Tools</h6>
          <div class="row">
            <div class="col">
              <div className="skill-box">
                <img src={Git} alt="git" className="skill-img"></img>
                <h6 className="skill-name">Git</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={GitHub} alt="github" className="skill-img"></img>
                <h6 className="skill-name">GitHub</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">
                <img src={Postman} alt="postman" className="skill-img"></img>
                <h6 className="skill-name">Postman</h6>
              </div>
            </div>
            <div class="col">
              <div className="skill-box">{/* New Skill */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
