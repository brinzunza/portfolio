import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { blogPosts } from '../data/blogPosts';
import { useRouter } from 'next/router';

const MarkdownRenderer = dynamic(() => import('../components/MarkdownRenderer'), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-64 bg-black/5 rounded" />
});


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
          // Scroll to top when post changes
          // The scrollable container is the main element, not window
          const mainElement = document.querySelector('main');
          if (mainElement) {
            mainElement.scrollTop = 0;
          }
        }
      }
    }
  }, [router.isReady, router.query]);

  return (
    <div className="py-[25vh] px-8 md:px-16 scrollbar-hide">
      <h1 className="text-2xl md:text-3xl font-mono mb-2">
        {selectedPost.title}
      </h1>
      <p className="text-sm text-black/60 mb-8">
        {selectedPost.date}
      </p>
      <div className="prose prose-lg max-w-none">
        <MarkdownRenderer content={selectedPost.content} />
      </div>
    </div>
  );
} 