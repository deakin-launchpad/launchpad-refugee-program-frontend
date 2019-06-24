/**
 *  Created by Nirav Bhimani
 **/

import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'views/employerViews/login/login'
import Home from 'views/home/home'
import Register from 'views/employerViews/register/register'

// Import Context
import { LoginContext } from '../context/loginContext'

export const AppRoutes = () => {
  const [loginStatus] = useContext(LoginContext)

  return (
    <Switch>
      {/* home */}
      <Route
        exact
        path='/'
        render={() =>
          !loginStatus ? <Redirect to={{ pathname: '/login' }} /> : <Home />
        }
      />

      {/* Login */}
      <Route
        exact
        path='/login'
        render={() =>
          !loginStatus ? <Login /> : <Redirect to={{ pathname: '/' }} />
        }
      />

      {/* Register */}
      <Route exact path='/user/register' render={() => <Register />} />

      {/* Create Profile */}
      {/* <Route exact path='/user/createProfile' render={() => <CreateProfile />} /> */}

    </Switch>

  )
}
