import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Navbar from '../components/Navbar';

const projects = [
  {
    id: '1',
    title: 'bruninvestor algorithmic trading',
    description: 'designed and implemented an algorithmic trading system. fully backtested with custom strategies.',
    code: 'https://github.com/brinzunza/BAT',
    gif: '/at.gif',
    tech: ['python', 'trading'],
    readmeFile: '/batreadme.md',
  },
  {
    id: '2',
    title: 'practice debugging',
    description: 'developed a web-based platform that allows developers to practice and enhance debugging skills by solving simulated problems.',
    code: 'https://github.com/brinzunza/practicedebugging',
    gif: '/pd.gif',
    tech: ['react'],
    readmeFile: '/pdreadme.md',
  },
  {
    id: '3',
    title: 'rag chatbot',
    description: 'developed a retrieval-augmented generation (rag) chatbot capable of answering questions from any pdf documents.',
    code: 'https://github.com/brinzunza/ragchatbot',
    gif: '/rag.gif',
    tech: ['python', 'langchain', 'llm'],
    readmeFile: '/ragreadme.md',
  },
  {
    id: '4',
    title: 'you are wrong',
    description: 'created a real-time debate assistant leveraging mixed reality for immersive and interactive argumentation analysis.',
    code: 'https://github.com/brinzunza/youarewrongAR',
    gif: '/mrda.gif',
    tech: ['XR', 'CV'],
    readmeFile: '/urwreadme.md',
  },
  {
    id: '5',
    title: 'brain',
    description: 'created a program to remember information you want to later recall',
    code: 'https://github.com/brinzunza/brain',
    gif: '/mrda.gif',
    tech: ['vdb', 'python', 'react'],
    readmeFile: '/breadme.md',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      if (selectedProject.readmeFile) {
        try {
          const response = await fetch(selectedProject.readmeFile);
          const content = await response.text();
          setReadmeContent(content);
        } catch (error) {
          console.error('Error fetching readme:', error);
          setReadmeContent('readme content could not be loaded.');
        }
      } else {
        setReadmeContent('readme content will be added later for this project...');
      }
    };

    fetchReadme();
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex h-screen pt-16 max-w-6xl mx-auto px-8">
        {/* Left side - Project titles */}
        <div className="w-1/3 border-r border-gray-200 overflow-y-scroll scrollbar-hide pr-8">
          <div className="py-8">
            <h1 className="text-xl font-light tracking-tight text-gray-900 mb-8">
              PROJECTS
            </h1>
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer transition-colors duration-200 ${
                    selectedProject.id === project.id
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <h2 className="text-sm font-medium lowercase hover:underline">
                    {project.title.toLowerCase()}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Project readme content */}
        <div className="w-2/3 overflow-y-scroll scrollbar-hide pl-8">
          <div className="py-8">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">
              {selectedProject.title}
            </h1>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-gray-100 text-gray-600 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 font-medium"
              >
                code
              </a>
            </div>
            <div className="prose prose-lg max-w-none font-sans">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-xl font-medium text-gray-900 mb-4 lowercase">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-lg font-medium text-gray-900 mb-3 mt-6 lowercase">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-base font-medium text-gray-900 mb-2 mt-4 lowercase">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed lowercase">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 space-y-1 text-gray-700 lowercase">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 space-y-1 text-gray-700 lowercase list-decimal list-inside">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 lowercase">
                      {children}
                    </li>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 mb-4 text-gray-600 italic lowercase">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-500 lowercase"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 