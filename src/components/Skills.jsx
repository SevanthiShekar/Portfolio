import s1 from "../assets/stick1.png"
import s2 from "../assets/stick2.png"
import s3 from "../assets/stick3.png"
import s4 from "../assets/stick4.png"
import s5 from "../assets/stick5.png"
import s6 from "../assets/stick6.png"
import s7 from "../assets/stick7.png"
import s8 from "../assets/stick8.png"
import s9 from "../assets/stick9.png"
import s10 from "../assets/stick10.png"
import s11 from "../assets/stick11.png"
import s12 from "../assets/stick12.png"
import s14 from "../assets/stick14.png"
import s15 from "../assets/stick15.png"
import s16 from "../assets/stick16.png"
import s17 from "../assets/stick17.png"
import s18 from "../assets/stick18.png"
import s19 from "../assets/stick19.png"
import s20 from "../assets/stick20.png"
import s21 from "../assets/stick21.png"
import s22 from "../assets/stick22.png"
import "../styles/skills.css"

const Skills = () => {

    return (<>
        <div className="board">
            <h1>Skills</h1>
            <div>
                <div className="row1">
                    <div className="languages">
                        <h2>Languages</h2>
                        <img src={s4} />
                        <img src={s5} />
                        <img src={s6} />
                        <img src={s7} />
                        <img src={s20} />
                    </div>
                    <div className="backend">
                        <h2>Backend</h2>
                        <img src={s18} />
                        <img src={s19} />
                    </div>
                    <div className="frontend">
                        <h2>Frontend</h2>
                        <img src={s21} />
                        <img src={s3} />
                        <img src={s2} />
                        <img src={s22} />
                        <img src={s1} />
                    </div>
                </div>
                <div className="row2">
                    <div className="databases">
                        <h2>Databases</h2>
                        <img src={s16} />
                        <img src={s17} />
                    </div>
                    <div className="ml">
                        <h2>ML/Data Science</h2>
                        <img src={s11} />
                        <img src={s12} />
                        <img src={s14} />
                        <img src={s15} />
                    </div>
                    <div className="tools">
                        <h2>Tools</h2>
                        <img src={s8} />
                        <img src={s9} />
                        <img src={s10} />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Skills