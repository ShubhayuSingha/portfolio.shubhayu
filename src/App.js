import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MySkills from './components/MySkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';
import { Element, scroller } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="myskills" className="element">
        <MySkills />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
