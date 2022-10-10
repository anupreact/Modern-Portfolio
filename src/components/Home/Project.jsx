import React from 'react';
import ProjectCard from './ProjectCard';

const Project = (props) => {
  return (
    <section className="projects">
      {props.heading && <h1 className="heading">PROJECTS</h1>}
      <div className="cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
