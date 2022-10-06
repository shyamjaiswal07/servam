import { Box } from '@mui/system';
import React from 'react'
import './Crousal.css'
import SimpleImageSlider from "react-simple-image-slider";
import bannerImg from '../images/bannerImg.jpg'

const images = [
  { url: bannerImg },
  { url: "http://blog.sliceproducts.com/hubfs/blog-files/industrial-safety-equipment.jpg"},
 
];


const Crousal = () => {
  return (
    <div>
    <SimpleImageSlider className="Slider"
    style={{marginBottom:'25px'}}
      width="100%"
      height={604}
      images={images}
      showNavs={true}
      
    />
    <Box style={{margin:'50px 55px 20px',textAlign:'center',lineHeight:'27px'}}>
        <p style={{color:'black'}}>The word 'SARVAM' a Sanskrit word that stands for "Everything" or "Complete", represents to the totality of our strengths as a company - Infrastructure, Man power, Rich Experience, Extensive Product Range, Quality and undying passion to remain ahead of the times. All backed by our capable and experienced sales, Marketing, Back end Supporting, Service and Logistics team.</p>
        <p style={{color:'black'}}>
        SARVAM SAFETY Equipment (P) ltd is a Channel partner for reputed National and International Life Saving Equipment Manufacturers, catering the safety needs of various Industrial segments such as Automobiles, Chemical, Engineering, Pharmaceuticals, Refineries, Construction, power sectors , Fire service, Government sectors, IT , Hotels and various Institutions.
        </p>
     </Box>
     <div className="message__container">
        <span className='main__message'>ONE-STEP-SOLUTION</span>
     </div>
  </div>
  )
}

export default Crousal