import logo from '../love-and-hope-co-transparent-logo.png';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SlideshowMobile from './slideshow-mobile.js';
import CommentsMobile from './comments-mobile.js';
import { Link } from 'react-router-dom';
// Default theme
import '@splidejs/react-splide/css';
import './home-mobile.css'


const theme = createTheme({
  typography: {
    fontFamily: ['"Bellota Text", sans-serif'],
    button: {
      textTransform: 'none',
    }
  },
  palette: {
    white: {
      main: '#FFFFFF',
      contrastText: '#242105',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },
    },
  },
});

function HomeMobile() { 
  return(
    <div className="Home">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bellota+Text:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=DM+Serif+Text:ital@0;1&family=MonteCarlo&display=swap');
      </style>
      <div className="home-mobile-Logo">
        <div>
          <img src={logo} className="home-mobile-logo-image" alt="logo" />
        </div>
        <div>
          Est. November 2020
        </div>
      </div>
      <div className="home-mobile-Area">
        <div className="home-mobile-About">
          <div className="Opener-mobile">
            <div className="Opener-mobile-Blurb-Column">
              <div className="home-mobile-About-Header">ABOUT</div>
              <div className="Opener-mobile-Blurb">
                Welcome to Love & Hope Co., your trusted destination for ordained wedding officiants in Michiana. At Love & Hope Co., we firmly believe that love is love, and we are here to embrace and celebrate every unique love story that comes our way.
              </div>
              <div className="Opener-mobile-Blurb">
                With our passion for creating unforgettable moments, we specialize in crafting intimate ceremonies that reflect your personal journey and highlight the love you share. Whether you envision a non-religious service or a faith-based celebration, we are dedicated to accommodating your individual preferences and ensuring that your wedding day is a true reflection of your love and commitment.
              </div>
            </div>
            <div className="home-mobile-Comments">
              <CommentsMobile />
            </div>
          </div>
          <div className="home-mobile-Blurb">
            Are you dreaming of an enchanting elopement or an intimate gathering? Love & Hope Co. is here to make your dreams come true. We specialize in curating magical experiences that transport you and your loved ones to a realm of pure love and joy. We understand the importance of every detail and work diligently to create an atmosphere that is as beautiful and unique as your love story.
          </div>
          <div className="home-mobile-Blurb">
            No matter the theme or style you envision for your special day, we are committed to bringing your vision to life. Whether you desire a themed wedding that celebrates your shared passions or a more traditional service that honors timeless traditions, our team is dedicated to delivering a personalized and heartfelt ceremony that resonates with you and your guests.
          </div>
          <div className="home-mobile-Slideshow">
            <SlideshowMobile />
          </div>
          <div className="home-mobile-Blurb">
            At Love & Hope Co., we are honored to be part of your love story. We approach every wedding with a deep sense of respect, understanding, and inclusivity. We welcome couples from all backgrounds and orientations, ensuring that every couple feels valued, supported, and celebrated. Love knows no boundaries, and we are here to champion that belief.
          </div>
          <div className="home-mobile-Blurb">
            Let us join you on this incredible journey of love, and together, we will create a wedding ceremony that is as unique and beautiful as your love story. Contact us today to begin planning your unforgettable day filled with love, hope, and cherished memories that will last a lifetime.
          </div>
          <div className="home-mobile-Blurb">
            <div className="home-mobile-About-Bold">
              <b>Serving Illinois, Indiana, and Michigan.</b>
            </div>
            <div className="home-mobile-About-Italics">
              Always willing to travel - nationwide or international!
            </div>
          </div>
          <div className="read-more-button-container">
            <ThemeProvider theme={theme}>
              <Link to="/about">
                <Button variant="contained" color="white">Read More</Button>
              </Link>
            </ThemeProvider>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeMobile;