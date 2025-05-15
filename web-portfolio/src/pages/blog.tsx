import Navbar from '../components/Navbar';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        <h1 className="text-4xl font-medium mb-16 text-gray-900 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="p-10">
              <h2 className="text-xl font-medium mb-2 text-gray-900">Getting Started with Machine Learning</h2>
              <p className="text-sm text-gray-400 mb-4">January 1, 2024</p>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                An introduction to machine learning concepts and practical applications...
              </p>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center text-sm">
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
          
          <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
            <div className="p-10">
              <h2 className="text-xl font-medium mb-2 text-gray-900">Building Modern Web Applications</h2>
              <p className="text-sm text-gray-400 mb-4">January 15, 2024</p>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Exploring the latest trends and best practices in web development...
              </p>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center text-sm">
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
} 