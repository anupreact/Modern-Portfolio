import { Progress } from "antd";
import React from "react";
import { motion } from "framer-motion";

const AboutCard = () => {
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
    <section className="about-card-wrapper">
      <div className="left">
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
      </div>

      <div className="right">
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
      </div>
    </section>
  );
};

export default AboutCard;
