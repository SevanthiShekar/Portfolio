import "../styles/navbar.css"
import w4 from "../assets/w4.png"
import w5 from "../assets/w5.png"
import w6 from "../assets/w6.png"
import w7 from "../assets/w7.png"

const Navbar = () => {
    const lines = [];
    for (let i = 1; i <= 23; i++) {
        lines.push(
            <div
                key={i}
                className="circle"
                style={{ top: `${i * 20}px` }}
            ></div>
        );
    }
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
        });
    };

    return (
        <>
            <nav>
                <img src={w4} className="nav_washi"/>
                <img src={w5} className="nav_washi"/>
                <h2 onClick={() => scrollToSection("hero")}>Home</h2>
                <h2 onClick={() => scrollToSection("about")}>About</h2>
                <h2 onClick={() => scrollToSection("projects")}>Projects</h2>
                <h2 onClick={() => scrollToSection("skills")}>Skills</h2>
                <h2 onClick={() => scrollToSection("experience")}>Experience</h2>
                <h2 onClick={() => scrollToSection("achievements")}>Achievements</h2>
                <h2 onClick={() => scrollToSection("contact")}>Contact</h2>
                <img src={w7} className="nav_washi"/>
                <img src={w6} className="nav_washi"/>
            </nav>
            <div className="circle"></div>
            {lines}
        </>
    )
}

export default Navbar