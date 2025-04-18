import React from "react"; // Import React to use JSX
import IonIcon from "@reacticons/ionicons"; 
import "../styles/Arrow.css";

function Arrow() {
    // Function to handle scrolling
    const handleClick = () => {
        window.scrollTo({
            top: 800, // Scroll to 800px from the top
            behavior: "smooth", // Smooth scrolling
        });
    };

    return (
        <div>
            <div className="ion-arrow-container" onClick={handleClick}>
                <IonIcon className="ion-arrow" name="chevron-down-outline" />
                <IonIcon className="ion-arrow" name="chevron-down-outline" />
                <IonIcon className="ion-arrow" name="chevron-down-outline" />
            </div>  
        </div>
    );
}

export default Arrow;