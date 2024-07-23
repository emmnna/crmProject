import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Home, CreditCard, People, Group, AccountBox} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 320,
          boxSizing: 'border-box',
          backgroundColor: '#282c34', 
          color: '#ffffff' 
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/home"
          sx={{
            '&:hover': {
              backgroundColor: '#3a3f47', 
            }
          }}
        >
          <ListItemIcon>
            <Home sx={{ color: '#ffffff' }} /> 
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/credit"
          sx={{
            '&:hover': {
              backgroundColor: '#3a3f47', 
            }
          }}
        >
          <ListItemIcon>
            <CreditCard sx={{ color: '#ffffff' }} /> 
          </ListItemIcon>
          <ListItemText primary="Credits Simulations" />
        </ListItem>
         
      <ListItem
          button
          component={Link}
          to="/client"
          sx={{
            '&:hover': {
              backgroundColor: '#3a3f47', 
            }
          }}
        >
          <ListItemIcon>
            <Group sx={{ color: '#ffffff' }} /> 
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <Divider sx={{ backgroundColor: '#ffffff' }} />
        <ListItem
          button
          component={Link}
          to="/user"
          sx={{
            '&:hover': {
              backgroundColor: '#3a3f47', 
            }
          }}
        >
          <ListItemIcon>
            <AccountBox sx={{ color: '#ffffff' }} />
          </ListItemIcon>
          <ListItemText primary="My account" />
        </ListItem>
      </List>
      
    </Drawer>
  );
};

export default Sidebar;
