import React from "react";
import hero_image1 from "../../images/hero1.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import react from "../../images/react.png";
import sass from "../../images/sass.png";
import mui from "../../images/mui.png";

const AboutTech = () => {
  // const techData = [
  //   ' Expertise in React JS framework to develop Single Page Applications.',
  //   'Experienced in React JS and working with React Flux & Redux architecture.',
  //   'Experience in using React JS components, Forms, Events, Keys, Router, & Redux',
  //   "Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX.",
  //   'Expertise in using IDE tools like VS-code and Sublime Text.',
  //   'Ability to work effectively while working as a team member as well as individually.',
  //   'Excellent communication and Inter-Personal Skills, well organized, goal oriented.',
  // ];

  // Developing new user-facing features using React.js
  // Building reusable components and front-end libraries for future use
  // Translating designs and wireframes into high quality code
  // Optimizing components for maximum performance across a vast array of web-capable devices and browsers
  // Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model


  // Thorough understanding of React.js and its core principles
  // Ability to understand business requirements and translate them into technical requirements
  // Familiarity with code versioning tools {{such as Github & bitBucket}}



  const techData = [
    "⚡ Creating the flow of application functionalities to optimize user experience.",
    "⚡ Building resposive website front end using React-Redux.",
    "⚡  Expertise in React JS framework to develop Single Page Applications.",
    "⚡ Experienced in React JS and working with React Flux & Redux architecture.",
    "⚡ Experience in using React JS components, Forms, Events, Keys, Router, & Redux",
    "⚡ Good Experience in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX.",
    "⚡ Expertise in using IDE tools like VS-code and Sublime Text.",
  ];

  return (
    <div className="react-info">
      <div className="head">
        <span>WHAT I DO ? </span>
        <br /> <br />
      </div>

     
      <div className="what">
        <div className="left-sec">
          <div className="tech-icons">
            <h2 style={{color:"white"}}>Frontend Web-Development</h2>
            <div className="icons">
              <span>
                {" "}
                <img src={html} alt="" />
              </span>{" "}
              <span>
                {" "}
                <img src={css} alt="" />
              </span>{" "}
              <span>
                {" "}
                <img src={js} alt="" />
              </span>{" "}
              <span>
                {" "}
                <img src={react} alt="" />
              </span>{" "}
              <span>
                {" "}
                <img src={mui} alt="" />
              </span>{" "}
              <span>
                {" "}
                <img src={sass} alt="" />
              </span>
            </div>
          </div>
          <ul>
            {techData.map((list, index) => {
              return <li key={index}>{list}</li>;
            })}
          </ul>
        </div>

        <div className="imageBox">
          <img src={hero_image1} alt=" hero " />
        </div>
      </div>
    </div>
  );
};

export default AboutTech;
