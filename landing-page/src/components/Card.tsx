import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, CardBody, CardImg, CardTitle, CardText, CardLink} from 'reactstrap';


const ProjectCard: React.FC = () => {
 return(
  <>
<CardLink href="https://public.tableau.com/app/profile/zulkernayeen.yusuf/viz/NetflixDataProject_17094666014200/Dashboard1?publish=yes" target ='_blank' >
  <Card className="my-2 rounded-none" > 
    <CardImg className="rounded-none"
      src= 'src/assets/netflix_dashboard.jpg'
      alt="nothing"
      style={{
        height: "100%"      
      }}
      top
      width="100%"
    >      
    </CardImg>
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
</CardLink>
<CardLink href="https://www.behance.net/gallery/209010139/Mentors-app-UI-v10" target = "_blank">
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
  </CardLink>
  <CardLink href="https://github.com/zulker0010/Divorce-probability/blob/main/cleaning.py" target="_blank">
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
  </CardLink>
</>
 )
};


export default ProjectCard;