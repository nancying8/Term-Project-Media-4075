// Import React to use JSX
import React, {useEffect} from 'react'; 

// 
import { SiAdobeillustrator, SiFigma  } from "react-icons/si";

// 
import CarouselCard from '../components/CarouselCard';

// 
import AOS from "aos";
import "aos/dist/aos.css";

// 
import "../styles/KinemiPage.css";

// importing assets
import KinemiLogo from "/assets/Kinemi/kinemi-logo.png"
import KinemiFont1 from "/assets/Kinemi/kinemi-font1.png"
import KinemiFont2 from "/assets/Kinemi/kinemi-font2.png"
import KinemiMFinal from "/assets/Kinemi/kinemi-mockupFinal.png"
import KinemiMOri from "/assets/Kinemi/kinemi-mockupOri.png"
import KinemiMoodboard from "/assets/Kinemi/kinemi-moodboard.png"
import KinemiEmpathy from "/assets/Kinemi/kinemi-empathyMap.jpg"
import KinemiFlow from "/assets/Kinemi/kinemi-flowChart.jpg"
import KinemiHigh from "/assets/Kinemi/kinemi-high.jpg"
import KinemiLow from "/assets/Kinemi/kinemi-low.jpg"
import KinemiFinal from "/assets/Kinemi/kinemi-final.jpg"
import KinemiMockup1 from "/assets/Kinemi/kinemi-mockup1.jpg"
import KinemiMockup2 from "/assets/Kinemi/kinemi-mockup2.jpg"
import KinemiMockup3 from "/assets/Kinemi/kinemi-mockup3.jpg"
import KinemiOriginal from "/assets/Kinemi/kinemi-original.jpg"
import KinemiUser from "/assets/Kinemi/kinemi-user.jpg"
import KinemiUserStory from "/assets/Kinemi/kinemi-userStory.jpg"
import KinemiWeb from "/assets/Kinemi/kinemiWeb.jpg"
import KinemiJourney from "/assets/Kinemi/kinemi-journeyMap.jpg"




