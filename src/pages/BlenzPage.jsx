// Import React to use JSX
import React, {useEffect} from 'react'; 

// Import IonIcons for the arrow icon
import { MdNavigateNext } from "react-icons/md";

// 
import { SiAdobephotoshop } from "react-icons/si";

import CarouselCard from '../components/CarouselCard';

import AOS from "aos";
import "aos/dist/aos.css";

// 
import "../styles/BlenzPage.css";

// Import the images
import BlenzOriginal from "/assets/Blenz/blenz-original.jpg";
import BlenzFinal from "/assets/Blenz/blenz-final.jpg";
import BlenzMoodboard from "/assets/Blenz/blenz-moodboard.png";
import BlenzMockup from "/assets/Blenz/blenz-mockup-1.jpg";
import BlenzMockup2 from "/assets/Blenz/blenz-mockup-2.jpg";
import BlenzMockup3 from "/assets/Blenz/blenz-mockup-3.jpg";
import BlenzMockup4 from "/assets/Blenz/blenz-mockup-4.jpg";
import PlanetLogo from "/assets/Blenz/planet-logo.png";
import Typography from "/assets/Blenz/blenz-font.png";
import BlenzCup1 from "/assets/Blenz/blenzCup-1.png";
import BlenzCup2 from "/assets/Blenz/blenzCup-2.png";
import BlenzCup3 from "/assets/Blenz/blenzCup-3.png";
import Planetline from "/assets/Blenz/planet-lineBee.png";
import BlenzLogo from "/assets/Blenz/blenz-logo.png";
import BlenzApp from "/assets/Blenz/blenz-app.png";


