import React from "react";
import SwipeableTextMobileStepper from "../component/Crousal";
import "./PageStyles/Home.css";
import youtube from "../images/youtube.png";
import Album from "../component/Archeivment";
<<<<<<< HEAD
import Counter from "../component/Counter";
=======
import Footer from "../component/Footer";
>>>>>>> 3ff8cb90f9f89a1ef31e301860a37ce1d7a416ef

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
<<<<<<< HEAD
      <Counter />
=======
      <Footer/>
>>>>>>> 3ff8cb90f9f89a1ef31e301860a37ce1d7a416ef
    </>
  );
};

export default Home;
