import React from 'react';
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  MenuIcon,
  NotificationsIcon,
  AccountCircle,
  MoreIcon,
} from '../../icons/index';
// import AppBarBadge from './AppBarBadge';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const accountsMenu = [
    {
      id: 1,
      name: 'Profile',
    },
    {
      id: 2,
      name: 'Account',
    },
    {
      id: 3,
      name: 'Logout',
    },
  ];

  const renderNotification = (
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="inherit"
    >
      <Badge badgeContent={17} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );

  const renderAccountCircle = (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls={menuId}
      aria-haspopup="true"
      onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {accountsMenu.map((account) => (
        <MenuItem key={account.id} onClick={handleMenuClose}>
          {account.name}
        </MenuItem>
      ))}
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {renderNotification}
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        {renderAccountCircle}
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{display: {xs: 'none', sm: 'block'}, mr: 7}}
          >
            Squared Printing
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            {/* this will show the menu at the left leftside of the */}
            <MenuIcon />
          </IconButton>
          {/*this will send the icons to the right portion of the appbar */}
          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            {renderNotification}
            {renderAccountCircle}
          </Box>
          <Box sx={{display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Header;
