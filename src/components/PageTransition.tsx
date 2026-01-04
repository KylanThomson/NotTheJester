'use client';

/**
 * PageTransition Component
 * Mystical page load animation with tarot card reveal effect
 */

import { ReactNode, useEffect, useState } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mystical loading overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-tarot-bg
          flex items-center justify-center
          transition-opacity duration-1000
          ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
      >
        <div className="text-center">
          {/* Animated tarot card symbol */}
          <div className="relative">
            <div className="text-6xl md:text-8xl text-tarot-border animate-pulse">
              ✦
            </div>
            {/* Orbiting symbols */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-tarot-border text-2xl animate-spin-slow">
                ❧
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-tarot-border text-2xl animate-spin-slow-reverse">
                ❧
              </div>
            </div>
          </div>
          <p className="text-tarot-border text-lg mt-8 font-cinzel tracking-widest animate-pulse">
            Revealing the Cards...
          </p>
        </div>
      </div>

      {/* Main content with fade and scale animation */}
      <div
        className={`
          transition-all duration-1000 ease-out
          ${
            isLoaded
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }
        `}
      >
        {children}
      </div>
    </>
  );
}
