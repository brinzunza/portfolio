import Navbar from '../components/Navbar';

export default function Skills() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <h1 className="text-4xl font-medium mb-16 text-gray-900 text-center">Skills</h1>
        
        <div className="max-w-xl mx-auto">
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Python</span>
              <span className="text-sm text-gray-500">Data Analysis, ML, Web</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">JavaScript</span>
              <span className="text-sm text-gray-500">React, Next.js, TypeScript</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">SQL</span>
              <span className="text-sm text-gray-500">Database Design</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Java</span>
              <span className="text-sm text-gray-500">OOP, Enterprise</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Frontend</span>
              <span className="text-sm text-gray-500">React, Next.js, Tailwind</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Backend</span>
              <span className="text-sm text-gray-500">Node.js, Express, REST</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Databases</span>
              <span className="text-sm text-gray-500">MongoDB, PostgreSQL</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">DevOps</span>
              <span className="text-sm text-gray-500">Git, Docker, AWS</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Machine Learning</span>
              <span className="text-sm text-gray-500">Scikit-learn, TensorFlow</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Data Analysis</span>
              <span className="text-sm text-gray-500">Pandas, NumPy</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Data Visualization</span>
              <span className="text-sm text-gray-500">Matplotlib, Seaborn</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Big Data</span>
              <span className="text-sm text-gray-500">Apache Spark</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Algorithmic Trading</span>
              <span className="text-sm text-gray-500">Strategy Development</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100">
              <span className="text-gray-900">Financial Analysis</span>
              <span className="text-sm text-gray-500">Market Research</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 