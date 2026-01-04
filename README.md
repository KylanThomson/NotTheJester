# Not the Jester 🎴

A mystical folk band website built with Next.js, featuring an authentic Tarot Card aesthetic.

## ✨ Features

- **Tarot Card Design**: Centered card layout with ornamental borders and mystical symbols
- **Audio Player**: Custom-designed music player with play/pause, progress bar, and volume controls
- **Gig Listings**: Upcoming show information with dates, venues, and locations
- **Band Biography**: About section with mystical styling
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Type-Safe**: Built with TypeScript for robust development

## 🎨 Design System

The site features a carefully crafted Tarot-inspired aesthetic:

- **Typography**: Cinzel for headers, Cormorant Garamond for body text
- **Color Palette**: Aged parchment backgrounds with golden accents
- **Ornamental Details**: Double-line borders, mystical corner symbols (✦, ❧, ◆)
- **Aged Paper Effect**: Subtle texture overlays for authentic card feel

All design tokens are centralized in `src/app/globals.css` for easy customization.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/KylanThomson/NotTheJester.git
cd NotTheJester

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 📁 Project Structure

```
not-the-jester/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts and metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles and design tokens
│   ├── components/
│   │   ├── TarotCardContainer.tsx  # Main card wrapper with ornaments
│   │   ├── AudioPlayer.tsx         # Custom music player (client component)
│   │   ├── GigList.tsx             # Upcoming shows list
│   │   └── BioSection.tsx          # Band biography
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   └── lib/
│       └── mockData.ts         # Mock data for tracks and gigs
├── AGENTS.md                   # Context for AI agents
├── TODO.md                     # Development checklist
└── README.md                   # This file
```

## 🎵 Data Structure

The project uses TypeScript interfaces designed to anticipate future integration with a Google Cloud Function backend:

- **Track**: `{ id, title, duration, url, artist, album }`
- **Gig**: `{ id, date, venue, location, ticketUrl, time }`

Mock data is currently provided in `src/lib/mockData.ts` and can be easily replaced with API calls.

## 🎨 Customizing the Theme

All design tokens are centralized in `src/app/globals.css` under the `:root` selector:

```css
:root {
  --tarot-bg: #0f0d0c; /* Dark velvet table */
  --tarot-card-bg: #faf6f1; /* Light parchment */
  --tarot-border: #d4af37; /* Golden ornaments */
  --tarot-text-main: #1a1614; /* Main text */
  --tarot-accent: #8b6914; /* Accent color */
  --tarot-text-muted: #4a4540; /* Muted text */
  --tarot-hover: #b8860b; /* Hover states */
}
```

Simply update these values to change the entire color scheme.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Cinzel, Cormorant Garamond)
- **Deployment**: Optimized for Vercel

## 📝 Future Enhancements

- Connect to Google Cloud Function for dynamic music file indexing
- Integrate with Google Cloud Storage for audio streaming
- Add admin panel for managing content
- Implement newsletter signup
- Add social media links
- Create tour date management system

## 📄 Documentation

- **AGENTS.md**: Comprehensive guide for AI agents and future developers
- **TODO.md**: Development progress tracker

## 🚢 Deployment

The site is optimized for deployment on Vercel:

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

## 📜 License

Copyright © 2026 Not the Jester. All rights reserved.

## 🙏 Credits

Design inspired by traditional Tarot card aesthetics and mystical folklore.

---

**Built with mysticism and code** ✦
