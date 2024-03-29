import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import { AccessAlarm, AvTimer, Timer } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import useStyles from '../styles';  

const AlarmDrawer = () => {
  const classes = useStyles();
  const x = 1;
  const line = '';
  console.log(x);
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Alarm', 'Timer', 'Stopwatch'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index === 0 ? <AccessAlarm />: (index ===1 ? <Timer/>: <AvTimer/>)}</ListItemIcon>
                <Link style={{textDecoration:'none', color:'black'}} 
                  to={index === 0 ? '/' : (index === 1 ? '/timer': '/stopwatch')}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List> 
        </div>
      </Drawer>
    </>
  )
}

export default AlarmDrawer;