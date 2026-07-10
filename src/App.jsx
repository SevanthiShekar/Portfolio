import { useRef } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import OtherProjects from "./components/OtherProjects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Achievements from "./components/Achievements"
import arrow from "./assets/arrow.png"
import drw7 from "./assets/7.png"
import './App.css'

function App() {
  const mainRef = useRef(null);

  const handleWheel = (e) => {

    //Don't scroll horizontally for mobile screens
    if (window.innerWidth <= 768) return;

    e.preventDefault();

    mainRef.current.scrollBy({
      left: e.deltaY * 3 + e.deltaX,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <main ref={mainRef} onWheel={handleWheel}>
        <div id="hero"></div>
        <section><Hero/></section>
        <img src={arrow} className="arrow1"/>
        <div id="about"></div>
        <section><About/></section>
        <img src={arrow} className="arrow2"/>
        <div id="projects"></div>
        <section><Projects/></section>
        <section><OtherProjects/></section>
        <img src={arrow} className="arrow3"/>
        <div id="skills"></div>
        <section><Skills/></section>
        <img src={drw7} className="drawing7"/>
        <img src={arrow} className="arrow4"/>
        <div id="experience"></div>
        <section><Experience/></section>
        <img src={arrow} className="arrow5"/>
        <div id="achievements"></div>
        <section><Achievements/></section>
        <img src={arrow} className="arrow6"/>
        <div id="contact"></div>
        <section><Contact/></section>
      </main>
    </div>
  )
}

export default App
