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
      codeLink: 'https://github.com/satyampund/road-to-js-icp-3-group-d-',
      demoLink: 'https://road-to-js.netlify.app/',
      description:
        'Road To JS is a platform that contains the collection of JavaScript begineers friendly projects in one place',
    },

    {
      image: DryFruitsDarbar,
      title: 'Dry Fruits Darbar',
      color: 'card-color-2',
      codeLink: 'https://github.com/satyampund/dry-fruits-darbar-icp-3-group-f',
      demoLink: 'https://dry-fruits-darbar.netlify.app/',
      description:
        'Dry Fruits Darbar is an E-commerce platform where you can buy premium quality dry fruits',
    },
    {
      image: WeatherApp,
      title: 'Weather App',
      color: 'card-color-3',
      codeLink: 'https://github.com/satyampund/online-weather-app',
      demoLink: 'https://online-weather-app-icp.netlify.app/',
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
            <a href={ele.codeLink}>
              <button className="css-button-shadow-border-sliding--black me-3">Code</button>
            </a>
            <a href={ele.demoLink}>
              <button className="css-button-shadow-border-sliding--black ms-3 ">Demo</button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{projectMap}</>;
};

export default ProjectCardLogic;
