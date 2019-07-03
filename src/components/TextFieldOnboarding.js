import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



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
  const [values, setValues] = React.useState({
    name: 'Software Developer',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="filled-name"
        label="filled-required"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Company Name"
        defaultValue="Apple"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Start (mm / yyyy )"
        defaultValue="11/2010"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="End or Current"
        defaultValue="Current"
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
        defaultValue="Melbourne"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />

    </form>
  );
}