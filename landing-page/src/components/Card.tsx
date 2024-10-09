import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

interface ProjectCardProps{
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps>=({title,description}) => {
 return(
  <>
  <Card className="my-2 rounded-none">
    <CardImg className="rounded-none"
      src='src/assets/mentors_mobile_app.jpg'
      alt="nothing"
      style={{
        height: "100%"      
      }}
      top
      width="100%"
    />
    <CardBody className='font-mono font-bold'>
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardText className="font-medium">
        {description}
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