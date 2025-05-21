import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router";
import Logo from '../../assets/hooperdex_logo.png'
import Background from '../../assets/bball_background.jpg'

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
          py: {xs: 4}
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
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1}}>
              <Button sx={{color: 'white', backgroundColor: '#B21D16'}} variant="contained" size="large">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/news-feed">
                Explore League News!
                </Link>
              </Button>
              <Button sx={{color: 'white', backgroundColor: '#B21D16'}} variant="contained" size="large">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/map">
                Explore Teams List!
                </Link>
              </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: { xs: 5, md: 8 }}}>
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom align="center" sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
              mb: { xs: 3, md: 4 } // More margin on larger screens
            }}>
            About HooperDex
          </Typography> 

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_o6UDRC4RrE?si=R707nOpylduoxFBd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
          </Box>

        
        <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile, side by side on desktop
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 3, md: 4 }
        }}>
            <Box sx={{ 
              width: { xs: '80%', sm: '60%', md: '40%' },
              textAlign: 'center', // Center logo on all screens
              mb: { xs: 2, md: 0 } // Add bottom margin on mobile
            }}>
              <img 
              style={{ 
                  width: '100%', 
                  maxWidth: '300px', 
                  height: 'auto' 
                }} 
                src={Logo} 
                alt="HooperDex Logo"/>
            </Box>
            
            <Box sx={{ width: '40%', flexShrink: 0 }}>
              <Typography variant="h3" sx={{
                mb: { xs: 2, md: 3 },
                textAlign: 'center',
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
              }}>Welcome!</Typography>
              <Typography variant="body1"
              sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: { xs: 1.6, md: 1.8 },
                  textAlign: { xs: 'center', md: 'left' } // Center text on mobile
                }}>
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
