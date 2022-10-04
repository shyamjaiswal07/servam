import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import './Mission.css'
// import styled from "styled-components";
import youtube from '../images/youtube.png'

const Mission = () => {
  return (
 
//    <Media>
<Container maxWidth="xl" className='main__container'>
 <Card className='card' >
      <CardActionArea className="mission">
        <CardMedia
        className='youtube__link'
          component="img"
          height="240"
          image={youtube}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>

    </Container>
 
  )
}

// const Media = styled.Box`
// mCardActionArea{
// display:flex;
// }
// `
export default Mission;


