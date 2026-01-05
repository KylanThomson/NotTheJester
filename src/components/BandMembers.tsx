'use client';

/**
 * BandMembers Component
 * Displays tarot card images of band members with flip animation on hover/click
 * Client component - needs state for mobile click flip
 */

import { useState } from 'react';
import Image from 'next/image';
import michaelCard from '@/lib/images/michael.png';
import rachaelCard from '@/lib/images/rachael.png';

export default function BandMembers() {
  const [michaelFlipped, setMichaelFlipped] = useState(false);
  const [rachaelFlipped, setRachaelFlipped] = useState(false);

  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-8 lg:gap-12">
        {/* Michael's Tarot Card */}
        <div 
          className="group relative max-w-xs md:max-w-sm mx-auto cursor-pointer"
          onClick={() => setMichaelFlipped(!michaelFlipped)}
        >
          <div className="card-flip-container">
            <div className={`card-flip-inner ${michaelFlipped ? 'mobile-flipped' : ''}`}>
              {/* Front of card */}
              <div className="card-flip-front">
                <Image
                  src={michaelCard}
                  alt="Michael - Tarot Card"
                  className="w-full h-auto drop-shadow-2xl rounded-lg"
                  priority
                />
              </div>
              
              {/* Back of card - Michael's bio */}
              <div className="card-flip-back">
                <div className="w-full h-full bg-tarot-card-bg rounded-lg shadow-2xl border-4 border-tarot-border p-4 md:p-8 overflow-y-auto">
                  <div className="text-tarot-border text-2xl md:text-3xl mb-2 md:mb-4 text-center">✦</div>
                  <h3 className="text-lg md:text-2xl font-bold text-tarot-accent mb-2 md:mb-3 text-center font-cinzel">Michael</h3>
                  <p className="text-xs md:text-sm text-tarot-text-main font-semibold mb-2 md:mb-3 italic">
                    Theme: To change by overcoming fear
                  </p>
                  <p className="text-xs md:text-sm text-tarot-text-main leading-snug md:leading-relaxed mb-2 md:mb-3">
                    A Seattle, WA native, adventurer, mystic and seeker – I strive for freedom upon the road less traveled in this world and the next.
                  </p>
                  <p className="text-xs md:text-sm text-tarot-accent font-semibold mb-1 md:mb-2 italic">
                    Divinatory Meaning: New beginnings into the vast unknown
                  </p>
                  <p className="text-xs md:text-sm text-tarot-text-main leading-snug md:leading-relaxed">
                    When I appear, realize nirvana through manifestation of one&apos;s positive will; conscious thought and action as a means to enlightenment; music as the medium to inspire greatness beyond fear - into the vast unknown full of beautiful beasts and other wonderful things.
                  </p>
                  <div className="text-tarot-border text-3xl mt-2 md:mt-4 text-center hidden md:block">✦</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-2 text-tarot-text-main font-cinzel text-lg tracking-wide">
            Michael
          </p>
        </div>

        {/* Rachael's Tarot Card */}
        <div 
          className="group relative max-w-xs md:max-w-sm mx-auto cursor-pointer"
          onClick={() => setRachaelFlipped(!rachaelFlipped)}
        >
          <div className="card-flip-container">
            <div className={`card-flip-inner ${rachaelFlipped ? 'mobile-flipped' : ''}`}>
              {/* Front of card */}
              <div className="card-flip-front">
                <Image
                  src={rachaelCard}
                  alt="Rachael - Tarot Card"
                  className="w-full h-auto drop-shadow-2xl rounded-lg"
                  priority
                />
              </div>
              
              {/* Back of card - Rachael's bio */}
              <div className="card-flip-back">
                <div className="w-full h-full bg-tarot-card-bg rounded-lg shadow-2xl border-4 border-tarot-border p-4 md:p-8 overflow-y-auto">
                  <div className="text-tarot-border text-2xl md:text-3xl mb-2 md:mb-4 text-center">✦</div>
                  <h3 className="text-lg md:text-2xl font-bold text-tarot-accent mb-2 md:mb-3 text-center font-cinzel">Rachael</h3>
                  <p className="text-xs md:text-sm text-tarot-text-main font-semibold mb-2 md:mb-3 italic">
                    Theme: Hope and inspiration
                  </p>
                  <p className="text-xs md:text-sm text-tarot-text-main leading-snug md:leading-relaxed mb-2 md:mb-3">
                    Maryland raised and Washington grown; lover of song, dance and animals large and small; empathy without judgement; artisan of secret languages and a higher calling achieved through understanding and grace.
                  </p>
                  <p className="text-xs md:text-sm text-tarot-accent font-semibold mb-1 md:mb-2 italic">
                    Divinatory Meaning: Radiance through the dark; courage through the positive
                  </p>
                  <p className="text-xs md:text-sm text-tarot-text-main leading-snug md:leading-relaxed">
                    When I appear, realize hope as a beacon to navigate your way home; experience optimism and encouragement as the roadmap to your dreams; rejuvenation, inspiration and renewal of your sacred energy.
                  </p>
                  <div className="text-tarot-border text-3xl mt-2 md:mt-4 text-center hidden md:block">✦</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center mt-2 text-tarot-text-main font-cinzel text-lg tracking-wide">
            Rachael
          </p>
        </div>
      </div>
    </section>
  );
}
