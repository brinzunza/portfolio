import { useState, useEffect, useRef } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  projects?: Array<{ id: string; title: string }>;
}

export default function Layout({ children, projects }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (mainRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 10;
        const hasScroll = scrollHeight > clientHeight;

        setShowScrollIndicator(hasScroll && !isAtBottom);
      }
    };

    const main = mainRef.current;
    if (main) {
      checkScroll();
      main.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      // Delay check for dynamic content
      const timer = setTimeout(checkScroll, 100);

      return () => {
        main.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timer);
      };
    }
  }, [children]);

  return (
    <div className="min-h-screen bg-white text-black flex justify-center">
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {mobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Container for sidebar and content */}
      <div className="flex w-full max-w-7xl h-screen mt-[-10vh] mr-[10%] relative">
        {/* Sidebar - 1/3 of screen */}
        <aside
          className={`
            fixed md:relative top-0 left-0 h-screen w-full md:w-1/3 bg-white z-40
            transition-transform duration-300
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <Sidebar projects={projects} onMobileClose={() => setMobileMenuOpen(false)} />
        </aside>

        {/* Main content - 2/3 of screen */}
        <main ref={mainRef} className="w-full md:w-2/3 h-screen overflow-y-auto relative">
          {children}

          {/* Scroll indicator arrow */}
          {showScrollIndicator && (
            <div className="fixed bottom-8 left-1/2 md:left-[58%] transform -translate-x-1/2 animate-bounce pointer-events-none z-50">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black/30"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          )}
        </main>
      </div>

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
