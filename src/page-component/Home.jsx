<<<<<<< HEAD
import React from 'react'
import Album from '../component/Archeivment'
import SwipeableTextMobileStepper from '../component/Crousal'
import Mission from '../component/Mission'
=======
import React from "react";
import SwipeableTextMobileStepper from "../component/Crousal";
import "./PageStyles/Home.css";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import youtube from "../images/youtube.png";
>>>>>>> f2ab25f02e7b09dd2cf93f64e83b538fd003efaf

const Home = () => {
  return (
    <>
<<<<<<< HEAD
    <SwipeableTextMobileStepper />
    < Mission />
    <Album />
=======
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
>>>>>>> f2ab25f02e7b09dd2cf93f64e83b538fd003efaf
    </>
  );
};

export default Home;
