import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu'
import { Home } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    height: '10vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to='/user/profile'><IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Avatar">
            <Avatar alt="Remy Sharp" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBITLnZ3sR4MT3hvFOlphhQGwfsi8H2OH5EgLzKm6iR5McCZnt"} className={classes.bigAvatar} />
          </IconButton></Link>
          <Link to='/user/employee/home'><IconButton><Home /></IconButton></Link>

          <SideMenu><MenuIcon /></SideMenu>
        </Toolbar>
      </AppBar>
    </div>
  );
}