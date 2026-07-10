import "../styles/about.css"
import drw3 from "../assets/3.png"
import drw4 from "../assets/4.png"
import AddTaskIcon from '@mui/icons-material/AddTask';
import w3 from "../assets/w3.png"
import w2 from "../assets/w2.png"

const About = () => {
    return(
        <div className="about_section">
            <img src={w3} className="about_washi tape1"/>
            <div className="about_card" id="about_anchor">
                <h1>About Me</h1>
                <p>I'm a Computer Science student who enjoys building projects from the ground up. 
                   Each one helps me strengthen my skills while solving problems that matter to me.</p>
                <p>I'm always learning, exploring new technologies, and creating software with purpose. 
                   My goal is to build solutions that make a meaningful impact on people and the world.</p>
                <img src={drw3} className="drw3"/>
            </div>
            <img src={w2} className="about_washi tape2"/>
            <div className="focus_card">
                <div>
                    <h1>Current Focus</h1>
                    <p><AddTaskIcon/>Machine Learning</p>
                    <p><AddTaskIcon/>Data Structures and Algorithms</p>
                    <p><AddTaskIcon/>Natural Language Processing</p>
                    <p><AddTaskIcon/>Spring Framework</p>
                </div>
                <img src={drw4} className="drw4"/>
            </div>
        </div>
    )
}

export default About