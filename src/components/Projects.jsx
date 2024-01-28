import React from "react";
import ProjectTemp from "./ProjectTemp";
import {projects} from '../information';

function projectFunc(project){
    return(
        <ProjectTemp key={project.id} image={project.image} title={project.h2} intro ={project.p} link={project.link} gitHub={project.gitHub} altText={project.altText} />
    )
}
function Projects(){
   return(
    <section id="projects">
        <div className="skills-container">
            <h1 className="skills-head">Projects</h1>
            <div className="grid-wrapper">
               {projects.map(projectFunc)}
           </div>
        </div>
  </section>
   )
}

export default Projects;