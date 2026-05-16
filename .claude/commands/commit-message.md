---
description: Create a git commit message by analyzing git diffs
allowed-tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

<!-- created by Karthick -->

## Input:

- JIRA ID argument: $ARGUMENTS (use this as a prefix in the commit message if provided)

## Context:

- current git status: !`git status`
- current git diff: !`git diff --staged`

## Your task:

Analyze above staged git changes and create a commit message. Use present tense and explain "why" something has changed, not just "what" has changed.

If a JIRA ID was provided in `$ARGUMENTS`, prepend it to the summary line.

## Commit message format:

Without JIRA ID:
```
<type>(<scope>): <short summary>

<optional body — explain motivation, not mechanics>
```

With JIRA ID:
```
<JIRA-ID> <type>(<scope>): <short summary>

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
