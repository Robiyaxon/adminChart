import clsx from 'clsx'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import SimpleBadge from './Badge'
import LetterAvatars from '../Header/Avatar/Avatar'
import SearchButton from '../Header/HeaderSearch/HeaderSearch'
import style from './Navbar.module.css'
import '../../App.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Flag } from './Flag'
import AvatarContainer from '../Header/Avatar/AvatarContainer'

export function Header(classes, open, handleDrawerOpen) {
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
        <MenuItem onClick={handleClose} style={{ color: "white" }}>Roziya</MenuItem>
        <MenuItem onClick={handleClose} style={{ color: "white" }}>Fazilat</MenuItem>
        <MenuItem onClick={handleClose} style={{ color: "white" }}>Gulnura</MenuItem>
      </Menu>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, { [classes.hide]: open, })}>
            <MenuIcon />
          </IconButton>
          {open ?
            <div className={style.headerButton + " " + style.dNone}>
              <SearchButton bol={open} />
              <div className={style.BtnGroup}>
                <Flag />
                <SimpleBadge className={style.dNone} />
                {/* <SupervisorAccountIcon style={{cursor:"pointer"}} onClick={handleClick}/> */}
                <AvatarContainer />
              </div>
            </div>
            : <div className={style.headerButton}>
              <SearchButton />
              <div className={style.BtnGroup}>
                <Flag />
                <SimpleBadge />
                <SupervisorAccountIcon style={{ cursor: "pointer" }} onClick={handleClick} />
                <AvatarContainer className={style.dNone} />
              </div>
            </div>}
        </Toolbar>
      </AppBar>;
    </>
  )
}

export default Header;