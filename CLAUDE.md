# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npm test         # run all tests with Vitest
```

Run a single test file:
```bash
npx vitest tests/components/Navbar.test.tsx
```

## Architecture

**Pocket Heist** is a Next.js 16 app (React 19, TypeScript, Tailwind CSS v4) with two route groups:

- `app/(public)/` — unauthenticated pages (login, signup, preview). Wrapped in a `<main class="public">` shell with no navbar.
- `app/(dashboard)/` — authenticated pages under `/heists/*`. Wrapped in a layout that renders `<Navbar />` above `<main>`.

The `app/layout.tsx` root layout provides the `<html>/<body>` shell and imports `globals.css`.

**Routing under `(dashboard)`:**
- `/heists` — list of active, assigned, and expired heists
- `/heists/create` — create new heist form
- `/heists/[id]` — heist detail view

**Components** live in `components/<Name>/` with an `index.ts` barrel export and a co-located CSS Module (`<Name>.module.css`). The only current component is `Navbar`.

**Path alias:** `@/` maps to the repo root (configured in `tsconfig.json`).

**Testing:** Vitest + jsdom + React Testing Library. Setup file at `vitest.setup.ts` imports `@testing-library/jest-dom/vitest`. Tests live in `tests/` mirroring the source structure.

**CSS:** Global styles in `app/globals.css`. Component-scoped styles use CSS Modules.

**`(public)/preview`** is a scratch page for developing new UI components in isolation before integrating them.
