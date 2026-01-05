'use client';

/**
 * MusicUploadForm Component
 * Handles uploading new music tracks
 */

import { useState } from 'react';

export default function MusicUploadForm() {
  const [formData, setFormData] = useState({
    title: '',
    artist: 'Not the Jester',
    duration: '',
    audioFile: null as File | null,
    vttFile: null as File | null,
  });

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, audioFile: e.target.files[0] });
    }
  };

  const handleVTTChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, vttFile: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement upload logic
    console.log('Upload form data:', formData);
    alert('Upload functionality will be implemented with backend');
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        Upload New Track
      </h2>
      
      <div className="tarot-divider mb-8" />
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Track Title */}
        <div>
          <label htmlFor="title" className="block text-lg text-tarot-text-main font-semibold mb-2">
            Track Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-3 bg-tarot-card-bg border-2 border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
            placeholder="Enter track title..."
            required
          />
        </div>

        {/* Artist */}
        <div>
          <label htmlFor="artist" className="block text-lg text-tarot-text-main font-semibold mb-2">
            Artist
          </label>
          <input
            type="text"
            id="artist"
            value={formData.artist}
            onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
            className="w-full px-4 py-3 bg-tarot-card-bg border-2 border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="block text-lg text-tarot-text-main font-semibold mb-2">
            Duration (seconds)
          </label>
          <input
            type="number"
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="w-full px-4 py-3 bg-tarot-card-bg border-2 border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
            placeholder="e.g. 180"
            required
          />
        </div>

        {/* Audio File */}
        <div>
          <label htmlFor="audioFile" className="block text-lg text-tarot-text-main font-semibold mb-2">
            Audio File (.aac, .mp3, .wav)
          </label>
          <input
            type="file"
            id="audioFile"
            accept=".aac,.mp3,.wav"
            onChange={handleAudioChange}
            className="w-full px-4 py-3 bg-tarot-card-bg border-2 border-tarot-border rounded text-tarot-text-main file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-tarot-accent file:text-tarot-card-bg file:cursor-pointer hover:file:bg-tarot-hover"
            required
          />
          {formData.audioFile && (
            <p className="mt-2 text-sm text-tarot-accent">
              Selected: {formData.audioFile.name}
            </p>
          )}
        </div>

        {/* VTT File */}
        <div>
          <label htmlFor="vttFile" className="block text-lg text-tarot-text-main font-semibold mb-2">
            VTT Lyrics File (optional)
          </label>
          <input
            type="file"
            id="vttFile"
            accept=".vtt"
            onChange={handleVTTChange}
            className="w-full px-4 py-3 bg-tarot-card-bg border-2 border-tarot-border rounded text-tarot-text-main file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-tarot-accent file:text-tarot-card-bg file:cursor-pointer hover:file:bg-tarot-hover"
          />
          {formData.vttFile && (
            <p className="mt-2 text-sm text-tarot-accent">
              Selected: {formData.vttFile.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg font-bold text-xl rounded transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Upload Track
        </button>
      </form>
    </section>
  );
}
