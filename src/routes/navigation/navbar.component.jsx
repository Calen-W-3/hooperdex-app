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
          
          <Button onClick={() => handleNavClick('/')} sx={{color: 'black'}}>Home</Button>
          <Button onClick={() => handleNavClick('/map')} sx={{color: 'black'}}>Map</Button>
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