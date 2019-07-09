import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Favorite from "../PreferredCheck";
import { OpportunityContext } from "../../context/homeContext";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [opportunity, setOpportunity] = useContext(OpportunityContext);
  const { id, location, position, type, date, content } = props.data;
  // const { id, location, position, type, date, content, toogle } = opportunity

  function openOpportunity() {
    setOpportunity({
      id,
      location,
      position,
      type,
      date,
      content,
      toogle: true
    });
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {type} <Favorite />
        </Typography>

        <Typography variant="h5" component="h2">
          {position}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {date} {location}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <OpportunityModal data={props.data}></OpportunityModal> */}
        <Button
          onClick={() => {
            openOpportunity(props);
          }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}
