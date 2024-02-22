import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
function App(props){
    const [mode, setMode] = useState(false)
    let styles = {
      backgroundColor: props.mode ? '#000' : '#fff',
      color: props.mode ? '#fff' : '#000',
    }
    function modeSetter(){
        setMode((prevMode)=> !prevMode)
    }
    return (
      <div className="app" id="light-body" style={styles}>
        <NavBar mode={mode} handleClick={modeSetter} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
}


export default App;