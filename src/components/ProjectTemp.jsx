import React from 'react';
import github from '../assets/github.png';

function ProjectTemp(props){
    return(
        <div className="services-image">
                <img src={props.image} alt={props.altText}/>
                <div className="overlay">
                    <div className="overlay-inner">
                      <h2>{props.title}</h2>
                      <p> {props.intro}</p>
                      <a href={props.link} target='_blank' rel="noopener noreferrer">Live Demo</a>
                      <a href={props.gitHub} target='_blank' rel="noopener noreferrer"><img src={github} alt="github" /></a>
                    </div>   
                </div>
            </div>
    )
}

export default ProjectTemp;