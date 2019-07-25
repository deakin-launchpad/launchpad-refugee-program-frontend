import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";
import { ProfileContext } from "../context/profileContext";
import { LoginContext } from "../context/loginContext";
import { DemoDataContext } from "../context/demodataContext";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyPosition: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
}));

export default function FilledTextFields() {
  const classes = useStyles();
  const [
    loginStatus,
    setAccessToken,
    triggerDeveloperMode,
    setTriggerDeveloperMode,
    setLoginStatus
  ] = useContext(LoginContext);
  const [data, setData] = useContext(DemoDataContext);
  const [profile, setProfile] = useContext(ProfileContext);
  const [input, setInput] = useState({
    inputData1: "",
    inputData2: "",
    inputData3: "",
    inputData4: "",
    inputData5: ""
  });
  const [autofill, setAutofill] = useState(false);
  const [values, setValues] = useState({
    name: "",
    multiline: "Controlled"
  });
  const [experience, setExperience] = useState({
    position: "",
    company: "",
    start: "",
    end: ""
  });
  const [searchingSetting, setSearchingSetting] = useState({
    location: "",
    field: ""
  });

  function autoFill() {
    if (autofill == false) {
      setInput("");
    } else {
      setInput({
        inputData1: data.position,
        inputData2: data.companyName,
        inputData3: data.searchSetting.location
      });
    }
  }

  const handleChange = (name, input) => event => {
    event.persist();
    setValues({ ...values, [name]: event.target.value });
    setExperience(experience => {
      return { ...experience, position: values.name };
    });
    setProfile(profile => {
      return { ...profile, experience: experience };
    });
  };

  const handleChangeCompany = () => event => {
    event.persist();
    console.log(profile);
    setExperience(experience => {
      return { ...experience, company: event.target.value };
    });
    setProfile(profile => {
      return { ...profile, experience: experience };
    });
  };

  const handleChangeStartExp = () => event => {
    event.persist();
    setExperience(experience => {
      return { ...experience, start: event.target.value };
    });
    setProfile(profile => {
      return { ...profile, experience: experience };
    });
  };

  const handleChangeEndExp = () => event => {
    event.persist();
    setExperience(experience => {
      return { ...experience, end: event.target.value };
    });
    setProfile(profile => {
      return { ...profile, experience: experience };
    });
  };
  const handleChangePlace = () => event => {
    event.persist();
    setSearchingSetting(searchingSetting => {
      return { ...searchingSetting, location: event.target.value };
    });
    setProfile(profile => {
      return { ...profile, searchingSetting: searchingSetting };
    });
  };
  useEffect(() => {
    autoFill();
  }, [autofill]);
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="filled-name"
        label="Position"
        className={classes.textField}
        value={input.inputData1}
        onChange={handleChange("name", "position")}
        margin="normal"
        variant="filled"
      />
      <TextField
        required
        id="filled-required"
        label="Company Name"
        value={input.inputData2}
        onChange={handleChangeCompany()}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />

      <TextField
        id="date"
        label="Start Date"
        type="date"
        onChange={handleChangeStartExp()}
        className={classes.textField}
        placeholder="Start date"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id="date"
        label="End Date"
        type="date"
        onChange={handleChangeEndExp()}
        className={classes.textField}
        placeholder="Start date"
        InputLabelProps={{
          shrink: true
        }}
      />

      <Typography component="h1" variant="h5">
        In what area are you looking to find a job ?
      </Typography>
      <TextField
        required
        id="filled-date-input"
        label="City"
        value={input.inputData3}
        onChange={handleChangePlace()}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      {triggerDeveloperMode && (
        <Button
          align="right"
          variant="contained"
          className={classes.button}
          onClick={() => setAutofill(prevautofill => !prevautofill)}
        >
          Demo
        </Button>
      )}
    </form>
  );
}
