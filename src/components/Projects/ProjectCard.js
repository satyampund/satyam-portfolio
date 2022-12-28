import React from 'react';
import './ProjectCard.css';
import RoadToJS from './../../assests/porfolio.png';

const ProjectCard = () => {
  return (
    <>
      <div class="container-fluid text-center">
        <div class="row temp">
          <div class="col">
            <div class="card">
              <img className="card-img" src={RoadToJS} alt="Roadtojs"></img>
              <div class="card-body">
                <h5 class="card-title">Road To JS</h5>
                <p class="card-text">
                  Road To JS is a platform that contains the collection of JavaScript begineers
                  friendly projects in one place
                </p>
                <a href="#ss" class="btn btn-dark">
                  Case Study
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="card-img" src={RoadToJS} alt="Roadtojs"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#ssr" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img className="card-img" src={RoadToJS} alt="Roadtojs"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the
                  card's content.
                </p>
                <a href="#sss" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
