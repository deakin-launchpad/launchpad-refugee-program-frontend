import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import TopBar from '../../../components/TopBar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
  }
}));



export default function Experience(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.separator}>Experience</Paper>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardContent>
            <div style={{ display: 'flex' }}>
              <Typography className={classes.title} color="textPrimary" gutterBottom>
                Marketing
              </Typography>
              <Grid item xs={2}><Button><Icon>edit</Icon></Button></Grid>

              </div>
              <Typography className={classes.pos} color="textSecondary">
                Deakin University
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                Mar 2014 ~ Dec 2016
               </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                Melbourne
               </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
               </Typography>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}