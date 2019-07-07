import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import TopBar from '../../../components/TopBar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  separator: {
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(2),
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#e0e0e0',
    width: '100%',
    margin: 'auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function Inputs() {
  const classes = useStyles();


  function addExperience() {
    toast("Education Added !")
  }
  return (
    <div className={classes.root}>

      <TopBar></TopBar>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Paper className={classes.separator}>Education</Paper>
        </Grid>
        <Grid item xs={12}>
          <Input
            placeholder="School"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />        </Grid>
        <Grid item xs={12}>
          <Input
            placeholder="Major"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />        </Grid>
        <Grid item xs={12}>
          <Input
            placeholder="Degree"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="Start Date"
            type="date"
            className={classes.textField}
            placeholder="Start date"
            InputLabelProps={{
              shrink: true,
            }}
          />        </Grid>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="End Date"
            type="date"
            className={classes.textField}
            placeholder="Start date"
            InputLabelProps={{
              shrink: true,
            }}
          />   </Grid>
      </Grid>

      <ToastContainer autoClose={1000} />
      <Grid container spacing={6}>
        <Grid item xs={12}> <Button color="primary" variant="contained" onClick={() => { addExperience() }}>Add Education</Button></Grid>
        <Grid item xs={12}><Link to='/user/profile/EditExperience'>Go Back to  Work Experience</Link></Grid>
        <Grid item xs={12}><Link to='/user/profile/'>Done</Link></Grid>
      </Grid>

    </div>
  );
}