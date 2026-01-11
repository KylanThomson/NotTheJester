/**
 * Mock data for Not the Jester band website
 * This data will be replaced with actual API calls to Google Cloud Functions in the future
 */

import { Track, Gig } from '@/types';

/**
 * Track data with actual audio files
 * Future: These will come from GCS bucket via GCF
 */
export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Sailing Away',
    url: '/audio/Sailing Away - 2min54sec.aac',
    vttUrl: '/audio/Sailing_Away_-_1.1.26-1_eng.vtt',
    artist: 'Not the Jester',
  },
  {
    id: '2',
    title: 'Men Before Giants',
    url: '/audio/Men Before Giants - 4min47sec.aac',
    vttUrl: '/audio/Men_Before_Giants_-_01.01.2026-1_eng.vtt',
    artist: 'Not the Jester',
  },
  {
    id: '3',
    title: 'Back to the Groove',
    url: '/audio/Back to the Groove - 1.2.2026-4.aac',
    vttUrl: '/audio/Back_to_the_Groove - 1.1.26-1_eng.vtt',
    artist: 'Not the Jester',
  },
];

/**
 * Mock gig data
 * In production, this might come from a CMS or database via GCF
 */
export const mockGigs: Gig[] = [];

/**
 * Utility function to format duration (seconds) to MM:SS
 */
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Utility function to format date for display
 */
export function formatGigDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
