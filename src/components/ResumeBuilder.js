import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import EventNote from '@material-ui/icons/EventNote';
import AddCircle from '@material-ui/icons/AddCircleOutline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }


  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Upload your resume or let's make a new one
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <AddCircle />
        </ListItemIcon>
        <ListItemText primary="Upload Menu " />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <EventNote />
        </ListItemIcon>
        <ListItemText primary="Introduction" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              // defaultValue="Bare"
              placeholder='Write an introduction here'
              margin="normal"
              variant="outlined"
              inputProps={{ 'aria-label': 'bare' }}
            />
          </ListItem>
        </List>
      </Collapse>
      {/* Experiences */}

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <EventNote />
        </ListItemIcon>
        <ListItemText primary="Skill" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              // defaultValue="Bare"
              placeholder='Add your skills'
              margin="normal"
              variant="outlined"
              inputProps={{ 'aria-label': 'bare' }}
            />
          </ListItem>
        </List>
      </Collapse>

      <ListItem >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Work Experiences" />
      </ListItem>
      {/* Instruction */}
      <ListItem >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Instruction" />
      </ListItem>
    </List>
  );
}