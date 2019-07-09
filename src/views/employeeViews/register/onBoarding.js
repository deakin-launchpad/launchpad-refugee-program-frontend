import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SelectJob from "../../../components/SelectJob";
import ResumeBuilder from "../../../components/ResumeBuilder";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TabOnboard from "../../../components/TabOnboarding";
import Map from "../../../components/Map";
import AddPicture from "../../../components/AddPicture";
import EndOnBoarding from "../../../components/EndOnboarding";
import { ProfileContext } from "../../../context/profileContext";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 375,
    flexGrow: 1
  }
}));

export default function ProgressMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [profile, setProfile] = useContext(ProfileContext);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <div>
      {activeStep === 0 ? <TabOnboard /> : ""}
      {activeStep === 1 ? <SelectJob /> : ""}
      {activeStep === 2 ? <AddPicture /> : ""}
      {activeStep === 3 ? <EndOnBoarding /> : ""}
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        activeStep={activeStep}
        className={classes.root}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
