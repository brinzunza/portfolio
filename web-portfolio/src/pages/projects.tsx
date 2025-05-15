import Navbar from '../components/Navbar';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <h1 className="text-4xl font-light tracking-tight mb-16 text-gray-900 text-center font-sans">Projects</h1>
        
        <div className="max-w-xl mx-auto">
          <div className="space-y-12">
            <div className="border-b border-gray-100 pb-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-normal tracking-wide text-gray-900 font-mono">Algorithmic Trading</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/brinzunza/bat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Code
                  </a>
                  <a 
                    href="https://github.com/brinzunza/BAT/blob/main/meanReversion.ipynb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3 font-sans">Designed and implemented an algorithmic trading system. Fully backtested with custom strategies.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Python</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Trading</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-normal tracking-wide text-gray-900 font-mono">PracticeDebugging.com</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/brinzunza" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Code
                  </a>
                  <a 
                    href="https://github.com/brinzunza" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3 font-sans">Developed a web-based platform that allows developers to practice and enhance debugging skills by solving simulated problems.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">React</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Next</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">MongoDB</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-normal tracking-wide text-gray-900 font-mono">LaLiga Analysis and Predictor</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/brinzunza/laLigaML" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Code
                  </a>
                  <a 
                    href="https://github.com/brinzunza/laLigaML" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3 font-sans">Built a sports analysis tool using web scraping to gather and aggregate raw data on LaLiga teams and match statistics.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Python</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Web-Scraping</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Data Science</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-normal tracking-wide text-gray-900 font-mono">Salary Management System</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/brinzunza/salary-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Code
                  </a>
                  <a 
                    href="https://github.com/brinzunza/salary-management" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3 font-sans">Designed and implemented a simulation of a real-life salary management system.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">SQL</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Databases</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Python</span>
              </div>
            </div>

            <div className="border-b border-gray-100 pb-12">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-normal tracking-wide text-gray-900 font-mono">Machine Learning From Scratch</h2>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/brinzunza/machine-learning-from-scratch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Code
                  </a>
                  <a 
                    href="https://github.com/brinzunza/machine-learning-from-scratch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 font-sans"
                  >
                    Demo
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-3 font-sans">Created a dynamic dashboard for visualizing Formula 1 race data, allowing users to explore race statistics, driver performance, and team standings through interactive charts and graphs.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Python</span>
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full font-mono">Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 