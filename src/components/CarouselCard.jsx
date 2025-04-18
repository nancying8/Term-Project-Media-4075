
import React, {useState} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ProjectInfo from "../data/ProjectInfo";
import CardSug from "../components/CardSug";

import "../styles/Carousel.css"

function CarouselCard() {
  
  const handleClick = () => {
    window.scrollTo(0, 350);
  };
  
  const [cardsData, setCardsData] = useState(ProjectInfo);
  // const [cardsData, setCardsData] = useState(HomeCard);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
        {
          breakpoint: 1200, // For screens smaller than 1900px
          settings: {
            slidesToShow: 2, // Show 3 slides
            slidesToScroll: 1,
          },
        },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        }
      }
    ]
  };
  
    return (

      <div className="caraousel-card">
        <style>
        {`
          .slick-prev:before, .slick-next:before {
            color:#124559 !important;
          }
          .slick-prev {
            left: -7px !important; 
            z-index: 1; 
          }

          .slick-next {
            right: -7px !important; 
            z-index: 1; 
          }
        `}
      </style>

         <div>
           <Slider {...settings}>      
                {cardsData.map((cardSuge) => (
                  <div className="cards"  key={cardSuge.id}>     
                    <CardSug
                    title={cardSuge.title}
                    subtitle={cardSuge.subtitle}
                    image={cardSuge.image}
                    links={cardSuge.links }
                    arrow={cardSuge.arrow}
                    />
                    </div>
                ))}
        </Slider>
        </div>


      
      </div>

    ) 
  }
  

    export default CarouselCard;

