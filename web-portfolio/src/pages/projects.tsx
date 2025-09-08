import Navbar from '../components/Navbar';
import { useState } from 'react';

const projects = [
  {
    title: 'bruninvestor algorithmic trading',
    description: 'designed and implemented an algorithmic trading system. fully backtested with custom strategies.',
    code: 'https://github.com/brinzunza/BAT',
    gif: '/at.gif',
    tech: ['python', 'trading'],
  },
  {
    title: 'practice debugging',
    description: 'developed a web-based platform that allows developers to practice and enhance debugging skills by solving simulated problems.',
    code: 'https://github.com/brinzunza/',
    gif: '/pd.gif',
    tech: ['react', 'next', 'mongodb'],
  },
  {
    title: 'rag chatbot',
    description: 'developed a retrieval-augmented generation (rag) chatbot capable of answering questions from specified documents.',
    code: 'https://github.com/brinzunza/',
    gif: '/rag.gif',
    tech: ['python', 'langchain', 'llm'],
  },
  {
    title: 'mixed reality debate assistant',
    description: 'created a real-time debate assistant leveraging mixed reality for immersive and interactive argumentation analysis.',
    code: 'https://github.com/brinzunza/',
    gif: '/mrda.gif',
    tech: ['VR/AR'],
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-[40vh] flex items-center justify-center">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl text-center">
            PROJECTS
          </h1>
        </div>
        <div className="divide-y divide-gray-200">
          {projects.map((project, idx) => (
            <div key={project.title} className={"py-10" + (idx === 0 ? "" : "")}>
              <div className="flex items-center justify-between">
                <h2 
                  className="text-2xl font-mono font-normal tracking-wide text-gray-900 cursor-pointer hover:text-gray-600 transition-colors hover:underline"
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {project.title}
                </h2>
                <div className="flex space-x-4">
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-gray-900 font-medium">Code</a>
                </div>
              </div>
              <p className="mt-2 text-gray-500 text-base">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-gray-100 text-gray-600 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating GIF container */}
        <div 
          className={`fixed left-4 top-1/2 -translate-y-1/2 inline-block rounded-lg shadow-lg overflow-hidden transition-all duration-300 z-40 ${
            hoveredProject ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
          }`}
        >
          {hoveredProject && (
            <img 
              src={projects.find(p => p.title === hoveredProject)?.gif}
              alt={`${hoveredProject} demo`} 
              className="max-w-[24rem] max-h-[18rem] object-contain"
            />
          )}
        </div>
      </main>
    </div>
  );
} 