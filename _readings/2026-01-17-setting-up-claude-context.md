---
layout: reading
title: "I'm repeating myself + code copy button"
date: 2026-01-17
author: john garrish
---

# I'm repeating myself Claude!

I realized that Claude Code is losing a little bit of context every time I open a new terminal. 

So, I asked... 

``` 
What can we add in the .claude folder that will make it easier for Claude to recognize and understand this project for future changes—so that when you start a new session, Claude has a way to understand quickly what's in the project?
```

### What Claude suggested

```
Claude Code looks for a CLAUDE.md file in the project root (or .claude/ folder) to understand project context. This file is automatically read by Claude Code at the start of each session.
```

### Benefits, according to Claude

``` 
Having a well-structured `CLAUDE.md` file means:

- Claude understands your project immediately at the start of each session
- No need to re-explain project structure or conventions
- Faster iteration on changes and new features
- Consistent understanding of how the project works
- This is especially valuable for projects like this Jekyll site where conventions around collections, layouts, and front matter are important to maintain.
```

We'll see!!

# Code copy button

Me:
```
is there a way to add in my markdown files a web  button for content and text that enables "Copy" - i see buttons that allow this on many sites - how do i do this
```

CC:
```
Yes, you can add copy buttons to code blocks or text sections. For a Jekyll site, the cleanest approach is adding JavaScript that automatically attaches copy buttons to code blocks. 
```

I just went with the easiest solution - add a standard button to a code block. Which I ALSO found out today that in markdown, a code block is formatted with bracketed or fenced ``` (aka "triple backticks).

```
Done. Copy buttons are now added to all code blocks. Here's how it works:                                             
Behavior:                                                 
- A "Copy" button appears in the top-right corner when hovering over any code block
- Clicking copies the code to clipboard
- Button changes to "Copied!" with teal background for 2 seconds as confirmation         
- Works with any fenced code block in markdown (triple backticks)
```

Happy Saturday

-J
