# Joshua Forman — Portfolio

Personal portfolio site for Joshua Forman, a full-stack developer building production web and mobile apps across education, government, and startup environments.

A single-page site — Hero, About, Experience, Projects, Skills, Contact — built to load fast, look sharp in light or dark mode, and get out of the way of the content.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** for dev/build tooling
- **Tailwind CSS v4** (CSS-based theming, no config file — see `src/index.css`)
- **oxlint** for linting
- **Firebase Hosting** + **GitHub Actions** for CI/CD

## Features

- Light/dark theme with no flash-of-wrong-theme on load (inline script sets the theme class before React hydrates, persisted to `localStorage`)
- Fully responsive, mobile-first nav with animated section links
- All resume/portfolio content (roles, projects, skills, education) driven from a single typed data file, so updates never touch component code
- Automatic Firebase preview deploys on every pull request, live deploy on merge to `main`

## Getting started

```bash
npm install
npm run dev
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

## Project structure

```
src/
├── components/   # One component per page section (Hero, About, Experience, ...)
├── data/         # content.ts — all copy, work history, projects, skills, education
├── hooks/        # useTheme.ts — light/dark theme state
├── assets/img/   # Logos and photos referenced from content.ts
├── App.tsx       # Composes the sections into the page
└── main.tsx      # Entry point
```

To update the résumé content — a new role, project, or skill — edit `src/data/content.ts`. Everything else is presentation.

## Deployment

Pushes to `main` build the site and deploy it to Firebase Hosting via GitHub Actions (`.github/workflows/firebase-hosting-merge.yml`). Every pull request gets its own Firebase preview channel deploy for review before merging.
