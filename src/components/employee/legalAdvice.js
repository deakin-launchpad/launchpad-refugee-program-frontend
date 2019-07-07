import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LegalAdvices from '../../dumbData/resources/legalAdvices'
import { Button } from '@material-ui/core';
import { ResourcesContex } from '../../context/homeContext'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: '#e0e0e0',
    fontWeight: 'bold'
  },
  button: {
    border: '1px solid black',
  },
  goBack: {
    backgroundColor: '#f0f0f0',

  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [setResources] = useContext(ResourcesContex)

  function goBack() {
    setResources({
      legalAdvice: false, programs: false, organizations: false
    })
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button className={classes.goBack} onClick={() => { goBack() }}> Back</Button>
        </Grid>
        {console.log(LegalAdvices)}
        {LegalAdvices.legalAdvices.map(legalAdvice => {
          return (
            <Grid key={legalAdvice.id} item xs={12}>
              <Paper className={classes.paperTitle}>{legalAdvice.title} <br /> {legalAdvice.content}</Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}