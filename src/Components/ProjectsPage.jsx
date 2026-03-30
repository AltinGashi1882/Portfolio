import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Code, ExternalLink, Calendar, User } from "lucide-react";
import projectData from "../Data/projectsData.js";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));
  

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-error">Project not found</h2>
          <Link to="/" className="btn btn-primary mt-4 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      {/* Hero Section with Back Button */}
      <div className="relative bg-primary/10 backdrop-blur-sm border-b border-base-300">
        <div className="container mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="btn btn-ghost gap-2 hover:scale-105 transition-transform duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="card bg-base-100 shadow-xl mb-12">
          <div className="card-body">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <div key={index} className="badge badge-outline badge-lg gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center mb-6">Project Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.showcaseImg.map((path, index) => (
              <div 
                key={index} 
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <figure className="relative overflow-hidden rounded-t-xl">
                  <img 
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500" 
                    src={path} 
                    alt={`${project.title} showcase ${index + 1}`}
                  />
                  <div className="absolute top-4 right-4">
                    <div className="badge badge-primary badge-sm">Screenshot {index + 1}</div>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="divider my-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <Calendar className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">Project Date</h4>
              <p className="text-sm text-base-content/60">2026</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md">
            <div className="card-body items-center text-center">
              <User className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">Project Type</h4>
              <p className="text-sm text-base-content/60">Personal Project</p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-md">
            <a href={project.liveUrl}><div className="card-body items-center text-center">
              <ExternalLink className="w-8 h-8 text-primary mb-2" />
              <h4 className="font-semibold">Live Demo</h4>
              <p className="text-sm text-base-content/60">{project.liveUrl && project.liveUrl.length > 0 ? "Available" : "Coming Soon"}</p>
            </div></a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mt-12">
          <Link to="/" className="btn btn-outline gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary gap-2">
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}