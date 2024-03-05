import React from 'react';

function Nav(props){
   return (
     <li className='nav-list mobileStyle'>
       <a
         href={props.href}
         className='nav-link'
       >
         {props.link}
       </a>
     </li>
   )
    
}

export default Nav;