import { useState } from 'react';
import { Github, Linkedin, Mail, Menu, Radius, X } from 'lucide-react';
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
              College and self-taught student focused on <strong>Software, Data, and Investing</strong>. Currently working on frontend, backend, database, trading, and machine learning technologies.
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
              description="Developed a sophisticated algorithmic trading system that utilizes technical analysis techniques to analyze market trends and execute trades automatically, resulting in a consistent increase versus S&P500."
              githubLink="https://github.com/brinzunza/bat" 
              liveDemoLink="https://github.com/brinzunza/BAT/blob/main/meanReversion.ipynb" 
            />
            <ProjectCard 
              title="MERN Blog" 
              description="Created a full-stack blog application using the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, real-time posts, and a responsive design that enhances user engagement."
              githubLink="https://github.com/brinzunza" 
              liveDemoLink="https://github.com/brinzunza" 
            />
            <ProjectCard 
              title="LeetCode Clone" 
              description="Built a clone of the popular coding platform LeetCode, allowing users to practice coding problems, track their progress, and practice debugging issues, all while providing a seamless user experience."
              githubLink="https://github.com/brinzunza" 
              liveDemoLink="https://github.com/brinzunza" 
            />
            <ProjectCard 
              title="Speed Typing Test" 
              description="Designed an interactive speed typing test application that challenges users to improve their typing speed and accuracy through a timed exercise, complete with performance analytics and random text generation."
              githubLink="https://github.com/brinzunza/Typing_test" 
              liveDemoLink="https://justtyping.netlify.app" 
            />
            <ProjectCard 
              title="Image Classification" 
              description="Developed an image classification application using machine learning techniques, enabling users to upload custom input and receive instant feedback on the classification results."
              githubLink="https://github.com/brinzunza/OCR" 
              liveDemoLink="https://github.com/brinzunza/OCR/blob/main/ocr.py" 
            />
            <ProjectCard 
              title="F1 Visualization Dashboard" 
              description="Created a dynamic dashboard for visualizing Formula 1 race data, allowing users to explore race statistics, driver performance, and team standings through interactive charts and graphs."
              githubLink="https://github.com/brinzunza" 
              liveDemoLink="https://github.com/brinzunza" 
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
