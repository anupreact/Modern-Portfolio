import React from 'react';
import Hero from '../components/Home/Hero';
import Project from '../components/Home/Project';
import Service from '../components/Home/Service';

const Projects = () => {
  return (
    <main className="projects_page_container">
      {/* <Hero/> */}
      <Project heading={false} />
      <Service />
    </main>
  );
};

export default Projects;
