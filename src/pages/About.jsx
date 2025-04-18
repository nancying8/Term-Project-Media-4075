// Import React to use JSX
import React, {useEffect} from "react";



// Import components
import PhotoGallery from "../components/PhotoGallery";
import Arrow from "../components/Arrow"
import SparklingProject from "../components/SparklingProject"

//Import assets
import Perfil from "/assets/My/photo-perfil.jpg"

// Import dependecies
// Import AOS styles
import AOS from "aos";
import "aos/dist/aos.css"; 

// Import icons from react-icon of 'si'
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiAdobepremierepro, SiHtml5, SiCss3, SiTailwindcss, SiFigma, SiReact, SiAdobeaftereffects } from "react-icons/si";

// Import style
import "../styles/About.css"

function About () {

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
                About Me 
        </div>
        <Arrow data-aos="fade-down"/>
       
        <div className="about-content">
                <div className="about-intro">
                    <div className="aboutBtnC">
                        <div className="aboutBtn aboutbtn-1 aboutHover-border-1">
                        <img src={Perfil} onContextMenu={(e) => e.preventDefault()} />         
                        </div>           
                    </div>           
            
                    <div className="about-text">
                        <h1>Hi , I am Nancy</h1>
                        <p> A BCIT student studying New Media Design and pursuing my passion for graphic design. I am continually building my technical and creative abilities through my studies.
                        With over 10 years of customer service experience, I am bringing essential values of integrity, responsibility, and perseverance to every project. My experience has also strengthened me in adaptability and communication, allowing me to work effectively in any environment. </p>
                    </div>
                </div>
            </div>

            <hr className='divider' />
                <h2 className="skill-title"> My Skills </h2>
                    <p>As a graphic designer, my hybrid skill set lets me bridge the gap between design and development,  making me a more versatile and collaborative creative.
                    I enjoy crafting user experiences that are both visually engaging and functional. 
                    </p>
                <div className="skills-container">
                    <div >
                        <h3>Design</h3>
                        <div className="skills-section">
                            <div className="iconSkill" >
                                <SiAdobephotoshop  />
                                <p>Photoshop</p>
                            </div>
                            <div className="iconSkill"v>
                                <SiAdobeillustrator />
                                <p>Illustrator</p>
                            </div>
                            <div className="iconSkill">
                                <SiAdobeindesign/>
                                <p>InDesign</p>
                            </div>
                            <div  className="iconSkill">
                                <SiAdobeaftereffects />
                                <p>After Effects</p>
                            </div>
                            <div className="iconSkill">
                                <SiAdobepremierepro  />
                                <p>Premiere Pro</p>
                            </div>
                            <div className="iconSkill" >
                                <SiFigma />
                                <p>Figma</p>
                            </div>
                        </div>
                    </div>
                    <hr className="skill-lines"/>
                    <div >
                        <h3>Development</h3>
                        <div className="skills-section">
                            <div className="iconSkill" >
                                <SiHtml5 />
                                <p>HTML5</p>
                            </div>
                            <div  className="iconSkill" >
                                <SiCss3/>
                                <p>CSS3</p>
                            </div>
                            <div className="iconSkill">
                                <SiTailwindcss  />
                                <p>Tailwind CSS</p>
                            </div>
                            <div className="iconSkill" >
                                <SiReact />
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
        
            <PhotoGallery/>
        </>
    )
}

export default About
