import { Progress } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { useScroll, useScroll2 } from "../useScroll";
import { cardAnimation } from "../Animations";

const AboutCard = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll2();

  const eduData = [
    {
      year: "High School - 2011",
      name: "Science and Technology.",
      location: "Maharashtra Board.",
      icon: "fa fa-university",
    },
    {
      year: "Graduation - 2017",
      name: " Electronics Engineering. ",
      location: "Nagpur University.",
      icon: "fa fa-graduation-cap",
    },
    {
      year: "2018 - 2021",
      name: " Customer Care Representative.",
      location: " Squadrun Solutions Pvt. Ltd.",
      icon: "fa fa-briefcase",
    },
    {
      year: "React JS Training - 2021",
      name: "Achievers IT Institute.",
      location: "Bangalore, Karnataka.",
      icon: "fa fa-graduation-cap",
    },
    {
      year: "React JS Intern - 2021",
      name: "The Space Element.",
      location: "Nagpur, Maharashtra.",
      icon: "fa fa-briefcase",
    },
    {
      year: "Junior React JS Developer -2022",
      name: " WPWeb Infotech Pvt. Ltd. ",
      location: "Ahmedabad, Gujarat.",
      icon: "fa fa-briefcase",
    },
  ];

  const skillData = [
    {
      name: "HTML",
      amount: "80",
    },
    {
      name: "CSS",
      amount: "75",
    },
    {
      name: "JAVASCRIPT",
      amount: "70",
    },
    {
      name: "REACT",
      amount: "75",
    },
    {
      name: "REDUX",
      amount: "70",
    },
    {
      name: "REACT-BOOTSTRAP",
      amount: "80",
    },
  ];

  return (
    <div className="new-container"  >
      <section className="about-card-wrapper" ref={element}>
        {/* L E F T - - C A R D */}
        <motion.div
          className="left"
          
          variants={cardAnimation}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="heading">Eduction & Experience</div>
          <div className="content">
            {eduData.reverse().map((item, index) => {
              const { year, name, location, icon } = item;
              return (
                <div className="row" key={index}>
                  <div className="icon">
                    <i className={icon} aria-hidden="true"></i>
                  </div>
                  <div className="details">
                    {" "}
                    <span className="year">{year}</span>
                    <br />
                    <span className="name">{name}</span>
                    <br />
                    <span className="location">{location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        {/* L E F T - - C A R D */}

        {/* R I G H T - - C A R D */}
        <motion.div
          className="right"
          variants={cardAnimation}
          ref={element}

          // variants={fromUp}
          initial={{ opacity: 0 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="heading">Technical Skills</div>

          {skillData.map((item, index) => {
            const { name, amount } = item;
            return (
              <div className="content" key={index}>
                <div className="title">
                  <span className="name">{name}</span>
                  <span className="percent">{amount}%</span>
                </div>
                <Progress
                  percent={amount}
                  showInfo={false}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                />
              </div>
            );
          })}
        </motion.div>
        {/* R I G H T - - C A R D */}
      </section>

      <motion.div
      ref={element2}
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls2}
        transition={{ duration: .6 }}
        className="extra"
      >
        <div className="heading">Extra Curriculum & Hobbies</div>
        <div className="row">
          <span> A Good Cricket Player (Top order Batsmen) - </span>

          <span>
            <a href="https://cricheroes.in/player-profile/15048802/Anup-Manwatkar">
              View Career Stats.
            </a>{" "}
          </span>
        </div>
        <div className="row">
          <span>An Average Guitarist - </span>
          <span>
            <a href="https://www.youtube.com/channel/UCwU5KzDcMlDsl89TDoEikkQ">
              Checkout my youtube channel.
            </a>{" "}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutCard;
