import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import me from "../assets/me.jpeg"
import "../styles/hero.css"
import p1 from "../assets/1.png"
import p2 from "../assets/2.png"
import w1 from "../assets/w1.png"

const Hero = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest",
        });
    };

    return (
        <>
            <div className='hero'>
                <div className='me_polo' id="hero_anchor">
                    <img src={me} />
                    <p>Learning, building, and creating technology that makes a difference.</p>
                </div>
                <img src={p1} className='drw1' />
                <div className='content'>
                    <img src={w1} className='w_y' />
                    <h2>Hi! I'm</h2>
                    <h1>SEVANTHI SHEKAR</h1>
                    <p>FullStack Developer</p>
                    <p>Machine Learning Enthusiast</p>
                    <div className='buttons'>
                        <button className='view' onClick={() => scrollToSection("projects_anchor")}>View Projects <ArrowForwardIcon /></button>
                        <a href="/SevanthiShekar_Resume.pdf" download className="download_link">
                            <button className='download'>Download Resume <DownloadIcon /></button>
                        </a>
                    </div>
                </div>
                <img src={p2} className='drw2' />
            </div>
        </>
    )
}

export default Hero