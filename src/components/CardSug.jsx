import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css"; 

function CardSug ({ title, subtitle, image, links, arrow }) {
  
  const handleClick = () => {
    window.scrollTo(0, 280);
  };

  return (
    <div>
        <Link onClick={handleClick} className="card-content" to={links}>
            <div className="card-intro">
                <img src={image} alt={title} />
                <div className="card-info">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <div className="card-read">                  
                  <h4 >Read More </h4>
                  <span className="card-RIcon"> {arrow} </span>
                </div>
                </div>
            </div>
        </Link>
    </div>
  );
}

export default CardSug;
