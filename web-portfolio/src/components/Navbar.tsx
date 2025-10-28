import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useReading } from '../context/ReadingContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { isReading } = useReading();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => router.pathname === path;

  if (isReading) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-neutral-100/80 backdrop-blur-md z-50 border-b border-black/10" style={{
      backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '4px 4px'
    }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* Scaled down profile image */}
            <div className="w-[40px] h-[40px] object-cover">
              <img
                src="/profile_pic.jpg"
                alt="Bruno Inzunza"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${isActive('/') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 text-sm font-mono font-medium hover:underline cursor-default`}
            >
              HOME
            </Link>
            <Link
              href="/projects"
              className={`${isActive('/projects') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 text-sm font-mono font-medium hover:underline cursor-default`}
            >
              PROJECTS
            </Link>
            {/* <Link
              href="/skills"
              className={`${isActive('/skills') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 text-sm font-mono font-medium hover:underline cursor-default`}
            >
              SKILLS
            </Link> */}
            <Link
              href="/blog"
              className={`${isActive('/blog') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 text-sm font-mono font-medium hover:underline cursor-default`}
            >
              BLOG
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black/60 hover:text-black transition-colors duration-200 font-sans"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-100/80 backdrop-blur-md border-b border-black/10" style={{
          backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)',
          backgroundSize: '4px 4px'
        }}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`block ${isActive('/') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 py-2 text-sm font-mono font-medium`}
            >
              HOME
            </Link>
            <Link
              href="/skills"
              className={`block ${isActive('/skills') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 py-2 text-sm font-mono font-medium`}
            >
              SKILLS
            </Link>
            <Link
              href="/projects"
              className={`block ${isActive('/projects') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 py-2 text-sm font-mono font-medium`}
            >
              PROJECTS
            </Link>
            <Link
              href="/blog"
              className={`block ${isActive('/blog') ? 'text-black' : 'text-black/60'} hover:text-black transition-colors duration-200 py-2 text-sm font-mono font-medium`}
            >
              BLOG
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 