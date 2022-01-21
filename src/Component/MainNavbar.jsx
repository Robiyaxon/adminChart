import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import style from "./Navbar/Navbar.module.css"
import React from 'react';
import clsx from 'clsx'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AppsIcon from '@material-ui/icons/Apps';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink} from 'react-router-dom';
import { Header } from './Navbar/Header';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#161c24",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    backgroundColor: "#161c24",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    backgroundColor: "#161c24",
  },
  hide: {
    display: 'none',
    backgroundColor: "#161c24",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: "#161c24",
  },
  drawerOpen: {
    backgroundColor: "#161c24",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: "#161c24",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
const MainNavbar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const screen2 = window.innerWidth < 800
  const [open, setOpen] = React.useState(screen2 ? false : true);

  const NavbarMap = [
    { id: 0, to: "/Chart", title: "Bosh sahifa" },
    { id: 1, to: "/buyurtmalar", title: "Buyurtmalar" },
    { id: 2, to: "/kassa", title: "Kassa" },
    { id: 3, to: "/xodim", title: "Xodimlar" },
    props.isAuth
      ? { id: 4, to: "/chiqish", title: "Chiqish" }
      : { id: 4, to: "/login", title: "Login" }

  ]
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <CssBaseline />
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
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {Header(classes, open, handleDrawerOpen)}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <h1 className={style.logo}>IBF </h1>
          <IconButton style={{ color: "white" }} onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {!open ? null : <div className={style.UserContainer}>
            <div className={style.userBlock}>
              <>
                <h2> R</h2> <div>
                  <h6>To`xtayeva Robiya</h6>
                  <p>user</p>
                </div>
              </>
            </div>
          </div>}
          {NavbarMap.map((a) => (
            <React.Fragment key={a.id}>
              <NavLink onClick={screen2 ? handleDrawerClose : handleDrawerOpen} className={style.NavLinkStyle2} activeClassName={style.activeNavbar} to={a.to} >
                <ListItem className={style.NavLinkStyle3} button key={a.title}   >
                  <ListItemIcon>{a.id === 0 ? <AppsIcon className={style.NavLinkStyle} /> : null || a.id === 1 ? <AddShoppingCartIcon className={style.NavLinkStyle} /> : null || a.id === 2 ? <LocalAtmIcon className={style.NavLinkStyle} /> : null || a.id === 3 ? <SupervisorAccountIcon className={style.NavLinkStyle} /> : null || a.id === 4 ? <ExitToAppIcon className={style.NavLinkStyle} /> : null}  </ListItemIcon>
                  {a.title}
                </ListItem> </NavLink>
            </React.Fragment>))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default MainNavbar;