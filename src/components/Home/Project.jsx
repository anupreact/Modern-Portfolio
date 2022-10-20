import React from 'react';
import { cardAnimation } from '../Animations';
import ProjectCard from './ProjectCard';
import { motion } from "framer-motion";
import { useScroll } from '../useScroll';

import cake from "../../images/project.png"
import task from "../../images/task002.jpg"



const Project = (props) => {
  const [element, controls] = useScroll();


  const ProjectData = [
    {
      image :cake,
      title: "Ecommerce",
      description:"HTML , CSS & Javascript, Google Firabase.",
      url:"https://cakes-fantasy.web.app"
    }, 
    {
      image :task,
      title: "Task Manager",
      description:"React, react-router-dom, json-server, React Hooks, React-Toastify, Heroku.",
      url:"https://react-task-managerr.herokuapp.com/"
    },
     {
      image :cake,
      title: "Ecomerce",
      description:"React, react-router-dom, Redux, antDesign, Email JS, json-server, React Hooks, React-Toastify, Framer-Motion, Heroku.",
      url:"https://cakes-fantasy.web.app"
    },
  ]

  return (
    <section className="projects"  ref={element}>
      {props.heading && <motion.h1 variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .3 }} className="heading">PROJECTS</motion.h1>}
      <div className="cards-container">

        {
          ProjectData.map((data,index)=>{
            return <ProjectCard key={index} data={data}/>

          })
        }

        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  );
};

export default Project;
