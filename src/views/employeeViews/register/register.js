import React, { useState, useEffect, useContext } from 'react'
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
import { Link } from 'react-router-dom'
import { ProfileContext } from '../../../context/profileContext'
// import AutoFill from '../../../components/switchAutofill'

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
    alignItems: 'center'
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

export default function RegisterUser() {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useContext(ProfileContext)

  function registerUser() {
    setProfile({
      firstName: name, lastName: lastName, password: password, email: email, img: "", experience: [], education: [], appliedPosition: [], savedPosition: []
    })
  }

  useEffect(() => {
    console.log(name)
  }, [])
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='name'
            name='name'
            autoComplete='name'
            onChange={e => setName(e.target.value)}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='LastName'
            label='LastName'
            type='text'
            id='LastName'
            onChange={e => setLastName(e.target.value)}
            autoComplete='surname'
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='email'
            label='email'
            type='email'
            id='email'
            onChange={e => setEmail(e.target.value)}
            autoComplete='Email'
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

          <Link to='/user/onBoarding' className='login-btn'>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            // onClick={validationCheck}
            >Register with Linkedin</Button>
          </Link>


          <Link to='/user/register/employee/onBoarding' className='login-btn'>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={registerUser}
            >Register</Button>
          </Link>

        </form>
      </div>
      <Box mt={5}>
        <Typography variant='body2' color='textSecondary' align='center'>
          Developed by Deakin Launchpad team
        </Typography>
      </Box>
      {/* <AutoFill></AutoFill> */}
    </Container>
  )
}
