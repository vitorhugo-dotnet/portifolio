# Portfolio

Personal portfolio built with **Vite + React + TypeScript**, styled with **Tailwind CSS**, and using **shadcn/ui** components.

## Overview

This project presents GitHub-powered portfolio sections (hero, pinned repositories, activity, contribution heatmap, and contact) plus a small **Hub** page for public app privacy resources.

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
- `/hub` — public app privacy hub

## SonicRelay public routes

- `/sonicrelay/privacy-policy` — app-specific privacy policy

## The Universe Decides public routes

- `/the-universe-decides/privacy-policy` — app-specific privacy policy

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
