# AGENTS.md - Context for Future AI Agents

## 🎴 Project Overview

**Not the Jester** is a band website built with Next.js, designed with a mystical Tarot Card aesthetic. This document provides essential context for AI agents working on this project.

---

## 📁 Project Structure

```
not-the-jester/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (fonts, metadata, background)
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles & CSS variables
│   ├── components/             # React components
│   │   ├── TarotCardContainer.tsx  # Main card wrapper
│   │   ├── AudioPlayer.tsx         # Music player (client component)
│   │   ├── GigList.tsx             # Upcoming shows list
│   │   └── BioSection.tsx          # Band bio section
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # Track, Gig, and other interfaces
│   └── lib/                    # Utilities and mock data
│       └── mockData.ts         # Mock tracks and gigs
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind theme configuration ⭐
├── AGENTS.md                   # This file
├── TODO.md                     # Task checklist
└── README.md                   # Project README
```

---

## 🎨 Design Tokens & Theming

### **⭐ The "Single File" Rule**

To enable easy palette swapping, all design tokens are centralized in:

1. **`tailwind.config.ts`** - Defines the color palette and font stack
2. **`src/app/globals.css`** - Maps CSS variables to Tailwind utilities

### **Color Palette (Semantic Naming)**

Located in `tailwind.config.ts` under `theme.extend.colors`:

- **`tarot-bg`**: Dark velvet table background (the page background)
- **`tarot-card-bg`**: Parchment/aged paper color (the main card)
- **`tarot-border`**: Gold/bronze ornamental border color
- **`tarot-text-main`**: Primary text color (dark, readable)
- **`tarot-accent`**: Mystical accent color for highlights/interactions

### **Typography**

Defined in `tailwind.config.ts` under `theme.extend.fontFamily`:

- **Headers**: Google Font - Cinzel (mystical, tarot-like)
- **Body**: Google Font - Cormorant Garamond (elegant serif)

### **Custom Utilities**

- **Tarot Border**: A reusable utility class or component for double-line ornamental borders
- Defined in `globals.css` or as a Tailwind plugin

### **❌ DO NOT Hardcode Colors**

- ✅ Correct: `className="bg-tarot-card-bg text-tarot-text-main"`
- ❌ Wrong: `className="bg-[#F4E8D8] text-[#2C1810]"`

Use semantic token names so the palette can be changed globally in one place.

---

## 🏗️ Architecture Patterns

### **Component Guidelines**

1. **Server Components by Default**

   - Use React Server Components for static content (GigList, BioSection, TarotCardContainer)
   - Faster initial page loads, better SEO

2. **Client Components Only for Interactivity**

   - Mark with `'use client'` directive at the top of the file
   - Use for components with state, event handlers, or browser APIs
   - Example: `AudioPlayer.tsx` (play/pause, progress tracking)

3. **Functional Components**

   - Always use functional components with TypeScript
   - Use React hooks for state management

4. **TypeScript First**
   - All components must have proper type annotations
   - Props should use explicit interfaces (no inline types)
   - Leverage `src/types/index.ts` for shared types

### **State Management**

- **Local State**: Use `useState` and `useReducer` for component-specific state
- **Audio Player**: Manages play/pause, current track, progress, volume
- **Future Backend Integration**: Ready for React Query or SWR when connecting to GCF

### **Styling Approach**

- **Tailwind CSS Only**: No CSS modules, no styled-components
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Custom Classes**: Define reusable patterns in `globals.css` when needed

---

## 🎵 Data Strategy

### **Current Phase: Mock Data**

All data is currently mocked on the frontend in `src/lib/mockData.ts`:

- Track listings (title, duration, placeholder URLs)
- Gig listings (date, venue, location)

### **Future Phase: Backend Integration**

The backend will be a **Python Google Cloud Function (GCF)** that:

- Indexes music files from a **Google Cloud Storage (GCS)** bucket
- Returns JSON responses with track metadata and streaming URLs

### **TypeScript Interfaces (src/types/index.ts)**

Interfaces are structured to anticipate the GCF JSON response:

```typescript
interface Track {
  id: string;
  title: string;
  duration: number; // in seconds
  url: string; // future: GCS streaming URL
}

interface Gig {
  id: string;
  date: string; // ISO 8601 format
  venue: string;
  location: string;
}
```

**When integrating the backend:**

1. Create an API utility in `src/lib/api.ts`
2. Replace mock data imports with actual fetch calls
3. The interfaces should remain unchanged (backwards compatible)

---

## 🎴 The Tarot Aesthetic

### **Design Principles**

- **Mystical & Centered**: The main content resembles a physical Tarot card
- **Ornamental Borders**: Double lines, decorative corners, gold accents
- **Serif Typography**: High x-height, elegant, readable
- **Muted Color Palette**: Golds, deep purples, aged parchment tones
- **Card Aspect Ratio**: ~2:3 on desktop, full-width on mobile

### **Visual Hierarchy**

1. **Background ("Velvet Table")**: Dark, textured, surrounding the card
2. **TarotCardContainer ("The Card")**: Centered, light parchment background
3. **Content Sections**: Band name, bio, gigs, audio player - all within the card

### **Custom Elements**

- **Audio Player Icons**: Custom SVG icons (no default HTML5 controls)
- **Dividers**: Ornamental lines between sections
- **Buttons/Controls**: Styled to match the mystical theme

---

## 📝 Development Workflow

### **Adding New Components**

1. Create component file in `src/components/`
2. Define props interface in the same file or `src/types/index.ts`
3. Decide: Server or Client component?
4. Use Tailwind classes with semantic color tokens
5. Import and use in `src/app/page.tsx`

### **Modifying the Theme**

1. Edit color values in `tailwind.config.ts`
2. Optionally update CSS variables in `globals.css`
3. All components will inherit the new palette automatically

### **Running the Development Server**

```bash
npm run dev
```

Visit http://localhost:3000

### **Building for Production**

```bash
npm run build
npm start
```

### **Deploying to Vercel**

```bash
vercel
```

Or push to GitHub and connect the repository to Vercel for automatic deployments.

---

## 🚀 Future Enhancements

### **Backend Integration (Next Phase)**

- Create `src/lib/api.ts` for GCF communication
- Replace mock data with actual API calls
- Handle loading states and errors gracefully

### **Additional Features (Potential)**

- Admin panel for managing gigs/tracks
- Newsletter signup form
- Social media integration
- Tour map visualization
- Merch store integration

---

## 🔧 Important Notes for AI Agents

1. **Always Update TODO.md**: Track progress as tasks are completed
2. **Respect the Single File Rule**: Never hardcode colors or fonts in components
3. **Server vs Client**: Default to server components unless interactivity is needed
4. **Type Safety**: Use proper TypeScript types for all props and data structures
5. **Responsive First**: Test on mobile, tablet, and desktop breakpoints
6. **Aesthetic Consistency**: Every new element should feel "Tarot-like"

---

## 📚 Key Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Cinzel, Cormorant Garamond)
- **Deployment**: Vercel
- **Version Control**: Git

---

## 🎯 Project Status

Current phase: **Frontend UI/UX Development**

- ✅ Project scaffolded
- ⏳ Theme configuration in progress
- ⏳ Components being built
- ❌ Backend integration (future phase)

---

**Last Updated**: January 3, 2026
**Maintained By**: AI Agents & Development Team
