/**
 * TarotCardContainer Component
 * Wraps content in a mystical tarot card aesthetic with ornamental borders
 * Server component - no interactivity needed
 */

import { ReactNode } from 'react';

interface TarotCardContainerProps {
  children: ReactNode;
  className?: string;
}

export default function TarotCardContainer({
  children,
  className = '',
}: TarotCardContainerProps) {
  return (
    <div className="min-h-screen velvet-table flex items-center justify-center p-4 md:p-8 relative">
      {/* Tarot Card - centered with wider desktop layout */}
      <div className={`w-full max-w-7xl bg-tarot-card-bg tarot-border tarot-corners relative shadow-2xl z-10 ${className}`}>
        {/* Ornamental top corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-tarot-border rounded-tl-lg" 
             style={{ borderStyle: 'double' }} />
        <div className="absolute top-0 right-0 w-16 h-16 border-r-4 border-t-4 border-tarot-border rounded-tr-lg" 
             style={{ borderStyle: 'double' }} />
        
        {/* Ornamental bottom corners */}
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-4 border-b-4 border-tarot-border rounded-bl-lg" 
             style={{ borderStyle: 'double' }} />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-tarot-border rounded-br-lg" 
             style={{ borderStyle: 'double' }} />

        {/* Mystical corner symbols */}
        <div className="absolute top-4 left-4 text-tarot-border text-2xl opacity-60">✦</div>
        <div className="absolute top-4 right-4 text-tarot-border text-2xl opacity-60">✦</div>
        <div className="absolute bottom-4 left-4 text-tarot-border text-2xl opacity-60">✦</div>
        <div className="absolute bottom-4 right-4 text-tarot-border text-2xl opacity-60">✦</div>

        {/* Inner padding container with aged paper effect */}
        <div className="relative px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          {children}
        </div>
      </div>
    </div>
  );
}
