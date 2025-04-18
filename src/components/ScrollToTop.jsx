import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import { IoIosArrowDropupCircle } from "react-icons/io";

// Import the CSS file
import "../styles/ScrollToTop.css"; 

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
            
            setIsVisible(scrolledToBottom);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scroll-to-top">


        <motion.button
         onClick={scrollToTop}
          className="scroll-motion"
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        >
           <IoIosArrowDropupCircle className="scroll-icon" />
         </motion.button>
         {/* <IoIosArrowDropupCircle className="scroll-icon" /> */}
        </div>
    );
};

export default ScrollToTop;

