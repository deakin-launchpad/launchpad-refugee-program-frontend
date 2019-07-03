import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [industryField, setIndustryField] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setIndustryField(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div>
      <Typography component='h1' variant='h5'>
        Which industry are you intereste in ?
        </Typography>
      <form autoComplete="off">
        <Button className={classes.button} onClick={handleOpen}>
          Open the select
      </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Industry Field</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={industryField}
            onChange={handleChange}
            inputProps={{
              name: 'industryField',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Chemical industry</MenuItem>
            <MenuItem value={20}>Defense industry</MenuItem>
            <MenuItem value={30}>Energy industry</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
}
