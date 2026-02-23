/**
 * Privacy Policy Page
 * Required for Kit integration and good practice
 */

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-tarot-bg text-tarot-text-main">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold text-tarot-accent mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-tarot-text-main/90 leading-relaxed">
          <p className="text-sm text-tarot-text-main/60">
            Last Updated: February 2026
          </p>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Introduction
            </h2>
            <p>
              Not the Jester (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy 
              explains how we collect, use, and protect your personal information when you use 
              our website and subscribe to our mailing list.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Information We Collect
            </h2>
            <p className="mb-3">
              When you subscribe to our mailing list, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your email address</li>
              <li>Date and time of subscription</li>
              <li>IP address (for security purposes)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Send you updates about shows, new music, and band news</li>
              <li>Respond to your inquiries</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Email Marketing
            </h2>
            <p>
              We use Kit (formerly ConvertKit) to manage our email list. By subscribing, you 
              agree to receive marketing emails from us. You can unsubscribe at any time by 
              clicking the unsubscribe link in any email we send you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Data Sharing
            </h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Kit (our email service provider) to send emails</li>
              <li>Service providers who help us operate our website</li>
              <li>Law enforcement if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Your Rights
            </h2>
            <p className="mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our mailing list at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure, and we 
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or want to exercise your rights, 
              please contact us at:
            </p>
            <p className="mt-3">
              Email: <a href="mailto:millikan88@comcast.net" className="text-tarot-accent hover:text-tarot-hover">
                millikan88@comcast.net
              </a>
              <br />
              Phone: <a href="tel:+14255018307" className="text-tarot-accent hover:text-tarot-hover">
                425-501-8307
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-tarot-accent mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the &quot;Last 
              Updated&quot; date.
            </p>
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
