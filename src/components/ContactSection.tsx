/**
 * ContactSection Component
 * Displays contact information with email and phone
 * Server component - no interactivity needed
 */

export default function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl md:text-4xl font-bold text-tarot-accent mb-6 text-center">
        Contact
      </h2>
      
      <div className="tarot-divider mb-8" />
      
      <div className="space-y-6 text-tarot-text-main">
        {/* Email */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-lg md:text-lg font-semibold text-tarot-accent mb-2 md:mb-0">
            Email
          </h3>
          <a
            href="mailto:millikan88@comcast.net"
            className="text-base md:text-base text-tarot-text-main hover:text-tarot-hover transition-colors"
          >
            millikan88@comcast.net
          </a>
        </div>
        
        {/* Phone */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-lg md:text-lg font-semibold text-tarot-accent mb-2 md:mb-0">
            Phone
          </h3>
          <a
            href="tel:+14255018307"
            className="text-base md:text-base text-tarot-text-main hover:text-tarot-hover transition-colors"
          >
            425-501-8307
          </a>
        </div>
      </div>
    </section>
  );
}
