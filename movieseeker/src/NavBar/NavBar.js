import { AppBar, Button, Box, Drawer, IconButton, Toolbar, Typography, createTheme } from "@mui/material";
import NavListDrawer from '../NavBar/NavListDrawer';
import { useState } from "react";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import MovieCreationSharpIcon from '@mui/icons-material/MovieCreationSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import { ThemeProvider } from "@emotion/react";


const navLinks = [
  {
    title: "Movies",
    path: "#",
    icon: <MovieCreationSharpIcon/>,
  },

  {
    title: "Shop",
    path: "#",
    icon:<ShoppingBagSharpIcon/>,
  }
]


 const theme =  createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: '#141414',
    },
    secondary: {
      main: '#f50057',
      contrastText: '#f10909',
    },
  },
})



export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
      
    <>

    <ThemeProvider theme={theme}>

      <AppBar position="fixed">
        <Toolbar>
            <IconButton
              color="inherit"
              size="large"
              onClick={()=> setOpen(true)}
              sx={{display:{xs: "flex", sm:"none"}}}
            >
              <MenuSharpIcon/>
            </IconButton>
            <Typography variant="h6" sx={{flexGrow: 1 }}>
            MovieSeeker
            
            </Typography>
            <Typography>
              <Box sx={{display:{xs: "none", sm:"block"}}}>
                {navLinks.map(item =>(
                <Button 
                  color="inherit" 
                  key={item.title}
                  component="a"
                  href={item.path}
                >
                    
                    {item.title}
                    {item.icon}
                </Button>
                ))}
              </Box>
            </Typography>
            
         </Toolbar>
      </AppBar>
      </ThemeProvider>

      <Drawer 
        open={open}
        anchor="left"
        onClose={()=>setOpen(false)}
      >
         <NavListDrawer navLinks = {navLinks}/>
      </Drawer>
    </>

  );
}