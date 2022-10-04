import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Crousal.css';
import bannerImg from '../images/bannerImg.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath : bannerImg,
  },
  {
   
    imgPath:
      'http://blog.sliceproducts.com/hubfs/blog-files/industrial-safety-equipment.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth:'100%', flexGrow: 1,marginBottom:'25px' }} >
     
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box className="image__slider"
                component="img"
                sx={{
                  height: '90vh',
                  display: 'block',
                  with:'100%',
                  overflow: 'hidden',
                  width: '100%',
                
                }}
                src={step.imgPath}
                // src={bannerImg}
                alt={"img"+index}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      {/* // Message of Organization */}
 
     <Box style={{margin:'50px 55px 20px',textAlign:'center',lineHeight:'27px'}}>
        <p>The word 'SARVAM' a Sanskrit word that stands for "Everything" or "Complete", represents to the totality of our strengths as a company - Infrastructure, Man power, Rich Experience, Extensive Product Range, Quality and undying passion to remain ahead of the times. All backed by our capable and experienced sales, Marketing, Back end Supporting, Service and Logistics team.</p>
        <p>
        SARVAM SAFETY Equipment (P) ltd is a Channel partner for reputed National and International Life Saving Equipment Manufacturers, catering the safety needs of various Industrial segments such as Automobiles, Chemical, Engineering, Pharmaceuticals, Refineries, Construction, power sectors , Fire service, Government sectors, IT , Hotels and various Institutions.
        </p>
     </Box>
     <div className="message__container">
        <span className='main__message'>ONE-STEP-SOLUTION</span>
     </div>

    </Box>

    
  );
}

export default SwipeableTextMobileStepper;