function  KinemiPage () {

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
        <div>
            <div className='kinemi-Hero'>
                <div className='kinemi-Post'>
                    <img src={KinemiMFinal} alt="poster" />
                </div>
                <div >
                    <h2>Kinemi Kitchen Restaurant</h2> 
                    <h1> Website Redesign </h1>
                </div>
                </div>
                <div className='kinemi-Section'>
                <div>
                    <h3>Role</h3>
                    <p>UI/UX - Graphic Designer </p>
                </div>
                <hr />
                <div>
                    <h3>Time</h3>
                    <p> 30:00 hours</p>
                </div>
                <hr />
                <div>
                    <h3>Year</h3>
                    <p> 2024</p>
                </div>
                <hr />
                <div>
                    <h3>Software</h3>
                    <SiAdobeillustrator className='software' />
                    <SiFigma className='software' />
                </div>
            </div>
        
            <hr className='divider' />

            <div className='kinemi-Cont1'>
                <h2 className='kinemi-Sub'>Project Summary </h2>
                <div className='kinemi-Info1' >
                    <div className='kinemi-Intro1'>
                        <p>
                        The objective of this project was to redesign of the real website to improve their UI/UX, and I chose  Kinemi Kitchen. Their existing website consists of a single-page layout that includes all information in one scroll, making it visually overwhelming and difficult to navigate. The goal of the redesign was to improve the site’s appearance, organization, and user experience while maintaining the restaurant’s authentic charm.

                        I expanded the layout into a multi-page website, separating the content into four clean sections: Home, Menu, Reservation, and About. This new structure enhances usability and provides visitors with a more intuitive browsing experience. I also introduced a Reservation feature, which is not available on their original site, to add meaningful functionality that supports business growth and customer convenience.
                        </p>
                    <div className='kinemi-List1'>
                        <div>
                            <h3> Target Audience (18-28) </h3>
                            <ul>
                                <li>Italian Food Lovers</li>
                                <li>Local Diners</li>
                                <li>New Customer </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Location Display</h3>
                            <ul>
                                <li>Own Website</li>
                                <li> Social Media</li>
                                <li> Digital Print</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <hr className='divider' />

            <div className='kinemi-Cont2'>
                <h2 className='kinemi-Sub'>Research </h2>
                <div>
                    <h3>Kinemi Kitchen Restaurant</h3>
                    <div className='kinemi-intro2'>
                        <div className='kinemi-Img'>
                            <img src={KinemiLogo} onContextMenu={(e) => e.preventDefault()} 
                            onDragStart={(e) => e.preventDefault()}  />
                        </div>
                        <div className='kinemiIntro2-Text'>
                            <p>It is a small-family-local Japanese restaurant based in Vancouver, BC. They focus on offering fresh, authentic Japanese meals, with a menu that includes sushi, donburi, and bento options. Their food emphasizes simplicity and quality, and the restaurant is known for its clean presentation and healthy ingredients.</p>    
                        </div>    
                    </div>    
                </div>
                <div className='kinemi-List1'>
                    <div>
                        <h3>Observations</h3>
                        <p>The original website is a single-page design that displays all content—menu, contact info, and business hours—on one scrollable page. While it gives users basic information, the lack of clear structure, visual hierarchy, and interactive features creates a challenging user experience. Key areas for improvement included</p>
                        
                        <div className='kinemi-observation'>
                            <img className='kinemiO-img' src={KinemiOriginal} alt="" />
                
                        <ul>
                            <li>Difficult navigation due to a single-page layout.</li>
                            <li>No dedicated section for reservations, which could benefit both the restaurant and customers.</li>
                            <li>Minimal use of imagery and visual branding, which limits the overall user engagement.</li>
                            <li>The red and white colour are not highlights which it is difficult to read</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div className='kinemi-List1'>
                    <div>
                        <h3>Improvements Made</h3>
                        <p>As part of the redesign process, I reimagined Kinemi Kitchen’s website by restructuring its content into four dedicated pages, rather than relying on the original single-page layout. This new structure improves clarity, navigation, and user interaction:</p>
                        <ul>
                            <li className='kinemi-listSub'>Home 
                                <ul>
                                    <li>
                                    A welcoming landing page that features a hero image of the food, key information (location, hours, and highlights), and quick links to other sections of the site.
                                    </li>
                                </ul>
                            </li>
                            <li className='kinemi-listSub'>Menu 
                                <ul>
                                    <li>
                                    A dedicated, scrollable menu page that allows users to easily browse categories of food. Organized sections with imagery and clear pricing help improve user decision-making and visual appeal.   
                                    </li>
                                </ul>
                            </li>
                            <li className='kinemi-listSub'> Reservation (New Feature)
                                <ul>
                                    <li>Since the original site lacked a reservation system, I added a form-based page that allows customers to easily book a table. This feature improves functionality, saves time, and supports the restaurant’s operations</li>
                                </ul>
                            </li>
                            <li className='kinemi-listSub'>About
                                <ul>
                                    <li>A clean page that introduces the brand’s story, values, and philosophy. This section helps build trust and connection with users, especially first-time visitors.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className='divider' />

            <div className="kinemi-Cont3">
            <h2>Design Process</h2>
                <div className='kinemi-Index3'>
                <h3>Moodboard</h3>
                <p>For this moodboard, I selected images that reflect Italian culture and cuisine—featuring pasta dishes, fresh ingredients, the Italian flag, and rustic textures—to set a visual tone that’s both warm and inviting. </p>
                <img className='kinemi-moodboard' src={KinemiMoodboard} alt="moodboard" />
                </div>
            <div className='kinemiIndex3-moodboard'>
                <h3>Colour Palette</h3>
                <p>
                I kept the original red, white, and black from the existing site, but reorganized how they’re used. Instead of harsh contrasts, red is used for accents and CTAs, white for the background and body text, and black for subtle emphasis—creating a cleaner and more balanced feel.
                </p>
                <div className="kinemi-palette">
                    <div className="kinemi-color-swatch kinemi-color-1"><p> #8E0403</p></div>
                    <div className="kinemi-color-swatch kinemi-color-2"><p> #000000</p></div>
                    <div className="kinemi-color-swatch kinemi-color-3"><p> #FFFFFF</p></div>   
                </div>
                </div>
                <div>
                <h3>Typography</h3>
                <p>
                For the typography, I chose Alegreya SC for the titles and subtitles because of its classic serif style and Italian flair, which reflect Kinemi Kitchen’s refined and traditional aesthetic. It adds personality while remaining elegant. For the body text, I selected Crimson Pro, a clean and readable serif font that complements the header type while ensuring clarity and comfort for longer text blocks, such as menu descriptions or the about page. Together, these fonts balance elegance and usability, aligning with the brand’s cozy yet sophisticated dining experience.
                </p>
                <div className='kinemi-fonts'>
                    <div className='font1'>
                    <h4>Title</h4>
                    <img  src={KinemiFont1} alt="Typography-1" />
                    </div>
                    <div className='font2'>
                    <h4>Body</h4>
                    <img  src={KinemiFont2} alt="Typography-2" />
                    </div>
                </div>
                </div>
            </div>

            <hr className='divider' />

            <div className="kinemi-Cont4">
                <h2>UI/UX Research</h2>
                <div className='kinemi-study'>
                    <div>
                        <h3>User Persona</h3>
                        <img src={KinemiUser} alt="user" />
                    </div>
                    <div>
                        <h3>User Story</h3>
                        <img src={KinemiUserStory} alt="userStory" />
                    </div>
                    <div>
                        <h3>Empathy Map</h3>
                        <img src={KinemiEmpathy} alt="emphaty" />
                    </div>
                    <div>
                        <h3>User Flow Chart</h3>
                        <img src={KinemiFlow} alt="flow" />
                    </div>
                    <div>
                        <h3>Journey Map</h3>
                        <img src={KinemiJourney} alt="journey" />
                    </div>
                </div>
            </div>
        
                <hr className='divider' />
                    
                <div className='kinemi-Cont5' >
                    <h2>Mockup</h2>
                    <p>To showcase the business card in a real-world context, I created mockups that simulate how it would look in various settings. This helps visualize the design's impact and effectiveness in attracting customers.</p>
                    <img src={KinemiMockup1} alt="mockup1" />
                    <img src={KinemiMockup2} alt="mockup2" />
                    <img src={KinemiMockup3} alt="mockup3" />
                </div>
                <div>
                    <h2>Closing Statement</h2>
                    <p>This project allowed me to explore UI/UX redesign, and it was an opportunity to transform a dated and uninviting website into a modern, user-friendly platform that aligns with Kinemi Kitchen’s brand values. The final design highlights the richness of Italian cuisine and improves the overall user experience—making it easier for customers to explore the menu, place orders, and feel welcomed into Kinemi’s digital space.</p>
                </div>

                <hr className='divider' />


                <div className="subtitle" data-aos="fade-down">
                    More  Projects   
                </div>
                <CarouselCard/>
                <div className='margins'></div>
             </div>
    )
}

export default KinemiPage;