import { Github } from 'lucide-react';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
  gif: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubLink,
  image,
  gif
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col md:block h-screen md:h-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative group h-1/2 md:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full md:h-48 object-cover"
          />
        </div>
        <div className="p-6 h-1/2 md:h-auto flex flex-col justify-center items-center text-center md:text-left md:items-start">
          <h3 className="text-xl font-medium mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-500 mb-4 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors duration-200 flex items-center text-sm border border-gray-300 rounded px-3 py-1.5"
            >
              <Github size={16} className="mr-1.5" />
              Code
            </a>
          </div>
        </div>
      </div>

      {/* Floating GIF on hover */}
      <div 
        className={`fixed left-4 top-1/2 -translate-y-1/2 w-96 h-72 rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-40 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
        }`}
      >
        <img 
          src={gif} 
          alt={`${title} demo`} 
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}
