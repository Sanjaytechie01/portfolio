import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "AI Chatbot",
      description: "Intelligent chatbot using natural language processing for customer support automation.",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring application with location-based forecasts and data visualization.",
      technologies: ["JavaScript", "Chart.js", "Weather API"],
      github: "https://github.com",
      demo: "https://example.com",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-gray-600 transition-colors duration-200"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-gray-600 transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;