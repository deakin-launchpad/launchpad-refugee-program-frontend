/**
 *  Created by Nirav Bhimani
 **/

import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from 'views/login/login';
import Home from 'views/home/home';

// Import Context
import { LoginContext } from '../context/loginContext';

export const AppRoutes = () => {
  const [loginStatus] = useContext(LoginContext);

  return (
    <Switch>
      <Route exact path='/login' render={() => (!loginStatus ? <Login /> : <Redirect to={{ pathname: '/' }} />)} />

      <Route
        exact
        path='/'
        render={() => (!loginStatus ? <Redirect to={{ pathname: '/login' }} /> : <Home />)}
      />
    </Switch>
  );
};
