import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import {shops} from '../shops/shops.js'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {Row, Col} from "reactstrap"
import cake from'../../Media/sweet.jpeg'
import c2 from '../../Media/cup.jpeg'
import './card.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
   minWidth: 345,
   margin:10,
   backgroundColor: '#4C6D54',

  },
  main:{
    paddingLeft:'50px',
    display: 'flex',
    overflowX:'auto',
    width:'100%',
    justifyContent:'right',
    
  },
  media: {
    height: 140,
  },
  white:{
    fontFamily:'Roboto Sans-Serif',
    color: 'white',
  },
  a:{
    justifyContent: 'center ',
  },
  
});


export default function MediaCard() {
  var cakes =[{image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},
  {image:`${cake}`,title:"cake"},{image:`${c2}`, title:"c2"},]
  const classes = useStyles();

  return (
    <Row className= {classes.main}>
    {cakes.map((cakes)=>(
      <Col>
    <Card className={classes.root}>
      <Link to = {`/${cakes.title}`}>
        <CardMedia
          className={classes.media}
          image={`${cakes.image}`}
          title={`${cakes.title}`}
        />
      
      <CardActions className={classes.a}>
        {/*<Button size="small" color="primary">
          Share
          </Button>*/}
        
        <Button size="small" color="#">
          <div className={classes.white}>
          Learn More
          </div>
        </Button>
      </CardActions>
      </Link>
    </Card>
    </Col>
    ))}
    </Row>
    
    
  );
}

