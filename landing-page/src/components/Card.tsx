import React from "react";

interface ProjectCardProps {
 title : string;
 description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description})=> {
 return(
  <section className="object-left">
  <div className="bg-white shadow-lg rounded-lg box-content h-32 w32 p-4 border-2 object-left-top">    
    <h2 className="text-xl font-medium font-mono mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
  </section>
 ); 
};

export default ProjectCard;