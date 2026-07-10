import Chip from '@mui/material/Chip';
import "../styles/projects.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import p1 from "../assets/p1.png"
import p3 from "../assets/p3.png"
import p5 from "../assets/p5.png"
// import p6 from "../assets/p6.png"
import pin from "../assets/pin.png"

const Projects = () => {

    const colors = ["primary", "success", "error", "warning", "secondary"];

    const projects = [
        {
            id: 1,
            title: "Rescue Pals",
            subtitle: "Full Stack MERN Pet Adoption Platform",
            description:
                "A MERN-based pet adoption platform with secure authentication, role-based dashboards, and streamlined adoption workflows.",
            tags: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Material UI",
                "Axios",
                "Multer",
                "Zod"
            ],
            github: "https://github.com/SevanthiShekar/Rescue-Pals",
            live: "https://rescue-pals-sevanthishekar.vercel.app",
            image: p1,
        },

        {
            id: 2,
            title: "Mobile Price Range Classification",
            subtitle: "Machine Learning Classification Project",
            description:
                "A machine learning model that predicts mobile price ranges using feature engineering and classification techniques.",
            tags: [
                "Python",
                "Pandas",
                "Scikit-Learn",
                "Matplotlib",
                "Seaborn"
            ],
            github: "https://github.com/SevanthiShekar/Mobile-Price-Prediction",
            live: "",
            image: p5,
        },

        {
            id: 5,
            title: "Who's That Pokémon?",
            subtitle: "JavaScript API Project",
            description:
                "A JavaScript web app that fetches Pokémon data from the PokéAPI and generates interactive Pokémon cards.",
            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "REST API",
                "PokéAPI"
            ],
            github: "https://github.com/SevanthiShekar/Who-s-That-Pokemon",
            live: "https://sevanthishekar.github.io/Who-s-That-Pokemon",
            image: p3,
        },
    ];

    const cards = projects.map((project) => {
        return (
            <div key={project.id} className='project_card'>
                <img src={pin} className='pin' />
                <img src={project.image}></img>
                <h1>{project.title}</h1>
                <h2>{project.subtitle}</h2>
                <div className='links'>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><GitHubIcon sx={{ fontSize: 28 }} style={{ color: "black" }} /></a>
                    {project.live ? <a href={project.live} target="_blank" rel="noopener noreferrer"><p>Live Demo</p></a> : <></>}
                </div>
                <p>{project.description}</p>
                {project.tags.map((tag, index) => {
                    return (
                        <Chip key={tag}
                            label={tag} variant='outlined'
                            color={colors[index % colors.length]}
                            className='tags'></Chip>)
                })}
            </div>
        )
    })

    return (
        <div className="projects">
            <h1>Featured Projects</h1>
            <div className='project_cards' id="projects_anchor">
                {cards}
            </div>
        </div>
    )
}

export default Projects