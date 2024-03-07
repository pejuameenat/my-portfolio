import React from 'react';
import heroImg from '../assets/hero-me1.png';
import Socials from './Socials';
 

function About(props){
   return (
     <section id="about" className="hero-section">
       <div className="px-4 py-5 my-5 text-center">
         <img
           className="d-block mx-auto mb-4 hero-img"
           src={heroImg}
           alt=""
           width="200"
           height="195"
         />
         <Socials />
         <h1 className="display-5 fw-bold text-body-emphasis hero-head">
           Hi, I'm Aminat
         </h1>
         <div className="col-lg-6 mx-auto">
           <p className="lead mb-4">
             A Front-end Web developer well versed with HTML, CSS, JAVASCRIPT,
             BOOTSTRAP, REACT and other Frontend frameworks to create visually
             appealing responsive websites.
           </p>
           <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
             <button
               type="button"
               className="btn btn-primary btn-lg px-4 gap-3 pry-1"
             >
               <a
                 href="#contact"
                 className={
                   props.darkMode ?'hero-btn darkmodeColor':'hero-btn'  
                 }
               >
                 Work With Me
               </a>
             </button>
             <button
               type="button"
               className="btn btn-outline-secondary btn-lg px-4 pry-2"
             >
               <a
                 href="#projects"
                 className={
                   props.darkMode ?'hero-btn darkmodeColor':'hero-btn'
                 }
               >
                 View Projects
               </a>
             </button>
           </div>
         </div>
       </div>
     </section>
   ) 
}

export default About;