import React from "react";
import { useRouter } from 'next/router';
import { blogPosts } from '../data/blogPosts';

const LandingPage: React.FC = () => {
  const router = useRouter();

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

  return (
    <div className="relative w-screen h-screen bg-neutral-100 text-black font-sans overflow-hidden" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      {/* Bio description - top left corner - only on desktop */}
      <div className="hidden md:block fixed top-16 left-12 text-[10px] tracking-wide text-white leading-tight max-w-xs z-10">
        COLLEGE AND SELF-TAUGHT ENGINEER FOCUSED ON <span className="underline">SOFTWARE</span>, <span className="underline">DATA</span>, <span className="underline">AI</span>, AND <span className="underline">INVESTING</span>. CURRENTLY WORKING ON FRONTEND, BACKEND, DATABASE, COMPUTER VISION, TRADING, AND MACHINE LEARNING TECHNOLOGIES.
      </div>

      {/* Left half - Fullscreen Image - Full width on mobile, half on desktop */}
      <div className="fixed left-0 top-0 w-full md:w-1/2 h-1/3 md:h-screen">
        <img
          src="/profile_pic.jpg"
          alt="Bruno Inzunza"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right half - All content - Bottom 2/3 on mobile, right half on desktop */}
      <div className="fixed right-0 top-1/3 md:top-0 w-full md:w-1/2 h-2/3 md:h-screen flex items-center justify-center bg-neutral-100 md:bg-transparent" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
        backgroundSize: '4px 4px'
      }}>
        {/* Text block */}
        <div className="flex flex-col items-start px-4 md:px-0">
          <div className="flex items-center font-bold text-[64px] md:text-[96px] leading-none">
            <span className="mr-3 md:mr-5">B</span>
            <div className="text-[8px] md:text-[10px] uppercase tracking-wider mt-2 md:mt-3 leading-tight">
              <div>024</div>
              <div>SOFTWARE ENGINEER</div>
              <div>& DATA SCIENTIST</div>
            </div>
            <span className="ml-3 md:ml-5">I</span>
          </div>
          <div className="text-[8px] md:text-[10px] mt-1 ml-2 md:ml-3">BRUNO.INZUNZA</div>
        </div>
      </div>

      {/* Navigation buttons - Adjust positioning for mobile */}
      <div className="fixed top-[calc(33.333%+180px)] md:top-1/2 left-1/2 md:left-auto md:-translate-y-16 md:right-[25%] -translate-x-1/2 md:translate-x-0 flex gap-4 md:gap-6 z-20">
        <button
          onClick={() => router.push('/projects')}
          className="text-black text-[10px] md:text-xs hover:underline transition-all"
        >
          PROJECTS
        </button>
        <button
          onClick={() => router.push('/blog')}
          className="text-black text-[10px] md:text-xs hover:underline transition-all"
        >
          BLOG
        </button>
      </div>

      {/* Social/Contact links - Adjust positioning for mobile */}
      <div className="fixed top-[calc(33.333%+220px)] md:top-1/2 left-1/2 md:left-auto md:translate-y-16 md:right-[25%] -translate-x-1/2 md:translate-x-0 flex gap-4 md:gap-6 z-20">
        <a
          href="https://github.com/brinzunza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-[10px] md:text-xs hover:underline transition-all"
        >
          GITHUB
        </a>
        <a
          href="https://linkedin.com/in/brunoinzunza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black text-[10px] md:text-xs hover:underline transition-all"
        >
          LINKEDIN
        </a>
        <a
          href="mailto:bruno.inzunza24@gmail.com"
          className="text-black text-[10px] md:text-xs hover:underline transition-all"
        >
          EMAIL
        </a>
      </div>

      {/* Recent items - Stack vertically on mobile, horizontal on desktop */}
      <div className="fixed bottom-8 md:bottom-20 left-1/2 md:left-3/4 -translate-x-1/2 flex flex-col md:flex-row gap-4 md:gap-8 z-20">
        <button
          onClick={() => router.push(`/projects?id=${mostRecentProject.id}`)}
          className="flex flex-col items-center gap-1 md:gap-2 group"
        >
          <span className="text-[8px] md:text-[10px] text-black/60 uppercase tracking-wider">LATEST PROJECT</span>
          <span className="text-[10px] md:text-xs text-black hover:underline lowercase text-center">
            {mostRecentProject.title}
          </span>
        </button>
        <button
          onClick={() => router.push(`/blog?id=${mostRecentBlog.id}`)}
          className="flex flex-col items-center gap-1 md:gap-2 group"
        >
          <span className="text-[8px] md:text-[10px] text-black/60 uppercase tracking-wider">LATEST WRITING</span>
          <span className="text-[10px] md:text-xs text-black hover:underline lowercase text-center">
            {mostRecentBlog.title}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
