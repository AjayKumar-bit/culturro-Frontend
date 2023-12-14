
import{Stack,Input,AppBar,Box,Toolbar,IconButton,Menu,Typography,Container,Button,MenuItem, colors} from '@mui/material'


import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import MenuIcon from '@mui/icons-material/Menu';


import MenuBookIcon from '@mui/icons-material/MenuBook';


import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';


// const pages = ['AddBook', 'EditDetails', 'Delete'];
const settings = ['Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();

const navigate = useNavigate();
const handleClick=()=>{
  console.log("hhdbabdh")
  navigate('/')
}

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser();
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuBookIcon sx={{ flexGrow: 'auto', display: { xs: 'none', md: 'flex' } }} />
          <Typography
            variant="h6"
            noWrap
          
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.003rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOOK.COM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ml:-3}}/>
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
              
                <MenuItem onClick={handleCloseNavMenu}
                component={Link} to='/addbook'>
                
                  <Typography textAlign="center">AddBook</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}
                component={Link} to='/updatebook'>
                  <Typography textAlign="center">UpdateDetails</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}
                component={Link} to='/deletebook'>
                  <Typography textAlign="center">DeleteBook</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
         
          <Typography
            variant="h9"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              ml: { xs: -1.5, sm: 3 },
            
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.01rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BOOK.COM
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              
              <Link to='/addbook'
                
                onClick={handleCloseNavMenu}
                sx={{ my: 10,  color: 'white' }}
              >
                AddBook
              </Link>

              <Link to='/Updatebook' 
               
                onClick={handleCloseNavMenu}
                sx={{ my: 10,  color: 'white' }}
              >
                UpdateBook
              </Link>

              <Link to='/deletebook'
                
                onClick={handleCloseNavMenu}
                sx={{ my: 10, color: 'white' }}
              >
                DeleteBook
              </Link>


            
          </Box>
          
        
         <Stack spacing={2} direction="row" alignItems="center"  sx={{
    width: { xs: '50%', sm: '70%', md: '30%' }, 
  }} >
         <Input sx={{width:"60%"}} placeholder='Search Books' color='primary'/>
         
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <SearchSharpIcon/>
            </IconButton>
         </Stack>
         <Box sx={{md:{my:'auto'},sm:{mx:'auto'}}}>
         
            
              
         </Box>


          <Box sx={{mr:-3}}>

          <Button  onClick={handleClick} variant="TEXT" sx={{width:"20%"}}>Login</Button>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar