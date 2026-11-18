import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const EXIT_MS = 240;

interface PageTransitionProps {
  children: React.ReactNode;
}

// Fades the old page out, swaps in the new one, then animates it in.
export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const key = router.asPath;
  const path = router.pathname;

  const [shown, setShown] = useState({ children, key, path });
  const [leaving, setLeaving] = useState(false);
  const latest = useRef(children);
  latest.current = children;

  useEffect(() => {
    if (key === shown.key) return;

    const swap = () => {
      setShown({ children: latest.current, key, path });
      setLeaving(false);
      document.querySelector('main')?.scrollTo(0, 0);
    };

    // Same page, different query: no exit, just a fresh enter.
    if (path === shown.path) {
      swap();
      return;
    }

    setLeaving(true);
    const timer = setTimeout(swap, EXIT_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const current = key === shown.key ? children : shown.children;

  return (
    <div key={shown.key} className={leaving ? 'pt-out' : 'pt-in'}>
      {current}
    </div>
  );
}
