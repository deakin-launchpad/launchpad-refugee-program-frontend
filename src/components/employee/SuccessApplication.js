import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { withRouter } from 'react-router-dom';
import { OpportunityContext } from '../../context/homeContext'
import { ProfileContext } from '../../context/profileContext'



const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

function MaxWidthDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const [opportunity, setOpportunity] = useContext(OpportunityContext)
  const [profile, setProfile] = useContext(ProfileContext)
  const { id, location, position, type, date, content } = opportunity



  function handleClickOpen() {
    // profile.appliedJobs.map(job => {
    //   if (job.id === id) {
    //     console.log('you have already applied for this job')
    //   }
    // })

    setProfile({
      id: "",
      location: "",
      email: "",
      introduction: "",
      avatar: "",
      experience: [],
      education: [],
      volunteering: [],
      appliedJobs: [opportunity],
      savedJobs: [],
    })

    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    props.history.push('/user/employee/home')

  }

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Apply
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Congratulation!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You have applied for this position. <br /> Good Luck
          </DialogContentText>
          <form className={classes.form} noValidate>


          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default withRouter(MaxWidthDialog)
