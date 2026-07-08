import "../styles/achievements.css"
import w3 from "../assets/w3.png"
import w6 from "../assets/w6.png"
import w7 from "../assets/w7.png"
import drw16 from "../assets/16.png"

const Achievements = () => {
    return(
        <div className="ach_pro_dev">
            <h1 style={{marginBottom: "25px", textAlign: "center"}}>Achievements & Professional Development</h1>
            <div className="ach_pro">
                    <div className="achievements">
                        <img src={w3} className="washi"/>
                        <h2>ACHIEVEMENTS</h2>
                        <li>Ranked 3rd in a technical competition 
                            involving frontend development, DSA, and technical interviews.</li>
                        <li>Advanced to Round 2 of 3 in Tech Tonic, a DSA-focused programming contest.</li>
                        <li>HackerRank - Java (Silver Badge)</li>
                        <li>Solved 35+ coding problems on LeetCode and HackerRank covering DSA and SQL.</li>
                        <img src={drw16} className="drawing16"/>
                    </div>
                <div>
                    <div className="certifications">
                        <img src={w7} className="washi"/>
                        <h2>CERTIFICATIONS</h2>
                        <li>Meta Front-End Developer – Coursera  <br></br>
                            <a href="https://www.coursera.org/account/accomplishments/professional-cert/O7R4W4JC8WCJ"
                                target="_blank">
                            View Certificate</a></li>
                    </div>
                    <div className="workshops">
                        <img src={w6} className="washi"/>
                        <h2>WORKSHOPS</h2>
                        <li>Statistics in Data Science and Machine Learning Workshop (3 Days)</li>
                        <li>Advances in AI Workshop (2 Days)</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievements