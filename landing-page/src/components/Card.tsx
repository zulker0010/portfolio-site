import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';


const ProjectCard: React.FC = () => {
 return(
  <>
  <Card className="my-2 rounded-none">
    <CardImg className="rounded-none"
      src= 'src/assets/netflix_dashboard.jpg'
      alt="nothing"
      style={{
        height: "100%"      
      }}
      top
      width="100%"
    ></CardImg>
    <CardBody className='font-mono font-bold'>
      <CardTitle tag="h5">
      Netflix Dashboard in Tableau
      </CardTitle>
      <CardText className="font-medium">
      Statisticial visualization of everything the world saw in Netflix
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
  <Card className="my-2 rounded-none">
    <CardImg className="rounded-none"
      src= 'src/assets/mentors_mobile_app.jpg'
      alt="nothing"
      style={{
        height: "100%"      
      }}
      top
      width="100%"
    ></CardImg>
    <CardBody className='font-mono font-bold'>
      <CardTitle tag="h5">
      Mentors mobile app v1.0'
      </CardTitle>
      <CardText className="font-medium">
      A cross platform mobile app built for the education & student immigration company Mentors.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
  <Card className="my-2 rounded-none">
    <CardImg className="rounded-none"
      src= 'src/assets/divorce_probability.jpg'
      alt="nothing"
      style={{
        height: "100%"      
      }}
      top
      width="100%"
    ></CardImg>
    <CardBody className='font-mono font-bold'>
      <CardTitle tag="h5">
      Divorce probability correlation
      </CardTitle>
      <CardText className="font-medium">
      A py script that analyzes the divorce probability of couples based on 50 different factors. 
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