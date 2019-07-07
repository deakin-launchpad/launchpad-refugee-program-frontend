import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import NewsData from '../../dumbData/news'
import Button from '@material-ui/core/Button';
import { NewsContext } from '../../context/homeContext'




const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100vw',
    minWidth: 275,
  },
  media: {
    height: 0,
    width: '100vh',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: 14,
  },
  subtitle: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [news, setNews] = useContext(NewsContext)
  const infoNews = NewsData.news
  function openNews(info) {
    setNews({ id: info.id, title: info.title, date: info.date, location: info.location, content: info.content, img: info.img, toogle: true })
  }
  return (
    <div>
      <CardMedia
        style={{ width: '100%', padding: "none" }}
        className={classes.media}
        image={news.img}
        title="Paella dish"
      />

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {news.title}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {news.location}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {news.date}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {news.content}
          </Typography>
        </CardContent>
      </Card>
      {infoNews.map(info => {
        return <div key={info.id} style={{ display: 'flex', margin: '5px 0' }}>
          <CardMedia
            style={{ width: '100%', padding: "none" }}
            className={classes.media}
            image={info.img}
            title="Paella dish"
          />
          <div>
            <Typography variant="h6" component="h3">
              {info.title}
            </Typography>
            <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
              {info.content}
            </Typography>
            <Button size="small" onClick={() => { openNews(info) }}>Learn More</Button>

          </div>
        </div>
      })}

    </div>

  );
}