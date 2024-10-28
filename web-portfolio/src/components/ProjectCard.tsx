import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[]; 
  githubLink: string; 
  liveDemoLink: string; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubLink, liveDemoLink, technologies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-2"> {}
        {technologies.map((tech, index) => (
          <p key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded inline-block">
            {tech}
          </p>
        ))}
      </div>
      <div className="flex space-x-2"> 
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-100 text-green-600 px-3 py-1 rounded hover:bg-gray-50">
            GitHub
          </button>
        </a>
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-400">
            Live Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
