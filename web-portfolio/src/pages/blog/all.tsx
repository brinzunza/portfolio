import { useRouter } from 'next/router';
import { blogPosts } from '../../data/blogPosts';

export default function AllBlog() {
  const router = useRouter();

  return (
    <div className="py-[25vh] px-8 md:px-16 scrollbar-hide">
      <h1 className="text-2xl md:text-3xl font-mono mb-8">
        all writing
      </h1>

      <div className="space-y-6 max-w-2xl">
        {blogPosts.map((post) => (
          <button
            key={post.id}
            onClick={() => router.push(`/blog?id=${post.id}`)}
            className="block text-left w-full group"
          >
            <h2 className="text-base md:text-lg group-hover:underline mb-1">
              {post.title}
            </h2>
            <p className="text-sm text-black/60">
              {post.date}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
