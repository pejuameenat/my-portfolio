import React from 'react';
import SkillTemp from './SkillTemp';
import { skills } from '../information';

function skillFunc(skill){
    return(
        <SkillTemp key = {skill.id}  img={skill.img} text= {skill.skill} />
    )
}
function Skills(){
    return (
        <section id="skills">
           <div className="skills-container">
                <h1 className="skills-head">Skills</h1>
                <div className="grid-container">
                 {skills.map(skillFunc)}
                </div>
           </div>
      </section>
    )
}
export default Skills;