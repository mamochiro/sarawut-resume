# Sarawut Nawawisitkul — Portfolio

Personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.  
Showcases professional experience, technical skills, and selected work as a **Senior Backend Engineer**.

🔗 **Live:** _add your deployed URL here_  
📄 **Resume:** `/resume`

---

## Design

Gen Z pastel aesthetic — soft lavender, rose, mint, and periwinkle palette across a warm off-white background.  
Typography: **Plus Jakarta Sans** (headings) + **DM Sans** (body) + **JetBrains Mono** (labels/tags).

---

## Features

- Next.js 16 App Router — all server components by default
- Tailwind CSS v4 with `@import "tailwindcss"` syntax
- Custom OKLCH pastel color system via CSS variables
- Scroll-triggered fade-in animations (IntersectionObserver)
- Fully responsive — mobile, tablet, desktop (breakpoints: 480 / 768 / 1024px)
- SEO metadata, Open Graph, and Twitter card
- `/resume` page with print-to-PDF support

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS variables |
| Fonts | Plus Jakarta Sans, DM Sans, JetBrains Mono |
| Package manager | Bun |
| Linting | ESLint flat config + Prettier |
| Deployment | Vercel (recommended) |

---

## Project Structure

```
app/
├─ layout.tsx          # Root layout, metadata, font imports
├─ page.tsx            # Single-page composition
├─ globals.css         # CSS variables (pastel palette) + all component styles
└─ resume/
   └─ page.tsx         # Print-friendly resume page

components/
├─ header.tsx          # Fixed nav with scroll detection (client)
├─ hero.tsx            # Hero section — name, tagline, widget card
├─ about.tsx           # Bio, stat cards, role widgets
├─ highlights.tsx      # Experience timeline
├─ stack.tsx           # Tech cloud + categorized list
├─ projects.tsx        # Project cards grid
├─ contact.tsx         # Contact links
├─ footer.tsx          # Footer
├─ motion-section.tsx  # Scroll animation wrapper
└─ print-button.tsx    # Resume print trigger

public/
└─ resume.pdf          # Static PDF resume
```

---

## Getting Started

```bash
bun install
bun dev          # http://localhost:3000
```

### Other commands

```bash
bun run build    # Production build
bun run start    # Serve production build
bun run format   # Prettier
bun run lint:fix # ESLint + Prettier fix
```

---

## Color System

All colors are defined as CSS variables in `app/globals.css`:

```css
--purple:  oklch(55% 0.22 296)  /* soft lavender */
--pink:    oklch(60% 0.20 352)  /* soft rose */
--lime:    oklch(55% 0.16 155)  /* sage mint */
--cobalt:  oklch(53% 0.16 225)  /* soft periwinkle */
--coral:   oklch(60% 0.14 50)   /* soft peach */
--gold:    oklch(65% 0.13 95)   /* soft lemon */

--bg2:  #F5F3FF   /* lavender tint — alt section backgrounds */
--bg3:  #FFF1F5   /* rose tint */
```

Tag variants (`.t-purple`, `.t-pink`, etc.) and section tags (`.st-purple`, etc.) derive from these variables automatically.

---

## Resume Page

The `/resume` route renders a print-optimized resume. Use **Ctrl/Cmd + P** → disable headers/footers → save as PDF.

---

## Author

**Sarawut Nawawisitkul**  
Senior Backend Engineer — Golang · FinTech · Distributed Systems
