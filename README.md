# Sarawut Nawawisitkul — Portfolio

Personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
This project showcases professional experience, technical skills, and selected work as a **Senior Backend Engineer**.

🔗 **Live Demo:** _add your deployed URL here_  
📄 **Resume:** `/resume.pdf`

---

## ✨ Features

- ⚡ Built with Next.js App Router
- 🎨 Tailwind CSS with Dark / Light mode
- 🌙 Theme toggle powered by `next-themes`
- 📱 Fully responsive (mobile-first)
- 🧼 ESLint + Prettier auto-format on save
- 🚀 SEO-ready metadata
- 🧠 Hydration-safe components
- 🧩 Clean, maintainable codebase

---

## 🛠 Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Tooling

- Bun
- ESLint (Flat Config)
- Prettier

### Deployment

- Vercel (recommended)

---

## 📂 Project Structure

```txt
app/
├─ layout.tsx        # Root layout & metadata
├─ page.tsx          # Main page
├─ icon.png          # Browser tab icon (favicon)
components/
├─ header.tsx
├─ hero.tsx
├─ about.tsx
├─ stack.tsx
├─ projects.tsx
├─ contact.tsx
├─ footer.tsx
├─ theme-toggle.tsx
public/
├─ resume.pdf
.vscode/
├─ settings.json     # Auto-format on save
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
bun install
```

### 2️⃣ Run development server

```bash
bun dev
```

Open your browser at:

```
http://localhost:3000
```

---

## 🧼 Code Formatting

This project uses **Prettier + ESLint** with auto-format on save.

### Format all files:

```bash
bun run format
```

### Fix ESLint issues:

```bash
bun run lint:fix
```

> VS Code workspace settings are included in `.vscode/settings.json`

---

## 🌗 Dark Mode

- Implemented using `next-themes`
- Supports system theme
- Hydration-safe configuration
- No server/client mismatch in production

---

## 📄 Resume

The resume file is located at:

```
public/resume.pdf
```

Accessible via:

- Header navigation
- Direct URL: `/resume.pdf`

---

## 🌍 SEO & Metadata

- Metadata defined in `app/layout.tsx`
- Optimized page title & description
- Open Graph ready
- Proper `lang` and accessibility attributes

---

## 📦 Production Build

Build and run the project locally in production mode:

```bash
bun run build
bun run start
```

---

## 📌 Notes

- Uses Next.js App Router (no Pages Router)
- No legacy `_document.tsx`
- No SSR hydration issues
- Safe handling of client-only logic
- Clean and readable component structure

---

## 📜 License

This project is intended for **personal portfolio use**.

---

## 👋 Author

**Sarawut Nawawisitkul**  
Senior Backend Engineer  
Golang · FinTech · Distributed Systems
