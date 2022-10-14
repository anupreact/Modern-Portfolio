import React from 'react';
import { cardAnimation } from '../Animations';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
import { useScroll } from '../useScroll';

const Project = (props) => {
  const [element, controls] = useScroll();

  return (
    <section className="projects"  ref={element}>
      {props.heading && <motion.h1 variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .3 }} className="heading">PROJECTS</motion.h1>}
      <div className="cards-container">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Project;
