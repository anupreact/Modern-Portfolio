import React from "react";
import AboutTech from "./AboutTech";
import AboutCard from "./AboutCard";
import { useScroll } from "../useScroll";
import { cardAnimation } from "../Animations";
import { motion } from "framer-motion";

const AboutContent = (props) => {
  const [element, controls] = useScroll();

  return (
    <section className="about" ref={element}>
      {props.heading && (
        <motion.h1
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.3 }}
          className="heading"
          style={{ textAlign: "center", letterSpacing: "5px" }}
        >
          ABOUT
        </motion.h1>
      )}
      {props.intro && (
        <motion.div
          className="quote"
          initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: .3 }}
        >
          <span> “ </span>
          Hello, I am Anup Manwatkar <br /> graduated as an Electronics Engineer
          from Nagpur University in 2017. I have started my IT Journey in Feb
          ‘2021. I have completed 3-months React Js Training from Banglore,
          After successfull completion of the course, I joined a company as a
          React Js Intern at Nagpur. And Currently from April 2022 I’am working{" "}
          <br /> as a Junior React Js Developer in WPWeb infotech Pvt. Ltd
          Ahmedabad. <span>”</span>
        </motion.div>
      )}

      {props.techIntro && <AboutTech />}
      <AboutCard />
    </section>
  );
};

export default AboutContent;
