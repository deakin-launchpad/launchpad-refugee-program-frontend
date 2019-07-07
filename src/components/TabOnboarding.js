import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextFieldOnboarding from './TextFieldOnboarding'
import TextField from '@material-ui/core/TextField';
import { ProfileContext } from '../context/profileContext'


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [profile, setProfile] = useContext(ProfileContext)


  function handleChange(event, newValue) {
    setValue(newValue);

  }

  function handleChangeInput(event) {
    setProfile({
      ...profile, searchingSetting: {
        location: event.target.value
      },
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Typography component='h1' variant='h5'>
          First of all<br></br>
          Have you already had some work experience before ?
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab style={{ backgroundColor: 'transparent' }} label="Yes I have" />
          <Tab label="No, I am new" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>
        <Typography component='h1' variant='h5'>
          Great what was your recent position ?
        </Typography>
        <TextFieldOnboarding />
      </TabContainer>}
      {value === 1 && <TabContainer>
        <Typography component='h1' variant='h5'>
          Let's do this! In what area are you looking to find your first job ?
        </Typography>
        <TextField
          required
          id="filled-date-input"
          label="City"
          placeholder="City"
          className={classes.textField}
          margin="normal"
          variant="filled"
          onChange={handleChangeInput}
        />
      </TabContainer>}
    </div>
  );
}