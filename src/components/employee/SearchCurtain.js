import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  dense: {
    marginTop: 16
  }
}));

const SearchCurtain = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <TextField
          id="keyWord"
          label="Keyword"
          type="keyWord"
          className={classes.textField}
          placeholder="Keyword"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="Location"
          label="Location"
          type="Location"
          className={classes.textField}
          placeholder="Location"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="Position"
          label="Position"
          type="Position"
          className={classes.textField}
          placeholder="Position"
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>

      <div>
        <Button variant="contained">Search</Button>
      </div>
    </div>
  );
};

export default SearchCurtain;
