import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

interface ProjectCardProps{
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps>=({title,description}) => {
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