import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import TopBar from "../../../components/TopBar";
import Opportunity from "../../../components/employee/Opportunity";
import OpportunitiesData from "../../../dumbData/opportunities";
import {
  OpportunityContext,
  NewsContext,
  ResourcesContex
} from "../../../context/homeContext";
import News from "../../../components/employee/News";
import NewsSinglePage from "../../../components/employee/NewsSinglePage";
import OpporunitySingleFullPage from "../../../components/employee/OpportunitySingleFullPage";
import Resources from "../../../components/employee/Resources";
import LegalAdvice from "../../../components/employee/legalAdvice";
import Organizations from "../../../components/employee/organizations";
import Programs from "../../../components/employee/programs";

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
  const [searchMenu, setSearchMenu] = useState(false);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  function openSearch() {
    searchMenu ? setSearchMenu(false) : setSearchMenu(true);
  }

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
              openSearch();
            }}
            label="Search"
          />
          <Tab label="News" />
          <Tab label="Resources" />
        </Tabs>
      </AppBar>
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
