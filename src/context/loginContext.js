/**
 *  Created by Nirav Bhimani
 **/

import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

export const LoginProvider = props => {
  const { children } = props;
  const [loginStatus, setLoginStatus] = useState(window.localStorage.getItem('loginStatus'));
  const [developerMode] = useState(true); // developer mode setting
  const [triggerDeveloperMode, setTriggerDeveloperMode] = useState(true);
  const [accessToken, setAccessToken] = useState('');
  const [checkLocalStorageLoginStatus] = useState(
    window.localStorage.getItem('loginStatus')
  );

  useEffect(
    () => {
      if (triggerDeveloperMode) {
        window.localStorage.setItem('developerMode', true);
        window.localStorage.setItem('loginStatus', true);
        setLoginStatus(true);
      } else if (checkLocalStorageLoginStatus) {
        setLoginStatus(true);
      }
    },
    [triggerDeveloperMode]
  );

  useEffect(
    () => {
      if (accessToken) {
        window.localStorage.setItem('accessToken', accessToken);
        window.localStorage.setItem('loginStatus', true);
        window.localStorage.setItem('developerMode', false);
        setLoginStatus(true);
      }
    },
    [accessToken]
  );

  return (
    <LoginContext.Provider
      value={[
        loginStatus,
        setAccessToken,
        developerMode,
        setTriggerDeveloperMode,
        setLoginStatus
      ]}
    >
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
  loginStatus: PropTypes.array,
  setLoginStatus: PropTypes.array
};
