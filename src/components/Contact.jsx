import "../styles/contact.css"
import dr18 from "../assets/18.png"
import h1 from "../assets/h1.png"
import h2 from "../assets/h2.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import catxdog from "../assets/catxdog.jpeg"
import drw17 from "../assets/17.png"
import meme1 from "../assets/meme1.jpeg"
import meme2 from "../assets/meme2.jpeg"
import meme3 from "../assets/meme3.jpeg"

const Contact = () => {

    const polos = [
        {
            id: 1,
            image: dr18,
            name: "Passionate About Fitness"
        },
        {
            id: 2,
            image: catxdog,
            name: "Cat & Dog Lover"
        },
        {
            id: 3,
            image: h1,
            name: "Self-Taught Guitarist"
        },
        {
            id: 4,
            image: h2,
            name: "Music Enthusiast"
        }
    ]

    const polo_cards = polos.map((p) => {
        return(
        <div className="polo" key={p.id}>
            <img src={p.image}/>
            <p>{p.name}</p>
        </div>)
    })

    return(
       <>
        <h1 className="beyond">Beyond Coding</h1>
        <div className="extra" id="contact_anchor">
            <div className="hobbies">
                <div className="polos">
                    {polo_cards}
                </div>
            </div>
            <div className="contact">
                <div className="row1">
                    <div className="postit">
                        <h2>Let's Connect!</h2>
                        <p>GitHub: <a href="https://github.com/SevanthiShekar"><GitHubIcon/></a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/sevanthi-shekar-t-g/"><LinkedInIcon/></a></p>
                        <p>Mail: <a href="mailto:sevanthishekar2005@gmail.com" style={{color: "blue"}}>sevanthishekar2005@gmail.com</a></p>
                    </div>
                    <img src={drw17} className="drawing17"/>
                </div>
                <div className="meme_section">
                    <h2>Some Memes 😉</h2>
                    <div className="memes">
                        <img src={meme1}/>
                        <img src={meme2}/>
                        <img src={meme3}/>
                    </div>
                </div>
            </div>
        </div>
       </> 
    )
}

export default Contact