/**
 *  Created by Nirav Bhimani
 **/

import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';

// Import Context
import { LoginContext } from '../../context/loginContext';

const Home = () => {
  const [redirectOnLogout, setRedirectOnLogout] = React.useState(false);
  const [
    loginStatus,
    setAccessToken,
    developerMode,
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
    </div>
  );
};

export default Home;
