import React from "react";
import "./MobileNavbar.scss";
import Home from "../../images/Home.png";
import Projects from "../../images/Projects.png";
import About from "../../images/About.png";
import Contact from "../../images/Contact.png";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="mobile-nav">
      <div className="wrapper">
        <div className="links">
          <NavLink to="/home" activeclassname="active">
            <div className="icon">
              <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div className="name">Home</div>
          </NavLink>
        </div>{" "}
        <div className="links">
          <NavLink to="/projects" activeclassname="">
            <div className="icon">
              <i className="fa fa-qrcode" aria-hidden="true"></i>
            </div>
            <div className="name">Projects</div>
          </NavLink>
        </div>{" "}
        <div className="links">
          <NavLink to="/about" activeclassname="">
            <div className="icon">
              <i className="fa fa-address-card-o" aria-hidden="true"></i>
            </div>
            <div className="name">About Me</div>
          </NavLink>
        </div>{" "}
        <div className="links">
          <NavLink to="/contact" activeclassname="">
            <div className="icon">
              <i className="fa fa-phone-square" aria-hidden="true"></i>
            </div>
            <div className="name">Contact</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
