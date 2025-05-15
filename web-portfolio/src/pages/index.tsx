import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="w-full -mt-16 md:-mt-32">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <img
                  src="/profile_pic.jpg"
                  alt="Bruno Inzunza"
                  className="w-full h-full rounded-full object-cover border-2 border-gray-100"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 md:text-4xl lg:text-5xl font-mono">
                Bruno Inzunza
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-500 md:mt-3 md:text-lg">
                Software Engineer & Data Scientist
              </p>
              
              <p className="mt-4 md:mt-6 text-sm text-gray-500 md:text-base max-w-md">
                College and self-taught engineer focused on <span className="font-medium text-gray-700">Software, Data, and Investing</span>. Currently working on frontend, backend, database, trading, and machine learning technologies.
              </p>

              <div className="mt-6 md:mt-8 flex space-x-6">
                <a
                  href="https://github.com/brinzunza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <Github className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                  </div>
                  <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/bruno-inzunza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                  </div>
                  <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">LinkedIn</span>
                </a>
                <a
                  href="mailto:bruno.inzunza@gmail.com"
                  className="group flex flex-col items-center"
                >
                  <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <Mail className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                  </div>
                  <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
