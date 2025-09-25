import { useState } from 'react';
import { X } from 'lucide-react';
import { useReading } from '../context/ReadingContext';

interface BlogPostProps {
  title: string;
  date: string;
  preview: string;
  content: string;
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsReading } = useReading();

  const handleOpen = () => {
    setIsOpen(true);
    setIsReading(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsReading(false);
  };

  return (
    <>
      <article className="border-b border-gray-200 py-8">
        <h2 className="text-xl font-medium text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500 font-sans">{date}</p>
        <button
          onClick={handleOpen}
          className="mt-4 text-sm font-mono font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
        >
          READ MORE
        </button>
      </article>

      {/* Full Screen Reading Mode */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="relative">
              <button
                onClick={handleClose}
                className="fixed top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
              <h1 className="text-3xl font-medium text-gray-900 mb-4">{title}</h1>
              <p className="text-sm text-gray-500 mb-8 font-sans">{date}</p>
              <div className="prose prose-lg max-w-none font-sans">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 