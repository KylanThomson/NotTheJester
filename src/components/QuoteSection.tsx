/**
 * QuoteSection Component
 * Displays the inspirational quote from Baltasar Gracian
 * that inspired the band name "Not the Jester"
 * Server component - no interactivity needed
 */

export default function QuoteSection() {
  return (
    <section className="mb-12 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6 text-tarot-border">
          <span className="text-lg">✦</span>
          <span className="text-base">◆</span>
          <span className="text-lg">✦</span>
        </div>
        
        <blockquote className="text-base md:text-lg text-tarot-text-main leading-relaxed italic text-center">
          &ldquo;NOT THE JESTER always; the common sense of a man is found in his seriousness, 
          for wisdom ranks higher than wit. He who is always the buffoon, is really never 
          the man. He classes himself with the liar, in that neither is believed; not the 
          later because his word is doubted; and not the former, because of his scoffing. 
          For it is never known if what was said was weighed in the mind, which in no 
          instance can have been much. There is nothing more banal than continuous banter. 
          Thus some get the reputation of being witty, but they endanger thereby their 
          reputation of being wise. The humorous may be allowed its moment, but for all 
          the rest, the serious.&rdquo;
        </blockquote>
        
        <p className="text-center text-tarot-text-muted text-sm md:text-base mt-6 font-semibold">
          — <span className="text-tarot-accent">The Art of Worldly Wisdom</span>, Baltasar Gracian
        </p>
        
        <div className="flex items-center justify-center gap-2 mt-6 text-tarot-border">
          <span className="text-lg">✦</span>
          <span className="text-base">◆</span>
          <span className="text-lg">✦</span>
        </div>
      </div>
    </section>
  );
}
