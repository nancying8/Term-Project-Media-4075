// Import React to use JSX
import React, {useEffect} from 'react'; 

// 
import { SiAdobephotoshop } from "react-icons/si";

import CarouselCard from '../components/CarouselCard';

import AOS from "aos";
import "aos/dist/aos.css";

// importing 
import "../styles/VioletPage.css";

//
import VioletDraw from "/assets/Violet/violet-draw.jpg";
import Violetfont1 from "/assets/Violet/violet-font1.png";
import Violetfont2 from "/assets/Violet/violet-font2.png";
import Violetlogo from "/assets/Violet/violet-logo.png";
import VioletMockup1 from "/assets/Violet/violet-mockup-1.jpg";
import VioletMockup2 from "/assets/Violet/violet-mockup-2.jpg";
import VioletMockup3 from "/assets/Violet/violet-mockup-3.jpg";
import Violet from '/assets/Violet/violet-mockup-4.png';
import VioletMoodboard from '/assets/Violet/violet-moodboard.png';
import VioletPalette from '/assets/Violet/violet-palette.png';


function VioletPage() {

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
      <div className='violet-Hero'>
        <div className='violet-Post'>
          <img src={Violet} alt="mockup-4" />
        </div>
        <div >
          <h2> Violet Cosmetics</h2> 
          <h1> Business Card Design</h1>
        </div>
      </div>
      <div className='violet-Section'>
        <div>
          <h3>Role</h3>
          <p> Graphic Designer</p>
        </div>
        <hr />
        <div>
          <h3>Time</h3>
          <p> 20:00 hours</p>
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

      <div className='violet-Cont1'>
          <h2 className='violet-Sub'>Project Summary </h2>
          <div className='violet-Info1' >
            <div className='violet-Intro1'>
              <p>
              The objective of this project was to design a logo and incorporate it into a  business card layout based on a fictional client-provided direction. The client supplied the company name and a primary brand colour—deep purple (#602c83) as the foundation for the visual identity. I was given creative freedom to explore and present various logo ideas that aligned with the client's brand vision.
              </p>
              <div className='violet-List1'>
                <div>
                  <h3> Client informations </h3>
                  <ul>
                    <li>Name: Violet Cosmetics</li>
                    <li>Main Colour: #602c83</li>
                  </ul>
                </div>
                <div>
                  <h3>Key Challenges</h3>
                  <ul>
                    <li>Sofware: Adobe Photoshop</li>
                    <li>Colour: Maximun Five Colours CMYK</li>
                  </ul>
                </div>
                <div>
                  <div className='margins'></div>
                  <ul>
                    <li>Pen Tools</li>
                    <li>Path Format</li>
                  </ul>
                </div>
              </div>
              <div className='violet-List2'>
                <div>
                  <h3> Target Audience (15-25) </h3>
                  <ul>
                    <li>Young Enthusiasts Shoppers</li>
                    <li>Style Seekers</li>
                    <li>Trendy Youth</li>
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

      <div className='violet-Cont2'>
          <h2 className='violet-Sub'>Research </h2>
          <p></p>
          <div>
              <h3>Violet Cosmetics</h3>
              <div className='violet-intro2'>
              
                <div className='violetIntro2-Text'>
                  <p>It is a fictional small business located in Vancouver which brand that offers cosmetics made from natural ingredients. Violet Cosmetics uses deep purple as its signature colour to reflect both the brand name and its core values. The color purple symbolizes creativity, elegance, and a sense of calm. </p>
                  <div className="violet-palette">
                    <div className="violet-color-swatch violet-color-1"><p> #602c83</p>
                    </div>
                  </div>
                </div>
            </div>    
          </div>
          <div>
              <h3>Concept Cosmetics</h3>
              <div className='violet-intro2'>
              
                <div className='violetIntro2-Text'>
                <p>
                  "Cosmetics are more than just beauty products. They are part of many people’s daily routines, helping them feel confident, refreshed, and cared for. Whether it’s enhancing natural features or providing essential skin protection, cosmetics play a meaningful role in personal expression and self-care. Cosmetics represent  
                  self-expression, individual beauty, and self-care."
                </p>
                </div>
              </div>
          </div>  
      </div>

      <hr className='divider' />

      <div className="violet-Cont3">
            <h2>Design Process</h2>
              <div className='violet-Index3'>
                <h3>Moodboard</h3>
                <p>For this moodboard, I was inspired by the simplicity of facial expressions and the delicate elegance that cosmetics bring out. The use of deep purple sets the tone which symbolizing creativity, confidence, and beauty. I focused on soft, natural looks that highlight subtle glam rather than heavy makeup, representing the brand’s natural and minimalistic approach. Items like eyeshadow palettes, lip pens, and face powders were key inspirations, as they reflect everyday essentials in beauty routines.  </p>
                <img className='violet-moodboard' src={VioletMoodboard} alt="moodboard" />
              </div>
            <div className='violetIndex3-moodboard'>
                <h3>Colour Palette</h3>
                <p>
                  I selected a refined colour palette for Violet Cosmetics that reflects the brand’s natural elegance and feminine identity. The deep purple serves as the main brand colour, symbolizing creativity, luxury, and individuality, while the supporting tones enhance a sense of delicacy and care. This palette was inspired by the natural beauty of makeup products and aims to evoke a feeling of confidence, softness, and self-expression.
                </p>

                <div className="violet-palette">
                  <div className="violet-color-swatch violet-color-3"><p> #522271</p></div>
                  <div className="violet-color-swatch violet-color-1"><p> #602C83</p></div>
                  <div className="violet-color-swatch violet-color-2"><p> #9263A9</p></div>
                  <div className="violet-color-swatch violet-color-4"><p>#000000 </p></div>
                  <div className="violet-color-swatch violet-color-5"><p>#FFFFFF</p></div>
                </div>
              </div>
              <div>
                <h3>Typography</h3>
                <p>
                  For the typography, I chose STIXGeneral for the title to convey a classic and elegant feel that aligns with the premium image of Violet Cosmetics. For the paragraph text, I used Adobe Clean to ensure clarity, readability, and a modern, professional look. Together, these typefaces create a balanced and sophisticated visual hierarchy.
                </p>
                <div className='violet-fonts'>
                  <div className='font1'>
                    <h4>Title</h4>
                    <img  src={Violetfont1} alt="Typography-1" />
                  </div>
                  <div className='font2'>
                    <h4>Body</h4>
                    <img  src={Violetfont2} alt="Typography-2" />
                  </div>
                </div>
              </div>
          </div>

      <hr className='divider' />
      
      <div className="violet-Cont4">
        <h2>Image Selection & Editing</h2>
        <p>
          I selected high-quality images that reflected the essence of Violet Cosmetics, including makeup products like eyeshadow palettes, lip tints, and soft facial expressions. These visuals were chosen to convey beauty, elegance, and natural ingredients. Each image was carefully edited in Adobe Photoshop to enhance the colour palette, soften lighting, and maintain a clean, delicate aesthetic that aligns with the brand’s identity.
        </p>
            <div>
                <h3>Logo inspiration</h3>
                <div className='violet-intro4'>
                  <div className='violetIntro4-Img'>
                    <img src="https://res.cloudinary.com/du7l1kfwn/image/upload/v1734145108/Screenshot_2024-12-13_at_6.57.58_PM_mzwf44.png" alt="sil_b_illustration" />
                    <span className='highlight'> by @sil_b_illustration</span>
                  </div>
                  <div className='violetIntro4-Text'>
                  <p>After the inspiration, my main goal was to highlight the eye and lip, maintaining the one-line drawing technique in the center of the design. I also wanted to seamlessly incorporate the brand name 'Violet' into the design, ensuring it complemented the minimalist aesthetic while reinforcing the brand's elegance and sophistication.</p>
                  </div>
              </div>    
            </div>
            <div>
                <h3>Drawing</h3>
                <div className='violet-intro4'>
                  <div className='violetIntro4-Img'>
                    <img src={VioletDraw} alt="draw" />
                    
                  </div>
                  <div className='violetIntro4-Text'>
                  <p>I was inspired by a drawing I found, specifically a silhouette illustration that depicted a face. This sparked the idea to create my own interpretation in a style that aligns with Violet Cosmetics' brand identity, blending simplicity and elegance.</p>
                  </div>
              </div>    
            </div>
            <div>
                <h3>Final Logo</h3>
                <div className='violet-intro4'>
                  <div className='violetIntro4-Img'>
                    <img src={Violetlogo} alt="draw" />
                    
                  </div>
                  <div className='violetIntro4-Text'>
                  <p>The final logo is a refined interpretation of the one-line drawing technique, where the simplicity of the eye and lip are emphasized as central elements, representing both beauty and confidence. The incorporation of the brand name 'Violet' within the design complements the minimalist aesthetic, ensuring a balanced and elegant look. The logo successfully captures the essence of Violet Cosmetics, blending modernity with timeless sophistication.</p>
                  </div>
              </div>    
            </div>
            <div>
                <h3>Eyeshadow Palette</h3>
                <div className='violet-intro4'>
                  <div className='violetIntro4-palette'>
                    <img src={VioletPalette} alt="draw" />
                    
                  </div>
                  <div className='violetIntro4-Text'>
                  <p>The final logo is a refined interpretation of the one-line drawing technique, where the simplicity of the eye and lip are emphasized as central elements, representing both beauty and confidence. The incorporation of the brand name 'Violet' within the design complements the minimalist aesthetic, ensuring a balanced and elegant look. The logo successfully captures the essence of Violet Cosmetics, blending modernity with timeless sophistication.</p>
                  </div>
              </div>    
            </div>
        </div>

      <hr className='divider' />

      <div className='violet-Cont5' >
            <h2>Mockup</h2>
            <p>To showcase the business card in a real-world context, I created mockups that simulate how it would look in various settings. This helps visualize the design's impact and effectiveness in attracting customers.</p>
            <img src={VioletMockup1} alt="mockup1" />
            <img src={VioletMockup2} alt="mockup2" />
            <img src={VioletMockup3} alt="mockup3" />
        </div>

      <hr className='divider' />

      <div>
        <h2>Closing Statement</h2>
        <p>Designing the logo and business card was a big challenge due to the limitations on colour. After researching and gathering inspiration, I successfully implemented a combination of key elements and images, which resulted in a design that balances elegance and simplicity. This approach effectively communicates the essence of Violet Cosmetics, giving users a clear understanding of the brand’s concept of beauty and sophistication</p>
      </div>

      <hr className='divider' />

      <div className="subtitle" data-aos="fade-down">
          More  Projects   
      </div>
      <CarouselCard/>
      <div className='margins'></div>
    </div>


  );
}
export default VioletPage;





