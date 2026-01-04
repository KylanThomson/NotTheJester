/**
 * Type definitions for Not the Jester band website
 * These interfaces are structured to anticipate future JSON responses from Google Cloud Functions
 */

/**
 * Track interface for audio files
 * Structure anticipates GCF JSON response with track metadata and streaming URLs
 */
export interface Track {
  id: string;
  title: string;
  duration: number; // Duration in seconds
  url: string; // Future: GCS streaming URL, currently mock data
  artist?: string; // Optional artist name
  album?: string; // Optional album name
  vttUrl?: string; // Optional VTT file for lyrics/captions
}

/**
 * Gig interface for upcoming shows
 */
export interface Gig {
  id: string;
  date: string; // ISO 8601 format (YYYY-MM-DD)
  venue: string;
  location: string; // City, State/Country
  ticketUrl?: string; // Optional link to purchase tickets
  time?: string; // Optional time of show
}

/**
 * Audio player state interface
 */
export interface AudioPlayerState {
  isPlaying: boolean;
  currentTrack: Track | null;
  currentTime: number;
  duration: number;
  volume: number;
}

/**
 * Navigation section for smooth scrolling
 */
export interface NavSection {
  id: string;
  label: string;
}
