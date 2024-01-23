import React from "react";
import CustomCarousel from "../components/CustomCarousel";
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home-main">
           <div className="carousel">
              <CustomCarousel />
           </div>
        </div>
    );
};

export default Home;
