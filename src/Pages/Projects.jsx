
import AnimatedContent from '../Animations/AnimtedContent';

export default function Projects() {
    return (
        <>
        <AnimatedContent>
<section id="projects" className="py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-white text-center mb-4">My Projects</h2>
    <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
      Here are some of the projects I've worked on during my studies and personal development
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project Card 1 */}
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img 
          src="/images/simple_business_project.png" 
          alt="Project 1" 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">Simple Business Website</h3>
          <p className="text-gray-400 mb-4">A simple website for more information about the business</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-700 text-white px-3 py-1 rounded-full text-sm">HTML</span>
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">CSS</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Bootstrap</span>
          </div>
          <div className="flex gap-4">
            <a href="https://altingashi1882.github.io/home.html" className="text-blue-400 hover:text-blue-300 transition-colors">Live Demo</a>
            <a href="https://github.com/AltinGashi1882/AltinGashi1882.github.io" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>
</AnimatedContent>
        
        
        
        </>
    );
}