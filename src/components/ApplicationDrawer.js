// Node Modules
import React from 'react';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';


const ApplicationDrawer = () => (
  <div>
    <List>
      <ListItem button>
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
      <ListItem button>
        <ListItemIcon><SettingsIcon /></ListItemIcon>
        <ListItemText primary='Settings' />
      </ListItem>
    </List>
  </div>
);


export default ApplicationDrawer;
