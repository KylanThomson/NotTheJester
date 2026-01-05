/**
 * BioSection Component
 * Displays band biography with mystical styling
 * Server component - no interactivity needed
 */

export default function BioSection() {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        About the Band
      </h2>
      
      <div className="tarot-divider mb-8" />
      
      <div className="space-y-4 text-tarot-text-main leading-relaxed">
        <p className="text-xl md:text-2xl">
          <span className="font-semibold text-tarot-accent">Not the Jester</span> is the musical amalgamation of Rachael and Michael,
          a married duo crafting their sound from the rustic forests and rocky
          shores of western Washington.
        </p>
        
        <p className="text-xl md:text-2xl">
          Through acoustic landscapes and intertwining harmonies, they weave stories
          of freedom and wandering—sailing away from the petrified and predictable,
          seeking paths where sand meets highway and silence speaks volumes. Each
          song is a passionate meditation on liberation, memory and finding meaning in
          an uncertain world.
        </p>
        
        <p className="text-xl md:text-2xl">
          Through intimate folk-rock soundscapes and poetic lyricism, Not the Jester
          invites you to venture forward, gaze into the unknown and discover what waits
          beyond the bend in the road.
        </p>
      </div>
    </section>
  );
}
