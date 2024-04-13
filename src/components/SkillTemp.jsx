import React from 'react';

function SkillTemp(props){
    return (
        <div className="item">
          <img src={props.img} alt='icon'/>
          <h2>{props.text}</h2>
    </div>
    )
} 
export default SkillTemp;