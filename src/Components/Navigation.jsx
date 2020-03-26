import React from 'react'
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'

const Nav = styled(AppBar)({
  // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  background: 'white',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'black',
  height: 50,
  padding: '10px 30px',
  textAlign: "center",
  images: {
    // display: 'none',
  },
});

const NavigationBar = () => {
  return (
  <Nav>
    <Typography variant="h5" component="h2">
          NASA's Photo a Day
        </Typography>
    <CardMedia className={Nav.images}
          image={`https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png`}
          alt="Official NASA Logo"
        />
  </Nav>
  )
}

export default NavigationBar