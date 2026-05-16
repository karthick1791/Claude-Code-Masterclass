# Plan: Authentication Forms (Login & Signup)

## Context

The `/login` and `/signup` pages currently exist as stubs with only a heading. This plan implements the full authentication forms as specified in `_spec/authentication-forms.md` — email + password fields, a show/hide password toggle, a "Confirm password" field on signup, console-logging on submit, and a link to switch between the two pages.

---

## Approach

Create a single shared `AuthForm` component (in `components/AuthForm/`) that accepts a `variant: "login" | "signup"` prop. Both pages share identical email/password/toggle logic; the variant controls the title, button label, confirm-password visibility, and the cross-link. This avoids duplicating toggle state and submit logic.

`lucide-react` is already installed (used by `Navbar` and the home page), so `Eye` / `EyeOff` icons from that package will be used for the password toggle — no new dependencies needed.

---

## Files

### Create

| File | Purpose |
|------|---------|
| `components/AuthForm/AuthForm.tsx` | "use client" component — form logic, state, toggle |
| `components/AuthForm/AuthForm.module.css` | Scoped styles for the form |
| `components/AuthForm/index.ts` | Barrel export |
| `tests/components/AuthForm.test.tsx` | Vitest + RTL tests |

### Modify

| File | Change |
|------|--------|
| `app/(public)/login/page.tsx` | Replace stub with `<AuthForm variant="login" />` |
| `app/(public)/signup/page.tsx` | Replace stub with `<AuthForm variant="signup" />` |

---

## Component Design: `AuthForm`

**Props:** `variant: "login" | "signup"`

**State (useState):**
- `showPassword: boolean` — toggles password field type
- `showConfirmPassword: boolean` — signup only, toggles confirm field type

**Form values:** Read from `event.currentTarget` on submit (uncontrolled inputs) — avoids re-renders on every keystroke.

**Submit handler:**
- Calls `event.preventDefault()`
- Reads `email`, `password` (and `confirmPassword` for signup) from the form
- Logs them via `console.log`

**Variant-driven differences:**

| | `"login"` | `"signup"` |
|--|-----------|------------|
| Title | "Log in to Your Account" | "Sign Up for an Account" |
| Button | "Login" | "Sign Up" |
| Confirm password | hidden | visible (with own toggle) |
| Switch link | "Don't have an account? Sign up" → `/signup` | "Already have an account? Log in" → `/login` |

**Icons:** `Eye` / `EyeOff` from `lucide-react` (already installed).

**CSS:** Reuse existing globals (`.center-content`, `.page-content`, `.form-title`, `.btn`). Component CSS module adds form-specific layout (field rows, input+icon wrapper, link styles).

---

## Tests (`tests/components/AuthForm.test.tsx`)

- Login variant renders email field, password field, and "Login" button
- Signup variant renders email field, password field, "Confirm Password" field, and "Sign Up" button
- Password field is `type="password"` by default; clicking the toggle makes it `type="text"`; clicking again restores `type="password"`
- Confirm password field follows the same toggle behaviour (signup only)
- Submitting the Login form calls `console.log` with `{ email, password }`
- Submitting the Signup form calls `console.log` with `{ email, password, confirmPassword }`
- Login variant contains a link to `/signup`
- Signup variant contains a link to `/login`

---

## Verification

1. `npm test` — all AuthForm tests pass
2. `npm run dev` — visit `http://localhost:3000/login`, fill fields, submit → check browser console
3. Visit `http://localhost:3000/signup`, check confirm password field appears, submit → check console
4. Toggle password visibility on both pages
5. Click the switch link on each page to confirm navigation
6. `npm run build` — no TypeScript or lint errors
