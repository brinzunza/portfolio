import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { blogPosts } from '../data/blogPosts';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const [showButtons, setShowButtons] = useState(false);

  // Get most recent project and blog post
  const projects = [
    { id: '1', title: 'bruninvestor algorithmic trading' },
    { id: '2', title: 'practice debugging' },
    { id: '3', title: 'rag chatbot' },
    { id: '4', title: 'you are wrong' },
    { id: '5', title: 'brain' },
    { id: '6', title: 'synthetic market data api' },
  ];

  const mostRecentProject = projects
    .filter(p => p.id !== '9999')
    .sort((a, b) => Number(b.id) - Number(a.id))[0];

  const mostRecentBlog = blogPosts
    .filter(post => post.id !== '9999')
    .sort((a, b) => Number(b.id) - Number(a.id))[0];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Detect any scroll attempt
      if (Math.abs(e.deltaY) > 0) {
        setShowButtons(true);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-neutral-100 text-black font-sans overflow-hidden" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      {/* Rotated vertical text */}
      <div
        className="fixed bottom-8 left-10 text-[10px] tracking-wide text-black leading-tight"
        style={{
          transform: 'rotate(-90deg)',
          transformOrigin: 'left bottom',
          maxWidth: 'calc(100vh - 8rem)',
          width: 'max-content'
        }}
      >
        COLLEGE AND SELF-TAUGHT ENGINEER FOCUSED ON SOFTWARE, DATA, AI, AND INVESTING. CURRENTLY WORKING ON FRONTEND, BACKEND, DATABASE, COMPUTER VISION, TRADING, AND MACHINE LEARNING TECHNOLOGIES.
      </div>

      {/* Center content */}
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center gap-12 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-center gap-12">
        {/* Image block */}
        <div className="w-[140px] h-[140px]">
          <img
            src="/profile_pic.jpg"
            alt="Bruno Inzunza"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col items-start">
          <div className="flex items-center font-bold text-[96px] leading-none">
            <span className="mr-5">B</span>
            <div className="text-[10px] uppercase tracking-wider mt-3 leading-tight">
              <div>024</div>
              <div>SOFTWARE ENGINEER</div>
              <div>& DATA SCIENTIST</div>
            </div>
            <span className="ml-5">I</span>
          </div>
          <div className="text-[10px] mt-1 ml-3">BRUNO.INZUNZA</div>
        </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="fixed top-1/2 -translate-y-16 right-12 flex gap-6">
        <button
          onClick={() => router.push('/projects')}
          className="text-black text-xs hover:underline transition-all"
        >
          PROJECTS
        </button>
        <button
          onClick={() => router.push('/blog')}
          className="text-black text-xs hover:underline transition-all"
        >
          BLOG
        </button>
      </div>

      {/* Social/Contact links */}
      <div className="fixed top-1/2 translate-y-16 right-12 flex gap-6">
        <a
          href="https://github.com/brinzunza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xs hover:underline transition-all"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/brunoinzunza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-xs hover:underline transition-all"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:bruno.inzunza24@gmail.com"
          className="text-black text-xs hover:underline transition-all"
        >
          EMAIL
        </a>
      </div>

      {/* Recent items - appear on scroll attempt */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 flex gap-8 transition-all duration-500 ${
          showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => router.push(`/projects?id=${mostRecentProject.id}`)}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-[10px] text-black/60 uppercase tracking-wider">LATEST PROJECT</span>
          <span className="text-xs text-black hover:underline lowercase">
            {mostRecentProject.title}
          </span>
        </button>
        <button
          onClick={() => router.push(`/blog?id=${mostRecentBlog.id}`)}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-[10px] text-black/60 uppercase tracking-wider">LATEST WRITING</span>
          <span className="text-xs text-black hover:underline lowercase">
            {mostRecentBlog.title}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
