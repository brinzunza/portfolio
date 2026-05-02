import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { blogPosts } from '../data/blogPosts';
import { useLanguage } from '../context/LanguageContext';
import { Check } from 'lucide-react';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const { language, setLanguage, t } = useLanguage();
  const [currentTime, setCurrentTime] = useState('');
  const [copied, setCopied] = useState(false);

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

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText('bruno.inzunza24@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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
    <div className="p-8 md:p-16 h-full flex flex-col justify-center relative overflow-hidden">
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
            {t('home.bio')}
          </p>

          {/* Social/Contact links and Language toggle */}
          <div className="flex justify-between items-center gap-6 text-sm">
            <div className="flex gap-6">
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
                href="https://x.com/brinzunza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-black transition-all underline"
              >
                X
              </a>
              <a
                href="https://monkeytype.com/profile/brinzunza"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-black transition-all underline"
              >
                typing
              </a>
              <button
                onClick={handleEmailClick}
                className="text-black/50 hover:text-black transition-all underline relative"
              >
                {copied ? t('home.copied') : t('home.email')}
              </button>
            </div>

            {/* Language toggle */}
            <div className="flex flex-col gap-2 items-end">
              <button
                onClick={() => setLanguage('en')}
                className={`${
                  language === 'en' ? 'text-black' : 'text-black/50'
                } hover:text-black transition-all underline flex items-center gap-1`}
              >
                {language === 'en' && <Check size={14} />}
                english
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`${
                  language === 'es' ? 'text-black' : 'text-black/50'
                } hover:text-black transition-all underline flex items-center gap-1`}
              >
                {language === 'es' && <Check size={14} />}
                español
              </button>
            </div>
          </div>

          {/* Latest work section */}
          <div className="pt-4">
            <div className="h-px bg-black/10 mb-6"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => router.push(`/projects?id=${mostRecentProject.id}`)}
                className="text-left group"
              >
                <h2 className="text-xs text-black/40 mb-2 font-mono">{t('home.latestProject')}</h2>
                <p className="text-base group-hover:underline">
                  {mostRecentProject.title}
                </p>
              </button>

              <button
                onClick={() => router.push(`/blog?id=${mostRecentBlog.id}`)}
                className="text-left group"
              >
                <h2 className="text-xs text-black/40 mb-2 font-mono">{t('home.latestWriting')}</h2>
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
