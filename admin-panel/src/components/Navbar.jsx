import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const navItems = [
  { text: 'Clientes', icon: <PeopleIcon />, to: '/clientes' },
  { text: 'Proveedores', icon: <BusinessIcon />, to: '/proveedores' },
  { text: 'Usuarios', icon: <GroupIcon />, to: '/usuarios' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2 }}>
        <StorefrontIcon sx={{ mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Admin Panel
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={RouterLink} to={item.to} selected={location.pathname === item.to}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <ListItemButton component={RouterLink} to="/logout">
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Cerrar Sesión" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" color="primary" sx={{ width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <StorefrontIcon sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }} />
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/home"
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: '.5px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Admin Panel
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={RouterLink}
              to={item.to}
              sx={{ fontWeight: location.pathname === item.to ? 700 : 400, borderBottom: location.pathname === item.to ? '2px solid #fff' : 'none' }}
            >
              {item.text}
            </Button>
          ))}
          <Button
            color="inherit"
            component={RouterLink}
            to="/logout"
            startIcon={<LogoutIcon />}
            sx={{ ml: 2, backgroundColor: 'rgba(255,255,255,0.1)', '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' }, borderRadius: 2, px: 2 }}
          >
            Cerrar Sesión
          </Button>
        </Box>
      </Toolbar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 