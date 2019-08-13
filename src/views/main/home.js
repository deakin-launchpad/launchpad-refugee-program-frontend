/**
 *  Created by Nirav Bhimani
 **/

import React, { useState, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

// Import Context
import { LoginContext } from "../../context/loginContext";

const Home = () => {
  const [redirectOnLogout, setRedirectOnLogout] = useState(false);
  const [
    loginStatus,
    setAccessToken,
    triggerDeveloperMode,
    setTriggerDeveloperMode,
    setLoginStatus
  ] = useContext(LoginContext);

  function logoutUser() {
    window.localStorage.clear();
    setLoginStatus(false);
    setTriggerDeveloperMode(false);
    setRedirectOnLogout(true);
  }

  return (
    <div>
      Home page
      <IconButton color="inherit" onClick={() => logoutUser()}>
        <ExitToApp />
      </IconButton>
      <div className="container-reg">
        <IconButton color="inherit">
          <a href="http://localhost:3000/login"> Employer</a>
        </IconButton>
        <IconButton color="inherit">
          <Link to="/login" className="link-reg">
            {" "}
            Employee
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default Home;
