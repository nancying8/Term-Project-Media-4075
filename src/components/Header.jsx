// Import React to use JSX
import React, { useState } from "react";

// <Link> navigate to other page 
// Import useLocation to indicate the actual page
import { Link, useLocation } from "react-router-dom";

// Import dependecies
import { motion } from "framer-motion";

import Logo from "/assets/My/Logo.png";

import "../styles/Header.css";
import "../styles/Button.css";

function Header (){

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current route

    const handleClick = () => {
      window.scrollTo(0, 0);
      setIsOpen(false); // Close the mobile menu after clicking
    };    

    const getLinkClass = (path) => {
      return location.pathname === path ? "active-link" : "";
    };

    return (
      <header className="nav-bar">
        <div className="nav-header">
        <Link onClick={handleClick} to="/"> <img src={Logo} alt="logo" className="logo" /> </Link>
  
          {/* Hamburger Menu Button (Visible on Mobile) */}
          <motion.button
            className={`hamburger ${isOpen ? 'hamburger-open' : 'hamburger-closed'}`}
            onClick={() => setIsOpen((prev) => !prev)}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.1 }}
          >
            {isOpen ? "X" : "☰"}
          </motion.button>
        </div>
  
        {/* Desktop Menu (Visible on Larger Screens) */}
        <nav className="desktop-menu">
        <ul>
          <li>
            <Link to="/" onClick={handleClick} className={`${getLinkClass("/")} btn btn-1 hover-border-1`}>
            <span className="btn-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleClick} className={`${getLinkClass("/projects")} btn btn-1 hover-border-1`}>
            <span className="btn-text">Projects</span>
            </Link>
          </li>
          <li> 
            <Link to="/about" onClick={handleClick} className={`${getLinkClass("/about")} btn btn-1 hover-border-1`}>
            <span className="btn-text">About</span>
            </Link>
          </li>
          <li> 
            <a to="/about" onClick={handleClick} className="btn btn-1 hover-border-1" href="/assets/My/NancyWu-Resume.pdf" target="_blank">Resume</a>
          </li>
        </ul>
        </nav>
  
        {/* Mobile Menu (Animated with Framer Motion) */}
        {isOpen && (
          <motion.nav
            className="hamburger-menu"
            // initial={{ x: "100%" }}
            // animate={{ x: 0 }}
            // exit={{ x: "100%" }}
            // transition={{ duration: 0.5 }}

            // initial={{ scale: 0 }}
            // animate={{ scale: isOpen ? 1 : 0 }}
            // transition={{ duration: 1, type: "spring" }}

            // initial={{ height: 0 }}
            // animate={{ height: isOpen ? "400px" : "100px" }}
            // transition={{ duration: 0.5 }}

            initial={{ x: "-100%" }}
            animate={{ x: isOpen ? "0%" : "-100%" }}
            transition={{ duration: 0.5 }}


          >
            <ul> 
            <li>
              <Link to="/" onClick={handleClick} className={`${getLinkClass("/")} btn btn-2 hover-border-1`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleClick} className={`${getLinkClass("/projects")} btn btn-2 hover-border-1`}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick} className={`${getLinkClass("/about")} btn btn-2 hover-border-1`}>
                About
              </Link>
            </li>
            <li> 
            <a to="/about" onClick={handleClick} className="btn btn-2 hover-border-1" href="/assets/My/NancyWu-Resume.pdf" target="_blank">Resume</a>
          </li>
          </ul>
          </motion.nav>
        )}
      </header>  );
};


export default Header;
