/**
 *  Created by Nirav Bhimani
 **/

import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "views/main/login";
import Home from "views/main/home";
import UserHome from "views/employeeViews/home/Home.js";
import RegisterEmployer from "views/employerViews/register/register";
import RegisterEmployee from "views/employeeViews/register/register";
import OnBoarding from "views/employeeViews/register/onBoarding";
import Profile from "views/employeeViews/profile/profile";
import ApplicationView from "views/employeeViews/home/ApplicationView";
import EditEducation from "views/employeeViews/profile/EditEducation";
import EditExperience from "views/employeeViews/profile/EditExperience";
import EditMainDetails from "views/employeeViews/profile/EditMainDetails";
import AppliedJobs from "views/employeeViews/jobs/Jobs";
import { Button, Switch as SwitchComponent } from "@material-ui/core";

// Import Context
import { LoginContext } from "../context/loginContext";
// import { DeveloperModeContext } from "../context/developerModeContext";

export const AppRoutes = () => {
  const [
    loginStatus,
    setAccessToken,
    triggerDeveloperMode,
    setTriggerDeveloperMode,
    setLoginStatus
  ] = useContext(LoginContext);

  // const [developerMODE, setDeveloperMode] = useContext(DeveloperModeContext);
  const developerMODEToggle = () => {
    setTriggerDeveloperMode(!triggerDeveloperMode);
  };
  return (
    <div>
      <div>
        <SwitchComponent
          checked={triggerDeveloperMode}
          onChange={() => {
            developerMODEToggle();
          }}
        />
      </div>
      <Switch>
        {/* choose register path */}
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/user/application"
          render={() =>
            !loginStatus ? (
              <Redirect to={{ pathname: "/login" }} />
            ) : (
                <ApplicationView />
              )
          }
        />
        {/* Login */}
        <Route exact path="/login" render={() => <Login />} />} />
        {/* Register */}
        <Route
          exact
          path="/user/register/employer"
          render={() => <RegisterEmployer />}
        />
        <Route
          exact
          path="/user/register/employee"
          render={() => <RegisterEmployee />}
        />
        <Route
          exact
          path="/user/register/employee/onBoarding"
          render={() => <OnBoarding />}
        />
        {/*  Profile */}
        <Route
          exact
          path="/user/profile"
          render={() => (!loginStatus ? <Login /> : <Profile />)}
        />
        <Route
          exact
          path="/user/employee/home"
          render={() => (!loginStatus ? <Login /> : <UserHome />)}
        />
        <Route
          exact
          path="/user/profile/editExperience"
          render={() => (!loginStatus ? <Login /> : <EditExperience />)}
        />
        <Route
          exact
          path="/user/profile/editEducation"
          render={() => (!loginStatus ? <Login /> : <EditEducation />)}
        />
        <Route
          exact
          path="/user/profile/EditMainDetails"
          render={() => (!loginStatus ? <Login /> : <EditMainDetails />)}
        />
        } />
        {/*  Jobs */}
        <Route
          exact
          path="/user/appliedJobs"
          render={() => (!loginStatus ? <Login /> : <AppliedJobs />)}
        />
        } />
      </Switch>
    </div>
  );
};
