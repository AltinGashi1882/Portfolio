export default function App() {
    return (
        <>
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
        </>
    )
}