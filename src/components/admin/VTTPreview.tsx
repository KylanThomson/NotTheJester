'use client';

/**
 * VTTPreview Component
 * Preview how lyrics will display using the same logic as LyricsDisplay
 * But works with in-memory cues instead of fetching VTT file
 */

import { useMemo } from 'react';

interface VTTCue {
  id: string;
  startTime: string;
  endTime: string;
  text: string;
}

interface VTTPreviewProps {
  cues: VTTCue[];
  currentTime: number;
}

export default function VTTPreview({ cues, currentTime }: VTTPreviewProps) {
  const parseVTTTimestamp = (timestamp: string): number => {
    const parts = timestamp.split(':');
    if (parts.length === 3) {
      return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseFloat(parts[2]);
    } else if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
    }
    return 0;
  };

  // Find current cue index
  const currentCueIndex = useMemo(() => {
    return cues.findIndex(cue => {
      const start = parseVTTTimestamp(cue.startTime);
      const end = parseVTTTimestamp(cue.endTime);
      return currentTime >= start && currentTime < end;
    });
  }, [currentTime, cues]);

  if (cues.length === 0) {
    return (
      <div className="bg-tarot-card-bg border-2 border-tarot-border rounded-lg p-8 text-center">
        <p className="text-tarot-text-muted italic">
          No lyrics to preview. Add some cues to see the preview.
        </p>
      </div>
    );
  }

  // Get previous, current, and next lines
  const prevLine = currentCueIndex > 0 ? cues[currentCueIndex - 1] : null;
  const currentLine = currentCueIndex >= 0 ? cues[currentCueIndex] : null;
  const nextLine = currentCueIndex >= 0 && currentCueIndex < cues.length - 1 ? cues[currentCueIndex + 1] : null;

  return (
    <div className="bg-tarot-card-bg border-2 border-tarot-border rounded-lg p-8">
      <h4 className="text-xl font-bold text-tarot-accent mb-4 text-center">
        Live Preview
      </h4>
      <div className="min-h-[160px] flex flex-col justify-center items-center space-y-3">
        {/* Previous line - faded */}
        <p className="text-base md:text-base text-tarot-text-muted/40 transition-all duration-500 min-h-[24px] italic">
          {prevLine?.text || ''}
        </p>

        {/* Current line - prominent and highlighted */}
        <p className="text-xl md:text-2xl text-tarot-accent font-semibold transition-all duration-500 min-h-[32px] max-h-[64px] text-center px-4 leading-snug">
          {currentLine?.text || (currentTime > 0 ? '...' : 'Waiting for playback...')}
        </p>

        {/* Next line - slightly faded */}
        <p className="text-base md:text-base text-tarot-text-muted/60 transition-all duration-500 min-h-[24px] italic">
          {nextLine?.text || ''}
        </p>
      </div>
    </div>
  );
}
