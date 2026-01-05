'use client';

/**
 * LyricsDisplay Component
 * Displays 3-line synchronized lyrics window with mystical styling
 * Shows previous, current, and next lines with elegant fade effects
 */

import { useEffect, useState, useMemo } from 'react';

interface LyricsDisplayProps {
  vttUrl?: string;
  currentTime: number;
  isPlaying: boolean;
}

interface CueLine {
  startTime: number;
  endTime: number;
  text: string;
}

export default function LyricsDisplay({ vttUrl, currentTime }: LyricsDisplayProps) {
  const [cues, setCues] = useState<CueLine[]>([]);

  // Parse VTT file
  useEffect(() => {
    if (!vttUrl) {
      return;
    }

    fetch(vttUrl)
      .then((res) => res.text())
      .then((vttText) => {
        const parsedCues = parseVTT(vttText);
        setCues(parsedCues);
      })
      .catch((err) => {
        console.error('Error loading VTT file:', err);
        setCues([]);
      });
  }, [vttUrl]);

  // Calculate current cue index based on time (using useMemo to avoid setState in effect)
  const currentCueIndex = useMemo(() => {
    return cues.findIndex(
      (cue) => currentTime >= cue.startTime && currentTime < cue.endTime
    );
  }, [currentTime, cues]);

  if (!vttUrl || cues.length === 0) {
    return null;
  }

  // Get previous, current, and next lines
  const prevLine = currentCueIndex > 0 ? cues[currentCueIndex - 1] : null;
  const currentLine = currentCueIndex >= 0 ? cues[currentCueIndex] : null;
  const nextLine = currentCueIndex >= 0 && currentCueIndex < cues.length - 1 ? cues[currentCueIndex + 1] : null;

  return (
    <div className="my-8 py-6">
      <div className="min-h-[160px] flex flex-col justify-center items-center space-y-3">
        {/* Previous line - faded */}
        <p className="text-base md:text-base text-tarot-text-muted/40 transition-all duration-500 min-h-[24px] italic">
          {prevLine?.text || ''}
        </p>

        {/* Current line - prominent and highlighted (can be multi-line) */}
        <p className="text-xl md:text-2xl text-tarot-accent font-semibold transition-all duration-500 min-h-[32px] max-h-[64px] text-center px-4 leading-snug">
          {currentLine?.text || ''}
        </p>

        {/* Next line - slightly faded */}
        <p className="text-base md:text-base text-tarot-text-muted/60 transition-all duration-500 min-h-[24px] italic">
          {nextLine?.text || ''}
        </p>
      </div>
    </div>
  );
}

// Parse VTT file into cue lines
function parseVTT(vttText: string): CueLine[] {
  const lines = vttText.split('\n');
  const cues: CueLine[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Check for timestamp line
    if (line.includes('-->')) {
      const [startStr, endStr] = line.split('-->').map((s) => s.trim());
      const startTime = parseTimestamp(startStr);
      const endTime = parseTimestamp(endStr);

      // Get text lines
      i++;
      const textLines: string[] = [];
      while (i < lines.length && lines[i].trim() !== '') {
        textLines.push(lines[i].trim());
        i++;
      }

      if (textLines.length > 0) {
        cues.push({
          startTime,
          endTime,
          text: textLines.join(' '),
        });
      }
    }
    i++;
  }

  return cues;
}

// Parse VTT timestamp to seconds
function parseTimestamp(timestamp: string): number {
  const parts = timestamp.split(':');
  if (parts.length === 3) {
    // HH:MM:SS.mmm
    const [hours, minutes, seconds] = parts;
    return (
      parseInt(hours) * 3600 +
      parseInt(minutes) * 60 +
      parseFloat(seconds)
    );
  } else if (parts.length === 2) {
    // MM:SS.mmm
    const [minutes, seconds] = parts;
    return parseInt(minutes) * 60 + parseFloat(seconds);
  }
  return 0;
}
