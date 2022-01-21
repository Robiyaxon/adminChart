import React from 'react';
import flag from "../../picture/flag.png";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import moduleName from './Flag.module.css'

export const Flag = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div >
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={moduleName.block}
    
      >
        {/* <NavLink to={'/rtg'} className={moduleName.Link} activeClassName={moduleName.LinkActive} > */}
          <MenuItem onClick={handleClose} style={{ color: "white", background:'#ffc222' }}> 
          Uzbekcha
          </MenuItem>
        {/* // </NavLink> */}
        {/* <NavLink to={'/sdfsd'} className={moduleName.Link} activeClassName={moduleName.LinkActive} > */}
          <MenuItem onClick={handleClose} style={{ color: "white" }}>
          Ruscha
          </MenuItem>
        {/* </NavLink> */}
      </Menu>
      <img src={flag} style={{ cursor: "pointer" }} onClick={handleClick} alt="" />
    </div>
  );
};
