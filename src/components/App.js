import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
function App(){
    return(
        <div className='app' id='light-body'>
           <NavBar/>
           <About/>
           <Skills/>
           <Projects/>
           <Contact/>
           <Footer/>
        </div>
    )
}


export default App;