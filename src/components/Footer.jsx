// Import React to use JSX
import React from "react"; 

// Import dependecies
// Import IonIcons for social media icons
import IonIcon from "@reacticons/ionicons";
// Import Link for navigation
import { Link } from "react-router-dom"; 
// Import logo images
import Logo from "/assets/My/Logo.png"; 

// Import styles
import "../styles/Footer.css";

// Import components 
import ScrollToTop from "./ScrollToTop";

function Footer () {

    const handleClick = () => {
        window.scrollTo(0, -10);
      };
     
    return (
       <div className="footer">
          <ScrollToTop/>
          <hr />
          <h2>Let's Grab a Pasta</h2>
          <p>Ready to bring your ideas to life!</p>
          <div className="footer-intro">
            <div className="footer-logo">
                <Link onClick={handleClick} to="/"> <img src={Logo} alt="logo" /> </Link>
                <p> • Designed & coded by Nancy Wu • @ 2025</p>
            </div>
            <div>            
              <a href="https://www.linkedin.com/in/nancy-wuz/">
                <IonIcon className="footer-icon" name="logo-linkedin" />
              </a> 
              <a href="mailto:hello@nancywu.ca">
                <IonIcon className="footer-icon" name="mail-outline" />
              </a>
            </div>
        </div>
       </div>
    )
}

export default Footer;