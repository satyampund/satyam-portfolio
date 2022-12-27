import React from 'react';
import './MySkill.css';
import './SkillBox';
import HMTLImg from './../../assests/html.png';
import CSSImg from './../../assests/css-3.png';
import JavaScriptImg from './../../assests/js.png';
import BootStrapImg from './../../assests/bootstrap.png';
import ReactImg from './../../assests/react.png';
import NodeJsImg from './../../assests/nodejs.png';
import MongodbImg from './../../assests/mongodb.png';
import ExpressImg from './../../assests/express.png';
import CImg from './../../assests/c-programming.png';
import CppImg from './../../assests/c++.png';
import PythonImg from './../../assests/python.png';
import JavaImg from './../../assests/java.png';
import GitImg from './../../assests/git-icon.png';
import GitHubImg from './../../assests/github.png';
import PostmanImg from './../../assests/postman.png';
import SkillBox from './SkillBox';

const MySkill = () => {
  return (
    <>
      <h3>My Skills</h3>
      <h6 className="skill-box-header">Web development</h6>
      <div class="container text-center">
        <div class="row">
          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={HMTLImg} skillName="HTML" alt="HTMLIcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={CSSImg} skillName="CSS" alt="CSSIcon" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={JavaScriptImg} skillName="JavaScript" alt="JSIcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={BootStrapImg} skillName="BootStrap" alt="BootstrapIcon" />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={ReactImg} skillName="React JS" alt="ReactIcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={NodeJsImg} skillName="Node JS" alt="NodeIcon" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={ExpressImg} skillName="Express JS" alt="ExpressIcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={MongodbImg} skillName="MongoDB" alt="MongoDBIcon" />
              </div>
            </div>
          </div>
        </div>

        <h6 className="skill-box-header">Languages</h6>
        <div class="row">
          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={CImg} skillName="C" alt="CIcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={CppImg} skillName="C++" alt="CPPIcon" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={JavaImg} skillName="Java" alt="JavaIcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={PythonImg} skillName="Python" alt="PythonIcon" />
              </div>
            </div>
          </div>
        </div>

        <h6 className="skill-box-header">Tools</h6>

        <div class="row">
          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={GitImg} skillName="Git" alt="Gitcon" />
              </div>
              <div class="col-6">
                <SkillBox skillImg={GitHubImg} skillName="Github" alt="GitHubIcon" />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div class="col-6">
                <SkillBox skillImg={PostmanImg} skillName="Postman" alt="Postman" />
              </div>
              <div class="col-6">
                {/* <SkillBox skillImg={PythonImg} skillName="Python" alt="PythonIcon" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkill;
