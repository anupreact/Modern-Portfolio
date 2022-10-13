import React from "react";
import banner from "../../images/banner.jpg";
import banner2 from "../../images/Banner2.png";
import { motion } from "framer-motion";
import { cardAnimation } from "../Animations";
import { useScroll } from "../useScroll";

const ProjectCard = () => {
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
        <img src={banner2} alt="" />
      </div>
      <div className="title">
        <span> Type : Ecommerce</span>
      </div>
      <div className="description">
        Stack Used : React, Redux, Scss, Antd, React-router-dom, Json-server
      </div>
      <div className="visit">
        <a
          style={{ color: "white" }}
          href="https://cakes-fantasy.web.app/"
          target="_blank"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
