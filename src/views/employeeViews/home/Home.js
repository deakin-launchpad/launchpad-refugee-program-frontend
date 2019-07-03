import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TopBar from '../../../components/TopBar'
import Opportunity from '../../../components/employee/Opportunities'
import OpportunitiesData from '../../../dumbData/opportunities'
import { Button } from '@material-ui/core';




function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
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
  const [data, setData] = useState()
  const [temp, setTemp] = useState(true);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  // function handleData(id) {
  //   OpportunitiesData.opportunities.map(opportunity => {
  //     showOpportunity = {id, content, type, date, location, position }
  //     opportunity.id === id ? 
  //   })
  // }
  function toggle() {
    if (temp) setTemp(false)
    else setTemp(true)
  }

  return (
    <div className={classes.root}>
      <TopBar></TopBar>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
        >
          <Tab label="Search" />
          <Tab label="News" />
          <Tab label="Resources" />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* Search tab */}


        {temp && <TabContainer dir={theme.direction}>
          <Typography style={{ backgroundColor: '#e0e0e0' }}>We found {OpportunitiesData.opportunities.length} opportunities</Typography>
          {OpportunitiesData.opportunities.map(opportunity => {
            return (
              <div key={opportunity.id}>
                <Opportunity data={opportunity} />

              </div>
            )
          })}
        </TabContainer>}

        {!temp &&
          <div>ok</div>

        }

        <TabContainer dir={theme.direction}>Item Two</TabContainer>
        <TabContainer dir={theme.direction}>Item Three</TabContainer>
      </SwipeableViews>

      <Button onClick={() => {
        toggle()
      }}>TOGGLE</Button>
    </div>
  );
}