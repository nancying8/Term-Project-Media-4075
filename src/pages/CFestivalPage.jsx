// Import React to use JSX
import React, {useEffect} from 'react'; 

// 
import { SiAdobeillustrator } from "react-icons/si";

import CarouselCard from '../components/CarouselCard';

import AOS from "aos";
import "aos/dist/aos.css";

// 
import "../styles/CFestivalPage.css";


// 
import Cfestival from "/assets/CFestival/cfestival.jpg";
import CfestivalSun from "/assets/CFestival/cfestival-sun.png";
import Cfestivallogo1 from "/assets/CFestival/cfestival-logo.png";
import Cfestivallogo2 from "/assets/CFestival/cfestival-logo2.png";
import CfestivalPoster from "/assets/CFestival/cfestival-Poster.jpg";
import CfestivalMusic from "/assets/CFestival/cfestival-music.png";
import CfestivalHibiscus from "/assets/CFestival/cfestival-hibiscus.png";
import Cfestivaldrink from "/assets/CFestival/cfestival-drink.png";
import Cfestivalfont1 from "/assets/CFestival/cfestival-font1.png";
import Cfestivalfont2 from "/assets/CFestival/cfestival-font2.png";
import CfestivalMoodboard from "/assets/CFestival/cfestival-moodboard.png";
import CfestivalMockup1 from "/assets/CFestival/cfestival-mockup1.jpg";
import CfestivalMockup2 from "/assets/CFestival/cfestival-mockup2.jpg";
import CfestivalMockup3 from "/assets/CFestival/cfestival-mockup3.jpg";
import CfestivalMockup4 from "/assets/CFestival/cfestival-mockup4.jpg";



