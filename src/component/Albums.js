import React from "react";
import "./AlbumStyling.css";
import safety from '../images/safety.png';
import safety1 from "../images/safety1.jpg";
import safety2 from "../images/safety2.png";
import safety3 from "../images/safety3.png";
function Albums() {
  return (
    <>
      <div className="headingTeam">
        {/* text above the images */}
        <div className="textTeam">
          <div className="headerTeam">
            <span>
              PEOPLE <br></br>BEHIND <br></br> THE SCENE
            </span>
          </div>
          <div className="quoteTeam">
            <p>Good teams incorporate teamwork into their</p>
            <p>culture, creating the building blocks for success</p>
          </div>
        </div>
        {/* images */}
        <div className="albumTeam">
          <div className="imageTeam">
            <img
              src={safety}
              height="100%"
              width="100%"
              alt="img1"
            ></img>
            <div className="layerTeam">
            <h3 >SALES TEAM</h3>
            </div>
          </div>
          <div className="imageTeam">
            <img
              src={safety1}
              height="100%"
              width="100%"
              alt="img2"
            ></img>
            <div className="layerTeam">
            <h3 >ADMIN TEAM</h3>
            </div>
          </div>
          <div className="imageTeam">
            <img
              src={safety2}
              height="100%"
              width="100%"
              alt="img3"
            ></img>
            <div className="layerTeam">
            <h3 >SERVICE TEAM</h3>
            </div>
          </div>
          <div className="imageTeam">
            <img
              src={safety3}
              height="100%"
              width="100%"
              alt="img3"
            ></img>
            <div className="layerTeam">
            <h3 >ADMIN TEAM</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Albums;
