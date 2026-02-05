# AGENTS.md

Universal context for AI agents working in this workspace.
Use for writing tasks or for coding tasks. 
This file is read automatically by agents (Cursor, Claude Code, etc.) on every turn.

IMPORTANT: Prefer retrieval-led reasoning over assumptions for any task.
Read the referenced files before generating content or making changes.

---

# Format instructions for writing - written output - human readable content

## Instructions

When formatting a markdown document:

1. **Preserve all content** - Do not remove or summarize any content, only reformat
2. **Do not use emdashes** - Replace emdashes with regular dashes
3. **Do not use emojis** - Remove all emojis from the document
4. **Apply sentence case to headers** - Capitalize only the first letter of the sentence in headers

## Formatting rules

### Headers
- Use sentence case (capitalize only the first letter)
- Example: "Introduction" not "INTRODUCTION" or "Introduction To The Topic"

### Dashes
- Use regular dashes (-) not emdashes (—)
- Replace any emdashes found in the document

### Emojis
- Remove all emojis from the document
- Preserve the text content around emojis

### Content preservation
- Keep all original content intact
- Only change formatting, not substance
- Maintain document structure and hierarchy

### External links
- All external links must open in new browser tabs
- Use HTML format: `<a href="[URL]" target="_blank" rel="noopener noreferrer">link text</a>`
- Never use markdown format `[text](url)` for external links
- Always include both `target="_blank"` and `rel="noopener noreferrer"` attributes

**X/Twitter links - special formatting:**
- Display X (Twitter) links with inline SVG icon only, not full URL text
- Place icon immediately after quoted text (same line, no line break)
- Use this SVG code:
  ```html
  <a href="[URL]" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true" style="height: 1em; width: 1em; vertical-align: text-bottom; fill: currentColor;"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></a>
  ```


---

# Coding instructions - for code output - machine readable content

## Behavioral guidelines

Bias toward caution over speed. For trivial tasks, use judgment.

1. **Think before coding** - State assumptions. If uncertain, ask. If multiple interpretations exist, present them. Push back when a simpler approach exists.
2. **Simplicity first** - Minimum writing and coding that solves the problem. No speculative features, abstractions for single-use code, or error handling for impossible scenarios.
3. **Surgical changes** - Touch only what you must. Match existing style. Don't improve adjacent code or files. Every changed line traces to the user's request.
4. **Goal-driven execution** - Define success criteria before implementing. For multi-step tasks, state a brief plan with verification steps.

---

## Reasoning Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## When paths or naming change

Update references in all of these:
- `AGENTS.md` (this file)
- `.claude/CLAUDE.md`
- `.cursor/rules/` 
- `.cursor/commands/`
- `README.md`

---
updated 2/1/2026