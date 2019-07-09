import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { ProfileContext } from "../context/profileContext";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export default function PaperSheet() {
  const classes = useStyles();
  const [profile, setProfile] = useContext(ProfileContext);

  function addPicture() {
    console.log("ok");
    toast("Picture Added !");
  }
  return (
    <div>
      <Paper className={classes.root}>
        <div style={{ display: "flex" }}>
          <Icon className={classes.icon} onClick={() => addPicture()}>
            add_circle
          </Icon>
          <Grid container justify="center" alignItems="center" spacing={6}>
            <Avatar
              alt="Remy Sharp"
              src={"https://image.flaticon.com/icons/svg/147/147144.svg"}
              className={classes.bigAvatar}
            />
          </Grid>
        </div>
        <Typography variant="h5" component="h3">
          Add your profile Picture
        </Typography>
        <div style={{ display: "flex" }}>
          <ToastContainer autoClose={1000} />

          <Icon className={classes.icon}>add_circle</Icon>
          <Typography variant="h5" component="h3">
            Or add your Profile Picture from Linkedin
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
