'use client';

/**
 * ShowManagementForm Component
 * Manage upcoming show listings
 */

import { useState } from 'react';
import { mockGigs, formatGigDate } from '@/lib/mockData';
import type { Gig } from '@/types';

export default function ShowManagementForm() {
  const [shows, setShows] = useState<Gig[]>(mockGigs);
  const [formData, setFormData] = useState({
    date: '',
    venue: '',
    location: '',
    time: '',
    ticketUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newShow: Gig = {
      id: (shows.length + 1).toString(),
      date: formData.date,
      venue: formData.venue,
      location: formData.location,
      time: formData.time || undefined,
      ticketUrl: formData.ticketUrl || undefined,
    };

    setShows([...shows, newShow].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    ));

    // Reset form
    setFormData({
      date: '',
      venue: '',
      location: '',
      time: '',
      ticketUrl: '',
    });

    alert('Show added successfully! (Note: Changes are not persisted yet)');
  };

  const deleteShow = (id: string) => {
    if (confirm('Are you sure you want to delete this show?')) {
      setShows(shows.filter(show => show.id !== id));
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        Manage Shows
      </h2>
      
      <div className="tarot-divider mb-8" />

      {/* Add New Show Form */}
      <div className="max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl font-bold text-tarot-text-main mb-4">Add New Show</h3>
        <form onSubmit={handleSubmit} className="space-y-4 bg-tarot-card-bg border-2 border-tarot-border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-tarot-text-main font-semibold mb-2">
                Date *
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
                required
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-tarot-text-main font-semibold mb-2">
                Time
              </label>
              <input
                type="text"
                id="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
                placeholder="e.g. 8:00 PM"
              />
            </div>
          </div>

          <div>
            <label htmlFor="venue" className="block text-tarot-text-main font-semibold mb-2">
              Venue *
            </label>
            <input
              type="text"
              id="venue"
              value={formData.venue}
              onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
              className="w-full px-4 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
              placeholder="Venue name..."
              required
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-tarot-text-main font-semibold mb-2">
              Location *
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
              placeholder="City, State"
              required
            />
          </div>

          <div>
            <label htmlFor="ticketUrl" className="block text-tarot-text-main font-semibold mb-2">
              Ticket URL
            </label>
            <input
              type="url"
              id="ticketUrl"
              value={formData.ticketUrl}
              onChange={(e) => setFormData({ ...formData, ticketUrl: e.target.value })}
              className="w-full px-4 py-2 bg-tarot-bg border border-tarot-border rounded text-tarot-text-main focus:outline-none focus:border-tarot-accent"
              placeholder="https://..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-tarot-accent hover:bg-tarot-hover text-tarot-card-bg font-bold text-xl rounded transition-all duration-200"
          >
            Add Show
          </button>
        </form>
      </div>

      {/* Show List */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-tarot-accent mb-4">
          Upcoming Shows ({shows.length})
        </h3>

        {shows.length === 0 ? (
          <p className="text-center text-tarot-text-muted text-xl py-12">
            No shows scheduled. Add one above!
          </p>
        ) : (
          <div className="space-y-4">
            {shows.map((show) => (
              <div
                key={show.id}
                className="bg-tarot-card-bg border-2 border-tarot-border rounded-lg p-6 hover:border-tarot-accent transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-tarot-text-main mb-2">
                      {show.venue}
                    </h4>
                    <p className="text-lg text-tarot-text-muted mb-1">
                      📍 {show.location}
                    </p>
                    <p className="text-lg text-tarot-accent font-semibold mb-1">
                      📅 {formatGigDate(show.date)}
                      {show.time && ` • ${show.time}`}
                    </p>
                    {show.ticketUrl && show.ticketUrl !== '#' && (
                      <a
                        href={show.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tarot-accent hover:text-tarot-hover underline"
                      >
                        🎫 Ticket Link
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => deleteShow(show.id)}
                    className="px-4 py-2 bg-red-900/50 hover:bg-red-900 text-tarot-text-main rounded transition-all ml-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
