// Import React to use JSX
import React  from "react"; 

// Import Components
import Sparkling from "../components/Sparkling";
import Banner from "../components/Banner";
import HomeCard from "../components/HomeCard";
import Arrow from "../components/Arrow";

// Import Styles
import "../styles/Home.css";

function Home() {

    return (

    <div>
      <Sparkling/>
      <Banner /> 
      <Arrow />
      <HomeCard />        
    </div>
    );
}

export default Home;