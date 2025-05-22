import Navbar from '../components/Navbar';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="min-h-[40vh] flex items-center justify-center">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl text-center">
            BLOG
          </h1>
        </div>
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 