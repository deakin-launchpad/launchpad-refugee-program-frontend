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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Avatar">
            <Avatar alt="Remy Sharp" src={"https://image.flaticon.com/icons/svg/147/147144.svg"} className={classes.bigAvatar} />
          </IconButton>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>
    </div>
  );
}