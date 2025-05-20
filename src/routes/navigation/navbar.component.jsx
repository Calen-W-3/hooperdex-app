import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Outlet, Link} from "react-router";

const Navbar = () => {

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