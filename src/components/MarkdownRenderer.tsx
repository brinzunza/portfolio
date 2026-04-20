import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
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
          <ul className="mb-4 space-y-1 text-black/80 list-disc ml-6">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-4 space-y-1 text-black/80 list-decimal ml-6">
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
      {content}
    </ReactMarkdown>
  );
}
