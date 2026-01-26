---
layout: reading
title: "From Hard Fork - How to ...free website w/ Claude Code and GitHub Pages"
date: 2026-01-16
author: john garrish
---

I got the idea for this approach from the <a href="https://www.nytimes.com/2026/01/09/podcasts/hardfork-grok-crisis-claude-code.html" target="_blank" rel="noopener noreferrer">Hard Fork podcast episode</a> where Kevin Roose and Casey Newton discuss building websites with Claude Code. Both of their sites were created this way:
- <a href="https://kevinroose.com" target="_blank" rel="noopener noreferrer">kevinroose.com</a>
- <a href="https://cnewton.org" target="_blank" rel="noopener noreferrer">cnewton.org</a>

And yes, this very site (<a href="https://bellemonti.com" target="_blank" rel="noopener noreferrer">bellemonti.com</a>) was built the same way! (more on this below)

---

## Background

Kevin Roose describes replacing his Squarespace website (which cost $192/year) with a free website hosted on GitHub, built using Claude Code in about 20 minutes. I moved mine from Wix (which was great) but I saved about $350 / year.

## Steps

### 1. Set Up Claude Code
- Install <a href="https://claude.com/product/claude-code" target="_blank" rel="noopener noreferrer">Claude Code</a> on your computer - <a href="https://docs.claude.com/en/docs/claude-code/quickstart" target="_blank" rel="noopener noreferrer">Download and installation instructions</a>
- Claude Code is an autonomous coding agent that puts the Claude chatbot inside your terminal window
- It can take instructions in plain English and execute tasks autonomously

### 2. Provide Your Requirements
Kevin's approach:
- Give Claude Code your old website as a reference
- Tell it to make it look like other sites you like
- Provide specific instructions about what you want

Example prompt structure:
- "I have an old website at [URL]. Can you recreate it but make it look like [reference sites]?"
- Or: "Build me a personal website with [features]"

### 3. Let Claude Code Build It
- Claude Code will handle the orchestration and execution
- No need for copying and pasting code
- It will check in with you but can work autonomously
- Kevin's website took about 20 minutes to build

### 4. Host on GitHub Pages
- Once built, host the website on GitHub (free)
- This replaces paid hosting services like Squarespace
- GitHub Pages can host static websites for free

### 5. Cancel Your Old Hosting!!


## Key features you can add

Based on Casey's experience building <a href="https://cnewton.org" target="_blank" rel="noopener noreferrer">cnewton.org</a>:

- **Responsive design** - Works on mobile and desktop automatically
- **Dynamic widgets** - Pull in recent content (articles, podcast episodes, social media posts)
- **Email subscription forms** - Add signup functionality
- **Social media feeds** - Display recent posts from Bluesky, Twitter, etc.
- **Animations and effects** - Mouse-over effects, interactive elements
- **Easter eggs** - Fun hidden features (like Kevin's GeoCities mode button)

## Tips and considerations

### What works well
- Building static websites
- Creating personal websites and portfolios
- Adding features incrementally (just ask Claude Code to add them)
- Iterating quickly - Casey built his site in about an hour on day one

### Potential challenges
- Claude Code may overengineer things - you might need to walk it back from complexity
- Some websites may be hostile to AI agents (like The New York Times)
- Browser automation can be slow - Claude has to take screenshots and analyze them
- Learn what tasks are "AI-shaped" vs. what you should do manually

### Best practices
- Start simple and add features incrementally
- Be specific about what you want
- Don't be afraid to ask for changes or refinements
- Test the website thoroughly before canceling your old hosting

## Time investment

- Kevin: ~20 minutes for a basic personal website
- Casey: ~1 hour for a fully-featured personal website with multiple widgets and integrations

## How I use it for Bellemonti.com

The Bellemonti.com website (this site) is built using Claude Code using Jekyll and GitHub Pages, which means all content is managed through markdown files.

I can edit any page, blog post, or reading by simply opening the markdown file and making changes, including any rudimentary formatting which is really all I need. 

Markdown is particularly well-suited for product managers because it focuses on content, not either hyper-marketing-formatting or quasi-readable-dev-formatting. It is readable in plain text.

The best, though - markdown is the native language of AI coding assistants, making it easy to get help with documentation, specs, and content. It works everywhere, and by everywhere I mean in Cursor. Unlike MSFT Word which has so much junk formatting embedded in it.

---

## See the code / use the code

<a href="https://github.com/gibbygee/bellemonti-website" target="_blank" rel="noopener noreferrer">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" width="50" style="vertical-align: middle; margin-right: 10px;">
  Go here if you want to see how I did it!
</a>