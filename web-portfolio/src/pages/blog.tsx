import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import remarkGfm from 'remark-gfm'; // Import remarkGfm for GitHub Flavored Markdown
import { useRouter } from 'next/router';

export default function Blog() {
  const router = useRouter();

  // Initialize selectedPost based on URL parameter or default to first post
  const getInitialPost = () => {
    if (router.isReady) {
      const { id } = router.query;
      if (id && typeof id === 'string') {
        const post = blogPosts.find(p => p.id === id);
        if (post) return post;
      }
    }
    return blogPosts[0];
  };

  const [selectedPost, setSelectedPost] = useState(getInitialPost());

  // Handle URL parameter changes
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id && typeof id === 'string') {
        const post = blogPosts.find(p => p.id === id);
        if (post) {
          setSelectedPost(post);
        }
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div className="min-h-screen bg-neutral-100" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      <Navbar />
      <main className="flex flex-col md:flex-row h-screen pt-16 max-w-6xl mx-auto px-4 md:px-8">
        {/* Left side - Blog titles */}
        <div className="w-full md:w-1/3 md:border-r border-b md:border-b-0 border-black/10 overflow-y-scroll scrollbar-hide md:pr-8 pb-4 md:pb-0">
          <div className="py-4 md:py-8">
            <h1 className="text-lg md:text-xl font-light tracking-tight text-black mb-4 md:mb-8">
              BLOG
            </h1>
            <div className="space-y-2 md:space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className={`cursor-pointer transition-colors duration-200 ${
                    selectedPost.id === post.id
                      ? 'text-black'
                      : 'text-black/60 hover:text-black'
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-xs md:text-sm font-medium lowercase hover:underline">
                      {post.title.toLowerCase()}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Blog content */}
        <div className="w-full md:w-2/3 overflow-y-scroll scrollbar-hide md:pl-8">
          <div className="py-4 md:py-8">
            <h1 className="text-xl md:text-2xl font-medium text-black mb-3 md:mb-4">
              {selectedPost.title}
            </h1>
            <p className="text-xs md:text-sm text-black/60 mb-4 md:mb-8 font-sans">
              {selectedPost.date.toLowerCase()}
            </p>
            <div className="prose prose-lg max-w-none font-sans">
              {/* Use ReactMarkdown to render the content */}
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                p: ({ node, ...props }) => <p className="mb-4 text-black/80 leading-relaxed lowercase" {...props} />
              }}>
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 