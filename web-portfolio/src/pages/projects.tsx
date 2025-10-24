import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

const projects = [
  {
    id: '9999',
    title: 'overview',
    description: '',
    code: 'https://github.com/brinzunza/',
    tech: ['Projects'],
    readmeFile: '/overview/overview.md',
  },
  {
    id: '1',
    title: 'bruninvestor algorithmic trading',
    description: 'designed and implemented an algorithmic trading system. fully backtested with custom strategies.',
    code: 'https://github.com/brinzunza/BAT',
    tech: ['python', 'trading'],
    readmeFile: '/bat-trading/batreadme.md',
  },
  {
    id: '2',
    title: 'practice debugging',
    description: 'developed a web-based platform that allows developers to practice and enhance debugging skills by solving simulated problems.',
    code: 'https://github.com/brinzunza/practicedebugging',
    tech: ['react'],
    readmeFile: '/practice-debugging/pdreadme.md',
  },
  {
    id: '3',
    title: 'rag chatbot',
    description: 'developed a retrieval-augmented generation (rag) chatbot capable of answering questions from any pdf documents.',
    code: 'https://github.com/brinzunza/ragchatbot',
    tech: ['python', 'langchain', 'llm'],
    readmeFile: '/rag-chatbot/ragreadme.md',
  },
  {
    id: '4',
    title: 'you are wrong',
    description: 'created a real-time debate assistant leveraging mixed reality for immersive and interactive argumentation analysis.',
    code: 'https://github.com/brinzunza/youarewrongAR',
    tech: ['XR', 'CV'],
    readmeFile: '/you-are-wrong/urwreadme.md',
  },
  {
    id: '5',
    title: 'brain',
    description: 'created a program to remember information you want to later recall',
    code: 'https://github.com/brinzunza/brain',
    tech: ['vdb', 'python', 'react'],
    readmeFile: '/brain/breadme.md',
  },
  {
    id: '6',
    title: 'synthetic market data api',
    description: 'created an api that generates synthetic market data which can be accessed through api',
    code: 'https://github.com/brinzunza/market_data_engine',
    tech: ['python', 'docker', 'kafka'],
    readmeFile: '/market-data-api/mdreadme.md',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [readmeContent, setReadmeContent] = useState('');
  const router = useRouter();

  // Handle URL parameter for pre-selecting a project
  useEffect(() => {
    const { id } = router.query;
    if (id && typeof id === 'string') {
      const project = projects.find(p => p.id === id);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [router.query]);

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
    <div className="min-h-screen bg-neutral-100" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      <Navbar />
      <main className="flex h-screen pt-16 max-w-6xl mx-auto px-8">
        {/* Left side - Project titles */}
        <div className="w-1/3 border-r border-black/10 overflow-y-scroll scrollbar-hide pr-8">
          <div className="py-8">
            <h1 className="text-xl font-light tracking-tight text-black mb-8">
              PROJECTS
            </h1>
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer transition-colors duration-200 ${
                    selectedProject.id === project.id
                      ? 'text-black'
                      : 'text-black/60 hover:text-black'
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
            <h1 className="text-2xl font-medium text-black mb-4">
              {selectedProject.title}
            </h1>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono bg-black/5 text-black/80 border border-black/10">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black/60 hover:text-black hover:underline transition-all"
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
                    <h1 className="text-xl font-medium text-black mb-4 lowercase">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-lg font-medium text-black mb-3 mt-6 lowercase">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-base font-medium text-black mb-2 mt-4 lowercase">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-black/80 leading-relaxed lowercase">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-4 space-y-1 text-black/80 lowercase">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-4 space-y-1 text-black/80 lowercase list-decimal list-inside">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-black/80 lowercase">
                      {children}
                    </li>
                  ),
                  code: ({ children }) => (
                    <code className="bg-black/5 px-1 py-0.5 text-sm font-mono text-black/90 border border-black/10">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-black/5 p-4 mb-4 overflow-x-auto border border-black/10">
                      {children}
                    </pre>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-black/30 pl-4 mb-4 text-black/70 italic lowercase">
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:underline lowercase"
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