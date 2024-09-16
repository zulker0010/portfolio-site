import React from "react";
import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardFooter } from "./ui/card";

interface ProjectCardProps {
 title : string;
 description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description})=> {
 return(
  <Card className="font-mono w-max p-4">
    <CardHeader/>
    <CardContent>
      <img src="E:\Experiments\portfolio-site\landing-page\src\assets\mentors_mobile_app.png"></img>
    </CardContent>
      <CardTitle className="my-4 text-lg">Mentor's Mobile app V1.0  </CardTitle>
      <CardDescription className='text-base'>A mobile app for the education and immigration company Mentor's for scheduling courses and mock tests.</CardDescription>    
  </Card>
 ); 
};

export default ProjectCard;