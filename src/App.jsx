import { useEffect, useState } from 'react'
import './index.css'
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Certificates from './Pages/Certificates'
import ContactMe from './Pages/ContactMe'
import {BounceLoader} from 'react-spinners';
import Card from "./Components/Card";
import cardData from "./Data/cardData.js"
import Waves from "./SVG/Waves"
import Heading from "./Components/Heading"
import ProjectCard from "./Components/Project.jsx"
import projectData from "./Data/projectsData.js"
import SVGBackground from './SVG/SVGBackground.jsx'
import SkillCard from './Components/SkillCard.jsx'
import skillData from "./Data/skillData.js"

function App() {
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    }, []);

  return (
    <>
    <div className='relative overflow-hidden h-auto w-auto lg:h-screen lg:w-screen'>
      <Waves />
      
        <div className='relative flex flex-col items-center text-center gap-20 mt-10 lg:flex-row lg:text-left lg:gap-10 lg:justify-around'>
          {cardData.map((data) => (
            <Card 
            key={data.id}
            img={data.img}
            email={data.email}
            linkedin={data.linkedin}
            github={data.github}
            about={data.about}
            />
          ))}       
          <Heading></Heading>
          
          </div>
    </div>
    
    <div className='relative'>
      <SVGBackground></SVGBackground>
      <h2 className="text-center text-4xl lg:p-15 p-5 text-white lg:text-6xl font-extrabold">Projects</h2>
          <div className='flex flex-col justify-center items-center gap-10 lg:flex-row lg:pb-10'>
            {projectData.map((data) => (
              <ProjectCard 
              key={data.id}
              title={data.title}
              status={data.status}
              techStack={data.techStack}
              repoUrl={data.repoUrl}
              description={data.description}
              liveUrl={data.liveUrl}
              />
            ))}
          </div>
    </div> 
    
      <div className="
        relative min-h-screen w-full          
        bg-cover bg-center bg-no-repeat       
        bg-[url('./assets/img/background-circles-2.png')] bg-black/30  ">
          <h2 className="text-center text-4xl lg:p-15 p-5 text-white lg:text-6xl font-extrabold">Skills</h2>
        <div className='relative flex flex-col items-center text-center gap-20 p-10 lg:flex-row lg:text-left lg:gap-10 lg:justify-around'>
          {skillData.map((data) => (
            <SkillCard 
            key={data.id}
            heading={data.heading}
            skills={data.skills}
            logo={data.logo}
            animation={data.animation} />
            
      ))}
      </div>
    </div>
    
    
    </>
  )
}

export default App
