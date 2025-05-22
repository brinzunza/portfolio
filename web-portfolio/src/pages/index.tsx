import Navbar from '../components/Navbar';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Home() {
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
              college and self-taught engineer focused on <span className="font-medium text-gray-700">software, data, and investing</span>. currently working on frontend, backend, database, trading, and machine learning technologies.
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
              <a
                href="mailto:bruno.inzunza24@gmail.com"
                className="group flex flex-col items-center"
              >
                <div className="p-2 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
                  <Mail className="h-5 w-5 text-gray-500 group-hover:text-gray-900" />
                </div>
                <span className="mt-1.5 text-xs text-gray-500 group-hover:text-gray-900">EMAIL</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
