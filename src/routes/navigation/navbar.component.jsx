import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  //Add smooth scrolling to top of page
  const handleNavClick = (to) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(to);
    }
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#fff", zIndex: 1100, boxShadow: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
            HooperDex
          </Typography>
          

            <Button sx={{ color: 'black' }}><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></Button>
            <Button sx={{ color: 'black' }}><Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>Map</Link></Button>
            <Button sx={{ color: 'black' }}><Link to="/news-feed" style={{ textDecoration: "none", color: "inherit" }}>League News</Link></Button>

            {/* <Button sx={{color: 'black'}}>My Teams</Button> */}
          </Toolbar>
        </AppBar>

      <Toolbar />
    </Box>
    <Outlet />
    </>
  )
}

export default Navbar