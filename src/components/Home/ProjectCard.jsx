import React from "react";
import banner from "../../images/banner.jpg";
import banner2 from "../../images/Banner2.png";
import project from "../../images/project.png";
import { motion } from "framer-motion";
import { cardAnimation } from "../Animations";
import { useScroll } from "../useScroll";

const ProjectCard = (props) => {
  const [element, controls] = useScroll();

 
  return (
    <motion.div
      ref={element}
      variants={cardAnimation}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="card"
    >
      <div className="image-box">
        {/* <img src={banner} alt="" /> */}
        <img src={props.data.image} alt="" />
      </div>
      <div className="title">
        <span> Type :</span> 
        <span> {props.data.title}</span>
      </div>
      <div className="description">
        <span> Stack Used :</span>
        <span> {props.data.description}</span>
      </div>
      <div className="visit">
        <a
          style={{ color: "white" }}
          href={props.data.url}
          target="_blank"
          rel="noreferrer"
        >
          <button>
            View  <span style={{ fontSize: "1.5rem" }}> &#8594;</span>
          </button>
          {/* View Project */}
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
