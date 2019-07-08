import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TopBar from '../../../components/TopBar'
import OpportunitiesData from '../../../dumbData/opportunities'
import { ProfileContext } from '../../../context/profileContext'
import { OpportunityContext } from '../../../context/homeContext'
import ApplyedJobs from '../../../components/employee/jobs/AppliedJobs'
import SavedJobs from '../../../components/employee/jobs/SavedJobs'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 2 * 3 }}>
      {children}
    </Typography>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
  },
}));


export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [opportunity, setOpportunity] = useContext(OpportunityContext)

  console.log(opportunity)
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }


  return (
    <div className={classes.root} >
      <TopBar></TopBar>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
        >
          <Tab label="Applied" />
          <Tab label="Saved" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >

        <TabContainer dir={theme.direction} >
          <ApplyedJobs />
        </TabContainer>

        <TabContainer dir={theme.direction}>
          <SavedJobs />
        </TabContainer>

      </SwipeableViews>

    </div>
  );
}