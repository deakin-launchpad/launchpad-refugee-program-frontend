import React, { useContext, useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'
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
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorStatus, setErrorStatus] = useState(false)

  function registerUser() {
    let data = {
      firstName: 'andrea',
      lastName: 'test',
      emailId: 'andreas@test.com',
      password: '1234',
      mobile: '04154739311',
      profile: {
        dob: '02/02/2019',
        gender: 'MALE'
      }
    }

    API.registerUser(data)
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
            name='surname'
            label='surname'
            type='text'
            id='surname'
            onChange={e => setSurname(e.target.value)}
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
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          // onClick={validationCheck}
          >
            Register with LinkedIn
          </Button>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={registerUser}
          >
            Register
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