function BlenzPage () {

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
      <div className='blenz-Hero'>
        <div className='blenz-Post'>
          <h2>Original</h2>
          <img src={BlenzOriginal} 
          alt="original poster" 
          onContextMenu={(e) => e.preventDefault()} 
          onDragStart={(e) => e.preventDefault()}  />
        </div >
        <MdNavigateNext className='blenz-Icon' />
        <div className='blenz-Post'>
          <h2>Final</h2>
          <img src={BlenzFinal} 
          alt="final poster" 
          onContextMenu={(e) => e.preventDefault()} 
          onDragStart={(e) => e.preventDefault()}  />
        </div>
        <div>
          <h2> Blenz Coffee</h2> 
          <h1> Poster Redesign</h1>
          </div>
        </div>
        <div className='blenz-Section'>
          <div>
            <h3>Role</h3>
            <p> Graphic Designer</p>
          </div>
          <hr />
          <div>
            <h3>Time</h3>
            <p> 27:00 hours</p>
          </div>
          <hr />
          <div>
            <h3>Year</h3>
            <p> 2024</p>
          </div>
          <hr />
          <div>
            <h3>Software</h3>
            <SiAdobephotoshop className='software' />
          </div>
      </div>
      <hr className='divider' />
      <div className='blenz-Cont1'>
          <h2 className='blenz-Sub'>Project Summary </h2>
        <div className='blenz-Info1' >
          <div className='blenz-Intro1'>
            <p>
            The objective of this project was to re-design the promotional poster in a way that would appropriately represent the two companies' brand identities while making the advertisement pleasing to the eyes and effective in grabbing customer attention.
            </p>
            <p>
             Blenz Coffee and Planet Bee Honey Farm  collaborated to introduce a
             new seasonal beverage, with natural ingredients like oat, tea, and honey from Vernon, BC-based Planet Bee Honey Farm. The promotion invites customers to try the beverage hot and iced, with the extra value of double loyalty points if the Blenz Coffee app is used.
            </p>
              <div className='blenz-List1'>
                <div>
                  <h3> Target Audience ( 18-28 ) </h3>
                  <ul>
                    <li>Coffee and Tea Enthusiasts</li>
                    <li>Young Professionals and students</li>
                    <li>Seasonal Shoppers</li>
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

      <div className='blenz-Cont2'>
          <h2 className='blenz-Sub'>Research </h2>
          <p>Observations of the two brands:</p>
          <div>
              <h3>Blenz Coffee</h3>
              <div className='blenz-intro2'>
                <div className='blenz-Img'>
                  <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733958654/blenzLogo_h7fpy0.webp" alt="blenzLogo" onContextMenu={(e) => e.preventDefault()} 
                  onDragStart={(e) => e.preventDefault()}  />
                </div>
                <div className='blenzIntro2-Text'>
                  <p>It is a Canadian retail coffee shop recognized for its distinct branding and identity. What sets Blenz apart from other coffee chains is its unique yellow and black colour scheme, which makes the brand instantly recognizable and visually striking.</p>
                  <div className="palette">
                    <div className="color-swatch color-2"><p> #00000</p></div>
                    <div className="color-swatch color-4"><p>#FFD96E </p></div>
                  </div>
                </div>
            </div>    
          </div>
          <div className='blenz-Index2'>
              <h3>Planet Bee Honey Farm</h3>
              <div className='blenz-intro2'>
                <div className='planet'>
                  <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1733958642/PlanetBee-Logo-2018_359x_r7nq4e.avif" alt="planetLogo" onContextMenu={(e) => e.preventDefault()} 
                  onDragStart={(e) => e.preventDefault()}  />
                </div>
                <div className='planet-Text'>
                  <p>It is a family-owned honey farm based in Vernon, BC, specializing in natural honey and bee-related products. Their brand identity leans into organic, earthy, and nature-inspired themes—with a typical colour palette of yellow and lavender purple, representing both bees and the wildflowers from which they source honey.</p>
                  <div className="palette">
                    <div className="color-swatch color-5"><p>#FAA41E</p></div>
                    <div className="color-swatch color-6"><p>#D7AFD2 </p></div>
                  </div>
                </div>
            </div>    
          </div>
      </div>

    <hr className='divider' />

    <div className="blenz-Content3">
      <h2>Design Process</h2>
        <div className='blenz-Index3'>
          <h3>Moodboard</h3>
          <p>For the moodboard, I included imagery of coffee cups, coffee beans, cozy coffee environments, and honey to reflect the warmth and rustic nature of the collaboration. These visuals helped guide the overall tone of the poster, aiming to balance the comforting feel of a local coffee shop with the natural sweetness of honey. </p>
          <img className='blenz-moodboard' src={BlenzMoodboard} alt="moodboard" />
        </div>
      <div className='blenzIndex3-moodboard'>
          <h3>Colour Palette</h3>
          <p>I maintained the brand colours from both Blenz Coffee and Planet Bee Honey Farm to ensure visual consistency and brand recognition.  Inspired by the moodboard, I also incorporated rich brown tones and soft black accents to add a rustic, warm touch that aligns with the beverage ingredients and cozy café atmosphere.</p>
          <div className="palette">
              <div className="color-swatch color-1"><p> #472616</p></div>
              <div className="color-swatch color-3"><p> #FFFFFF</p></div>
              <div className="color-swatch color-2"><p> #00000</p></div>
              <div className="color-swatch color-4"><p>#FFD96E </p></div>
              <div className="color-swatch color-5"><p>#FAA41E</p></div>
              <div className="color-swatch color-6"><p>#D7AFD2 </p></div>
          </div>
        </div>
        <div className="blenzIndex3-font">
          <h3>Typography</h3>
          <p>I chose Myriad Pro for its clean, modern, and highly legible design. As a sans-serif typeface, it offers a friendly yet professional look that complements both Blenz Coffee’s contemporary branding and Planet Bee’s natural, approachable feel.</p>
          <img src={Typography} alt="Typography" />
        </div>
    </div>

    <hr className='divider' />

    <div className="blenz-Content4">
      <h2> Image Selection & Editing</h2>
      <p>I selected high-quality images that highlighted the main ingredients—coffee, tea, and honey—to visually communicate the product’s appeal. Each image was carefully edited in Adobe Photoshop to enhance colour, lighting, and contrast, ensuring they stood out against the rustic background. </p>

      <div>
          <h3>Blenz Coffee Logo</h3>
          <div className='blenz-intro4'>
            <div className='blenzIntro4-Img finalBlenz-logo'>
            <img src={BlenzLogo} alt="final-blenzLogo" />
            </div>
            <div className='blenzIntro4-Text'>
            <p>I used the brand’s signature yellow to reinforce Blenz Coffee’s identity and create a sense of warmth and brightness. This colour also helps draw attention to the logo and aligns well with the overall poster aesthetic.</p>

              <div className="palette">
                <div className="color-swatch color-4"><p>#FFD96E </p></div>
              </div>
            </div>
        </div>    
      </div>
      <div>
          <h3>Blenz's App figure</h3>
          <div className='blenz-intro4'>
            <div className='blenzIntro4-Img blenz-app'>
            <img src={BlenzApp} alt="blenz-app" />
            </div>
            <div className='blenzIntro2-Text'>
            <p>I incorporated the mascot figure used to promote Blenz’s app, which encourages customers to order online or through the app to save time and earn loyalty points. This element helps communicate the convenience and benefits of using the app in a friendly and engaging way.</p>
            </div>
            </div>
        </div>
      <div>
          <h3>Blenz's Beverages</h3>
          <div className='blenz-intro4 cup-intro'>
            <div className='blenz-cup'>
            <img src={BlenzCup1} alt="blenz-cup1" />
            <img src={BlenzCup2} alt="blenz-cup2" />
            <img src={BlenzCup3} alt="blenz-cup3" />
            </div>
            <div className='blenzIntro4-Text'>
            <p>I decided change their glasses and cup and focus in use the same white cup and plate design to maintain consistency and highlight each drink with the rich colours of different teas. I also added curved labels with the names on each cup to make them easy to identify at a glance.</p>
            </div>
            </div>
        </div>
        <div>
          <h3>Planet Bee Honey Farm Logo</h3>
          <div className='blenz-intro4'>
            <div className='blenzIntro4-Img'>
            <img src={PlanetLogo} alt="final-planetlogo" />
            </div>
            <div className='blenzIntro4-Text'>
            <p>I kept Planet Bee’s main brand colours—golden yellow for the logo and soft purple to highlight their location, “Vernon, BC.” These colors represent their natural honey products and friendly, organic vibe, helping to distinguish their identity while harmonizing with the overall design.</p>
              <div className="palette">
                    <div className="color-swatch color-5"><p>#FAA41E</p></div>
                    <div className="color-swatch color-6"><p>#D7AFD2 </p></div>
                  </div>
                </div>
            </div>
        </div>
        <div>
          <h3>Planet Bee Honey Farm - Bee Trail lines</h3>
          <div className='blenz-intro4'>
            <div className='blenzIntro4-Img bee-line'>
            <img src={Planetline} alt="planet-line" />
            </div>
            <div className='blenzIntro4-Text'>
            <p>I kept the bee trail lines and adjusted them to the main brand colour—golden yellow—to highlight key areas and guide the viewer’s eye through the poster.</p>
              <div className="palette">
                <div className="color-swatch color-5"><p>#FAA41E</p></div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <hr className='divider' />

    <div className='blenz-Content5' >
      <h2>Mockup</h2>
      <p>To showcase the poster in a real-world context, I created mockups that simulate how it would look in various settings. This helps visualize the design's impact and effectiveness in attracting customers.</p>
      <img src={BlenzMockup4} alt="mockup4" />
      <img src={BlenzMockup2} alt="mockup2" />
      <img src={BlenzMockup3} alt="mockup3" />
    </div>
      <hr className='divider' />
      <div>
        <h2>Closing Statement</h2>
        <p>Redesigning this poster was a journey by ensuring every element communicates the essence of Blenz Coffee’s collaboration with Planet Bee. Each adjustment, from typography to imagery, was made with careful consideration of aesthetics, messaging, and audience appeal. The final design not only highlights the uniqueness of the seasonal offering but also strengthens the connection between the brand and its community.</p>
      </div>

      <hr className='divider' />

      <div className="subtitle" data-aos="fade-down">
          More  Projects   
      </div>
      <CarouselCard/>
      <div className='margins'></div>
    </>
  );
};

export default BlenzPage;
