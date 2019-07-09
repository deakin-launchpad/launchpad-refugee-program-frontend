import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Star";
import FavoriteBorder from "@material-ui/icons/StarBorder";

export default function CheckboxLabels() {
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          value="checkedH"
        />
      }
      label=""
    />
  );
}
