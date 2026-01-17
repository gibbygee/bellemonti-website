---
layout: reading
title: "I'm repeating myself - adding context for Claude Code"
date: 2026-01-17
author: john garrish
---

I realized that Claude Code is losing a little bit of context every time I open a new terminal. 

So, I asked... 

``` 
What can we add in the .claude folder that will make it easier for Claude to recognize and understand this project for future changes—so that when you start a new session, Claude has a way to understand quickly what's in the project?
```

## What Claude suggested

```
Claude Code looks for a CLAUDE.md file in the project root (or .claude/ folder) to understand project context. This file is automatically read by Claude Code at the start of each session.
```

## Benefits, according to Claude

``` 
Having a well-structured `CLAUDE.md` file means:

- Claude understands your project immediately at the start of each session
- No need to re-explain project structure or conventions
- Faster iteration on changes and new features
- Consistent understanding of how the project works
- This is especially valuable for projects like this Jekyll site where conventions around collections, layouts, and front matter are important to maintain.
```

We'll see!!

-J
