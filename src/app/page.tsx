import TarotCardContainer from '@/components/TarotCardContainer';
import PageTransition from '@/components/PageTransition';
import Starfield from '@/components/Starfield';
import BioSection from '@/components/BioSection';
import BandMembers from '@/components/BandMembers';
import AudioPlayer from '@/components/AudioPlayer';
import GigList from '@/components/GigList';
import ContactSection from '@/components/ContactSection';
import QuoteSection from '@/components/QuoteSection';

export default function Home() {
  return (
    <PageTransition>
      {/* Starfield background covering entire page */}
      <Starfield />
      
      <TarotCardContainer>
      {/* Hero Section - Tarot Card Title */}
      <header className="text-center mb-12 border-b-2 border-tarot-border pb-8">
        {/* Top ornament */}
        <div className="flex items-center justify-center gap-3 mb-6 text-tarot-border">
          <span className="text-2xl">❧</span>
          <span className="text-xl">✦</span>
          <span className="text-2xl">❧</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-tarot-text-main mb-3 tracking-widest uppercase">
          Not the Jester
        </h1>
        
        <div className="flex items-center justify-center gap-2 text-tarot-accent my-4">
          <span className="w-16 h-px bg-tarot-accent"></span>
          <span className="text-sm uppercase tracking-widest">The Wanderer</span>
          <span className="w-16 h-px bg-tarot-accent"></span>
        </div>
        
        <p className="text-lg md:text-lg text-tarot-text-muted italic font-light">
          Mystic Folk-Rock
        </p>
        
        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-3 mt-6 text-tarot-border">
          <span className="text-xl">✦</span>
          <span className="text-xs">◆</span>
          <span className="text-xl">✦</span>
        </div>
      </header>

      {/* Navigation Links */}
      <nav className="flex justify-center gap-6 mb-12 flex-wrap">
        <a
          href="#about"
          className="text-2xl md:text-3xl text-tarot-accent hover:text-tarot-hover transition-colors font-medium"
        >
          About
        </a>
        <span className="text-tarot-border">•</span>
        <a
          href="#listen"
          className="text-2xl md:text-3xl text-tarot-accent hover:text-tarot-hover transition-colors font-medium"
        >
          Listen
        </a>
        <span className="text-tarot-border">•</span>
        <a
          href="#gigs"
          className="text-2xl md:text-3xl text-tarot-accent hover:text-tarot-hover transition-colors font-medium"
        >
          Shows
        </a>
        <span className="text-tarot-border">•</span>
        <a
          href="#contact"
          className="text-2xl md:text-3xl text-tarot-accent hover:text-tarot-hover transition-colors font-medium"
        >
          Contact
        </a>
      </nav>

      {/* Band Member Tarot Cards */}
      <BandMembers />

      {/* Main Content Sections */}
      <main>
        <BioSection />
        <AudioPlayer />
        <GigList />
        <ContactSection />
      </main>

      {/* Inspirational Quote Section */}
      <QuoteSection />

      {/* Footer */}
      <footer className="text-center mt-12 pt-8 border-t border-tarot-border">
        <p className="text-sm text-tarot-text-muted">
          © {new Date().getFullYear()} Not the Jester. All rights reserved.
        </p>
      </footer>
      </TarotCardContainer>
    </PageTransition>
  );
}
