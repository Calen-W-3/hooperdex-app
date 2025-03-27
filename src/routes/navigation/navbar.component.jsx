import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Outlet, Link } from "react-router";

const Navbar = () => {
  return (

    <>
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
            HooperDex
          </Typography>
          
          <Button sx={{color: 'black'}}><Link to="/">Home</Link></Button>
          <Button sx={{color: 'black'}}><Link to="/map">Map</Link></Button>
          <Button sx={{color: 'black'}}>My Teams</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet />
    </>
  )
}

export default Navbar