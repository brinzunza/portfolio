import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { blogPosts } from '../data/blogPosts';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="p-8 md:p-16 h-full flex items-center relative">
      {/* Decorative time in top right */}
      <div className="absolute top-8 right-8 md:top-16 md:right-16 text-xs font-mono text-black/20">
        {currentTime}
      </div>

      {/* Main content */}
      <div>
        <div className="flex items-start gap-6 md:gap-8 mb-12">
          <Image
            src="/profile_pic.jpg"
            alt="Bruno Inzunza"
            width={136}
            height={136}
            className="object-cover w-auto h-[6rem] md:h-[8.5rem]"
            priority
          />
          <div className="flex flex-col justify-between" style={{ lineHeight: 1 }}>
            <h1 className="text-5xl md:text-7xl font-mono" style={{ lineHeight: 1 }}>
              bruno
            </h1>
            <h1 className="text-5xl md:text-7xl font-mono" style={{ lineHeight: 1 }}>
              inzunza
            </h1>
          </div>
        </div>

        <div className="space-y-8 max-w-xl">
          <p className="text-sm md:text-base text-black/60 leading-relaxed">
            college and self-taught engineer focused on software, data, ai, and investing.
            currently working on frontend, backend, database, computer vision, trading, and
            machine learning technologies.
          </p>

          {/* Social/Contact links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/brinzunza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/50 hover:text-black transition-all underline"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/brunoinzunza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/50 hover:text-black transition-all underline"
            >
              linkedin
            </a>
            <a
              href="mailto:bruno.inzunza24@gmail.com"
              className="text-black/50 hover:text-black transition-all underline"
            >
              email
            </a>
          </div>

          {/* Latest work section */}
          <div className="pt-4">
            <div className="h-px bg-black/10 mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => router.push(`/projects?id=${mostRecentProject.id}`)}
                className="text-left group"
              >
                <h2 className="text-xs text-black/40 mb-2 font-mono">latest project</h2>
                <p className="text-base group-hover:underline">
                  {mostRecentProject.title}
                </p>
              </button>

              <button
                onClick={() => router.push(`/blog?id=${mostRecentBlog.id}`)}
                className="text-left group"
              >
                <h2 className="text-xs text-black/40 mb-2 font-mono">latest writing</h2>
                <p className="text-base group-hover:underline">
                  {mostRecentBlog.title}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
