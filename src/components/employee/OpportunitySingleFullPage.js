import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core'
import { OpportunityContext } from '../../context/homeContext'
import { ProfileContext } from '../../context/profileContext'
import { withRouter } from 'react-router-dom';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  button: {
    border: '1px solid grey'
  }
}));

function FullWidthGrid(props) {
  const classes = useStyles();
  const [opportunity, setOpportunity] = useContext(OpportunityContext)
  const [profile, setProfile] = useContext(ProfileContext)


  const { id, location, position, type, date, content } = props.data

  function apply(props) {
    setOpportunity({
      id, location, position, type, date, content, toogle: false
    })
    props.history.push('/user/application')
  }

function save(props) {
  setProfile(profile => {
    return {...profile, savedPositions: [{ id: 2 }, { id: 3 }]}
  })
}
  function goBack() {
    setOpportunity({
      id, location, position, type, date, content, toogle: false
    })
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button className={classes.paper} onClick={() => { goBack(props) }}>Go back to the list</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{position} <br /> {location} <br /> {date}</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{content}</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button className={classes.button}onClick={() => { save(props) }}>Save</Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button className={classes.button} onClick={() => { apply(props) }}>Apply</Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(FullWidthGrid)
