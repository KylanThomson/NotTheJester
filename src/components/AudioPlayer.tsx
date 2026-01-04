'use client';

/**
 * AudioPlayer Component
 * Custom audio player with mystical tarot-themed controls
 * Client component - requires interactivity for play/pause, progress, and volume
 */

import { useState, useRef, useEffect } from 'react';
import { Track } from '@/types';
import { mockTracks, formatDuration } from '@/lib/mockData';
import LyricsDisplay from './LyricsDisplay';

export default function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(mockTracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Update current time as audio plays
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [currentTrack]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const selectTrack = (track: Track) => {
    setCurrentTrack(track);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  return (
    <section id="listen" className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        Listen
      </h2>
      
      <div className="tarot-divider mb-8" />
      
      <div className="bg-tarot-card-bg border border-tarot-border rounded-lg p-6 shadow-lg">
        {/* Current Track Info */}
        {currentTrack && (
          <div className="mb-4 text-center">
            <h3 className="text-2xl font-bold text-tarot-text-main mb-1">
              {currentTrack.title}
            </h3>
            <p className="text-sm text-tarot-text-muted">
              {currentTrack.artist}
            </p>
          </div>
        )}

        {/* Audio Element with lyrics track */}
        <audio ref={audioRef} src={currentTrack?.url}>
          {currentTrack?.vttUrl && (
            <track
              kind="captions"
              src={currentTrack.vttUrl}
              srcLang="en"
              label="English"
              default
            />
          )}
        </audio>

        {/* Synchronized Lyrics Display - 3 line window */}
        <LyricsDisplay
          vttUrl={currentTrack?.vttUrl}
          currentTime={currentTime}
          isPlaying={isPlaying}
        />

        {/* Progress Bar */}
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-tarot-accent/20 rounded-lg appearance-none cursor-pointer accent-tarot-accent"
          />
          <div className="flex justify-between text-xs text-tarot-text-muted mt-1">
            <span>{formatDuration(Math.floor(currentTime))}</span>
            <span>{formatDuration(Math.floor(duration || currentTrack?.duration || 0))}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-16 h-16 flex items-center justify-center bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon />
            )}
          </button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <VolumeIcon />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-2 bg-tarot-accent/20 rounded-lg appearance-none cursor-pointer accent-tarot-accent"
              aria-label="Volume"
            />
          </div>
        </div>

        {/* Track List */}
        <div className="space-y-2">
          {mockTracks.map((track) => (
            <button
              key={track.id}
              onClick={() => selectTrack(track)}
              className={`
                w-full text-left p-3 rounded
                transition-colors duration-200
                ${
                  currentTrack?.id === track.id
                    ? 'bg-tarot-accent/20 border-l-2 border-tarot-accent'
                    : 'hover:bg-tarot-accent/10'
                }
              `}
            >
              <div className="flex justify-between items-center">
                <span className="text-tarot-text-main font-medium">
                  {track.title}
                </span>
                <span className="text-sm text-tarot-text-muted">
                  {formatDuration(track.duration)}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom SVG Icons for mystical theme
function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-tarot-accent"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}
