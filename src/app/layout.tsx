import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Not the Jester | Mystical Folk Band',
  description:
    'Not the Jester - A mystical folk band weaving tales through haunting melodies inspired by tarot symbolism and ancient folklore.',
  keywords: ['folk band', 'mystical music', 'tarot', 'acoustic', 'indie folk'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
