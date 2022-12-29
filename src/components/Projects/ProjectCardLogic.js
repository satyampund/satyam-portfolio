import React from 'react';
import RoadToJS from './../../assests/project-1.png';
import DryFruitsDarbar from './../../assests/project-2.png';
import WeatherApp from './../../assests/project-3.png';

const ProjectCardLogic = () => {
  const projectData = [
    {
      image: RoadToJS,
      title: 'Road To JS',
      description:
        'Road To JS is a platform that contains the collection of JavaScript begineers friendly projects in one place',
    },

    {
      image: DryFruitsDarbar,
      title: 'Dry Fruits Darbar',
      description: 'Road To JS is a platform that contains the collection of JavaScript ',
    },
    {
      image: WeatherApp,
      title: 'Weather App',
      description: 'Road To JS is a platform that contains the collection of JavaScript ',
    },
    {
      image: WeatherApp,
      title: 'Weather App',
      description: 'Road To JS is a platform that contains the collection of JavaScript ',
    },
    {
      image: WeatherApp,
      title: 'Weather App',
      description: 'Road To JS is a platform that contains the collection of JavaScript ',
    },
    {
      image: WeatherApp,
      title: 'Weather App',
      description: 'Road To JS is a platform that contains the collection of JavaScript ',
    },
  ];

  const projectMap = projectData.map((ele) => {
    return (
      <div className="col-md-4">
        <div class="card">
          <img className="card-img" src={ele.image} alt="Roadtojs"></img>
          <div class="card-body">
            <h5 class="card-title">{ele.title}</h5>
            <p class="card-text">{ele.description}</p>
            <a href="#ss" class="btn btn-dark">
              Case Study
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{projectMap}</>;
};

export default ProjectCardLogic;
