import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail, Copy, Check, FolderGit2, FileText, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { blogPosts } from '../data/blogPosts';

export default function Home() {
  const [emailState, setEmailState] = useState('mail');
  const email = 'bruno.inzunza24@gmail.com';
  const router = useRouter();

  const handleEmailClick = async () => {
    if (emailState === 'mail') {
      setEmailState('copy');
    } else if (emailState === 'copy') {
      try {
        await navigator.clipboard.writeText(email);
        setEmailState('check');
        setTimeout(() => {
          setEmailState('copy');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy email:', err);
      }
    }
  };

  // Get projects data from projects page
  const projects = [
    { id: '1', title: 'bruninvestor algorithmic trading' },
    { id: '2', title: 'practice debugging' },
    { id: '3', title: 'rag chatbot' },
    { id: '4', title: 'you are wrong' },
    { id: '5', title: 'brain' },
    { id: '6', title: 'synthetic market data api' },
  ];

  // Sort projects by ID (descending) and get top 3, excluding overview
  const featuredProjects = projects
    .filter(p => p.id !== '9999')
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3);

  // Sort blog posts by ID (descending) and get top 3, excluding overview
  const featuredWritings = blogPosts
    .filter(post => post.id !== '9999')
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Hero Section */}
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="relative w-48 h-48 mb-8">
            <img
              src="/profile_pic.jpg"
              alt="Bruno Inzunza"
              className="w-full h-full rounded-full object-cover border-2 border-gray-100"
            />
          </div>
          <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl text-center font-mono">
            BRUNO INZUNZA
          </h1>
          <p className="mt-2 text-base text-gray-500 sm:mx-auto md:mt-3 md:text-lg text-center">
            SOFTWARE ENGINEER & DATA SCIENTIST
          </p>

          <div className="mt-12 flex flex-col items-center">
            <p className="text-sm text-gray-500 sm:mx-auto md:text-base text-center max-w-md">
              college and self-taught engineer focused on<br></br> <span className="font-medium text-gray-700">software, data, ai, and investing</span>.<br></br> currently working on frontend, backend, database, computer vision, trading, and machine learning technologies.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex space-x-6">
              <a
                href="https://github.com/brinzunza"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
                  <Github className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                </div>
                <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">GITHUB</span>
              </a>
              <a
                href="https://linkedin.com/in/brunoinzunza"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
                  <Linkedin className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                </div>
                <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">LINKEDIN</span>
              </a>
              <div className="group flex flex-col items-center">
                <button
                  onClick={handleEmailClick}
                  className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  {emailState === 'mail' && (
                    <Mail className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                  )}
                  {emailState === 'copy' && (
                    <Copy className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                  )}
                  {emailState === 'check' && (
                    <Check className="h-5 w-5 text-green-600" />
                  )}
                </button>
                <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">EMAIL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light tracking-tight text-gray-900 font-mono">
              FEATURED PROJECTS
            </h2>
            <button
              onClick={() => router.push('/projects')}
              className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1 transition-colors duration-200"
            >
              VIEW ALL
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => router.push(`/projects?id=${project.id}`)}
                className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left"
              >
                <h3 className="text-sm font-medium text-gray-900 lowercase">
                  {project.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Writings Section */}
        <div className="py-16 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light tracking-tight text-gray-900 font-mono">
              FEATURED WRITINGS
            </h2>
            <button
              onClick={() => router.push('/blog')}
              className="text-sm text-gray-500 hover:text-gray-900 font-medium flex items-center gap-1 transition-colors duration-200"
            >
              VIEW ALL
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWritings.map((post) => (
              <button
                key={post.id}
                onClick={() => router.push(`/blog?id=${post.id}`)}
                className="group p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-left"
              >
                <h3 className="text-sm font-medium text-gray-900 lowercase">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 lowercase">
                  {post.date}
                </p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
