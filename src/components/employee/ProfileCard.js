import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Antony Smith
          </Typography>
          <CardMedia
            className={classes.media}
            image={
              "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-760x506.jpg"
            }
            title="Profile Picture"
          />
          <Typography variant="body2" color="textSecondary" component="p">
            Account Management and Delivery of our key accounts from start-ups
            to tier 1 corporates. Specialist areas include Software Developers/
            Engineers, Business Analysts, Project Managers, Architects, QA's,
            Testers. Keywords: C#, C++, sharepoint, dynamics, developer,
            programmer, solution architect
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Skills
        </Button>
        <Button size="small" color="primary">
          Experiences
        </Button>
        <Button size="small" color="primary">
          Instruction
        </Button>
      </CardActions>
    </Card>
  );
}
