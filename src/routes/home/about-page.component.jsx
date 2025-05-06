import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router";
import Logo from '../../assets/hooperdex_logo.png'
import Background from '../../assets/bball_background.jpg'
// import backgroundImage from "../assets/landing-bg.jpg"; // Replace with actual image path

const AboutPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
     
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Container>
          <Grid container justifyContent="center" sx={{textShadow: '2px 4px 4px black'}}>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Discover Basketball Like Never Before
              </Typography>
              <Typography variant="h6" gutterBottom>
                Find your favorite teams, explore team stats, and navigate through arenas with ease.
              </Typography>
              <Button sx={{color: 'white', backgroundColor: '#B21D16'}} variant="contained" size="large">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/map">
                Explore Teams List!
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 8}}>
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center">
            About HooperDex
          </Typography> 

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_o6UDRC4RrE?si=R707nOpylduoxFBd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
          </Box>

        
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '50px'
        }}>
            <Box>
              <img style={{ width: '50%', height: '50%' }} src={Logo} />
            </Box>
            
            <Box sx={{ width: '40%', flexShrink: 0 }}>
              <Typography variant="h3" sx={{mb: 3, textAlign: 'center'}}>Welcome!</Typography>
              <Typography variant="h6">
                You've heard of a "PokeDex" right!? Well this is one for the sport of basketball! This application was inspired by my passion for the sport, and I wanted to share that enthusiasm with others by
                making it easy to explore teams! If you're unsure of who to support, no worries! You can get started by heading to the Map page 
                and searching for a team closest to you. You can find links to their highlights, team website, and more! 

                I hope you enjoy the app-stay tuned for some exciting new features coming soon! 
              </Typography>
            </Box>
          </Box>

        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
