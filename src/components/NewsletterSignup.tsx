/**
 * NewsletterSignup Component
 * Email capture form for band mailing list — integrates with Mailchimp
 * via a Google Cloud Function backend (proxied through /api/subscribe).
 */

'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          lastName: lastName || undefined,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Thanks for subscribing! You\'re on the list.');
        setEmail('');
        setFirstName('');
        setLastName('');
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
    }
  };

  const isDisabled = status === 'loading' || status === 'success';

  return (
    <div className="bg-tarot-secondary/30 border border-tarot-accent/30 rounded-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-tarot-accent mb-3 text-center">
        Join Our Mailing List
      </h3>

      <p className="text-tarot-text-main text-center mb-6">
        Get notified about new shows, music releases, and exclusive updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name fields row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name (optional)"
            disabled={isDisabled}
            className="flex-1 px-4 py-3 bg-tarot-bg border border-tarot-accent/50 rounded-md
                     text-tarot-text-main placeholder-tarot-text-main/50
                     focus:outline-none focus:ring-2 focus:ring-tarot-accent focus:border-transparent
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all"
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name (optional)"
            disabled={isDisabled}
            className="flex-1 px-4 py-3 bg-tarot-bg border border-tarot-accent/50 rounded-md
                     text-tarot-text-main placeholder-tarot-text-main/50
                     focus:outline-none focus:ring-2 focus:ring-tarot-accent focus:border-transparent
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all"
          />
        </div>

        {/* Email + submit row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isDisabled}
            className="flex-1 px-4 py-3 bg-tarot-bg border border-tarot-accent/50 rounded-md
                     text-tarot-text-main placeholder-tarot-text-main/50
                     focus:outline-none focus:ring-2 focus:ring-tarot-accent focus:border-transparent
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all"
          />

          <button
            type="submit"
            disabled={isDisabled}
            className="px-6 py-3 bg-tarot-accent text-tarot-bg font-semibold rounded-md
                     hover:bg-tarot-hover transition-colors
                     disabled:opacity-50 disabled:cursor-not-allowed
                     whitespace-nowrap"
          >
            {status === 'loading'
              ? 'Subscribing...'
              : status === 'success'
                ? '✓ Subscribed'
                : 'Subscribe'}
          </button>
        </div>

        {message && (
          <p
            className={`text-center text-sm ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </p>
        )}
      </form>

      <p className="text-xs text-tarot-text-main/60 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
