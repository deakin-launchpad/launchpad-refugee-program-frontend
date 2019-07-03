import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


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
        <Icon className={classes.icon}>add_circle</Icon>

        <Typography variant="h5" component="h3">
          Add your profile Picture        </Typography>
        <Grid container justify="center" alignItems="center">
          <Avatar alt="Remy Sharp" src={"https://image.flaticon.com/icons/svg/147/147144.svg"} className={classes.bigAvatar} />
        </Grid>
        <Typography variant="h5" component="h3">
          Or add your Profile Picture from Linkedin    </Typography>
          <Icon className={classes.icon}>add_circle</Icon>


      </Paper>
    </div>
  );
}