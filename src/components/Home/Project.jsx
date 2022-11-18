import React from "react";
import { cardAnimation } from "../Animations";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";

import cake from "../../images/project.png";
import task from "../../images/task002.jpg";
import ecomshop from "../../images/Ecom-shop.png";
import project04 from "../../images/p04.png";

const Project = (props) => {
  const [element, controls] = useScroll();

  const ProjectData = [
    {
      image: cake,
      title: "E-commerce",
      description: "HTML , CSS & Javascript, Google Firabase.",
      url: "https://cakes-fantasy.web.app",
    },
    {
      image: task,
      title: "Task Manager",
      description:
        "React, react-router-dom, json-server, React Hooks, React-Toastify, Heroku.",
      url: "https://react-task-managerr.herokuapp.com/",
    },
    {
      image: ecomshop,
      title: "E-commerce",
      description:
        "React, react-router-dom, Redux, antDesign, json-server, React Hooks, React-Toastify, react-slick, Framer-Motion.",
      url: "https://github.com/anupreact/Ecommerce-Shop",
    },
    {
      image: project04,
      title: "E-commerce (in progress).",
      description: "React, react-router-dom, json-server, React Hooks, react-slick, netlify hosting service .",
      url: "https://anandelectricals.netlify.app/",
    },
  ];

  return (
    <section className="projects" ref={element}>
      {props.heading && (
        <motion.h1
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="heading"
        >
          PROJECTS
        </motion.h1>
      )}
      <div className="cards-container">
        {ProjectData.map((data, index) => {
          return <ProjectCard key={index} data={data} />;
        })}

        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </section>
  );
};

export default Project;
