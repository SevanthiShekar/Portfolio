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
    e.preventDefault();

    mainRef.current.scrollBy({
      left: e.deltaY * 4 + e.deltaX,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="navbar">
        <Navbar/>
      </div>
      <main ref={mainRef} onWheel={handleWheel}>
        <section id="hero"><Hero/></section>
        <img src={arrow} className="arrow1" id="about"/>
        <section><About/></section>
        <img src={arrow} className="arrow2" id="projects"/>
        <section><Projects/></section>
        <section><OtherProjects/></section>
        <img src={arrow} className="arrow3" id="skills"/>
        <section><Skills/></section>
        <img src={drw7} className="drawing7"/>
        <img src={arrow} className="arrow4" id="experience"/>
        <section><Experience/></section>
        <img src={arrow} className="arrow5"/>
        <section id="achievements"><Achievements/></section>
        <img src={arrow} className="arrow6"/>
        <section id="contact"><Contact/></section>
      </main>
    </div>
  )
}

export default App
