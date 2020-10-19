import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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
    color: 'white',
  },
  a:{
    justifyContent: 'center ',
  },
  
});


export default function MediaCard() {
  var cakes =[{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},{image:`${cake}`,title:"cake 1"},{image:`${c2}`, title:"cake2"},]
  const classes = useStyles();

  return (
    <Row className= {classes.main}>
    {cakes.map((cakes)=>(
      <Col>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${cakes.image}`}
          title={`${cakes.title}`}
        />
      </CardActionArea>
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
    </Card>
    </Col>
    ))}
    </Row>
    
    
  );
}

