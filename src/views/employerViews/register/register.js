<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
=======
import React, { useContext, useState, useEffect } from 'react'
import {IconButton,Avatar} from '@material-ui/core'
import ExitToApp from '@material-ui/icons/ExitToApp'
>>>>>>> d5836de67049c0572b41bff5ce3651fdc0b77b14
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import API from '../../../helpers/api'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { DeveloperModeContext} from '../../../context/developerModeContext'
import {DemoDataContext} from 'context/demodataContext'
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
  const [developerMODE,setDeveloperMode] = useContext(DeveloperModeContext);
  const [data, setData] = useContext(DemoDataContext);
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

  const [input1 , setinput1]= useState('');
  const [input2 , setinput2]= useState('');
  const [input3 , setinput3]= useState('');
  const [input4 , setinput4]= useState('');
  const [autofill , setautofill]= useState(false);
  
  
  function autoFill(value) {
        if(autofill == false)
          {
          setinput1('')
          setinput2('')
          setinput3('')
          setinput4('')
        }
        else 
        {
          setinput1(data.firstName)
          setinput2(data.lastName)
          setinput3(data.emailId)
          setinput4(data.password)
        }
      }
    
  useEffect(() => {
    console.log(name)
    autoFill()
  }, [autofill])
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
            value = {input1}
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
            value = {input2}
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
            value = {input3}
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
            value = {input4}
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

        {developerMODE && <Button align = "right" variant="contained" className={classes.button} onClick={() => setautofill(prevautofill => !prevautofill )}>
          Demo
        </Button>}
        
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
