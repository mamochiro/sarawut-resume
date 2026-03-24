# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sarawut Nawawisitkul (Senior Backend Engineer). Single-page site with sections: Hero, About, Stack, Projects, Contact.

## Commands

- **Dev server:** `bun dev` (http://localhost:3000)
- **Build:** `bun run build`
- **Start production:** `bun run start`
- **Format:** `bun run format` (Prettier)
- **Lint + fix:** `bun run lint:fix` (ESLint with Prettier integration)

Package manager is **Bun** (not npm/yarn).

## Architecture

- **Next.js 16 App Router** with TypeScript — no Pages Router
- **Single page app:** `app/page.tsx` composes all section components
- **Layout:** `app/layout.tsx` wraps everything in `ThemeProvider` from `next-themes` (class-based dark mode)
- **Components** are in `components/` (flat, no nesting) — each exports a named function
- **Client components** use `"use client"` directive: `motion-section.tsx` (Framer Motion animations) and `theme-toggle.tsx` (hydration-safe theme switching)
- All other components are server components by default

## Styling

- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin — uses `@import "tailwindcss"` syntax (not `@tailwind` directives)
- Dark mode uses `class` strategy with custom variant: `@custom-variant dark (&:where(.dark, .dark *))` in `globals.css`
- Path alias: `@/*` maps to project root

## Key Patterns

- `MotionSection` wraps sections for scroll-triggered fade-in animations (Framer Motion `whileInView`)
- `ThemeToggle` uses `mounted` state guard to prevent hydration mismatch
- Static resume PDF served from `public/resume.pdf`
- ESLint flat config (`eslint.config.mjs`) extends `next/core-web-vitals` and `next/typescript` with Prettier enforcement
