// Import React to use JSX
import React, {useEffect} from "react";

// Components
import ProjectCard from "../components/ProjectCard";
import Arrow from "../components/Arrow"
import SparklingProject from "../components/SparklingProject";

// Styles 
import "../styles/Projects.css";

// Import dependecies
// Import AOS styles to add animation
import AOS from "aos";
import "aos/dist/aos.css"; 

function Projects () {

    // Initialize AOS
    // Offset >trigger animation earlier (adjust as needed)
    // Duration >animation duration in ms
    useEffect(() => {
        AOS.init({
            offset: 200,  
            duration: 2000, 
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
        <SparklingProject />
        <div className="project-subtitle" data-aos="fade-down">
                My Projects 
            </div>
            <Arrow data-aos="fade-down"/>
        <ProjectCard />
        </>
    )

}

export default Projects;