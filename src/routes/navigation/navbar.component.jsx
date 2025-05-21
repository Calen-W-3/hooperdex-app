import { AppBar, Toolbar, Typography, Button, Box, Drawer, useTheme, useMediaQuery, List, ListItem, ListItemText, IconButton} from "@mui/material";
import { useState } from "react";
import { Outlet, Link} from "react-router";
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const navList = [
    {label: "Home", path: "/"},
    {label: "Teams List", path: "/map"},
    {label: "League News", path: "/news-feed"},
  ];


  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#fff", zIndex: 1100, boxShadow: 2 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
            HooperDex
          </Typography>

          {isMobileScreen ? (
              <>
                <IconButton onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
                <Drawer open={drawerOpen} onClose={handleDrawerClose} anchor="right">
                  <Box
                    sx={{ width: 250 }}
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}>
                      <List>
                      {navList.map((navItem) => (
                        <ListItem component={Link} key={navItem.label}>
                          <Link 
                          to={navItem.path}
                          style={{ textDecoration: "none", color: "inherit" }}
                          >
                            <ListItemText primary={navItem.label}  sx={{ color: 'black' }}/>
                          </Link>
                        </ListItem>
                      ))}
                      </List>
                  </Box>
                </Drawer>
              </>
          ) : (
            <>
            
            <Button sx={{ color: 'black' }}><Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Home</Link></Button>
            <Button sx={{ color: 'black' }}><Link to="/map" style={{ textDecoration: "none", color: "inherit" }}>Teams List</Link></Button>
            <Button sx={{ color: 'black' }}><Link to="/news-feed" style={{ textDecoration: "none", color: "inherit" }}>League News</Link></Button>
            </>
          )}
          

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