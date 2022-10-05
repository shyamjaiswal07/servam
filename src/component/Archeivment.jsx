import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './Award.css';

import award from '../images/award.png'
import award2 from '../images/award2.png'
import award3 from '../images/award3.png'
import award4 from '../images/award4.png'
import award5 from '../images/award5.png'

const images = [
    {
      imgPath : award,
    },
    {
      imgPath: award2
    },
    {
        imgPath: award3
      },
      {
        imgPath: award4
      },
      {
        imgPath: award5
      },
  ];


export default function Album() {
  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
     
      <main>
        <Container className='award_container'>
          <h1>Wall Of Fame</h1>
          <p>All Roads That to succes have to pass through hard work boulevard,at some point of time.</p>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {images.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{height: '380px', display: 'flex', flexDirection: 'column',border:'15px solid black' }}
                >
                  <CardMedia
                  className='award__pic'
                    component="img"
                    image={card.imgPath}
                    
                    alt="random"
                  />
                
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    // </ThemeProvider>
  );
}