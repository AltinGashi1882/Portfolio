import FadeInUp from "../Animations/FadeInUp";
import { Code, Database, Layout, Cpu } from "lucide-react"; // nice icons

export default function Skills() {
  return (

    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" >
      <FadeInUp>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto p-8 text-white">
        
        {/* Left Column */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 drop-shadow-md mb-6">
              My Skills
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Over the years, I’ve developed a range of technical and soft skills 
              that help me build software, solve problems, and collaborate effectively. 
            </p>
          </div>

        {/* Right Column */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl flex flex-col text-center items-center hover:scale-105 transition-transform">
                <Code className='w-10 h-10 text-gray-300 mb-3'/>
                <h3 className="text-gray-300 font-semibold text-lg">
                  Frontend
                </h3>
                <p className="text-sm text-gray-200">React, Tailwind, GSAP</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl flex flex-col text-center items-center hover:scale-105 transition-transform">
                <Database className='w-10 h-10 text-gray-300 mb-3'/>
                <h3 className='font-semibold text-lg text-gray-300'>Backend</h3>
                <p className='text-sm text-gray-200'>PHP, MySQL, Node.js</p>
              </div>
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl flex flex-col text-center items-center hover:scale-105 transition-transform">
                <Cpu className="w-10 h-10 text-gray-300 mb-3"/>
                <h3 className='font-semibold text-lg text-gray-300'>Core</h3>
                <p className="text-sm text-gray-200">Algorithms, OOP</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl flex flex-col text-center items-center hover:scale-105 transition-transform">
              <Layout className='w-10 h-10 text-gray-300 mb-3'/>
              <h3 className='font-semibold text-lg text-gray-300'>Design</h3>
              <p className="text-sm text-gray-200">Figma</p> 
            </div>
          </div>
      </div>
    </FadeInUp>
    </div>
  );
}
