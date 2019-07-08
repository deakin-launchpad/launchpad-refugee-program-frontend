import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom'



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Icon className={classes.icon}>home</Icon>

        <Typography variant="h5" component="h3">
          Congratulation! <br></br>You are all set, start looking into new opportunities</Typography>
        <Link to='/user/employee/home'>Start</Link>

      </Paper>
    </div>
  );
}