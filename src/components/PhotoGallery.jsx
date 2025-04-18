import React, { useState } from "react";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// hoobiess plugin
import { FaCameraRetro, FaCity } from "react-icons/fa"; //Import camera hoobies from react hoobies
import { GiHiking, GiFlowerEmblem, GiMeditation } from "react-icons/gi"; //Import hiking hoobies from react hoobies
import { MdFoodBank } from "react-icons/md"; //Import food hoobies from react hoobies
import { RiMovieFill } from "react-icons/ri";
import { IoMusicalNotes } from "react-icons/io5";

// Import photos array
import photos from "../data/Photos"

function PhotoGallery() {
    const [index, setIndex] = useState(-1);

    return (
        <div className="photo-content">
            <div>
            <div className="about-hobby">
                <h2>Beyond design</h2>
                <p>
                In my free time, I love to explore new places and capture moments through photography. 
                Nature is a huge source of inspiration for me, and I often recharge by hiking, taking in the scenery, 
                and letting my mind wander outside the screen. I also enjoy discovering new flavours and 
                experiencing different cuisines, which opens me up to different cultures and stories.
                </p>
                <div className="hoobies-icon">
                    <div>
                    <FaCameraRetro className="hoobiesSkill" />
                        <p>
                            Camera
                        </p>
                    </div>
                    <div>
                    <FaCity className="hoobiesSkill" />
                        <p>
                            Explore
                        </p>
                    </div>
                    <div>
                    <GiHiking className="hoobiesSkill" />
                        <p>
                           Hiking 
                        </p>
                    </div>
                    <div>
                    <GiFlowerEmblem className="hoobiesSkill" />
                        <p>
                           Nature 
                        </p>
                    </div>
                    <div>
                    <MdFoodBank className="hoobiesSkill" />
                        <p>
                            Food
                        </p>
                    </div>            
                    <div>
                    <GiMeditation className="hoobiesSkill" />
                        <p>
                            Relax
                        </p>
                    </div>            
                    <div>
                    <RiMovieFill className="hoobiesSkill" />
                        <p>
                            Movie
                        </p>
                    </div>            
                    <div>
                    <IoMusicalNotes className="hoobiesSkill" />
                        <p>
                            Music
                        </p>
                    </div>            
                   
            </div>
                 
                 </div>
          
        </div>

        <div className="photo-intro">
            
            <div> 
            <PhotoAlbum 
                photos={photos} 
                layout="rows"
                targetRowHeight={400}
                onContextMenu={(e) => e.preventDefault()} 
                onDragStart={(e) => e.preventDefault()}  
                onClick={({ index }) => setIndex(index)}
                styles={{
                    border: "solid 2px #124559",
                
                }}
            />

            </div>

            {/* Lightbox Modal */}
            <Lightbox
                slides={photos.map((photo) => ({
                    src: photo.src,
                    description: photo.caption,
                }))}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                animation={{
                    swipe: "ease-in-out"
                }}                
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                captions={{ 
                    position: "bottom",
                    descriptionTextAlign: "center",
                }}
                styles={{
        
                    slide: {
                        fontSize: "1.8rem",
                 

                    },
                }}
            />

        </div>
        </div>
    );
}

export default PhotoGallery;

