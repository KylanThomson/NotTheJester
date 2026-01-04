/**
 * BioSection Component
 * Displays band biography with mystical styling
 * Server component - no interactivity needed
 */

export default function BioSection() {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        About the Band
      </h2>
      
      <div className="tarot-divider mb-8" />
      
      <div className="space-y-4 text-tarot-text-main leading-relaxed">
        <p className="text-lg md:text-xl">
          Born from the shadows of forgotten taverns and moonlit crossroads, 
          <span className="font-semibold text-tarot-accent"> Not the Jester </span>
          weaves tales of mystic wanderings through haunting melodies and ethereal harmonies.
        </p>
        
        <p className="text-base md:text-lg text-tarot-text-muted">
          Our music draws inspiration from ancient folklore, tarot symbolism, and the 
          timeless dance between light and shadow. Each song is a journey through the 
          arcane, inviting listeners to explore the depths of their own mysteries.
        </p>
        
        <p className="text-base md:text-lg text-tarot-text-muted">
          With instruments that echo through time—acoustic guitars, violin, and 
          percussive rhythms—we craft soundscapes that blur the line between 
          the mystical and the mundane. Join us as we turn the cards and reveal 
          what fate has in store.
        </p>
      </div>
    </section>
  );
}
