import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SimpleBadge() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
     <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} style={{color:"white"}}> Xabar yo`q!</MenuItem>
        <MenuItem onClick={handleClose}  style={{color:"white"}}>Eslatma!</MenuItem>
      </Menu>
     <div className={classes.root}>
      <Badge badgeContent={2} color="secondary">
        <NotificationsIcon style={{cursor:"pointer"}}  onClick={handleClick}/>
      </Badge>
    </div>
    </>
   
  );
}