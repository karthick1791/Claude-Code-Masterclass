---
description: Create a git commit message by analyzing git diffs
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

## Your task:

Analyze above staged git changes and create a commit message. Use present tense and explain "why" something has changed, not just "what" has changed.

## Run these commands:

'''bash
git status
git diff --staged
'''

## Commit message format:

```
<type>(<scope>): <short summary>

<optional body — explain motivation, not mechanics>
```

**Types:** `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`

**Rules:**
- Summary line: 50 chars or fewer, no period at the end
- Body: wrap at 72 chars, explain *why* not *what*
- Scope is optional; use the affected module, route, or component name

## Output:
1. Show summary of changes currently changed
2. Ask for confirmation before committing

DO NOT auto-commit - wait for user approval, only commit if the user says so.
