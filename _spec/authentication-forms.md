# Spec for Authentication Forms

branch: claude/feature/authentication-forms

## Summary

Add Login and Signup forms to the `/login` and `/signup` public pages. Each form collects an email and password, includes a toggle to show/hide the password, and submits by logging the form data to the console. A navigation link allows users to switch between the two forms without leaving the auth flow.

## Functional Requirements

- The `/login` page renders a Login form with:
  - An email input field (type email)
  - A password input field (type password) with a show/hide toggle icon
  - A "Login" submit button
  - A link to switch to the Signup page (e.g. "Don't have an account? Sign up")
- The `/signup` page renders a Signup form with:
  - An email input field (type email)
  - A password input field (type password) with a show/hide toggle icon
  - A "Sign Up" submit button
  - A link to switch to the Login page (e.g. "Already have an account? Log in")
- Clicking the show/hide icon toggles the password field between masked and plain text
- On form submission, the email and password values are logged to the browser console (no API call)
- Default browser form validation is suppressed; the form handles its own submit event
- Switching between forms navigates to the other page without losing the current URL context

## Figma Design Reference (only if referenced)

N/A

## Possible Edge cases

- User submits the form with empty fields — the submit handler should still fire and log (empty strings acceptable for now)
- User toggles password visibility multiple times in succession
- User navigates directly to `/login` or `/signup` while already "logged in" (no redirect logic needed for now)
- Long email or password values should not break the form layout

## Open Questions

- Should the two forms eventually live on separate pages or as toggled states within a single page/component? Separate pages
- Will there be a "Confirm password" field on the Signup form in a future iteration? Yes, let's add
- What icon library (if any) should be used for the show/hide password toggle? No specific library

## Testing Guidelines

Create a test file(s) in the `./tests` folder for the new feature and create meaningful tests for the following cases, without going too heavy:

- Login form renders email field, password field, and submit button
- Signup form renders email field, password field, and submit button
- Password field is masked by default; clicking the toggle reveals plain text and clicking again re-masks it
- Submitting the Login form calls `console.log` with the entered email and password
- Submitting the Signup form calls `console.log` with the entered email and password
- Login page contains a link to the Signup page
- Signup page contains a link to the Login page
