import React from 'react';
import './MySkill.css';
import SkillBox from './SkillBox';
import './SkillBox';
import HMTLImg from './../../assests/skills-img/html.png';
import CSSImg from './../../assests/skills-img/css-3.png';
import JavaScriptImg from './../../assests/skills-img/js.png';
import BootStrapImg from './../../assests/skills-img/bootstrap.png';
import ReactImg from './../../assests/skills-img/react.png';
import NodeJsImg from './../../assests/skills-img/nodejs.png';
import MongodbImg from './../../assests/skills-img/mongodb.png';
import ExpressImg from './../../assests/skills-img/express.png';
import CImg from './../../assests/skills-img/c-programming.png';
import CppImg from './../../assests/skills-img/c++.png';
import PythonImg from './../../assests/skills-img/python.png';
import JavaImg from './../../assests/skills-img/java.png';
import GitImg from './../../assests/skills-img/git-icon.png';
import GitHubImg from './../../assests/skills-img/github.png';
import PostmanImg from './../../assests/skills-img/postman.png';

const MySkill = () => {
  return (
    <>
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
