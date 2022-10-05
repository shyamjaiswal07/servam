import React from 'react';
import logo from '../images/Sarvam_logo.png';
import './Header.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Topheader = () => {
  return (
    <div className="address" >
    <div className="logo1">
      <img src={logo} alt="logo" srcset="" />
    </div>

    <div className="call">
      <div className="calls">
        <div className="call-icon">
        <CallIcon />
        </div>
        <div className="call-text">
          <div className="call-text1">Call Us:</div>
          <div className="call-text2 text__hover">(+1)-(44)-45553337/45552227</div>
        </div>
      </div>
      <div className="email">
        <div className="email-icon">
         <EmailIcon />
        </div>
        <div className="email-text">
          <div className="email-text1">Email Us:</div>
          <div className="email-text2 text__hover">sarvam@sarvamsafet.com</div>
        </div>
      </div>
      <div className="opening">
        <div className="open-icon">
        <AccessTimeIcon />
        </div>
        <div className="open-text">
          <div className="open-text1">Opening Hours:</div>
          <div className="open-text2 text__hover">Mon-fri:8am-6pm</div>
        </div>
      </div>
      <div className="quote">
        <div className="quote1">
          {/* <div className='quote-arrow'><AiFillRightCircle/></div> */}
          <div className="quote-msg">Get a Quote</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Topheader