function CFestivalPage() {

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
            <div className='cfestival-Hero'>
                <div className='cfestival-Post'>
                    <img src={Cfestival} alt="poster" />
                </div>
                <div >
                    <h2> CFestival</h2> 
                    <h1>Poster Design</h1>
                </div>
                </div>
                <div className='cfestival-Section'>
                <div>
                    <h3>Role</h3>
                    <p> Graphic Designer</p>
                </div>
                <hr />
                <div>
                    <h3>Time</h3>
                    <p> 12:00 hours</p>
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
                </div>
            </div>
        
            <hr className='divider' />

            <div className='cfestival-Cont1'>
                <h2 className='cfestival-Sub'>Project Summary </h2>
                <div className='cfestival-Info1' >
                    <div className='cfestival-Intro1'>
                        <p>
                        The objective of this project was to create a visually engaging summer-themed poster for a fictional company launching a seasonal promotion or campaign. The design needed to capture the warmth, energy, and fun associated with summer while remaining versatile enough to be used across various platforms, such as in-store displays, social media, or digital ads. The goal was to practice layout design, colour theory, and visual storytelling to effectively communicate a seasonal message and brand personality.
                        </p>
                    <div className='cfestival-List1'>
                        <div>
                            <h3> Target Audience (18-28) </h3>
                            <ul>
                                <li>Outdoor Lovers</li>
                                <li>Social Media Enthusiasts</li>
                                <li>Festival-goers and music lovers </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Location Display</h3>
                            <ul>
                                <li> Urban and Suburban Areas </li>
                                <li> Central Mall</li>
                                <li> Social Media</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <hr className='divider' />

            <div className='cfestival-Cont2'>
                <h2 className='cfestival-Sub'>Research </h2>
                <div>
                    <h3>CFestival</h3>
                    <div className='cfestival-intro2'>
                        <div className='cfestival-Img'>
                            <img src={Cfestivallogo1} onContextMenu={(e) => e.preventDefault()} 
                            onDragStart={(e) => e.preventDefault()}  />
                        </div>
                        <div className='cfestivalIntro2-Text'>
                            <p>CFestival is a fictional event company based in Burnaby, BC, that specializes in organizing seasonal and lifestyle events to bring communities together. For this project, the company planned to launch a vibrant summer-themed campaign promoting an upcoming event hosted in Central Park, Burnaby.</p>    
                        </div>    
                    </div>    
                </div>
                <div className='cfestival-Index2'>
                    <h3>Summer Concept</h3>
                    <div className='cfestival-intro2'>
                        <div className='cfestivalIntro2-Text'>
                            <p>The summer concept focuses on warmth, energy, and community. Inspired by long sunny days and outdoor fun, the design blends vibrant colors, playful shapes, and bold visuals to evoke the excitement of summer gatherings. It aims to instantly grab attention and create a joyful, welcoming vibe that encourages people to join the event.</p>
                        </div>
                    </div>    
                </div>
            </div>

            <hr className='divider' />

            <div className="cfestival-Cont3">
            <h2>Design Process</h2>
                <div className='cfestival-Index3'>
                <h3>Moodboard</h3>
                <p>For this moodboard, I wanted to capture the lively and carefree spirit of summer through images of beaches, smiling women, hibiscus flowers, sunshine, tropical drinks, dancing, and coconut trees. These visuals were chosen to evoke warmth, joy, and a sense of escape—key themes of the festival vibe. The collection guided the overall design by inspiring a bold, colourful, and playful aesthetic that instantly communicates “summer fun.” </p>
                <img className='cfestival-moodboard' src={CfestivalMoodboard} alt="moodboard" />
                </div>
            <div className='cfestivalIndex3-moodboard'>
                <h3>Colour Palette</h3>
                <p>
                    I selected a refined colour palette combines vibrant summer tones with strong accent colors to create an energetic and eye-catching look. Bright blue (#5AC9E8) and sunshine yellow (#FFC839) evoke warmth and freshness, while deep navy (#262262) and bold red (#BD202E) add contrast and depth. The green (#006838) gives a natural, tropical vibe, and white (#FFFFFF) balances the composition with clarity and space. Together, these colors reflect the excitement and diversity of a summer festival atmosphere.
                </p>

                <div className="cfestival-palette">
                    <div className="cfestival-color-swatch cfestival-color-3"><p> #FFFFFF</p></div>
                    <div className="cfestival-color-swatch cfestival-color-1"><p> #5AC9E8</p></div>
                    <div className="cfestival-color-swatch cfestival-color-2"><p> #262262</p></div>
                    <div className="cfestival-color-swatch cfestival-color-4"><p>#BD202E </p></div>
                    <div className="cfestival-color-swatch cfestival-color-5"><p>#FFC839</p></div>
                    <div className="cfestival-color-swatch cfestival-color-6"><p>#006838</p></div>
                </div>
                </div>
                <div>
                <h3>Typography</h3>
                <p>
                    For the typography, I chose Flood Std for the title to create a bold and expressive impact that grabs attention instantly perfect for a fun and energetic summer event. For the body text, I used American Typewriter, which adds a playful yet readable touch, giving the poster a casual and friendly vibe. This combination helps balance excitement with clarity, making the information easy to follow while keeping the overall aesthetic lively and engaging.
                </p>
                <div className='cfestival-fonts'>
                    <div className='font1'>
                    <h4>Title</h4>
                    <img  src={Cfestivalfont1} alt="Typography-1" />
                    </div>
                    <div className='font2'>
                    <h4>Body</h4>
                    <img  src={Cfestivalfont2} alt="Typography-2" />
                    </div>
                </div>
                </div>
            </div>

            <hr className='divider' />

            <div className="cfestival-Cont4">
                <h2>Image Selection & Editing</h2>
                <p>
                I selected high-quality images that capture the essence of cfestival Cosmetics, focusing on products such as eyeshadow palettes, lip tints, and soft facial expressions. These visuals were intentionally chosen to reflect themes of beauty, elegance, and the use of natural ingredients.
                </p>
                    <div>
                        <h3>Sun</h3>
                        <div className='cfestival-intro4'>
                            <div className='cfestivalIntro4-Img'>
                                <img src={CfestivalSun} alt="sun" />      
                            </div>
                            <div className='cfestivalIntro4-Text'>
                            <p>The sun, with its vibrant yellow hue and cool sunglasses, represents the perfect blend of energy and laid-back charm. Radiating warmth and positivity, it embodies a fun, carefree spirit, making it the perfect symbol for any summer-inspired design or brand. The playful touch of sunglasses adds an element of confidence, making the sun feel both approachable and stylish.</p>
                            </div>
                        </div>    
                    </div>
                    <div>
                        <h3>Hibiscus</h3>
                        <div className='cfestival-intro4'>
                            <div className='cfestivalIntro4-ImgB'>
                                <img src={CfestivalHibiscus} alt="sun" />      
                            </div>
                            <div className='cfestivalIntro4-Text'>
                            <p>The hibiscus, I chosen this particular flower because normally represent tropical beauty and the essence of summer, the hibiscus adds a warm and vibrant touch to the overall design.</p>
                            </div>
                        </div>    
                    </div>
                    <div>
                        <h3>Music Notes</h3>
                        <div className='cfestival-intro4'>
                            <div className='cfestivalIntro4-Img'>
                                <img src={CfestivalMusic} alt="sun" />      
                            </div>
                            <div className='cfestivalIntro4-Text'>
                            <p>The music notes, I used to symbolize the energy and rhythm of live performances,  visually communicate the fun, festive mood of the event.</p>
                            </div>
                        </div>    
                    </div>
                    <div>
                        <h3>Cheers with Drinks</h3>
                        <div className='cfestival-intro4'>
                            <div className='cfestivalIntro4-ImgD'>
                                <img src={Cfestivaldrink} alt="sun" />      
                            </div>
                            <div className='cfestivalIntro4-Text'>
                            <p>The cheers with drinks, I used this images of people toasting with drinks convey a sense of celebration, connection, and shared summer enjoyment.</p>
                            </div>
                        </div>    
                    </div>
                    
                </div>
        
                <hr className='divider' />
        
                <div className='cfestival-Cont5' >
                    <h2>Mockup</h2>
                    <p>To showcase the business card in a real-world context, I created mockups that simulate how it would look in various settings. This helps visualize the design's impact and effectiveness in attracting customers.</p>
                    <img src={CfestivalMockup1} alt="mockup1" />
                    <img src={CfestivalMockup2} alt="mockup2" />
                    <img src={CfestivalMockup3} alt="mockup3" />
                </div>
        
                <hr className='divider' />

                <div>
                    <h2>Closing Statement</h2>
                    <p>This project allowed me to explore vibrant visual storytelling by combining seasonal elements, cohesive branding, and creative design decisions. From research and concept development to final execution, each detail was chosen to reflect the joyful, energetic spirit of summer while staying aligned with the company’s goals. The final poster captures the excitement of the event and invites the audience to be part of a memorable experience.</p>
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

export default CFestivalPage;