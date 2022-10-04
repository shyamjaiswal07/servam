import React from "react";
import SwipeableTextMobileStepper from "../component/Crousal";
import "./PageStyles/Home.css";
import youtube from "../images/youtube.png";
import Album from "../component/Archeivment";

const Home = () => {
  return (
    <>
      <SwipeableTextMobileStepper />
      <div className="card_style">
        <div className="shy">
          <div className="imgStyle">
            <img src={youtube} alt="" />
          </div>
          <div className="card-content">
            <h1>heading</h1>
            <p>
              Lorem ipsum, dlore Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum illo nulla consectetur enim! Natus aliquam
              maiores possimus aperiam veniam tenetur!
            </p>
          </div>
        </div>
      </div>
      <Album />
    </>
  );
};

export default Home;
