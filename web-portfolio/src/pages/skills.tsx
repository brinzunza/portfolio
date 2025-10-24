import Navbar from '../components/Navbar';

export default function Skills() {
  return (
    <div className="min-h-screen bg-neutral-100" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-[40vh] flex items-center justify-center">
          <h1 className="text-3xl font-light tracking-tight text-black sm:text-4xl text-center">
            SKILLS
          </h1>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Python</span>
              <span className="text-sm text-black/60">Data Analysis, ML</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">SQL</span>
              <span className="text-sm text-black/60">Database Design</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Java</span>
              <span className="text-sm text-black/60">OOP, Enterprise</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Frontend</span>
              <span className="text-sm text-black/60">React, Next.js, Tailwind</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Backend</span>
              <span className="text-sm text-black/60">Node.js, Express, REST</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Databases</span>
              <span className="text-sm text-black/60">MongoDB, PostgreSQL</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">DevOps</span>
              <span className="text-sm text-black/60">Git, Docker</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Machine Learning</span>
              <span className="text-sm text-black/60">Scikit-learn, LangChain, LLM, Hugging Face</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Data Analysis</span>
              <span className="text-sm text-black/60">Pandas, NumPy, SciPy, Matplotlib, Seaborn</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Data Visualization</span>
              <span className="text-sm text-black/60">Matplotlib, Seaborn</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-black/10">
              <span className="text-black">Algorithmic Trading</span>
              <span className="text-sm text-black/60">Strategy Development, Backtesting</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 