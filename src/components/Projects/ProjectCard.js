import React from 'react';
import './ProjectCard.css';
import ProjectCardLogic from './ProjectCardLogic';

const ProjectCard = () => {
  return (
    <>
      <div class="container-fluid text-center">
        <div class="row card-row">
          <ProjectCardLogic />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
