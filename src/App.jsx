import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';

import Intro from './components/home/inrto/intro';
import Navbar from './components/nav-bar/nav';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects'
import Footer from "./components/footer/footer";
class App extends React.Component
{
  constructor ()
  {
    super();
  }
  render ()
  {
    return (
      <>
        {/* <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
          <Footer />
        </Router> */}

        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </>
    );
  }
}

export default App;
