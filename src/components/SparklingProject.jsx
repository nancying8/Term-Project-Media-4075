import React from "react";
import { motion } from "framer-motion";
import StarsProject from "./StarsProject";

function SparklingProject () {
  // Generate random star data
  const generateStars = (count) => {
    return Array.from({ length: count }, () => ({
      id: Math.random().toString(10),
      // Random size between 0.5em and 2em
      size: Math.random() * 1.5, 
      // Random top position (percent)
      top: Math.random() * 60 , 
      // Random left position (percent)
      left: Math.random() * 100, 
      color: "#257F7C", // Single color
    }));
  };

  const stars = generateStars(8); // Generate 50 stars for better distribution

  // Framer Motion animation variants
  const starVariants = {
    sparkle: {
      scale: [0.7, 1, 0.7],
      opacity: [1, 0.8, 1],
      rotate: [10, 20, -20, 10],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  return (
    <div>
      <div
        className="stars-container"
        
        >
        {stars.map((star) => (
          <motion.div
          key={star.id}
          className="stars"
          style={{
            width: `${star.size}em`, // Dynamic size
            height: `${star.size}em`, // Dynamic size
            position: "absolute",
            top: `${star.top}%`,
            left: `${star.left}%`, // Use left for better positioning
          }}
          variants={starVariants}
          animate="sparkle"
          whileHover={{
            scale: 3, // Scale to 2x on hover
            transition: { duration: 0.3 }, // Smooth hover effect
          }}
          />
        ))}
      </div>
    </div>
  );
};

export default SparklingProject;
