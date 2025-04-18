import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom"; 
import ProjectInfo from "../data/ProjectInfo";

 // Import AOS styles
import AOS from "aos";
import "aos/dist/aos.css";

// Import sytle
import "../styles/Projects.css"

function ProjectCard() {
    const handleClick = () => {
        window.scrollTo(0, 350);
    };

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1350,
            easing: "ease-in-out",
        });
    }, []);

    const [cardsData, setCardsData] = useState(ProjectInfo);

    return (
        <div className="PcardD-container">
            {cardsData.map((card, index) => (
                <Link key={card.id} to={card.links} onClick={handleClick}>
                    <div
                        className={`Pcard-intro border border-1 hover-border-1  ${index % 2 === 0 ? "Pcard-left" : "Pcard-right"}`}
                        data-aos={index % 2 === 0 ? "fade-down-left" : "fade-down-right"}
                    >
                        <div className="Pcard">
                            <img className="Pcard-Img" 
                            src={card.image} 
                            alt={card.title}
                            onContextMenu={(e) => e.preventDefault()} 
                            onDragStart={(e) => e.preventDefault()}  />
                            <div className="Pcard-2">
                                <h2>{card.title}</h2>
                                <h3>{card.subtitle}</h3>
                                <h4>{card.description}</h4>
                                <h4 className="Pcard-skill">{card.skills}</h4>
                                <div className="Pcard-read">
                                <h4 >Read More </h4>
                                <span className="Pcard-RIcon"> {card.arrow} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}


export default ProjectCard