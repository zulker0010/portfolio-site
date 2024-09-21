import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

const ProjectCard: React.FC=() => {
 return(
  <>
  <Card className="my-2 rounded-none">
    <CardImg className="rounded-none"
      alt="Card image cap"
      src="https://picsum.photos/900/180"
      style={{
        height: 180      
      }}
      top
      width="100%"
    />
    <CardBody className='font-mono font-bold'>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText className="font-medium">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
  <Card className="my-2">
  <CardImg
      className="rounded-none"
      alt="Card image cap"
      top
      src="https://picsum.photos/900/180"
      style={{
        height: 180
      }}
      width="100%"
    />
    <CardBody className='font-mono font-bold'>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText className="font-medium">
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
    
  </Card>
</>
 )
};


export default ProjectCard;