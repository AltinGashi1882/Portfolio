import ReactLogo from "../assets/img/React-Logo.png";
import NodejsLogo from "../assets/img/nodejs.png"
import MongodbLogo from "../assets/img/mongodb.png"

const skillData = [{
    id: 1,
    heading: "Frontend",
    skills: ["JavaScript", "React", "Tailwind", "Bootstrap", "Canva"],
    logo: ReactLogo,
    animation: "animate-spin"
}, {
    id: 2,
    heading: "Backend",
    skills: ["Java", "pHp", "Express", "Python"],
    logo: NodejsLogo,
    animation: "animate-bounce",
}, {
    id: 3,
    heading: "Database",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
    logo: MongodbLogo,
    animation: "animate-pulse",
}]

export default skillData;