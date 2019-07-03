import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OpportunityModal from './OpportunitiesModal'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const { id, location, position, type, date, content } = props.data
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {type}
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
        <OpportunityModal data={props.data}></OpportunityModal>
      </CardActions>
    </Card>
  );
}