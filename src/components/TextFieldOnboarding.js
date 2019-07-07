import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { ProfileContext } from '../context/profileContext'



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function FilledTextFields() {
  const classes = useStyles();
  const [profile, setProfile] = useContext(ProfileContext)
  const [values, setValues] = useState({
    name: "",
    multiline: 'Controlled',
  });
  const [experience, setExperience] = useState({
    position: '',
    company: '',
    start: "",
    end: "",
  });
  const [searchingSetting, setSearchingSetting] = useState({
    location: '',
    field: ""
  })


  const handleChange = (name, input) => event => {
    event.persist()
    setValues({ ...values, [name]: event.target.value });
    setExperience(experience => {
      return { ...experience, position: values.name }
    });
    profile.experience = [experience]
  };

  const handleChangeCompany = () => event => {
    event.persist()
    setExperience(experience => {
      return { ...experience, company: event.target.value }
    });
    profile.experience = [experience]
  };
  const handleChangeStartExp = () => event => {
    event.persist()
    setExperience(experience => {
      return { ...experience, company: event.target.value }
    });
    profile.experience = [experience]

  };
  const handleChangeEndExp = () => event => {
    event.persist()
    setExperience(experience => {
      return { ...experience, company: event.target.value }
    });
    profile.experience = [experience]

  };
  const handleChangePlace = () => event => {
    event.persist()
    setSearchingSetting(searchingSetting => {
      return { ...searchingSetting, location: event.target.value }
    });
    profile.searchingSetting = searchingSetting
  };


  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="filled-name"
        label="Position"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name', 'position')}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Company Name"
        onChange={handleChangeCompany()}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Start (mm / yyyy )"
        onChange={handleChangeStartExp()}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="End or Current"
        onChange={handleChangeEndExp()}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <Typography component='h1' variant='h5'>
        In what area are you looking to find a job ?
        </Typography>
      <TextField
        required
        id="filled-date-input"
        label="City"
        onChange={handleChangePlace()}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />

    </form>
  );
}