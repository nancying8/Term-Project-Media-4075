import React, {useEffect} from 'react'; 

// 
import { SiAdobeillustrator, SiAdobephotoshop} from "react-icons/si";

// 
import CarouselCard from '../components/CarouselCard';

// 
import AOS from "aos";
import "aos/dist/aos.css";

// 
import "../styles/JobzzPage.css";

import JobzzLogo from "/assets/Jobzz/jobzz-logo.png" 
import JobzzMoodboard from "/assets/Jobzz/jobzz-moodboard.png" 
import Jobzz from "/assets/Jobzz/jobzz.png" 
import JobzzMockup1 from "/assets/Jobzz/jobzz-mockup1.jpg" 
import JobzzMockup2 from "/assets/Jobzz/jobzz-mockup2.jpg" 
import JobzzMockup3 from "/assets/Jobzz/jobzz-mockup3.jpg" 
import JobzzDraw from "/assets/Jobzz/jobzz-draw.png" 

function  JobzzPage () {

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
            <div className='jobzz-Hero'>
                <div className='jobzz-Post'>
                    <img src={Jobzz} alt="poster" />
                </div>
                <div >
                    <h2>JobZz</h2> 
                    <h1>Logo Design</h1>
                </div>
                </div>
                <div className='jobzz-Section'>
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

            <div className='jobzz-Cont1'>
                <h2 className='jobzz-Sub'>Project Summary </h2>
                <div className='jobzz-Info1' >
                    <div className='jobzz-Intro1'>
                        <p>
                        The objective of this project was to design a logo for a fictional job platform called Jobzz, intentionally built with a frustrating and confusing user experience. Inspired by satire and dark humor, the design plays on common UX pitfalls to create a chaotic, overwhelming space that highlights what not to do in digital design.

                        The logo was a key part of the branding, created to reflect the project’s playful yet “evil” tone. I combined visual elements of a construction worker with a devil figure to symbolize hard work and chaos. Purple (#660066) was chosen as the brand’s primary color to evoke mystery, mischief, and magical confusion.

                        This project offered an opportunity to creatively explore UX design through reverse thinking, developing a brand that is intentionally problematic to help communicate the value of clear, user-centered experiences.
                        </p>
                    <div className='jobzz-List1'>
                        <div>
                            <h3> Target Audience (18-28) </h3>
                            <ul>
                                <li>Job seekers </li>
                                <li>UX/UI designers learning what not to do</li>
                                <li>Instructors and students in design programs  </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Location Display</h3>
                            <ul>
                                <li>Website</li>
                                <li>Digital Print</li>
                                <li> Social Media</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <hr className='divider' />

            <div className='jobzz-Cont2'>
                <h2 className='jobzz-Sub'>Research </h2>
                <div>
                    <h3>Jobzz </h3>
                    <div className='jobzz-intro2'>
                        <div className='jobzzIntro2-Text'>
                            <p>The idea for Jobzz was inspired by the blog article "If Satan Was a Web Designer" by Kevin Kwok, which humorously breaks down what truly bad UX might look like. The article provided examples of frustrating design patterns—like dark patterns, misleading CTAs, confusing layouts, and overwhelming forms—which directly influenced the tone and functionality of Jobzz.

                            The combination of evil intentions and funny execution served as the perfect foundation to explore how good UX principles can be reversed to cause stress and irritation. This satire-based approach helped shape not just the layout and interaction design, but also the overall brand identity, which leans into the ridiculous, dark, and comedic side of web design gone wrong.</p>
                        </div>    
                    </div>    
                </div>
            </div>

            <hr className='divider' />

            <div className="jobzz-Cont3">
            <h2>Design Process</h2>
                <div className='jobzz-Index3'>
                <h3>Moodboard</h3>
                <p>The moodboard includes images of confused workers, deep purple tones, devilish expressions, and disorganized interfaces. It evokes a dark, mysterious, and chaotic work atmosphere. </p>
                <img className='jobzz-moodboard' src={JobzzMoodboard} alt="moodboard" />
                </div>
            <div className='jobzzIndex3-moodboard'>
                <h3>Colour Palette</h3>
                <p>
                The main colour is deep purplex, symbolizing mystery, mischief, and evil. Black and white were added to heighten contrast and reinforce confusion and frustration.
                </p>

                <div className="jobzz-palette">
                    <div className="jobzz-color-swatch jobzz-color-1"><p> #660066</p></div>
                    <div className="jobzz-color-swatch jobzz-color-2"><p> #FFFFFF</p></div>
                    <div className="jobzz-color-swatch jobzz-color-3"><p>#000000 </p></div>
                </div>
                
            </div>

            <hr className='divider' />

            <div className="jobzz-Cont4">
                <h2>Image Selection & Editing</h2>
                    <div>
                        <h3>Draw</h3>
                        <div className='jobzz-intro4'>
                            <div className='jobzzIntro4-Img'>
                                <img src={JobzzDraw} alt="sun" />      
                            </div>
                            <div className='jobzzIntro4-Text'>
                            <p>I drew a character merging two ideas: a construction worker (symbolizing labor and jobs) and a devil with horns (symbolizing chaos and frustration).
                            </p>
                            </div>
                        </div>    
                    </div>
                    <div>
                        <h3>Final</h3>
                        <div className='jobzz-intro4'>
                            <div className='jobzzIntro4-Img'>
                                <img src={JobzzLogo} alt="sun" />      
                            </div>
                            <div className='jobzzIntro4-Text'>
                            <p>The final logo features a mischievous devil with a construction hat, combining themes of labor and confusion. It has an evil grin, reinforcing the project's satirical tone and the chaotic brand identity.
                            </p>
                            </div>
                        </div>    
                    </div>
    
                </div>
        
                <hr className='divider' />
        
                <div className='jobzz-Cont5' >
                    <h2>Mockup</h2>
                    <p>To showcase a real-world context of the logo in A mobile onboarding screen to immediately confuse users. A fake job website with poor layout and branding to frustrate navigation.</p>
                    <img src={JobzzMockup3} alt="mockup3" />
                    <img src={JobzzMockup2} alt="mockup2" />
                    <img src={JobzzMockup1} alt="mockup1" />

                </div>

             <hr className='divider' />
                
            <div>
                <h2>Closing Statement</h2>
                <p>This project allowed a creative exercise in designing intentionally bad UX. By visualizing confusion, frustration, and misdirection, the project highlights the impact of poor design choices—and, in turn, celebrates the importance of clear, user-focused experiences.</p>
            </div>

            <hr className='divider' />


            <div className="subtitle" data-aos="fade-down">
                More  Projects   
            </div>
            <CarouselCard/>
            <div className='margins'></div>

        </div>
        </div>
    )
}

export default JobzzPage;