import React, {useState} from 'react';
import NavBar from './NavBar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
function App(props){
    const [mode, setMode] = useState(props.mode)
    let styles = {
      backgroundColor: mode ? '#000' : '#fff',
      color: mode ? '#fff' : '#000',
    }
    function modeSetter(){
        setMode((prevMode)=> !prevMode)
    }
    return (
      <div className="app" id="light-body" style={styles}>
        <NavBar mode={mode} handleClick={modeSetter} />
        <About  darkMode={mode}/>
        <Skills />
        <Projects />
        <Contact />
        <Footer darkMode={mode}/>
      </div>
    )
}


export default App;