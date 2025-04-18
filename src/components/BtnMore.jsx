import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import IonIcon from "@reacticons/ionicons"; // Importing IonIcon for icon usage

import { motion } from "framer-motion"; // Importing motion
import AOS from "aos";
import "aos/dist/aos.css"; 

//  for animations
import "../styles/Home.css";
import "../styles/Button.css";

function BtnMore () {


    const handleClick = () => {
        window.scrollTo(0, 0);
      };

    useEffect(() => {
        // Trigger animation earlier (adjust as needed)
        // Animation duration in ms
            AOS.init({
                offset: 200,  
                duration: 2000, 
                easing: "ease-in-out",
            });
        }, []);

    return ( 
        <div>
            <div className="HomeBtnC">
                <div className="HomeBtn Homebtn-1 HomeHover-border-1">
                    <Link
                        className="BtnLink" 
                        to="/projects"  
                        onClick={handleClick}>
                        More Projects
                    </Link>
                </div>
                <motion.div
                    animate={{
                    y: [0, -10, 0, 10], 
                    }}
                    transition={{
                    duration: 1, 
                    repeat: Infinity, 
                    repeatType: 'loop',
                    ease: 'easeInOut', 
                    }}
                    >
                    <IonIcon className="button-arrow" name="chevron-down-outline" />
                </motion.div>
            </div>                 
        </div>
    )
} 

export default BtnMore;