import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo-container">
            <NavLink exact to="/" className="nav-logo">
              Anup { " "} Manwatkar.
              <i className="fas fa-code"></i>
            </NavLink>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                to="/home"
                activeClassName="active"
                className="home-page nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                activeClassName=""
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                activeClassName=""
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName=""
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
