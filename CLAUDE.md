# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Make sure to update this page as needed. Keep the overall code clean and easy to read. Use variable that are specific and easy to search. Follow industry standards. Do not commit or push without express permission.

## Overview

Joshua Forman's personal portfolio site — a single-page React app (Vite + TypeScript + Tailwind CSS v4). No router, no backend; it's one scrolling page assembled from section components.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build      # tsc -b (typecheck) then vite build -> dist/
npm run lint       # oxlint
npm run preview    # serve the production build locally
```

There is no test suite configured. Linting is via `oxlint` (config in `.oxlintrc.json`), not ESLint.

## Architecture

- `src/main.tsx` mounts `App` into `#root`; `index.html` has an inline script that sets the `dark` class on `<html>` before React loads (reads `localStorage.theme`, falls back to `prefers-color-scheme`) to avoid a flash of wrong theme.
- `src/App.tsx` is a straight-line composition of section components in page order: `Nav`, `Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`, `Footer`. Each section is a self-contained component in `src/components/` with no shared layout wrapper — to reorder/add sections, edit `App.tsx` directly.
- `src/data/content.ts` is the single source of truth for all page content — profile info, nav links, work experience, projects, skills, and education. It imports images directly from `src/assets/img/`. **To update resume/portfolio content (jobs, projects, skills), edit this file rather than the components.**
- `src/hooks/useTheme.ts` holds the light/dark theme state (persisted to `localStorage`), consumed by `App.tsx` and passed down to `Nav`.
- Icons: `lucide-react` is used for UI chrome (menu, sun/moon, etc. — see `src/components/Nav.tsx`); `src/components/icons.tsx` has hand-written inline SVGs for brand icons (GitHub, LinkedIn) not in lucide.
- Styling is Tailwind v4 with the CSS-based config in `src/index.css` (no `tailwind.config.js` — theme tokens like `ink-*`/`accent-*` colors, fonts, and keyframes are defined via `@theme` in that file). Dark mode uses a custom variant keyed off a `.dark` class on `<html>` (`@custom-variant dark`), toggled by `useTheme`.

## Deployment

Firebase Hosting, project `jpforman-007` (see `.firebaserc`, `firebase.json`). GitHub Actions (`.github/workflows/`) build and deploy automatically: pushes to `main` deploy to the live channel; pull requests get a preview channel deploy. Both workflows run `npm ci && npm run build` and deploy the `dist/` output.
