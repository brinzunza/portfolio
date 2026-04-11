import { useState, useEffect, useRef } from 'react';

export default function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const isAtBottom = scrollHeight - scrollTop - clientHeight < 10;
        const hasScroll = scrollHeight > clientHeight;

        setShowIndicator(hasScroll && !isAtBottom);
      }
    };

    const container = containerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);

      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="h-full overflow-y-auto">
        {/* This component wraps the content */}
      </div>
      {showIndicator && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
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
    </>
  );
}
