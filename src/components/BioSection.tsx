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
          <span className="font-semibold text-tarot-accent">Not the Jester</span> is the musical partnership 
          of Rachael and Michael, a married couple crafting their sound from the misty forests and 
          rocky shores of Washington State.
        </p>
        
        <p className="text-base md:text-lg text-tarot-text-muted">
          Through acoustic guitars and intertwining harmonies, they weave stories of freedom and 
          wandering—sailing away from the petrified and predictable, seeking paths where sand 
          meets highway and silence speaks volumes. Each song is an intimate meditation on liberation, 
          memory, and finding meaning in an uncertain world.
        </p>
        
        <p className="text-base md:text-lg text-tarot-text-muted">
          With intimate folk soundscapes and poetic lyricism, Not the Jester invites you to roll 
          away the stone, run like buffalo toward freedom, and discover what waits beyond the 
          next bend in the road.
        </p>
      </div>
    </section>
  );
}
