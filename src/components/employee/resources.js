import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { fontWeight } from "@material-ui/system";
import LegalAdvices from "../../dumbData/resources/legalAdvices";
import Organizations from "../../dumbData/resources/organizations";
import Programs from "../../dumbData/resources/programs";
import { Button } from "@material-ui/core";
import { ResourcesContex } from "../../context/homeContext";
import SingleResource from "./singleResource";

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
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const [resources, setResources] = useContext(ResourcesContex);
  const [toogleLA, setToogleLA] = useState(false);
  const [toogleO, setToogleO] = useState(false);
  const [toogleP, setToogleP] = useState(false);
  const [directToResource, setDirectToResource] = useState({
    state: false,
    resource: {}
  });

  function openResource(params) {
    setDirectToResource({
      state: true,
      resource: params
    });
  }

  function goBack() {
    setDirectToResource({
      state: false,
      resource: {}
    });
  }

  function openClose(param) {
    if (param === "LA") {
      toogleLA ? setToogleLA(false) : setToogleLA(true);
    } else if (param === "O") {
      toogleO ? setToogleO(false) : setToogleO(true);
    } else if (param === "P") {
      toogleP ? setToogleP(false) : setToogleP(true);
    }
  }

  //expanded containers
  let openLegal = LegalAdvices.legalAdvices.map(legalAdvice => {
    return (
      <Grid container spacing={1} key={Math.random()}>
        <Grid item xs={12} sm={1}>
          <Button
            className={classes.paper}
            onClick={() => {
              openResource(legalAdvice);
            }}
          >
            {legalAdvice.title}
          </Button>
        </Grid>
      </Grid>
    );
  });
  let openOrganizations = Organizations.organizations.map(organization => {
    return (
      <Grid container spacing={1} key={Math.random()}>
        <Grid item xs={12} sm={1}>
          <Button
            className={classes.paper}
            onClick={() => {
              openResource(organization);
            }}
          >
            {organization.title}
          </Button>
        </Grid>
      </Grid>
    );
  });
  let openPrograms = Programs.programs.map(program => {
    return (
      <Grid container spacing={1} key={Math.random()}>
        <Grid item xs={12} sm={1}>
          <Button
            className={classes.paper}
            onClick={() => {
              openResource(program);
            }}
          >
            {program.title}
          </Button>
        </Grid>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      {directToResource.state ? (
        <div>
          <Grid item xs={12}>
            <Button
              className={classes.paper}
              onClick={() => {
                goBack();
              }}
            >
              Go back to the list
            </Button>
          </Grid>
          <SingleResource data={directToResource.resource} />
        </div>
      ) : (
        <div>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paperTitle}>Legal Advice</Paper>
            </Grid>
            {toogleLA ? (
              <div>
                {/* { expanded}  */} {openLegal}
                <Grid item xs={12} sm={1}>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      openClose("LA");
                    }}
                  >
                    See Less
                  </Button>
                </Grid>
              </div>
            ) : (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                  <Button
                    className={classes.paper}
                    onClick={() => {
                      openResource(LegalAdvices.legalAdvices[0]);
                    }}
                  >
                    {LegalAdvices.legalAdvices[0].title}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    className={classes.paper}
                    onClick={() => {
                      openResource(LegalAdvices.legalAdvices[1]);
                    }}
                  >
                    {LegalAdvices.legalAdvices[1].title}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      openClose("LA");
                    }}
                  >
                    See more
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paperTitle}>Organizations</Paper>
            </Grid>

            {toogleO ? (
              <div>
                {/* { expanded}  */}
                {openOrganizations}

                <Grid item xs={12} sm={1}>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      openClose("O");
                    }}
                  >
                    See Less
                  </Button>
                </Grid>
              </div>
            ) : (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                  <Button
                    className={classes.paper}
                    onClick={() => {
                      openResource(Organizations.organizations[0]);
                    }}
                  >
                    {Organizations.organizations[0].title}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    className={classes.paper}
                    onClick={() => {
                      openResource(Organizations.organizations[0]);
                    }}
                  >
                    {Organizations.organizations[1].title}
                  </Button>
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      openClose("O");
                    }}
                  >
                    See more
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paperTitle}>Programs</Paper>
            </Grid>

            {toogleP ? (
              <div>
                {/* { expanded}  */}
                {openPrograms}

                <Grid item xs={12} sm={1}>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      openClose("P");
                    }}
                  >
                    See Less
                  </Button>
                </Grid>
              </div>
            ) : (
              <Grid container spacing={1}>
                <Grid item xs={12} sm={2}>
                  <Button
                    className={classes.paper}
                    onClick={() => {
                      openResource(Programs.programs[0]);
                    }}
                  >
                    {Programs.programs[0].title}
                  </Button>
                </Grid>

                <Grid item xs={12} sm={2}>
                  <Button
                    className={classes.paper}
                    onClick={() => {
                      openResource(Programs.programs[0]);
                    }}
                  >
                    {Programs.programs[1].title}
                  </Button>
                </Grid>

                <Grid item xs={12} sm={1}>
                  <Button
                    className={classes.button}
                    onClick={() => {
                      openClose("P");
                    }}
                  >
                    See more
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </div>
      )}
    </div>
  );
}
