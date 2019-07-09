import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { fontWeight } from "@material-ui/system";
import LegalAdvices from "../../dumbData/resources/legalAdvices";
import Organizations from "../../dumbData/resources/organizations";
import Programs from "../../dumbData/resources/programs";
import { Button } from "@material-ui/core";
import { ResourcesContex } from "../../context/homeContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100%"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  paperTitle: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
    backgroundColor: "#e0e0e0",
    fontWeight: "bold"
  },
  button: {
    border: "1px solid black"
  },
  goBack: {
    backgroundColor: "#f0f0f0"
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [resources, setResources] = useContext(ResourcesContex);

  function goBack() {
    setResources({
      legalAdvice: false,
      programs: false,
      organizations: false
    });
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            className={classes.goBack}
            onClick={() => {
              goBack();
            }}
          >
            {" "}
            Back
          </Button>
        </Grid>
        {Programs.programs.map(program => {
          return (
            <Grid key={program.id} item xs={12}>
              <Paper className={classes.paperTitle}>
                {program.title} <br /> {program.content}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
