import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <div className="project-section" id="projects">
        <h2 className="project-section-heading">Projects</h2>
        <div className="description-container">
          <h4 className="description">
            Here you will find some of my personal projects that I created with each project
            containing its project stack
          </h4>
        </div>
        <ProjectCard />
      </div>
    </>
  );
};

export default Projects;
