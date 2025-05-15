import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveDemoLink: string;
  image: string;
  gif: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  liveDemoLink,
  image,
  gif
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <img 
          src={gif} 
          alt={`${title} demo`} 
          className="absolute inset-0 w-full h-48 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-500 mb-4 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200 flex items-center text-sm"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
          <a 
            href={liveDemoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200 flex items-center text-sm"
          >
            <ExternalLink size={16} className="mr-1" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
