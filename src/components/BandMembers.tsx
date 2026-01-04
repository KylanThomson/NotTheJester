/**
 * BandMembers Component
 * Displays tarot card images of band members
 * Server component - no interactivity needed
 */

import Image from 'next/image';
import michaelCard from '@/lib/images/michael.png';
import rachaelCard from '@/lib/images/rachael.png';

export default function BandMembers() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 lg:gap-20">
        {/* Michael's Tarot Card */}
        <div className="group relative">
          <Image
            src={michaelCard}
            alt="Michael - Tarot Card"
            className="w-full h-auto max-w-xs md:max-w-sm drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            priority
          />
          <p className="text-center mt-4 text-tarot-text-main font-cinzel text-lg tracking-wide">
            Michael
          </p>
        </div>

        {/* Rachael's Tarot Card */}
        <div className="group relative">
          <Image
            src={rachaelCard}
            alt="Rachael - Tarot Card"
            className="w-full h-auto max-w-xs md:max-w-sm drop-shadow-2xl transition-transform duration-300 hover:scale-105"
            priority
          />
          <p className="text-center mt-4 text-tarot-text-main font-cinzel text-lg tracking-wide">
            Rachael
          </p>
        </div>
      </div>
    </section>
  );
}
