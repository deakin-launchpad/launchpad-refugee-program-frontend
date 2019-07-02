/**
 *  Created by Nirav Bhimani
 **/

import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {Button, Switch as SwitchComponent } from '@material-ui/core'
import Login from 'views/employerViews/login/login'
import Home from 'views/home/home'
import Register from 'views/employerViews/register/register'
import { DeveloperModeContext} from 'context/developerModeContext'

// Import Context
import { LoginContext } from '../context/loginContext'

export const AppRoutes = () => {
  const [loginStatus] = useContext(LoginContext)
  const [developerMODE,setDeveloperMode] = useContext(DeveloperModeContext);
  
  const developerMODEToggle=()=>{
    if(developerMODE) setDeveloperMode(false)
    else setDeveloperMode(true)
  }
  return (
    <div>
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
    <div>
    <SwitchComponent
        checked={developerMODE}
        onChange={()=>{
          developerMODEToggle()}}
      />
    </div>
    </div>
  )
}
