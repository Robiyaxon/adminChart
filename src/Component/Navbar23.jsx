import { makeStyles } from '@material-ui/core/styles';
import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { Content } from './Header/Content/Content';
import MainNavbar from './MainNavbar';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: "#161c24",
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
export default function Navbar23(props) {
  const classes = useStyles();
  const screen2 = window.innerWidth < 800
  const [open, setOpen] = useState(screen2 ? false : true);
  if (!props.isAuth) {
    return <Redirect to={'/login'}/>}
  return (
    <div className={classes.root}>
      <MainNavbar isAuth={props.isAuth} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div >
          {Content(classes, open, props.isAuth)}
        </div>
      </main>
    </div>
  );
}