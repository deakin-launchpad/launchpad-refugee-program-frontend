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
import Experience from '../../../components/employee/profile/Experience'
import Education from '../../../components/employee/profile/Education'
import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input';







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
    margin: 'auto'
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar></TopBar>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={1}>

              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardContent>
                    <div style={{ display: 'flex' }}>
                      <Grid item xs={5}>
                        <CardMedia
                          className={classes.media}
                          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBITLnZ3sR4MT3hvFOlphhQGwfsi8H2OH5EgLzKm6iR5McCZnt"}
                          title="avatar"
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Andrea Mele
                     </Typography>
                          <Typography className={classes.pos} color="textSecondary">
                            Melbourne
        </Typography>
                          <Typography variant="body2" component="p">
                            andrea@test.com
                  </Typography>
                        </div>

                      </Grid>
                      <Grid item xs={2}><Link to='/user/profile/EditMainDetails'><Icon>edit</Icon></Link></Grid>

                    </div>

                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={12}>
          <Education />
        </Grid>
        <Grid item xs={12}>
          <Link to='/user/profile/EditExperience'><Button className={classes.button}>Edit</Button></Link>
        </Grid>
      </Grid>
    </div>
  );
}