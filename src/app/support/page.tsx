/**
 * Support/Help Page
 * Required for Kit integration
 */

import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-tarot-bg text-tarot-text-main">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-tarot-accent mb-8">
          Support & Help
        </h1>
        
        <div className="space-y-8 text-tarot-text-main/90 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Newsletter Subscription
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  How do I subscribe to the mailing list?
                </h3>
                <p>
                  Visit our <Link href="/#contact" className="text-tarot-accent hover:text-tarot-hover underline">Contact section</Link> and 
                  enter your email address in the newsletter signup form. You&apos;ll receive a confirmation email to verify your subscription.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  I didn&apos;t receive a confirmation email
                </h3>
                <p>
                  Please check your spam or junk folder. If you still can&apos;t find it, try subscribing again or contact us directly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  How do I unsubscribe?
                </h3>
                <p>
                  Every email we send includes an unsubscribe link at the bottom. Click that link to instantly remove yourself from our mailing list.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  What will you send me?
                </h3>
                <p>
                  We send updates about:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Upcoming shows and events</li>
                  <li>New music releases</li>
                  <li>Behind-the-scenes content</li>
                  <li>Exclusive announcements</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Website Issues
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  The audio player isn&apos;t working
                </h3>
                <p>
                  Try refreshing the page or using a different browser. Make sure your browser is up to date and JavaScript is enabled.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  I found a bug or error
                </h3>
                <p>
                  Please contact us with details about what happened and we&apos;ll fix it as soon as possible!
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Booking & Contact
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  How do I book Not the Jester for an event?
                </h3>
                <p>
                  Please contact us directly via email or phone. We&apos;d love to play at your venue or event!
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  Contact Information
                </h3>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:millikan88@comcast.net" className="text-tarot-accent hover:text-tarot-hover underline">
                    millikan88@comcast.net
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+14255018307" className="text-tarot-accent hover:text-tarot-hover underline">
                    425-501-8307
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Privacy & Data
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  How is my data used?
                </h3>
                <p>
                  We only collect your email address to send you updates. We never sell or share your information with third parties. 
                  Read our full <Link href="/privacy" className="text-tarot-accent hover:text-tarot-hover underline">Privacy Policy</Link> for details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-tarot-accent mb-2">
                  Can I request my data be deleted?
                </h3>
                <p>
                  Yes! Contact us and we&apos;ll remove all your information from our systems.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-tarot-secondary/30 border border-tarot-accent/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Still Need Help?
            </h2>
            <p className="mb-4">
              If your question wasn&apos;t answered here, please don&apos;t hesitate to reach out!
            </p>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong> <a href="mailto:millikan88@comcast.net" className="text-tarot-accent hover:text-tarot-hover underline">
                  millikan88@comcast.net
                </a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+14255018307" className="text-tarot-accent hover:text-tarot-hover underline">
                  425-501-8307
                </a>
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-tarot-accent/30">
          <Link 
            href="/" 
            className="text-tarot-accent hover:text-tarot-hover transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
