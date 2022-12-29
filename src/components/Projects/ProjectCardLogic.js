import React from 'react';
import RoadToJS from './../../assests/project-1.png';
import DryFruitsDarbar from './../../assests/project-2.png';
import WeatherApp from './../../assests/project-3.png';
import StackRTJ from './../../assests/project-stack-1.png';

const ProjectCardLogic = () => {
  const projectData = [
    {
      image: RoadToJS,
      title: 'Road To JS',
      color: 'card-color-1',
      description:
        'Road To JS is a platform that contains the collection of JavaScript begineers friendly projects in one place',
    },

    {
      image: DryFruitsDarbar,
      title: 'Dry Fruits Darbar',
      color: 'card-color-2',
      description:
        'Dry Fruits Darbar is an E-commerce platform where you can buy premium quality dry fruits',
    },
    {
      image: WeatherApp,
      title: 'Weather App',
      color: 'card-color-3',
      description:
        'This is simple React Project which gives you weather updates by just entering city name',
    },
  ];

  const projectMap = projectData.map((ele) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="image-container">
            <img className="card-img" src={ele.image} alt="Roadtojs"></img>
            <img className="card-back-img" src={StackRTJ} alt="Roadtojs"></img>
          </div>
          <div className={`card-body ${ele.color}`}>
            <h5 className="card-title">{ele.title}</h5>
            <p className="card-text">{ele.description}</p>
            <button className="css-button-shadow-border-sliding--black me-3">Code</button>
            <button className="css-button-shadow-border-sliding--black ms-3 ">Demo</button>

            {/* <a href="#ss" className="btn btn-dark ms-3 project-card-btn">
              Demo
            </a> */}
          </div>
        </div>
      </div>
    );
  });

  return <>{projectMap}</>;
};

export default ProjectCardLogic;
