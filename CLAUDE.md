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
npx vitest tests/components/AuthForm.test.tsx
```

## Architecture

**Pocket Heist** is a Next.js 16 app (React 19, TypeScript, Tailwind CSS v4) with two route groups:

- `app/(public)/` — unauthenticated pages (login, signup, preview). Wrapped in a `<main class="public">` shell with no navbar.
- `app/(dashboard)/` — authenticated pages under `/heists/*`. Wrapped in a layout that renders `<Navbar />` above `<main>`.

The `app/layout.tsx` root layout provides the `<html>/<body>` shell and imports `globals.css`.

**Routing under `(public)`:**
- `/` — splash/landing page
- `/login` — login form (`AuthForm variant="login"`)
- `/signup` — signup form (`AuthForm variant="signup"`)
- `/preview` — scratch page for developing UI components in isolation

**Routing under `(dashboard)`:**
- `/heists` — list of active, assigned, and expired heists
- `/heists/create` — create new heist form
- `/heists/[id]` — heist detail view

## Components

Components live in `components/<Name>/` with an `index.ts` barrel export and a co-located CSS Module (`<Name>.module.css`).

| Component | Description |
|-----------|-------------|
| `AuthForm` | Login and signup forms. Accepts `variant: "login" \| "signup"`. Includes email, password (with show/hide toggle via `lucide-react`), confirm password (signup only), and a link to switch between forms. Logs to console on submit. |
| `Avatar` | Initials-based avatar badge. Extracts up to two uppercase initials from a name (handles PascalCase). |
| `Navbar` | Dashboard navigation header. Shows app branding and a "Create Heist" link. |
| `SkeletonCard` | Loading placeholder card with shimmer animation. Accepts an optional `className` prop. |

**Path alias:** `@/` maps to the repo root (configured in `tsconfig.json`).

## Testing

Vitest + jsdom + React Testing Library. Setup file at `vitest.setup.ts` imports `@testing-library/jest-dom/vitest`. Tests live in `tests/` mirroring the source structure.

| Test file | Covers |
|-----------|--------|
| `tests/components/AuthForm.test.tsx` | Both form variants, password toggles, console.log on submit, cross-page links |
| `tests/components/Avatar.test.tsx` | Initials extraction for simple names and PascalCase |
| `tests/components/Navbar.test.tsx` | Heading and navigation links |

## CSS

Global styles in `app/globals.css`. Component-scoped styles use CSS Modules. Key global classes:

| Class | Purpose |
|-------|---------|
| `.center-content` | Vertically centres content to full viewport height |
| `.page-content` | Max-width container with responsive margins |
| `.form-title` | Centred, bold form heading |
| `.btn` | Primary action button (purple, rounded) |

Theme colours are defined via `@theme` in `globals.css`: `primary` (purple), `secondary` (pink), `dark`, `light`, `lighter`, `success`, `error`.

## Custom Slash Commands

Defined in `.claude/commands/`:

| Command | Description |
|---------|-------------|
| `/commit-message` | Analyses staged git diff and proposes a conventional commit message. Waits for approval before committing. |
| `/component` | TDD workflow: writes tests first, then creates a component with CSS Module, then adds it to `/preview`. |
| `/spec` | Turns a short feature description into a spec file under `_spec/` and a new git branch. Aborts if working tree is dirty. |

## Feature workflow

- **Specs** live in `_spec/<feature-slug>.md`. Use `/spec` to generate them.
- **Plans** live in `_plans/<feature-slug>.md`. Use Plan mode to generate them from a spec.
- Template for new specs: `_spec/template.md`.

 ## Checking Documentation

 - **Important:** When implementing any lib/framework-specific features, ALWAYS check the appropriate lib/framework documentation using the Context7 MCP server before writing any code. 
