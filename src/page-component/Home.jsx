import React from "react";
import SwipeableTextMobileStepper from "../component/Crousal";
import "./PageStyles/Home.css";
import youtube from "../images/youtube.png";
import Album from "../component/Archeivment";

import Counter from "../component/Counter";

import Footer from "../component/Footer";
import Albums from "../component/Albums";


const Home = () => {
  return (
    <>
      <SwipeableTextMobileStepper  />
      <div className="card_style">
        <div className="shy">
          <div className="imgStyle">
            <img src={youtube} alt="" />
          </div>
          <div className="card-content">
            <h1 className="mission"> VISION AND MISION</h1>
            <h4>  VISION:</h4>
            <p>
            SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by 
                    catering to various segments and
            </p>
            <h4>MISION:</h4>
            <p>  SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by 
                    catering to various segments and</p>
          </div>
        </div>
      </div>
      <Album />

      <Counter />
      <Albums />

      <Footer/>

    </>
  );
};

export default Home;
