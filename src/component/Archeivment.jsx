import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import './Award.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
      <main>
        <Container>
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
    </ThemeProvider>
  );
}