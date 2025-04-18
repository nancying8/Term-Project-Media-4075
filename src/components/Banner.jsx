import React from "react";
import { motion } from "framer-motion";
import "../styles/Banner.css";
import "../styles/Button.css";

function Banner () {
  return (
    <div className="banner-container">
      <h1 className="banner-heading">
        I am 
        <span className="banner-bold">
        Nancy Wu

        </span>
        {" "}
        <span className="banner-highlight">
          Graphic Designer
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="b-svg-highlight"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 3,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#6599ae"
              strokeWidth="3"
            />
          </svg>
        </span >{" "}
        <span className="banner-subHighlight">
          Logos, Branding, and Digital Visuals
        </span>
          
      </h1>
    </div>
  );
};

export default Banner;
