import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { ButtonGroup } from '@mui/material';

const pages = ['How it works', 'Why Inclusion', 'FAQ', 'About us'];

 
const btnSignIn = '#f4770a'

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    <AppBar position="static" sx={{ backgroundColor: 'white',  width: 1, m: 0 }}>
     
      <Container maxWidth='xl'>
          
        <Toolbar sx={{ justifyContent: 'space-between'}} disableGutters  >
       
           <Box sx={{ display: 'flex', alignItems: 'center'}} >
            <img src={logo} alt='jolint logo' />
          </Box >
         
          <Box sx={{alignItems: 'center', ml: 10, flexGrow: 1, display: { xs: 'flex', md: 'none',  } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    
                    textAlign="center"
                  >
                    
                  <Link to={`/${page.replace(/\s+/g, '-')}`} style={{color: 'black'}}>
                    {page}
                    </Link>

                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1 , ml:10, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2 ,color: 'white', display: 'block' }}
              >
                <Link to={`/${page.replace(/\s+/g, '-')}`} style={{color: 'black'}}>
                {page}
                </Link>
              </Button>
            ))}
          </Box>
          <ButtonGroup
  disableElevation
  variant="text"
  aria-label="Disabled elevation buttons"
>
          
         <Button
        style={{ backgroundColor: btnSignIn, color: 'white', borderRadius: 10}}
        variant="contained"
        onClick={() => {
          // Handle button click
        }}
            >
              consent form
            </Button>
          </ButtonGroup>

        </Toolbar>
      </Container>
      </AppBar>
    
  );
}
export default ResponsiveAppBar;