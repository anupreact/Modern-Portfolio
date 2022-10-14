import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <motion.div
            className="nav-logo-container"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 , duration:1 }}
          >
            <NavLink to="/" className="nav-logo">
              <span style={{ fontFamily: "sans-serif" }}> &#60; </span>
              Anup Manwatkar
              <span style={{ fontFamily: "sans-serif" }}> /&#62; </span>
              {/* <i className="fas fa-code"></i> */}
            </NavLink>
          </motion.div>

          <motion.ul
            initial={{ x: 800 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 , duration:1 }}
            className={click ? "nav-menu active" : "nav-menu"}
          >
            <li className="nav-item">
              <NavLink
                to="/home"
                activeclassname="active"
                className="home-page nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                activeclassname=""
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeclassname=""
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                
                to="/contact"
                activeclassname=""
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </motion.ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
