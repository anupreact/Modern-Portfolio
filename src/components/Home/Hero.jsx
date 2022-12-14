import React from "react";
import hero_image from "../../images/hero.png";
import hero_image1 from "../../images/hero1.png";
// import hero_image2 from '../../images/hero2.svg';
import banner_3d from "../../images/banner3d.png";
import AboutTech from "./AboutTech";
import { Typewriter } from "react-simple-typewriter";
import { motion, useScroll } from "framer-motion";
import { Button } from "antd";
import file from "../../images/Resume_New_Updated.pdf";
import Resume from "../../images/Resume-31October.pdf";


const name = "Anup Manwatkar,";
const title = "Frontend React-Js Developer.";

// const desc =
//   'Inventive Frontend developer with 1+ year of Experience in HTML5, CSS3 & Mordern Javascript along with one of the most powerfull Javascript library, "React Js" & some of its UI-libraries.';
const desc =
  "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.";

const icons = [
  {
    icon: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/iamanup17",
  },
  {
    icon: "fa fa-skype",
    link: "https://join.skype.com/invite/x6hEOBuO7Lpm",
  },
  {
    icon: "fa fa-facebook",
    link: "https://www.facebook.com/anup.manwatkar",
  },
  {
    icon: "fa fa-telegram",
    link: "https://t.me/anup_manwatkar",
  },
  {
    icon: "fa fa-github",
    link: "https://github.com/iamanup17?tab=repositories",
  },
];

// download File
const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch("../../images/Anup-ReactJS-4y-4.pdf").then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "sample.pdf";
      alink.click();
    });
  });
};

const Hero = () => {
  // const [element, controls] = useScroll();

  return (
    <section className="hero">
      <motion.div
        className="left-col"
        initial={{ opacity: 0, scale: 1.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
      >
        <div className="content-row1">
          <div className="name">Hello My Name is </div>
          <div className=" name-2">{name}</div>
          {/* <span className="title">ans I am a Web Developer{title}</span> */}

          <div className="title">
            And I am a
            <span style={{ color: "#f5b921", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}{" "}
              <Typewriter
                words={["Frontend Web Developer", "React JS Developer"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </div>
        </div>
        <div className="content-row2">
          <span className="subtitle">{desc}</span>
        </div>

        <div className="content-row3">
          <div className="media-btns">
            {icons.map((iconL, index) => {
              return (
                <div className="icons" key={index}>
                  <a target="_blank" href={iconL.link}>
                    <i className={iconL.icon} aria-hidden="true"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="content-row4">
          <div className="download-btn">
            <a href={Resume} download>
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="right-col"
        initial={{ opacity: 0, scale: 1.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <img src={hero_image} alt=" hero " /> */}
        <img
          src="https://wpwebinfotech.com/wp-content/uploads/2022/03/Web-development.svg"
          alt=" hero "
        />
        {/* <img src={banner_3d} alt=" hero " /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
