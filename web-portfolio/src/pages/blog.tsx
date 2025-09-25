import { useState } from 'react';
import Navbar from '../components/Navbar';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex h-screen pt-16 max-w-6xl mx-auto px-8">
        {/* Left side - Blog titles */}
        <div className="w-1/3 border-r border-gray-200 overflow-y-scroll scrollbar-hide pr-8">
          <div className="py-8">
            <h1 className="text-xl font-light tracking-tight text-gray-900 mb-8">
              BLOG
            </h1>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className={`cursor-pointer transition-colors duration-200 ${
                    selectedPost.id === post.id
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-sm font-medium lowercase hover:underline">
                      {post.title.toLowerCase()}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Blog content */}
        <div className="w-2/3 overflow-y-scroll scrollbar-hide pl-8">
          <div className="py-8">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">
              {selectedPost.title}
            </h1>
            <p className="text-sm text-gray-500 mb-8 font-sans">
              {selectedPost.date.toLowerCase()}
            </p>
            <div className="prose prose-lg max-w-none font-sans">
              {selectedPost.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 text-gray-700 leading-relaxed lowercase">
                    {paragraph.toLowerCase()}
                  </p>
                )
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 