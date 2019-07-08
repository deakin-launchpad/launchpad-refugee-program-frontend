/**
 *  Created by Nirav Bhimani
 **/

import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'views/employerViews/login/login'
import Home from 'views/home/home'
import RegisterEmployer from 'views/employerViews/register/register'
import RegisterEmployee from 'views/employeeViews/register/Register'
import OnBoarding from 'views/employeeViews/register/OnBoarding'
import Profile from 'views/employeeViews/profile/Profile'
import EmpolyeeHome from 'views/employeeViews/home/Home'
import ApplicationView from 'views/employeeViews/home/ApplicationView'
import EditEducation from '../views/employeeViews/profile/EditEducation'
import EditExperience from '../views/employeeViews/profile/EditExperience'
import EditMainDetails from '../views/employeeViews/profile/EditMainDetails'
import AppliedJobs from '../views/employeeViews/jobs/Jobs'





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
      <Route
        exact
        path='/user/application'
        render={() =>
          !loginStatus ? <Redirect to={{ pathname: '/login' }} /> : <ApplicationView />
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
      <Route exact path='/user/register/employer' render={() => <RegisterEmployer />} />
      <Route exact path='/user/register/employee' render={() => <RegisterEmployee />} />
      <Route exact path='/user/register/employee/onBoarding' render={() => <OnBoarding />} />


      {/*  Profile */}
      <Route exact path='/user/profile' render={() => !loginStatus ? <Login /> : <Profile />} />
      <Route
        exact
        path='/user/employee/home'
        render={() => !loginStatus ? <Login /> : <EmpolyeeHome />} />
      <Route
        exact
        path='/user/profile/editExperience'
        render={() => !loginStatus ? <Login /> : <EditExperience />} />
      <Route
        exact
        path='/user/profile/editEducation'
        render={() => !loginStatus ? <Login /> : <EditEducation />} />
      <Route
        exact
        path='/user/profile/EditMainDetails'
        render={() => !loginStatus ? <Login /> : <EditMainDetails />} />
      }
    />
    {/*  Jobs */}
      <Route
        exact
        path='/user/appliedJobs'
        render={() => !loginStatus ? <Login /> : <AppliedJobs />} />
      }
    />
    

    </Switch>

  )
}
