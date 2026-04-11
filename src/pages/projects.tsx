import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { useRouter } from 'next/router';

export const projects = [
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
    title: 'synthetic market data engine',
    description: 'created an engine that generates synthetic market data which can be accessed through api',
    code: 'https://github.com/brinzunza/market_data_engine',
    tech: ['python', 'docker', 'kafka'],
    readmeFile: '/market-data-api/mdreadme.md',
  },
];

export default function Projects() {
  const router = useRouter();

  // Initialize selectedProject based on URL parameter or default to overview
  const getInitialProject = () => {
    if (router.isReady) {
      const { id } = router.query;
      if (id && typeof id === 'string') {
        const project = projects.find(p => p.id === id);
        if (project) return project;
      }
    }
    return projects[0];
  };

  const [selectedProject, setSelectedProject] = useState(getInitialProject());
  const [readmeContent, setReadmeContent] = useState('');

  // Handle URL parameter changes
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id && typeof id === 'string') {
        const project = projects.find(p => p.id === id);
        if (project) {
          setSelectedProject(project);
        }
      }
    }
  }, [router.isReady, router.query]);

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
    <div className="py-[25vh] px-8 md:px-16 scrollbar-hide">
      <h1 className="text-2xl md:text-3xl font-mono mb-6">
        {selectedProject.title}
      </h1>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedProject.tech.map((tech) => (
            <span key={tech} className="text-xs text-black/60">
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
          view code
        </a>
      </div>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-xl font-medium text-black mb-4">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-lg font-medium text-black mb-3 mt-6">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-medium text-black mb-2 mt-4">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-black/80 leading-relaxed">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="mb-4 space-y-1 text-black/80 list-disc list-inside">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-4 space-y-1 text-black/80 list-decimal list-inside">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="text-black/80">
                {children}
              </li>
            ),
            code: ({ children }) => (
              <code className="bg-black/5 px-1 py-0.5 text-sm font-mono text-black/90">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="bg-black/5 p-4 mb-4 overflow-x-auto">
                {children}
              </pre>
            ),
            blockquote: ({ children }) => (
              <blockquote className="pl-4 mb-4 text-black/70 italic">
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
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
  );
} 