'use client';

/**
 * VTTEditor Component
 * Edit VTT files while listening to audio with enhanced creature comforts
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import { mockTracks, formatDuration } from '@/lib/mockData';
import VTTPreview from './VTTPreview';

interface VTTCue {
  id: string;
  startTime: string;
  endTime: string;
  text: string;
}

export default function VTTEditor() {
  const [selectedTrack, setSelectedTrack] = useState<string>('');
  const [cues, setCues] = useState<VTTCue[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [activeEditingCue, setActiveEditingCue] = useState<string | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Ensure client-side only rendering for modal to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper functions defined before they're used
  const parseVTT = useCallback((vttText: string): VTTCue[] => {
    const lines = vttText.split('\n');
    const parsedCues: VTTCue[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (line.includes('-->')) {
        const [startStr, endStr] = line.split('-->').map(s => s.trim());
        
        i++;
        const textLines: string[] = [];
        while (i < lines.length && lines[i].trim() !== '') {
          textLines.push(lines[i].trim());
          i++;
        }

        if (textLines.length > 0) {
          parsedCues.push({
            // eslint-disable-next-line @typescript-eslint/no-base-to-string
            id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            startTime: startStr,
            endTime: endStr,
            text: textLines.join(' '),
          });
        }
      }
      i++;
    }

    return parsedCues;
  }, []);

  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const skipForward = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 5, duration);
  }, [duration]);

  const skipBackward = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 5, 0);
  }, []);

  const changePlaybackRate = useCallback((delta: number) => {
    setPlaybackRate(prev => Math.max(0.25, Math.min(2.0, prev + delta)));
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in input/textarea
      if ((e.target as HTMLElement).tagName === 'INPUT' || 
          (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          skipBackward();
          break;
        case 'ArrowRight':
          e.preventDefault();
          skipForward();
          break;
        case 'ArrowUp':
          e.preventDefault();
          changePlaybackRate(0.25);
          break;
        case 'ArrowDown':
          e.preventDefault();
          changePlaybackRate(-0.25);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlayPause, skipBackward, skipForward, changePlaybackRate]);

  // Load VTT file when track is selected
  useEffect(() => {
    if (!selectedTrack) return;

    const track = mockTracks.find(t => t.id === selectedTrack);
    if (!track || !track.vttUrl) return;

    fetch(track.vttUrl)
      .then(res => res.text())
      .then(vttText => {
        const parsedCues = parseVTT(vttText);
        setCues(parsedCues);
        setHasUnsavedChanges(false);
      })
      .catch(err => console.error('Error loading VTT:', err));
  }, [selectedTrack, parseVTT]);

  // Audio playback effect
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
  }, [selectedTrack]);

  // Update playback rate
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const parseVTTTimestamp = (timestamp: string): number => {
    const parts = timestamp.split(':');
    if (parts.length === 3) {
      return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseFloat(parts[2]);
    } else if (parts.length === 2) {
      return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
    }
    return 0;
  };

  const jumpToTime = (timeStr: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    const seconds = parseVTTTimestamp(timeStr);
    audio.currentTime = seconds;
    setCurrentTime(seconds);
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const formatVTTTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = (seconds % 60).toFixed(3);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.padStart(6, '0')}`;
  };

  const setTimeFromCurrent = (cueId: string, field: 'startTime' | 'endTime') => {
    const timeStr = formatVTTTime(currentTime);
    updateCue(cueId, field, timeStr);
  };

  const updateCue = (id: string, field: keyof VTTCue, value: string) => {
    setCues(cues.map(cue => 
      cue.id === id ? { ...cue, [field]: value } : cue
    ));
    setHasUnsavedChanges(true);
  };

  const addNewCue = () => {
    // eslint-disable-next-line
    const uniqueId = `cue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newCue: VTTCue = {
      id: uniqueId,
      startTime: formatVTTTime(currentTime),
      endTime: formatVTTTime(currentTime + 5),
      text: 'New lyric line...',
    };
    setCues([...cues, newCue].sort((a, b) => 
      parseVTTTimestamp(a.startTime) - parseVTTTimestamp(b.startTime)
    ));
    setHasUnsavedChanges(true);
  };

  const duplicateCue = (cueId: string) => {
    const cue = cues.find(c => c.id === cueId);
    if (!cue) return;

    const endTime = parseVTTTimestamp(cue.endTime);
    const duration = endTime - parseVTTTimestamp(cue.startTime);
    // eslint-disable-next-line
    const uniqueId = `cue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const newCue: VTTCue = {
      id: uniqueId,
      startTime: cue.endTime,
      endTime: formatVTTTime(endTime + duration),
      text: cue.text,
    };
    setCues([...cues, newCue].sort((a, b) => 
      parseVTTTimestamp(a.startTime) - parseVTTTimestamp(b.startTime)
    ));
    setHasUnsavedChanges(true);
  };

  const deleteCue = (id: string) => {
    setCues(cues.filter(cue => cue.id !== id));
    setHasUnsavedChanges(true);
  };

  const exportVTT = () => {
    let vttContent = 'WEBVTT\n\n';
    cues.forEach(cue => {
      vttContent += `${cue.startTime} --> ${cue.endTime}\n${cue.text}\n\n`;
    });

    const blob = new Blob([vttContent], { type: 'text/vtt' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTrack || 'lyrics'}.vtt`;
    a.click();
    URL.revokeObjectURL(url);
    setHasUnsavedChanges(false);
  };

  const getCurrentCue = (): VTTCue | null => {
    return cues.find(cue => {
      const start = parseVTTTimestamp(cue.startTime);
      const end = parseVTTTimestamp(cue.endTime);
      return currentTime >= start && currentTime < end;
    }) || null;
  };

  const selectedTrackData = mockTracks.find(t => t.id === selectedTrack);
  const currentCue = getCurrentCue();

  return (
    <section className="mb-12">
      <div className="flex items-center justify-center gap-4 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-tarot-accent text-center">
          VTT Lyrics Editor
        </h2>
        <button
          onClick={() => setShowHelp(true)}
          className="px-3 py-2 bg-tarot-accent/20 hover:bg-tarot-accent hover:text-tarot-card-bg text-tarot-accent border border-tarot-accent rounded-full transition-all text-sm font-bold"
          title="Help & Guide"
        >
          ?
        </button>
      </div>
      
      <div className="tarot-divider mb-8" />

      {/* Help Modal */}
      {isMounted && showHelp && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowHelp(false)}>
          <div className="bg-tarot-card-bg border-2 border-tarot-accent rounded-lg p-6 max-w-2xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-tarot-accent">VTT Editor Guide</h3>
              <button
                onClick={() => setShowHelp(false)}
                className="text-tarot-text-muted hover:text-tarot-accent text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 text-tarot-text-main">
              <section>
                <h4 className="text-lg font-semibold text-tarot-accent mb-2">What are VTT files?</h4>
                <p className="text-sm text-tarot-text-muted">
                  VTT (Web Video Text Tracks) files are used to display synchronized text (like lyrics or captions) 
                  alongside audio/video. They contain timestamped text that appears at specific moments during playback.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-tarot-accent mb-2">How to use this editor:</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-tarot-text-muted">
                  <li><strong>Select a track</strong> from the dropdown menu</li>
                  <li><strong>Play the audio</strong> and listen to where lyrics should appear</li>
                  <li><strong>Set timestamps</strong> by clicking &ldquo;⏱ Now&rdquo; at the start and end of each lyric line</li>
                  <li><strong>Edit the text</strong> to match the lyrics</li>
                  <li><strong>Export the VTT file</strong> when done</li>
                </ol>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-tarot-accent mb-2">Keyboard Shortcuts:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-tarot-text-muted">
                  <li><strong>Space</strong> - Play/Pause audio</li>
                  <li><strong>← →</strong> - Skip backward/forward 5 seconds</li>
                  <li><strong>↑ ↓</strong> - Increase/decrease playback speed</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-tarot-accent mb-2">Tips:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-tarot-text-muted">
                  <li>Use slower playback speed (0.5x-0.75x) for precise timing</li>
                  <li>Click &ldquo;▶ Play&rdquo; on any cue to jump to that timestamp</li>
                  <li>Duplicate similar cues to save time</li>
                  <li>The currently playing lyric is highlighted in the list</li>
                </ul>
              </section>

              <div className="mt-6 pt-4 border-t border-tarot-border">
                <button
                  onClick={() => setShowHelp(false)}
                  className="w-full px-6 py-3 bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg font-semibold rounded transition-all"
                >
                  Got it!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Track Selection */}
      <div className="mb-8 max-w-2xl mx-auto">
        <label htmlFor="trackSelect" className="block text-lg text-tarot-text-main font-semibold mb-2">
          Select Track
        </label>
        <select
          id="trackSelect"
          value={selectedTrack}
          onChange={(e) => setSelectedTrack(e.target.value)}
          className="w-full px-4 py-3 bg-tarot-card-bg border-2 border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
        >
          <option value="">-- Select a track --</option>
          {mockTracks.map(track => (
            <option key={track.id} value={track.id}>
              {track.title}
            </option>
          ))}
        </select>
      </div>

      {selectedTrack && selectedTrackData && (
        <>
          {/* Audio Player */}
          <div className="bg-tarot-card-bg border-2 border-tarot-border rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-tarot-text-main mb-4 text-center">
              {selectedTrackData.title}
            </h3>

            <audio ref={audioRef} src={selectedTrackData.url} />

            {/* Currently Playing Cue Preview */}
            {currentCue && (
              <div className="mb-4 p-4 bg-tarot-accent/20 border border-tarot-accent rounded">
                <p className="text-sm text-tarot-text-muted mb-1">Currently Playing:</p>
                <p className="text-lg text-tarot-accent font-semibold italic">{currentCue.text}</p>
              </div>
            )}

            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-tarot-accent/20 rounded-lg appearance-none cursor-pointer accent-tarot-accent"
              />
              <div className="flex justify-between text-lg text-tarot-accent font-semibold mt-2">
                <span>{formatDuration(Math.floor(currentTime))}</span>
                <span className="text-tarot-text-muted">VTT: {formatVTTTime(currentTime)}</span>
                <span>{formatDuration(Math.floor(duration))}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-center gap-4">
                <button
                  onClick={togglePlayPause}
                  className="px-8 py-3 bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg font-bold rounded transition-all duration-200"
                  title="Play/Pause (Space)"
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>
              </div>

              {/* Playback Speed */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <span className="text-tarot-text-muted text-sm sm:text-base">Speed:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => changePlaybackRate(-0.25)}
                    className="px-3 py-1 bg-tarot-card-bg border border-tarot-border rounded text-tarot-text-main hover:bg-tarot-accent hover:text-tarot-card-bg transition text-sm"
                    title="Slower (↓)"
                  >
                    -
                  </button>
                  <span className="text-tarot-accent font-bold min-w-[50px] text-center text-sm sm:text-base">
                    {playbackRate.toFixed(2)}x
                  </span>
                  <button
                    onClick={() => changePlaybackRate(0.25)}
                    className="px-3 py-1 bg-tarot-card-bg border border-tarot-border rounded text-tarot-text-main hover:bg-tarot-accent hover:text-tarot-card-bg transition text-sm"
                    title="Faster (↑)"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setPlaybackRate(1.0)}
                    className="px-3 py-1 bg-tarot-card-bg border border-tarot-border rounded text-tarot-text-main hover:bg-tarot-accent hover:text-tarot-card-bg transition text-xs sm:text-sm"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Helper */}
              <div className="text-center text-sm text-tarot-text-muted italic">
                ⌨ Shortcuts: Space=Play/Pause • ←→=Skip • ↑↓=Speed
              </div>
            </div>
          </div>

          {/* Unsaved Changes Warning */}
          {hasUnsavedChanges && (
            <div className="bg-yellow-900/30 border-2 border-yellow-600 rounded p-4 mb-6 max-w-4xl mx-auto">
              <p className="text-yellow-200 text-center font-semibold">
                ⚠️ You have unsaved changes! Remember to export your VTT file.
              </p>
            </div>
          )}

          {/* VTT Editor */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-tarot-accent">
                Lyrics ({cues.length} lines)
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={addNewCue}
                  className="flex-1 sm:flex-initial px-4 sm:px-6 py-2 bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg font-semibold rounded transition-all text-sm sm:text-base"
                >
                  + Add Cue
                </button>
                <button
                  onClick={exportVTT}
                  className="flex-1 sm:flex-initial px-4 sm:px-6 py-2 bg-tarot-border hover:bg-tarot-hover text-tarot-card-bg font-semibold rounded transition-all text-sm sm:text-base"
                  disabled={cues.length === 0}
                >
                  💾 Export VTT
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {cues.map((cue, index) => {
                const isActive = currentCue?.id === cue.id;
                return (
                  <div
                    key={cue.id}
                    className={`bg-tarot-card-bg border-2 rounded p-3 sm:p-4 transition-all ${
                      isActive 
                        ? 'border-tarot-accent shadow-lg bg-tarot-accent/10' 
                        : 'border-tarot-border hover:border-tarot-accent'
                    }`}
                  >
                    {/* Header with cue number */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-tarot-text-muted font-bold text-base sm:text-lg">
                        #{index + 1}
                        {isActive && <span className="ml-2 text-tarot-accent">▶ Playing</span>}
                      </span>
                      {/* Mobile: Show action buttons in header */}
                      <div className="flex gap-2 sm:hidden">
                        <button
                          onClick={() => duplicateCue(cue.id)}
                          className="px-3 py-1.5 bg-tarot-accent/50 hover:bg-tarot-accent text-tarot-card-bg rounded transition-all text-sm"
                          title="Duplicate cue"
                        >
                          📋
                        </button>
                        <button
                          onClick={() => deleteCue(cue.id)}
                          className="px-3 py-1.5 bg-red-900/50 hover:bg-red-900 text-tarot-text-main rounded transition-all text-sm"
                          title="Delete cue"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="flex-1 space-y-3">
                        {/* Time fields - stack on mobile, side-by-side on desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {/* Start Time */}
                          <div>
                            <label className="block text-xs sm:text-sm text-tarot-text-muted mb-1">Start Time</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <input
                                type="text"
                                value={cue.startTime}
                                onChange={(e) => updateCue(cue.id, 'startTime', e.target.value)}
                                className="w-full px-2 sm:px-3 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main text-sm focus:outline-none focus:border-tarot-accent"
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={() => jumpToTime(cue.startTime)}
                                  className="flex-1 sm:flex-initial px-3 py-2 bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg rounded text-xs sm:text-sm"
                                  title="Jump to start"
                                >
                                  ▶ Play
                                </button>
                                <button
                                  onClick={() => setTimeFromCurrent(cue.id, 'startTime')}
                                  className="flex-1 sm:flex-initial px-3 py-2 bg-tarot-border hover:bg-tarot-hover text-tarot-card-bg rounded text-xs sm:text-sm whitespace-nowrap"
                                  title="Set to current time"
                                >
                                  ⏱ Now
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* End Time */}
                          <div>
                            <label className="block text-xs sm:text-sm text-tarot-text-muted mb-1">End Time</label>
                            <div className="flex flex-col sm:flex-row gap-2">
                              <input
                                type="text"
                                value={cue.endTime}
                                onChange={(e) => updateCue(cue.id, 'endTime', e.target.value)}
                                className="w-full px-2 sm:px-3 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main text-sm focus:outline-none focus:border-tarot-accent"
                              />
                              <button
                                onClick={() => setTimeFromCurrent(cue.id, 'endTime')}
                                className="px-3 py-2 bg-tarot-border hover:bg-tarot-hover text-tarot-card-bg rounded text-xs sm:text-sm whitespace-nowrap"
                                title="Set to current time"
                              >
                                ⏱ Now
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Lyric Text */}
                        <div>
                          <label className="block text-xs sm:text-sm text-tarot-text-muted mb-1">Lyric Text</label>
                          <textarea
                            value={cue.text}
                            onChange={(e) => updateCue(cue.id, 'text', e.target.value)}
                            onFocus={() => setActiveEditingCue(cue.id)}
                            onBlur={() => setActiveEditingCue(null)}
                            className="w-full px-2 sm:px-3 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main text-sm sm:text-base focus:outline-none focus:border-tarot-accent resize-none"
                            rows={2}
                          />
                        </div>
                      </div>

                      {/* Desktop: Show action buttons on the right */}
                      <div className="hidden sm:flex flex-col gap-2">
                        <button
                          onClick={() => duplicateCue(cue.id)}
                          className="px-3 py-2 bg-tarot-accent/50 hover:bg-tarot-accent text-tarot-card-bg rounded transition-all text-sm"
                          title="Duplicate cue"
                        >
                          📋
                        </button>
                        <button
                          onClick={() => deleteCue(cue.id)}
                          className="px-3 py-2 bg-red-900/50 hover:bg-red-900 text-tarot-text-main rounded transition-all"
                          title="Delete cue"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {!selectedTrack && (
        <p className="text-center text-tarot-text-muted text-xl py-12">
          Select a track to edit its VTT lyrics file
        </p>
      )}
    </section>
  );
}
