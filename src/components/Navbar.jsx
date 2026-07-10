import "../styles/navbar.css"
import w4 from "../assets/w4.png"
import w5 from "../assets/w5.png"
import w6 from "../assets/w6.png"
import w7 from "../assets/w7.png"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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

    const handleClick = (section) => {
        scrollToSection(section);
        setMenuOpen(false);
    }

    return (
        <>
            {menuOpen && (
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <CloseIcon  sx={{ fontSize: 32 }}/> : <MenuIcon  sx={{ fontSize: 32 }}/>}
            </div>
            <nav className={menuOpen ? "nav open" : "nav"}>
                <img src={w4} className="nav_washi"/>
                <img src={w5} className="nav_washi"/>
                <h2 onClick={() => handleClick("hero_anchor")}>Home</h2>
                <h2 onClick={() => handleClick("about_anchor")}>About</h2>
                <h2 onClick={() => handleClick("projects_anchor")}>Projects</h2>
                <h2 onClick={() => handleClick("skills_anchor")}>Skills</h2>
                <h2 onClick={() => handleClick("experience_anchor")}>Experience</h2>
                <h2 onClick={() => handleClick("achievements_anchor")}>Achievements</h2>
                <h2 onClick={() => handleClick("contact_anchor")}>Contact</h2>
                <img src={w7} className="nav_washi"/>
                <img src={w6} className="nav_washi"/>
            </nav>
            <div className="circle"></div>
            {lines}
        </>
    )
}

export default Navbar