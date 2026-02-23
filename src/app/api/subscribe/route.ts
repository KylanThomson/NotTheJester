/**
 * Email Subscription API Route
 * Proxies newsletter signups to our Google Cloud Function (Mailchimp backend).
 *
 * In production, set NEXT_PUBLIC_SUBSCRIBE_URL to the deployed Cloud Function URL.
 * Locally, the cloud function can be run on port 8080 with functions-framework.
 *
 * This proxy approach keeps the Cloud Function URL hidden from the browser and
 * lets us add server-side rate-limiting or spam checks in the future.
 */

import { NextRequest, NextResponse } from 'next/server';

// The URL of the deployed Google Cloud Function.
// Falls back to the local dev server started by `functions-framework`.
const SUBSCRIBE_FUNCTION_URL =
  process.env.SUBSCRIBE_FUNCTION_URL || 'https://ntj-mailchimp-660323987151.us-west1.run.app';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    // ── Basic validation ────────────────────────────────────────────────
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email is required' },
        { status: 400 },
      );
    }

    // ── Forward to the Google Cloud Function ────────────────────────────
    const response = await fetch(SUBSCRIBE_FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, firstName, lastName }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data);
    }

    // Relay the error from the cloud function
    return NextResponse.json(
      { error: data.error || 'Subscription failed' },
      { status: response.status },
    );
  } catch (error) {
    console.error('Subscription proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 502 },
    );
  }
}
