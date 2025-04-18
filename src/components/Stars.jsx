import React from "react";
import "../styles/Stars.css";
import {motion} from "framer-motion";

function Stars () {
      
    return (

        <div> 
            <div className="stars-container">
            <motion.div className="stars " style={{ '--mainColour': '#124559' }} />
            </div>
        </div>
    
    );

};


export default Stars;