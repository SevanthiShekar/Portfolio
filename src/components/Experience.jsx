import "../styles/experience.css"
import paperclip from "../assets/paperclip.png"
import drw12 from "../assets/12.png"
import drw13 from "../assets/13.png"
import drw14 from "../assets/14.png"
import prodoc from "../assets/prodoc.jpeg"
import process_sys from "../assets/process_sys.jpeg"
import _13to19 from "../assets/13to19.jpeg"

const Experience = () => {
    const experiences = [
        {
            role: "MERN Stack Developer Intern",
            company: "Prodoc AI",
            duration: "Jul 2025 - Sep 2025",
            description:
                "Developed full-stack features using MERN stack, built analytics dashboards, automated reporting and WhatsApp workflows, and improved the overall product experience through UI enhancements.",
            image: drw12,
            logo: prodoc,
        },
        {
            role: "Web Development Intern",
            company: "Processware Systems",
            duration: "Aug 2024",
            description:
                "Built a responsive front-end prototype for an Aadhaar authentication system with Aadhaar and OTP validation, focusing on usability and secure user interactions.",
            image: drw13,
            logo: process_sys,
        },
        {
            role: "Head Researcher & Writer",
            company: "13to19",
            duration: "Aug 2021 - Apr 2023",
            description:
                "Led research and created educational content on social, health, and cultural topics, making complex ideas engaging and accessible for a young audience.",
            image: drw14,
            logo: _13to19,
        },
    ];

    const exp_cards = experiences.map((exp, index) => {
        return (
            <div className="exp_card" key={index}>
                <img src={paperclip} className="paperclip"/>
                <div className="exp_des">
                    <div>
                        <h1>{exp.role}</h1>
                        <h2>{exp.company}</h2>
                        <h3>{exp.duration}</h3>
                    </div>
                    <img src={exp.logo} className="logo"/>
                </div>
                <p>{exp.description}</p>
                <img src={exp.image} className="drawing" />
            </div>
        )
    })

    return (
        <div className="experience">
            <h1 id="experience_anchor">Experience</h1>
            <div className="exp_cards">
                {exp_cards}
            </div>
        </div>
    )
}

export default Experience