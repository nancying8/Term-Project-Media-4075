// Importing React and useState, useEffect
// useState is used to manage state in functional components
// useEffect is used to perform side effects in functional components
import React, {useState, useEffect} from "react";

// Importing link from react-router-dom
// Link is used to create links to different routes in the applcation
import { Link } from "react-router-dom";

//Importing dependencies
// slides effect
import AOS from "aos";
import "aos/dist/aos.css"; 

//  Importing styles 
import "../styles/Home.css";
import "../styles/Button.css";

// Importing data
import HomeInfo from "../data/HomeCard";

// Importing components
import BtnMore from "./BtnMore";

// Import icon
import { MdNavigateNext } from "react-icons/md";

function HomeCard () {

    const [cardsData, setCardsData] = useState(HomeInfo);

    const handleClick = () => {
        window.scrollTo(0, 300);
      };

    // Trigger animation earlier (adjust as needed)
    // Animation duration in ms
    // Animation easing
    // Animation initialization
    useEffect(() => {
            AOS.init({
                offset: 200,  
                duration: 2000,
                easing: "ease-in-out",
            });
        }, []);

    return ( 
        <div>
           <div className="subtitle" data-aos="fade-down">
                My Projects
            </div>
            <div className="PcardD-container">
                    {cardsData.map((card, index) => (
                        <Link key={card.id} to={card.links} onClick={handleClick}>
                            <div
                                className={`Pcard-intro border border-1 hover-border-1  ${index % 2 === 0 ? "Pcard-left" : "Pcard-right"}`}
                                data-aos={index % 2 === 0 ? "fade-down-left" : "fade-down-right"}>
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
                                            <span className="Pcard-RIcon"> < MdNavigateNext /> </span>
                                        </div>                                                   
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            <BtnMore />            
        </div>
    )
} 

export default HomeCard;