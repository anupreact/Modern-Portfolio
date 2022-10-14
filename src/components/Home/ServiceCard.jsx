import React from "react";
import { cardAnimation, fromUp, reveal } from "../Animations";
import { useScroll } from "../useScroll";
import { motion } from "framer-motion";

const ServiceCard = (props) => {
  const [element, controls] = useScroll();

  const { logo, title, description, icon } = props;
  return (
    <motion.div
      ref={element}
      variants={cardAnimation}
      // variants={fromUp}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
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
