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
  const [setOpportunity] = useContext(OpportunityContext)
  console.log(props)
  const { id, location, position, type, date, content, title } = props.data

  function apply(props) {
    console.log(props)
    setOpportunity({
      id, location, position, type, date, content, toogle: false
    })
    props.history.push('/user/application')
  }

  function goBack() {
    setOpportunity({
      id, location, position, type, date, content, toogle: false
    })
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper}>{title} </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button className={classes.button}>Share</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>{content}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withRouter(FullWidthGrid)