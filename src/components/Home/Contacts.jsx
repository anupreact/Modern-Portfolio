import React from "react";
import { motion } from "framer-motion";

import { useScroll } from "../useScroll";
import {
  cardAnimation,
  fromDown,
  fromUp,
  navbarAnimation,
  reveal,
  textAnimation,
  topContainerAnimation,
} from "../Animations";

const Contacts = (props) => {
  const [element, controls] = useScroll();

  // const icons = [
  //   'fa fa-linkedin',
  //   'fa fa-envelope',
  //   'fa fa-github',
  //   'fa fa-telegram',
  // ];

  const icons = [
    {
      icon: "fa fa-linkedin",
      link: "https://www.linkedin.com/in/iamanup17",
    },
    {
      icon: "fa fa-google",
      link: "https://www.gmail.com/anupmanwatkar",
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

  return (
    <motion.section className="contact" ref={element}>
      {props.heading && (
        <motion.h1
        variants={cardAnimation}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .3 }}
          className="heading"
        >
          CONTACT
        </motion.h1>
      )}
      {props.head && (
        <div className="head">
          <motion.span  initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: .4 }}>Contact Me</motion.span>

          <motion.span initial={{ opacity: 0, scale: 1.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0, duration: .4 }}>
            I am available on almost every social media. You can message me,{" "}
            <br />
            I will reply within 24 hours. I can help you with Single Page
            Applications using React JS, <br />
            Javascript , & various Technial aspects of Frontend Web development.
          </motion.span>
        </div>
      )}

      <motion.div
        variants={cardAnimation}
        // variants={fromUp}
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .02 }}
        className="cards-container"
      >
        <div className="card">
          <motion.h2
            variants={cardAnimation}
            // variants={fromUp}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="left-card-header"
          >
            Reach Out to me
          </motion.h2>
          <motion.div
            variants={cardAnimation}
            // variants={fromUp}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="edu"
          >
            <div className="icon">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
            </div>
            <div className="content">
              <span>At Post Mohagaon (Zilpi) , Ta. Hingna</span>
              <div>Maharashtra Nagpur, 441110</div>
            </div>
          </motion.div>
          <motion.div
            variants={cardAnimation}
            // variants={fromUp}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="edu"
          >
            <div className="icon">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="content">
              <span>9834075615 / 8600390454</span>
            </div>
          </motion.div>
          <motion.div
            variants={cardAnimation}
            // variants={fromUp}
            initial={{ opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            className="edu"
          >
            <div className="icon">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="content">
              <span>anupmanwatkar17@gmail.com</span>
            </div>
          </motion.div>

          <div className="icons-row" ref={element}>
            <motion.div
              variants={fromDown}
              // variants={fromUp}
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="media-btns"
            >
              {icons.map((iconL, index) => {
                return (
                  <div className="icons" key={index}>
                    <a target="_blank" href={iconL.link}>
                      <i className={iconL.icon} aria-hidden="true"></i>
                    </a>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        <motion.div
        ref={element}
          variants={fromUp}
          // variants={fromUp}
          initial={{ opacity: 1 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="card right-card"
        >
          <div className="header">
            <motion.h2
              variants={cardAnimation}
              // variants={fromUp}
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="right-card-header"
              style={{ color: "white" }}
            >
              Send Me An Enquiry
            </motion.h2>
          </div>
          <div className="inputs">
            <input type="text" placeholder="Your Name" />
          </div>{" "}
          <div className="inputs">
            <input type="text" placeholder="Your Email" />
          </div>{" "}
          <div className="inputs">
            <textarea row="6" col="6" type="text" placeholder="Your Message" />
          </div>{" "}
          <div className="inputs">
            <button>SEND MESSAGE</button>
          </div>
        </motion.div>{" "}
      </motion.div>
    </motion.section>
  );
};

export default Contacts;
