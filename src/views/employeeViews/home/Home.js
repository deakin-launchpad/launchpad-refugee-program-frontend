import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import {
  Tabs,
  Tab,
  Switch,
  Typography,
  Collapse,
  makeStyles,
  useTheme
} from "@material-ui/core";
import TopBar from "components/TopBar";
import Opportunity from "components/employee/Opportunity";
import OpportunitiesData from "dumbData/opportunities";
import {
  OpportunityContext,
  NewsContext,
  ResourcesContex
} from "context/homeContext";
import News from "components/employee/News";
import NewsSinglePage from "components/employee/NewsSinglePage";
import OpporunitySingleFullPage from "components/employee/OpportunitySingleFullPage";
import Resources from "components/employee/resources";
import LegalAdvice from "components/employee/LegalAdvice";
import Organizations from "components/employee/organizations";
import Programs from "components/employee/programs";
import SearchCurtain from "components/employee/SearchCurtain";
import MaterialTable from "material-table";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 2 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100vw"
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [opportunity] = useContext(OpportunityContext);
  const [news] = useContext(NewsContext);
  const [resources] = useContext(ResourcesContex);
  const [searchMenu, setSearchMenu] = useState(true);
  const [checked, setChecked] = React.useState(false);

  const [curtain, setCurtain] = useState({
    height: "0vh",
    transition: "height .5s",
    overflow: "hidden",
    display: "flex",
    padding: "0 20px",
    marginTop: "2px"
  });

  function handleChangeCollapse() {
    setChecked(prev => !prev);
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleChangeIndex(index) {
    setValue(index);
  }

  useEffect(() => {
    return () => {
      setChecked(false);
    };
  }, [value]);

  // const [state, setState] = React.useState({
  //   columns: [
  //     { title: "Name", field: "name" },
  //     { title: "Surname", field: "surname" }
  //   ],
  //   data: [
  //     { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
  //     {
  //       name: "Zerya Betül",
  //       surname: "Baran",
  //       birthYear: 2017,
  //       birthCity: 34
  //     }
  //   ]
  // });

  return (
    <div className={classes.root}>
      <TopBar />
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="standard"
        >
          <Tab
            onClick={() => {
              handleChangeCollapse();
            }}
            label="Search"
          />
          <Tab label="News" />
          <Tab label="Resources" />
        </Tabs>
      </AppBar>

      <Collapse in={checked}>
        <SearchCurtain />
      </Collapse>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* Search tab */}

        <TabContainer dir={theme.direction}>
          {!opportunity.toogle ? (
            <div>
              <Typography style={{ backgroundColor: "#e0e0e0" }}>
                We found {OpportunitiesData.opportunities.length} opportunities
              </Typography>
              {/* <MaterialTable
                title="Editable Example"
                columns={state.columns}
                data={state.data}
                options={{
                  search: false
                }}
              /> */}

              {OpportunitiesData.opportunities.map(opportunity => {
                return (
                  <div key={opportunity.id} style={{ margin: "8px 0" }}>
                    <Opportunity data={opportunity} />
                  </div>
                );
              })}
            </div>
          ) : (
            <OpporunitySingleFullPage data={opportunity} />
          )}
        </TabContainer>

        <TabContainer dir={theme.direction}>
          {!news.toogle ? (
            <div>
              <div key={news.id} style={{ margin: "8px 0" }}>
                <News />
              </div>
            </div>
          ) : (
            <NewsSinglePage />
          )}

          {/* : <NewsSinglePage data={opportunity} /> */}
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {!resources.legalAdvice &&
          !resources.programs &&
          !resources.organizations ? (
            <Resources />
          ) : resources.legalAdvice ? (
            <LegalAdvice />
          ) : resources.programs ? (
            <Programs />
          ) : resources.organizations ? (
            <Organizations />
          ) : (
            ""
          )}
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
