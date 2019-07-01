import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SelectJob from '../../../components/SelectJob'
import ResumeBuilder from '../../../components/ResumeBuilder'
import { Link } from 'react-router-dom'
import Map from '../../../components/Map'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 375,
    flexGrow: 1,
  },
}));


export default function ProgressMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    console.log(activeStep)
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <div>
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
            Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
        </Button>
        }
      />


      {activeStep === 0 ?
        <SelectJob></SelectJob> : ''}
      {activeStep === 1 ? <ResumeBuilder></ResumeBuilder> : ''}
      {activeStep === 2 ? <Map></Map> : ''}
      {activeStep === 3 ? <Button><Link to='/user/profile'>Save</Link></Button> : ''}

    </div>
  );
}