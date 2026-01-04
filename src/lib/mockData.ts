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
    title: 'Men Before Giants',
    duration: 287, // 4:47
    url: '/audio/Men Before Giants - 4min47sec.aac',
    artist: 'Not the Jester',
  },
  {
    id: '2',
    title: 'Sailing Away',
    duration: 174, // 2:54
    url: '/audio/Sailing Away - 2min54sec.aac',
    artist: 'Not the Jester',
  },
];

/**
 * Mock gig data
 * In production, this might come from a CMS or database via GCF
 */
export const mockGigs: Gig[] = [
  {
    id: '1',
    date: '2026-02-14',
    venue: 'The Mystic Tavern',
    location: 'Portland, OR',
    time: '8:00 PM',
    ticketUrl: '#',
  },
  {
    id: '2',
    date: '2026-02-28',
    venue: 'Moonlight Bar & Grill',
    location: 'Seattle, WA',
    time: '9:00 PM',
    ticketUrl: '#',
  },
  {
    id: '3',
    date: '2026-03-15',
    venue: 'The Fortune Teller\'s Lounge',
    location: 'San Francisco, CA',
    time: '7:30 PM',
    ticketUrl: '#',
  },
  {
    id: '4',
    date: '2026-04-02',
    venue: 'Crystal Palace Music Hall',
    location: 'Los Angeles, CA',
    time: '8:00 PM',
    ticketUrl: '#',
  },
  {
    id: '5',
    date: '2026-04-20',
    venue: 'The Alchemist\'s Den',
    location: 'Austin, TX',
    time: '9:00 PM',
    ticketUrl: '#',
  },
];

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
