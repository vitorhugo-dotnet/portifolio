# Portfolio

Personal portfolio built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and using **shadcn/ui** components.

## Overview

This project presents GitHub-powered portfolio sections (hero, pinned repositories, activity, contribution heatmap, and contact) plus a small **Hub** page that centralizes internal pages, Play Store publishing documentation, and external links.

## Tech stack

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Vitest + Testing Library

## Getting started

### Prerequisites

- Node.js 18+ (recommended LTS)
- npm

### Install dependencies

```bash
npm install
```

> If your npm version reports peer dependency resolution issues, run:
>
> ```bash
> npm install --legacy-peer-deps
> ```

### Start development server

```bash
npm run dev
```

### Production build and preview

```bash
npm run build
npm run preview
```

## Available scripts

- `npm run dev` — start local development server
- `npm run build` — generate production bundle and copy `dist/index.html` to `dist/404.html` for SPA fallback hosting
- `npm run build:dev` — generate development-mode bundle
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm run test` — run tests once with Vitest
- `npm run test:watch` — run Vitest in watch mode

## Main routes

- `/` — portfolio homepage
- `/hub` — hub with quick links
- `/privacy-policy` — portfolio privacy policy template page

## The Universe Decides Play Store routes

- `/the-universe-decides/privacy-policy` — public app-specific privacy policy for Google Play
- `/the-universe-decides/data-safety` — Google Play Data Safety notes and suggested declarations
- `/the-universe-decides/store-listing` — store listing draft, description, tags, and content notes
- `/the-universe-decides/app-access` — app access, permissions, ads declaration, target audience, and reviewer notes
- `/the-universe-decides/support` — support contact, account deletion statement, troubleshooting, and repository link

## Project structure (high level)

```text
src/
  components/      # reusable UI and feature components
  pages/           # route-level pages
  hooks/           # custom React hooks
  data/            # cached/static data used by the app
  lib/             # utility helpers
```

## Notes

- The project uses `BrowserRouter` with `basename={import.meta.env.BASE_URL}` to support deployments under subpaths.
- The production build copies `index.html` to `404.html`, which helps single-page app routing on GitHub Pages.
- Some lint issues may pre-exist in files unrelated to current feature pages/components.
