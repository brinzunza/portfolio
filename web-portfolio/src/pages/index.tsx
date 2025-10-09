import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [emailState, setEmailState] = useState('mail');
  const email = 'bruno.inzunza24@gmail.com';

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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full">
          <div className="min-h-[40vh] flex flex-col items-center justify-center">
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
          </div>

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
      </main>
    </div>
  );
}
