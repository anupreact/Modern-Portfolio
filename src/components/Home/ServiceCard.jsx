import React from "react";
import { cardAnimation, reveal } from "../Animations";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const ServiceCard = (props) => {
  const { logo, title, description, icon, controls, element } = props;
  return (
    <motion.div
      variants={cardAnimation}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.7 }}
      className="card"
    >
      <div className="logo">
        {logo}
        {/* <i className={logo} aria-hidden="true"></i> */}
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      {/* <div className="know-more">Know More</div> */}
    </motion.div>
  );
};

export default ServiceCard;
