import React, { useContext } from 'react';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TopBar from '../../../components/TopBar'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import { withRouter } from 'react-router-dom';
import SuccessModal from '../../../components/employee/SuccessApplication'
import { OpportunityContext } from '../../../context/homeContext'
import { ProfileContext } from '../../../context/profileContext'
import { red } from '@material-ui/core/colors';






const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '80vw',

  },
  ".MuiInputBase-root": {
    height: "100% !important"
  },

  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  icon: {
    margin: theme.spacing(2),
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: red[800],
    },
  }
}));


function FilledTextFields(props) {
  const [opportunity, setOpportunity] = useContext(OpportunityContext)
  const [profile, setProfile] = useContext(ProfileContext)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    name: 'Software Developer',
    age: '',
    multiline: 'centered',
    rows: 5
  });


  function handleClickOpen() {
    console.log('opportunity =====>', opportunity)
    setProfile(profile => {
      return { ...profile, appliedPositions: [{ id: 1 }, { id: 2 }] }
    })
    console.log('profile =====>', profile)
  }

  function handleClickGoback() {
    props.history.push('/user/employee/home')
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };



  return (
    <div>
      <TopBar />
      <Button color="inherit" onClick={() => handleClickGoback()} style={{ backgroundColor: '#e0e0e0', width: '100vw', marginTop: '5px', borderRadius: '0' }}>
        Back to the list
    </Button>
      <Typography style={{ backgroundColor: 'rgb(243, 243, 243)', height: '10vh', lineHeight: '10vh', paddingLeft: '1rem' }}>Great, Let's apply for this job</Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <Typography style={{ backgroundColor: '#e0e0e0S', paddingLeft: '1rem', fontSize: '14px' }}>Write or paste your cover letter</Typography>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100vw', height: '30vh' }}>
          <TextField
            style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
            required
            id="filled-name"
            label=""
            className={classes.textField}
            onChange={handleChange('name')}
            margin="normal"
            variant="filled"
            placeholder="type here"
          />
        </div>
      </form>
      <div style={{ display: 'flex' }}>
        <Icon className={classes.icon} color="primary">add_circle</Icon><Typography>Attach Your Resume</Typography>
      </div>
      <Typography>or </Typography>
      <Button color='primary' onClick={handleClickOpen}>Apply with your Profile</Button>
      <div style={{ textAlign: 'center' }}>
        <SuccessModal data={props}></SuccessModal>
      </div>
    </div >
  );
}


export default withRouter(FilledTextFields)



