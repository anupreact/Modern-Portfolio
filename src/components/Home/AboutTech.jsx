import React from "react";
import hero_image1 from "../../images/hero1.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import sass from "../../images/sass.png";
import mui from "../../images/mui.png";
import { useScroll } from "../useScroll";
import { MotionConfig } from "framer-motion";
import { motion } from "framer-motion";
import {
  cardAnimation,
  reveal,
  revealRTL,
  textAnimation,
  topContainerAnimation,
  videoAnimation,
} from "../Animations";

const AboutTech = () => {
  const [element, controls] = useScroll();
  const images = [
    `${html}`,
    `${css}`,
    `${js}`,
    `${react}`,
    `${sass}`,
    `${mui}`,
  ];

  const techData = [
    "⚡ Building reusable components and front-end libraries for future use.",
    "⚡ Translating designs and wireframes into high quality code.",
    "⚡ Design and develop new custom components to meet project requirements.",
    "⚡Optimizing components for maximum performance across a vast array of web-capable devices and browsers.",
    "⚡Strong proficiency in JavaScript, including DOM manipulation, JavaScript object model & CSS preprocessors like SASS.",

    "⚡ Ability to understand business requirements and translate them into technical requirements.",

    "⚡Hands on Experience with React class and functional components, Forms, Events, Keys, Router, & Redux library.",
    "⚡ Familiarity with code versioning tools {such as Github & bitBucket}.",
    "⚡Familier with various React UI libraries like Material UI, antDesign, & React-bootstrap etc.",
  ];

  return (
    <div className="react-info" ref={element}>
      <motion.div
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .3 }}
        className="head"
      >
        <span>WHAT I DO ? </span>
        <br /> <br />
      </motion.div>

      <div className="what">
        <motion.div
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
          className="left-sec"
        >
          <div className="tech-icons">
            <h2 style={{ color: "white" }}>Frontend Web-Development</h2>
            <div className="icons">
              {images.map((image, index) => {
                return (
                  <span key={index}>
                    <img src={image} alt="" />
                  </span>
                );
              })}
            </div>
          </div>
          <ul>
            {techData.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
        </motion.div>

        <motion.div
          variants={cardAnimation}
          animate={controls}
          transition={{ duration: 1 }}
          className="imageBox"
        >
          <img src={hero_image1} alt=" hero " />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutTech;
