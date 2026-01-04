# TODO - Not the Jester Band Website

## 🎯 Project Goal

Build a responsive, high-performance Next.js band website with a mystical Tarot Card aesthetic.

---

## ✅ Completed Tasks

- [x] **Setup Next.js** - Scaffolded project with App Router, TypeScript, Tailwind CSS, and ESLint
- [x] **Create Documentation Files** - Created AGENTS.md and TODO.md for project context
- [x] **Configure Tailwind Theme** - Defined Tarot color palette with CSS variables and custom utilities
- [x] **Set up globals.css** - Added CSS variables, Google Fonts, and Tarot border/divider utilities
- [x] **Create TypeScript Interfaces** - Defined Track and Gig interfaces in src/types/index.ts
- [x] **Create Mock Data** - Added sample tracks and gigs to src/lib/mockData.ts
- [x] **Build TarotCardContainer Component** - Centered card with ornamental borders and aspect ratio
- [x] **Build BioSection Component** - Band biography with mystical styling
- [x] **Build GigList Component** - Display upcoming shows with dates, venues, locations
- [x] **Build AudioPlayer Component** - Custom play/pause, progress bar, volume control with SVG icons
- [x] **Assemble Landing Page** - Integrated all components into page.tsx with Hero section
- [x] **Update Layout** - Configured metadata and removed default fonts

---

## 🚧 In Progress

- [ ] **Test Application** - Run dev server and verify responsive design

---

## 📋 Upcoming Tasks

### Phase 1: Theming & Layout

- [ ] **Configure Tailwind Theme** - Define tarot-bg, tarot-card-bg, tarot-border, tarot-text-main, tarot-accent colors
- [ ] **Set up globals.css** - CSS variables, Tarot border pattern, background textures
- [ ] **Build Layout (layout.tsx)** - Implement dark "velvet table" background
- [ ] **Build TarotCardContainer Component** - Centered card with ornamental borders and aspect ratio

### Phase 2: Core Components

- [ ] **Create TypeScript Interfaces** - Define Track and Gig interfaces in src/types/index.ts
- [ ] **Create Mock Data** - Add sample tracks and gigs to src/lib/mockData.ts
- [ ] **Build AudioPlayer Component** - Custom play/pause, progress bar, volume control with SVG icons
- [ ] **Build GigList Component** - Display upcoming shows with date, venue, location
- [ ] **Build BioSection Component** - Simple band bio with mystical styling

### Phase 3: Assembly & Testing

- [ ] **Assemble Landing Page** - Integrate all components into page.tsx with Hero section
- [ ] **Test Responsive Design** - Verify mobile, tablet, and desktop layouts
- [ ] **Polish & Refinement** - Ensure consistent Tarot aesthetic throughout

### Phase 4: Deployment

- [ ] **Deploy to Vercel** - Push to production and verify live site
- [ ] **Update Documentation** - Final updates to AGENTS.md and README.md

---

## 📝 Notes

- **Design Principle**: All colors and fonts must be defined in tailwind.config.ts (no hardcoded values)
- **Component Strategy**: Server components by default, client components only for interactivity
- **Data Strategy**: Mock data for now, structured to anticipate future GCF JSON responses
- **Aesthetic Focus**: Every element must feel mystical and Tarot-like

---

## 🎨 Design Tokens Checklist

### Colors (tailwind.config.ts)

- [ ] tarot-bg (dark velvet table)
- [ ] tarot-card-bg (parchment/aged paper)
- [ ] tarot-border (gold/bronze ornamental)
- [ ] tarot-text-main (dark, readable)
- [ ] tarot-accent (mystical highlight)

### Fonts (tailwind.config.ts)

- [ ] Cinzel (headers - Google Font)
- [ ] Cormorant Garamond (body - Google Font)

### Custom Utilities (globals.css)

- [ ] Tarot border pattern (double lines, ornamental corners)
- [ ] Background texture/gradient

---

**Last Updated**: January 3, 2026  
**Status**: Phase 1 - Theming & Layout  
**Next Step**: Configure Tailwind theme with Tarot design tokens
