import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OpportunitiesData from '../../../dumbData/opportunities'
import { OpportunityContext } from '../../../context/homeContext'



import { ProfileContext, } from '../../../context/profileContext'


const useStyles = makeStyles({
  card: {
    margin: '10px 0px'
  },

  title: {
    fontSize: 14,
    margin: '2px 0'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const [profile, setProfile] = useContext(ProfileContext)
  const [opportunity, setOpportunity] = useContext(OpportunityContext)
  const allJobsAvailable = OpportunitiesData.opportunities

  function SingleView(singleOp) {
    setOpportunity(opportunity => {
      return { ...singleOp, toogle: true }
    })
  }

  return (

    <div>
      {profile.savedPositions.map(job => {
        return allJobsAvailable.map(available => {
          if (job.id === available.id) {
            return (<div key={job.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {available.company}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {available.position}
                  </Typography>
                  <Button color='primary' onClick={() => { SingleView(available) }}>Learn More</Button>

                </CardContent>
              </Card>
            </div>)
          }
        })
      })
      }
    </div>

  );
}