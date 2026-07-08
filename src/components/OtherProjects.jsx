import p4 from "../assets/p4.png"
import p2 from "../assets/p2.png"
import drw5 from "../assets/5.png"
import drw6 from "../assets/6.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/other_projects.css"

const OtherProjects = () => {
    const projects2 = [
        // {
        //     id: 6,
        //     title: "Aadhaar Authentication Prototype",
        //     subtitle: "Frontend Internship Project",
        //     description:
        //     "A responsive prototype simulating Aadhaar authentication with validation and OTP verification.",
        //     tags: [
        //     "HTML",
        //     "CSS",
        //     "JavaScript",
        //     "Responsive Design"
        //     ],
        //     github: "https://github.com/SevanthiShekar/Aadhaar-Verification",
        //     live: "https://sevanthishekar.github.io/Aadhaar-Verification",
        //     image: p6,
        // },

        {
            id: 1,
            title: "Learnzilla",
            subtitle: "Full Stack MERN Learning Platform",
            description:
                "A MERN learning platform featuring authentication, role-based access, CRUD operations, and file uploads.",
            github: "https://github.com/SevanthiShekar/Learnzilla",
            live: "https://learnzilla-sevanthishekar.vercel.app",
            image: p2,
        },

        {
            id: 2,
            title: "Heart Disease Prediction",
            subtitle: "Machine Learning Healthcare Project",
            description:
                "A predictive model that estimates heart disease risk using patient health data and classification algorithms.",
            github: "https://github.com/SevanthiShekar/Heart-Disease-Prediction",
            live: "",
            image: p4,
        },
    ]
    const cards2 = projects2.map((project) => {
        return (
            <div key={project.id} className='op_card'>
                <img src={project.image}></img>
                <div>
                    <h1>{project.title}</h1>
                    <h2>{project.subtitle}</h2>
                    <p>{project.description}</p>
                    <div className='links'>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 28 }} style={{ color: "black" }} /></a>
                        {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer"><p>Live Demo</p></a> : <></>}
                    </div>
                </div>
            </div>
        )
    })

    return(
        <div className="op">
            <h1>Other Projects</h1>
            <div className="content">
                <div className='op_cards'>
                    {cards2}
                </div>
                <div className="drawings">
                    <img src={drw5} className="drw5"/>
                    <img src={drw6} className="drw6"/>
                </div>
            </div>
        </div>
    )
}

export default OtherProjects