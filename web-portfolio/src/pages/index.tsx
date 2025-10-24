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
    // Show buttons after 5 seconds
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 5000);

    // Show buttons on scroll attempt
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 0) {
        setShowButtons(true);
        clearTimeout(timer); // Clear the timer if scroll happens first
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-neutral-100 text-black font-sans overflow-hidden" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      {/* Bio description - top left corner */}
      <div className="fixed top-8 left-8 text-[10px] tracking-wide text-white leading-tight max-w-xs z-10">
        COLLEGE AND SELF-TAUGHT ENGINEER FOCUSED ON <span className="underline">SOFTWARE</span>, <span className="underline">DATA</span>, <span className="underline">AI</span>, AND <span className="underline">INVESTING</span>. CURRENTLY WORKING ON FRONTEND, BACKEND, DATABASE, COMPUTER VISION, TRADING, AND MACHINE LEARNING TECHNOLOGIES.
      </div>

      {/* Left half - Fullscreen Image */}
      <div className="fixed left-0 top-0 w-1/2 h-screen">
        <img
          src="/profile_pic.jpg"
          alt="Bruno Inzunza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right half - All content */}
      <div className="fixed right-0 top-0 w-1/2 h-screen flex items-center justify-center">
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

      {/* Navigation buttons - right side */}
      <div className="fixed top-1/2 -translate-y-16 right-[25%] flex gap-6">
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

      {/* Social/Contact links - right side */}
      <div className="fixed top-1/2 translate-y-16 right-[25%] flex gap-6">
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

      {/* Recent items - appear on scroll attempt - centered in right half */}
      <div
        className={`fixed bottom-20 left-3/4 -translate-x-1/2 flex gap-8 transition-all duration-500 ${
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
