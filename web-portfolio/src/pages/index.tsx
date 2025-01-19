import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white text-gray-800"> 
      {/* Navigation */}
      <nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-green-600">BI</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
              <a href="#skills" className="text-gray-600 hover:text-green-600">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-green-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-green-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block text-gray-600 hover:text-green-600 py-2">About</a>
              <a href="#skills" className="block text-gray-600 hover:text-green-600 py-2">Skills</a>
              <a href="#projects" className="block text-gray-600 hover:text-green-600 py-2">Projects</a>
              <a href="#contact" className="block text-gray-600 hover:text-green-600 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <div className="px-60">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About section */}
        <section id="about" className="mb-16">
          <div className="flex items-start">
            <img 
              src="/profile_pic.jpg" 
              alt="Profile Picture" 
              style={{ width: '20%', borderRadius: '10px', marginRight: '20px' }} 
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">Bruno Inzunza</h1>
              <h2 className="text-2xl text-gray-600 mb-4">Software Engineer & Data Scientist</h2>
              <p className="text-lg text-gray-700">
              College and self-taught engineer focused on <strong>Software, Data, and Investing</strong>. Currently working on frontend, backend, database, trading, and machine learning technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard title="Software Engineering" skills={['Python', 'Java', 'JavaScript', 'React', 'Node.js', 'Next.js', 'Git', 'HTML', 'CSS']} />
            <SkillCard title="Data Science" skills={['Machine Learning Algorithms', 'Data Analysis', 'SQL', 'NoSQL', 'R', 'Pytorch', 'tensorflow', 'Pandas', 'Scikit-learn']} />
            <SkillCard title="Tools & Technologies" skills={['Docker', 'PostgreSQL', 'MongoDB', 'TensorFlow', 'Tableau']} />
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Algorithmic Trading" 
              description="Designed and implemented an algorithmic trading system. Fully backtested with custom strategies."
              technologies={['Python', 'Trading']} 
              githubLink="https://github.com/brinzunza/bat" 
              liveDemoLink="https://github.com/brinzunza/BAT/blob/main/meanReversion.ipynb" 
            />
            <ProjectCard 
              title="PracticeDebugging.com" 
              description="Developed a web-based platform that allows developers to practice and enhance debugging skills by solving simulated problems."
              technologies={['React', 'Next', 'MongoDB']} 
              githubLink="https://github.com/brinzunza" 
              liveDemoLink="https://github.com/brinzunza" 
            />
            <ProjectCard 
              title="LaLiga Analysis and Predictor" 
              description="Built a sports analysis tool using web scraping to gather and aggreagate raw data on LaLiga teams and match statistics."
              technologies={['Python', 'Web-Scraping', 'Data Science']} 
              githubLink="https://github.com/brinzunza/laLigaML" 
              liveDemoLink="https://github.com/brinzunza/laLigaML" 
            />
            <ProjectCard 
              title="Salary Management System" 
              description="Designed and implemented a simulation of a real-life salary management system."
              technologies={['SQL', 'Databases', 'Python']} 
              githubLink="https://github.com/brinzunza/salary-management" 
              liveDemoLink="https://github.com/brinzunza/salary-management" 
            />
            <ProjectCard 
              title="Machine Learning From Scratch" 
              description="Created a dynamic dashboard for visualizing Formula 1 race data, allowing users to explore race statistics, driver performance, and team standings through interactive charts and graphs."
              technologies={['Python', 'Machine Learning']} 
              githubLink="https://github.com/brinzunza/machine-learning-from-scratch" 
              liveDemoLink="https://github.com/brinzunza/machine-learning-from-scratch" 
            />
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/brinzunza" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/brunoinzunza" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
              <Linkedin size={24} />
            </a>
            <a href="mailto:bruno.inzunza24@gmail.com" className="text-gray-600 hover:text-green-600">
              <Mail size={24} />
            </a>
          </div>
        </section>
      </main>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          © 2024 Bruno Inzunza. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
