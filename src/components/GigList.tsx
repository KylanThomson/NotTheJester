/**
 * GigList Component
 * Displays upcoming shows with dates, venues, and locations
 * Server component - no interactivity needed
 */

import { mockGigs, formatGigDate } from '@/lib/mockData';

export default function GigList() {
  return (
    <section id="gigs" className="mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        Upcoming Shows
      </h2>
      
      <div className="tarot-divider mb-8" />
      
      <div className="space-y-4">
        {mockGigs.map((gig) => (
          <div
            key={gig.id}
            className="
              border-l-2 border-tarot-border
              pl-4 py-3
              hover:border-tarot-hover
              transition-colors
              duration-200
            "
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-tarot-text-main mb-1">
                  {gig.venue}
                </h3>
                <p className="text-base md:text-sm text-tarot-text-muted">
                  {gig.location}
                </p>
              </div>
              
              <div className="md:text-right">
                <p className="text-base md:text-lg font-medium text-tarot-accent">
                  {formatGigDate(gig.date)}
                </p>
                {gig.time && (
                  <p className="text-base md:text-sm text-tarot-text-muted">
                    {gig.time}
                  </p>
                )}
              </div>
            </div>
            
            {gig.ticketUrl && gig.ticketUrl !== '#' && (
              <a
                href={gig.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block mt-2
                  text-base md:text-sm text-tarot-accent
                  hover:text-tarot-hover
                  underline
                  transition-colors
                "
              >
                Get Tickets
              </a>
            )}
          </div>
        ))}
      </div>
      
      {mockGigs.length === 0 && (
        <p className="text-center text-tarot-text-muted italic">
          No upcoming shows at this time. Check back soon for new dates.
        </p>
      )}
    </section>
  );
}
