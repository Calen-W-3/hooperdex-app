import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router";
// import backgroundImage from "../assets/landing-bg.jpg"; // Replace with actual image path

const AboutPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
     
      {/* Hero Section */}
      <Box
        sx={{
          // backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Container>
          <Grid container justifyContent="center" sx={{color: 'black'}}>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Discover Basketball Like Never Before
              </Typography>
              <Typography variant="h6" gutterBottom>
                Find your favorite teams, explore player stats, and navigate through arenas with ease.
              </Typography>
              <Button sx={{color: 'white',}} variant="contained" size="large">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/map">
                Explore Teams!
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
