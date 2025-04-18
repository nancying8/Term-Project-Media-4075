// Import React to use JSX
import React, {useEffect} from 'react'; 

// 
import { SiAdobeillustrator, SiAdobephotoshop} from "react-icons/si";

// 
import CarouselCard from '../components/CarouselCard';

// 
import AOS from "aos";
import "aos/dist/aos.css";

// 
import "../styles/GvfbPage.css";

import GvfbCta from "/assets/GVFB/gvfb-cta.png" 
import GvfbFont1 from "/assets/GVFB/gvfb-font1.png" 
import GvfbFont2 from "/assets/GVFB/gvfb-font2.png" 
import GvfbFood from "/assets/GVFB/gvfb-food.png" 
import GvfbMember from "/assets/GVFB/gvfb-members.png" 
import GvfbMoodboard from "/assets/GVFB/gvfb-moodboard.png" 
import GvfbLogo from "/assets/GVFB/gvfb-logo.webp" 
import GvfbBanner from "/assets/GVFB/gvfb-banner.png"


function  GvfbPage () {

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
            <div className='gvfb-Hero'>
                <div className='gvfb-Post'>
                    <img src={GvfbBanner} alt="poster" />
                  
                </div>
                <div >
                    <h2>GVFB (Greater Vancouver Food Bank)</h2> 
                    <h1>CTA Banners</h1>
                </div>
                </div>
                <div className='gvfb-Section'>
                <div>
                    <h3>Role</h3>
                    <p> Graphic Designer</p>
                </div>
                <hr />
                <div>
                    <h3>Time</h3>
                    <p> 10:00 hours</p>
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
                    <SiAdobephotoshop className='software' />
                </div>
            </div>
        
            <hr className='divider' />

            <div className='gvfb-Cont1'>
                <h2 className='gvfb-Sub'>Project Summary </h2>
                <div className='gvfb-Info1' >
                    <div className='gvfb-Intro1'>
                        <p>
                        The objective of this project was to  design a set of CTA (Call-To-Action) banners for the Greater Vancouver Food Bank (GVFB), a non-profit organization that supports those in need through food assistance and community support. The goal was to create visually compelling banners that inspire action, such as donating or volunteering while reflecting the organization’s values of compassion, community, and care. This assignment allowed me to explore non-profit branding while designing for meaningful impact.
                        </p>
                    <div className='gvfb-List1'>
                        <div>
                            <h3> Target Audience (18-28) </h3>
                            <ul>
                                <li>Local Residents</li>
                                <li>Potential Volunteers</li>
                                <li>Donors and Supporters </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Location Display</h3>
                            <ul>
                                <li> Community centers & libraries</li>
                                <li> Social media and websites</li>
                                <li> Bulletin boards in grocery stores and local cafes</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Requeriments</h3>
                            <ul>
                                <li> Banners Sizes:
                                    <ul className='gvfb-ListSub'>
                                        <li>
                                            320 x 50 (Mobile Leaderboard)
                                        </li>
                                        <li>
                                            300x 250 (Medium Rectangle)
                                        </li>
                                        <li>
                                            160 x 600 (Wide Skyscraper)
                                        </li>
                                        <li>
                                            728 x 90 (Leaderboard)
                                        </li>
                                    
                                    </ul></li>
                                
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <hr className='divider' />

            <div className='gvfb-Cont2'>
                <h2 className='gvfb-Sub'>Research </h2>
                <div>
                    <h3>GVFB (Greater Vancouver Food Bank)</h3>
                    <div className='gvfb-intro2'>
                        <div className='gvfb-Img'>
                            <img src={GvfbLogo} onContextMenu={(e) => e.preventDefault()} 
                            onDragStart={(e) => e.preventDefault()}  />
                        </div>
                        <div className='gvfbIntro2-Text'>
                            <p>GVFB provides healthy food to those in need across Vancouver, Burnaby, New Westminster, and the North Shore. Their branding features a vibrant blue, symbolizing trust and stability, and yellow, which conveys positivity, energy, and hope. These brand colors were essential in maintaining consistency and visual recognition throughout the design.</p>
                            <div className="palette">
                                <div className="gvfb-color-swatch gvfb-color-1"><p> #17528A</p></div>
                                <div className="gvfb-color-swatch gvfb-color-2"><p>#F9AD21</p></div>
                            </div>    
                        </div>    
                    </div>    
                </div>
            </div>

            <hr className='divider' />

            <div className="gvfb-Cont3">
            <h2>Design Process</h2>
                <div className='gvfb-Index3'>
                <h3>Moodboard</h3>
                <p>For this moodboard, I wanted to reflects GVFB’s values—featuring images of volunteers, hands offering donation boxes, and books to represent education and support. </p>
                <img className='gvfb-moodboard' src={GvfbMoodboard} alt="moodboard" />
                </div>
            <div className='gvfbIndex3-moodboard'>
                <h3>Colour Palette</h3>
                <p>
                I preserved GVFB’s signature blue and yellow, adding white for a clean layout and black for strong contrast and readability. 
                </p>

                <div className="gvfb-palette">
                    <div className="gvfb-color-swatch gvfb-color-1"><p> #17528A</p></div>
                    <div className="gvfb-color-swatch gvfb-color-2"><p> #F9AD21</p></div>
                    <div className="gvfb-color-swatch gvfb-color-3"><p> #FFFFFF</p></div>
                    <div className="gvfb-color-swatch gvfb-color-4"><p>#000000 </p></div>
                  
                </div>
                </div>
                <div>
                <h3>Typography</h3>
                <p>
                    For the typography, I chose Source Serif Variable for headlines to give a warm, professional feel, and Chalkboard for body text to maintain a friendly, approachable tone.
                </p>
                <div className='gvfb-fonts'>
                    <div className='font1'>
                    <h4>Title</h4>
                    <img  src={GvfbFont2} alt="Typography-1" />
                    </div>
                    <div className='font2'>
                    <h4>Body</h4>
                    <img  src={GvfbFont1} alt="Typography-2" />
                    </div>
                </div>
                </div>
            </div>

            <hr className='divider' />

            <div className="gvfb-Cont4">
                <h2>Image Selection & Editing</h2>
                <p>
                I selected high-quality images that visually communicate the core values of the GVFB—volunteering, donation, and community support. These include visuals of volunteers in action, hands passing donation boxes, and symbolic elements like books and food items. Each image reinforces the message of compassion, unity, and making a difference, helping to create an emotional connection with the viewer
                </p>
                    <div>
                        <h3>Volunteer</h3>
                        <div className='gvfb-intro4'>
                            <div className='gvfbIntro4-Img'>
                                <img src={GvfbMember} alt="sun" />      
                            </div>
                            <div className='gvfbIntro4-Text'>
                            <p>A volunteer is representing the spirit of giving and community engagement, and helping to convey a sense of positivity, trust, and human connection that encourages others to get involved.
                            </p>
                            </div>
                        </div>    
                    </div>
                    <div>
                        <h3>Food</h3>
                        <div className='gvfb-intro4'>
                            <div className='gvfbIntro4-Img'>
                                <img src={GvfbFood} alt="sun" />      
                            </div>
                            <div className='gvfbIntro4-Text'>
                            <p>A hand passing over a box filled with food, symbolizing the meaningful act of donation and support, while highlighting the GVFB’s mission to fight hunger and provide essential resources to those in need.</p>
                            </div>
                        </div>    
                    </div>
                    <div>
                        <h3>CTA</h3>
                        <div className='gvfb-intro4'>
                            <div className='gvfbIntro4-Img'>
                                <img src={GvfbCta} alt="sun" />      
                            </div>
                            <div className='gvfbIntro4-Text'>
                            <p>Designed a compelling CTA banner for GVFB with a prominent 'Donate Now' button set against a bright yellow background, ensuring visibility and urgency. The design is intended to encourage immediate donations, supporting GVFB's mission to provide food and assistance to those in need.</p>
                            </div>
                        </div>    
                    </div>
                </div>
        
                <hr className='divider' />
        
                <div className='gvfb-Cont5' >
                    <h2>Mockup</h2>
                    <p>To showcase a real-world context of the banners in various size for different formats.</p>
                    <img src="/assets/GVFB/gvfb-banner.png" /> 


                </div>

             <hr className='divider' />
                
            <div>
                <h2>Closing Statement</h2>
                <p>This project allowed me to combine creativity with purpose, producing CTA banners that not only align with GVFB’s mission but also encourage active engagement from the community. Through thoughtful design, I aimed to create a visual experience that motivates individuals to contribute to the cause, helping the organization continue its essential work of supporting those in need.</p>
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

export default GvfbPage;