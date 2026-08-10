---
title: "GitHub - multica-ai/andrej-karpathy-skills: A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls. · GitHub"
url: 'https://github.com/multica-ai/andrej-karpathy-skills'
source: 'Discord Web Clipper'
clipped_at: '2026-06-27 08:10:17'
---

[Skip to content](https://github.com/multica-ai/andrej-karpathy-skills#start-of-content)

You signed in with another tab or window. [Reload](https://github.com/multica-ai/andrej-karpathy-skills)
to refresh your session. You signed out in another tab or window. [Reload](https://github.com/multica-ai/andrej-karpathy-skills)
to refresh your session. You switched accounts on another tab or window. [Reload](https://github.com/multica-ai/andrej-karpathy-skills)
to refresh your session. Dismiss alert

### Uh oh!

There was an error while loading. [Please reload this page](https://github.com/multica-ai/andrej-karpathy-skills)
.

[multica-ai](https://github.com/multica-ai) / **[andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)** Public

- [Notifications](https://github.com/login?return_to=%2Fmultica-ai%2Fandrej-karpathy-skills)
  You must be signed in to change notification settings
- [Fork 18.8k](https://github.com/login?return_to=%2Fmultica-ai%2Fandrej-karpathy-skills)
- [Star 183k](https://github.com/login?return_to=%2Fmultica-ai%2Fandrej-karpathy-skills)

 [](https://github.com/multica-ai/andrej-karpathy-skills)

 main

[Branches](https://github.com/multica-ai/andrej-karpathy-skills/branches)
[Tags](https://github.com/multica-ai/andrej-karpathy-skills/tags)

[](https://github.com/multica-ai/andrej-karpathy-skills/branches)
[](https://github.com/multica-ai/andrej-karpathy-skills/tags)

Go to file

Code

Open more actions menu

## Folders and files

| Name                                                                                                                                                                                                                                         |     | Name                                                                                                                                                                | Last commit message | Last commit date |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------------- |
| Latest commit<br>-------------<br><br>History<br>-------<br><br>[28 Commits](https://github.com/multica-ai/andrej-karpathy-skills/commits/main/)<br><br>[](https://github.com/multica-ai/andrej-karpathy-skills/commits/main/)<br>28 Commits |     |                                                                                                                                                                     |
| [.claude-plugin](https://github.com/multica-ai/andrej-karpathy-skills/tree/main/.claude-plugin '.claude-plugin')                                                                                                                             |     | [.claude-plugin](https://github.com/multica-ai/andrej-karpathy-skills/tree/main/.claude-plugin '.claude-plugin')                                                    |                     |                  |
| [.cursor/rules](https://github.com/multica-ai/andrej-karpathy-skills/tree/main/.cursor/rules 'This path skips through empty directories')                                                                                                    |     | [.cursor/rules](https://github.com/multica-ai/andrej-karpathy-skills/tree/main/.cursor/rules 'This path skips through empty directories')                           |                     |                  |
| [skills/karpathy-guidelines](https://github.com/multica-ai/andrej-karpathy-skills/tree/main/skills/karpathy-guidelines 'This path skips through empty directories')                                                                          |     | [skills/karpathy-guidelines](https://github.com/multica-ai/andrej-karpathy-skills/tree/main/skills/karpathy-guidelines 'This path skips through empty directories') |                     |                  |
| [CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md 'CLAUDE.md')                                                                                                                                            |     | [CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md 'CLAUDE.md')                                                                   |                     |                  |
| [CURSOR.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CURSOR.md 'CURSOR.md')                                                                                                                                            |     | [CURSOR.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CURSOR.md 'CURSOR.md')                                                                   |                     |                  |
| [EXAMPLES.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/EXAMPLES.md 'EXAMPLES.md')                                                                                                                                      |     | [EXAMPLES.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/EXAMPLES.md 'EXAMPLES.md')                                                             |                     |                  |
| [README.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.md 'README.md')                                                                                                                                            |     | [README.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.md 'README.md')                                                                   |                     |                  |
| [README.zh.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.zh.md 'README.zh.md')                                                                                                                                   |     | [README.zh.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.zh.md 'README.zh.md')                                                          |                     |                  |
| View all files                                                                                                                                                                                                                               |     |                                                                                                                                                                     |

## Repository files navigation

# Karpathy-Inspired Claude Code Guidelines

[](https://github.com/multica-ai/andrej-karpathy-skills#karpathy-inspired-claude-code-guidelines)

> Check out my new project [Multica](https://github.com/multica-ai/multica)
> — an open-source platform for running and managing coding agents with reusable skills.
>
> Follow me on X: [https://x.com/jiayuan_jy](https://x.com/jiayuan_jy)

A single `CLAUDE.md` file to improve Claude Code behavior, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876)
on LLM coding pitfalls.

English | [简体中文](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/README.zh.md)

## The Problems

[](https://github.com/multica-ai/andrej-karpathy-skills#the-problems)

From Andrej's post:

> "The models make wrong assumptions on your behalf and just run along with them without checking. They don't manage their confusion, don't seek clarifications, don't surface inconsistencies, don't present tradeoffs, don't push back when they should."

> "They really like to overcomplicate code and APIs, bloat abstractions, don't clean up dead code... implement a bloated construction over 1000 lines when 100 would do."

> "They still sometimes change/remove comments and code they don't sufficiently understand as side effects, even if orthogonal to the task."

## The Solution

[](https://github.com/multica-ai/andrej-karpathy-skills#the-solution)

Four principles in one file that directly address these issues:

| Principle                 | Addresses                                                 |
| ------------------------- | --------------------------------------------------------- |
| **Think Before Coding**   | Wrong assumptions, hidden confusion, missing tradeoffs    |
| **Simplicity First**      | Overcomplication, bloated abstractions                    |
| **Surgical Changes**      | Orthogonal edits, touching code you shouldn't             |
| **Goal-Driven Execution** | Leverage through tests-first, verifiable success criteria |

## The Four Principles in Detail

[](https://github.com/multica-ai/andrej-karpathy-skills#the-four-principles-in-detail)

### 1\. Think Before Coding

[](https://github.com/multica-ai/andrej-karpathy-skills#1-think-before-coding)

**Don't assume. Don't hide confusion. Surface tradeoffs.**

LLMs often pick an interpretation silently and run with it. This principle forces explicit reasoning:

- **State assumptions explicitly** — If uncertain, ask rather than guess
- **Present multiple interpretations** — Don't pick silently when ambiguity exists
- **Push back when warranted** — If a simpler approach exists, say so
- **Stop when confused** — Name what's unclear and ask for clarification

### 2\. Simplicity First

[](https://github.com/multica-ai/andrej-karpathy-skills#2-simplicity-first)

**Minimum code that solves the problem. Nothing speculative.**

Combat the tendency toward overengineering:

- No features beyond what was asked
- No abstractions for single-use code
- No "flexibility" or "configurability" that wasn't requested
- No error handling for impossible scenarios
- If 200 lines could be 50, rewrite it

**The test:** Would a senior engineer say this is overcomplicated? If yes, simplify.

### 3\. Surgical Changes

[](https://github.com/multica-ai/andrej-karpathy-skills#3-surgical-changes)

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting
- Don't refactor things that aren't broken
- Match existing style, even if you'd do it differently
- If you notice unrelated dead code, mention it — don't delete it

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused
- Don't remove pre-existing dead code unless asked

**The test:** Every changed line should trace directly to the user's request.

### 4\. Goal-Driven Execution

[](https://github.com/multica-ai/andrej-karpathy-skills#4-goal-driven-execution)

**Define success criteria. Loop until verified.**

Transform imperative tasks into verifiable goals:

| Instead of...    | Transform to...                                       |
| ---------------- | ----------------------------------------------------- |
| "Add validation" | "Write tests for invalid inputs, then make them pass" |
| "Fix the bug"    | "Write a test that reproduces it, then make it pass"  |
| "Refactor X"     | "Ensure tests pass before and after"                  |

For multi-step tasks, state a brief plan:

    1. [Step] → verify: [check]
    2. [Step] → verify: [check]
    3. [Step] → verify: [check]

Strong success criteria let the LLM loop independently. Weak criteria ("make it work") require constant clarification.

## Install

[](https://github.com/multica-ai/andrej-karpathy-skills#install)

**Option A: Claude Code Plugin (recommended)**

From within Claude Code, first add the marketplace:

    /plugin marketplace add forrestchang/andrej-karpathy-skills

Then install the plugin:

    /plugin install andrej-karpathy-skills@karpathy-skills

This installs the guidelines as a Claude Code plugin, making the skill available across all your projects.

**Option B: CLAUDE.md (per-project)**

New project:

```shell
curl -o CLAUDE.md https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md
```

Existing project (append):

```shell
echo "" >> CLAUDE.md
curl https://raw.githubusercontent.com/forrestchang/andrej-karpathy-skills/main/CLAUDE.md >> CLAUDE.md
```

## Using with Cursor

[](https://github.com/multica-ai/andrej-karpathy-skills#using-with-cursor)

This repository includes a committed Cursor project rule ([`.cursor/rules/karpathy-guidelines.mdc`](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/.cursor/rules/karpathy-guidelines.mdc)
) so the same guidelines apply when you open the project in Cursor. See **[CURSOR.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CURSOR.md)
** for setup, using the rule in other projects, and how this relates to Claude Code.

## Key Insight

[](https://github.com/multica-ai/andrej-karpathy-skills#key-insight)

From Andrej:

> "LLMs are exceptionally good at looping until they meet specific goals... Don't tell it what to do, give it success criteria and watch it go."

The "Goal-Driven Execution" principle captures this: transform imperative instructions into declarative goals with verification loops.

## How to Know It's Working

[](https://github.com/multica-ai/andrej-karpathy-skills#how-to-know-its-working)

These guidelines are working if you see:

- **Fewer unnecessary changes in diffs** — Only requested changes appear
- **Fewer rewrites due to overcomplication** — Code is simple the first time
- **Clarifying questions come before implementation** — Not after mistakes
- **Clean, minimal PRs** — No drive-by refactoring or "improvements"

## Customization

[](https://github.com/multica-ai/andrej-karpathy-skills#customization)

These guidelines are designed to be merged with project-specific instructions. Add them to your existing `CLAUDE.md` or create a new one.

For project-specific rules, add sections like:

```md
## Project-Specific Guidelines

- Use TypeScript strict mode
- All API endpoints must have tests
- Follow the existing error handling patterns in `src/utils/errors.ts`
```

## Tradeoff Note

[](https://github.com/multica-ai/andrej-karpathy-skills#tradeoff-note)

These guidelines bias toward **caution over speed**. For trivial tasks (simple typo fixes, obvious one-liners), use judgment — not every change needs the full rigor.

The goal is reducing costly mistakes on non-trivial work, not slowing down simple tasks.

## License

[](https://github.com/multica-ai/andrej-karpathy-skills#license)

MIT

## About

A single CLAUDE.md file to improve Claude Code behavior, derived from Andrej Karpathy's observations on LLM coding pitfalls.

### Resources

[Readme](https://github.com/multica-ai/andrej-karpathy-skills#readme-ov-file)

### Uh oh!

There was an error while loading. [Please reload this page](https://github.com/multica-ai/andrej-karpathy-skills)
.

[Activity](https://github.com/multica-ai/andrej-karpathy-skills/activity)

[Custom properties](https://github.com/multica-ai/andrej-karpathy-skills/custom-properties)

### Stars

[**183k** stars](https://github.com/multica-ai/andrej-karpathy-skills/stargazers)

### Watchers

[**1k** watching](https://github.com/multica-ai/andrej-karpathy-skills/watchers)

### Forks

[**18.8k** forks](https://github.com/multica-ai/andrej-karpathy-skills/forks)

[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fmultica-ai%2Fandrej-karpathy-skills&report=multica-ai+%28user%29)

[Releases](https://github.com/multica-ai/andrej-karpathy-skills/releases)

---

No releases published

[Packages 0](https://github.com/orgs/multica-ai/packages?repo_name=andrej-karpathy-skills)

---

No packages published

[Contributors 8](https://github.com/multica-ai/andrej-karpathy-skills/graphs/contributors)

---

- [![@forrestchang](https://avatars.githubusercontent.com/u/7857126?s=64&v=4)](https://github.com/forrestchang)
- [![@claude](https://avatars.githubusercontent.com/u/81847?s=64&v=4)](https://github.com/claude)
- [![@back1ply](https://avatars.githubusercontent.com/u/45536170?s=64&v=4)](https://github.com/back1ply)
- [![@herobrine19](https://avatars.githubusercontent.com/u/45513138?s=64&v=4)](https://github.com/herobrine19)
- [![@szkocot](https://avatars.githubusercontent.com/u/478549?s=64&v=4)](https://github.com/szkocot)
- [![@azakharko](https://avatars.githubusercontent.com/u/1836036?s=64&v=4)](https://github.com/azakharko)
- [![@TomBener](https://avatars.githubusercontent.com/u/49151155?s=64&v=4)](https://github.com/TomBener)
- [![@HOLYKEYZ](https://avatars.githubusercontent.com/u/192471872?s=64&v=4)](https://github.com/HOLYKEYZ)

You can’t perform that action at this time.
