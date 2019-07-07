/**
 *  Created by Nirav Bhimani
 **/

import React, { useState, useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import API from '../../../helpers/api'
import { LoginContext } from '../../../context/loginContext'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login() {
  const classes = useStyles()
  const [emailId, setEmailId] = useState('')
  const [password, setPassword] = useState('')
  const [setErrorStatus] = useState(false)
  const [
    setAccessToken,
    developerMode,
    setTriggerDeveloperMode
  ] = useContext(LoginContext)

  function validationCheck() {
    if (!developerMode) {
      const email = emailId
      const pwd = password
      // let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // let emailPatternTest = emailPattern.test(email);
      if (email && pwd) {
        API.loginUser({ emailId, password }, setAccessToken)
        return true
      } else if (email === undefined && pwd === undefined) {
        setErrorStatus(true)
        // this.toast("Email or password must not be empty!")
        return false
      } else if (!email) {
        setErrorStatus(true)
        // this.toast("Email must not be empty!")
        return false
      } else if (!email && email.length > 0) {
        setErrorStatus(true)
        // this.toast("Invalid email!")

        return false
      } else if (!pwd) {
        setErrorStatus(true)
        // this.toast("Password must not be empty!")
        return false
      }
    } else {
      window.localStorage.clear()
      setTriggerDeveloperMode(true)
    }
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            onChange={e => setEmailId(e.target.value)}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            onChange={e => setPassword(e.target.value)}
            autoComplete='current-password'
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={validationCheck}
          >
            Login
          </Button>
          <Typography component='h1' variant='h5'>
            Or
        </Typography>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >

            Signup with Email
          </Button>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Signup with Linkedin
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Typography variant='body2' color='textSecondary' align='center'>
          Developed by Deakin Launchpad team
        </Typography>
      </Box>
    </Container>
  )
}
