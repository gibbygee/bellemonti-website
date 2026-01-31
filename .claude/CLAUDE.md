# CLAUDE.md

Claude Code guidelines for this workspace.

All conventions and behavioral guidelines live in `AGENTS.md` at the project root. That file is the single source of truth for any AI agent working in this repo.

Project context is in this file.

Read `AGENTS.md` before making any changes.

---

# Bellemonti Website

Jekyll-based website for Bellemonti, a product management consulting company. Hosted on GitHub Pages at bellemonti.com.

## Quick Commands

```bash
bundle exec jekyll serve    # Start local server at http://127.0.0.1:4000
bundle install              # Install dependencies
```

**Slash Commands:**
- `/d` - Create new reading post (Dispatch) in `_readings/` directory with today's date

To add more slash commands, create `.md` files in `.cursor/commands/`

## Project Structure

```
_config.yml          # Jekyll config (title, url, collections, plugins)
_data/navigation.yml # Menu items (visible: true/false controls display)
_layouts/            # Templates: default, home, page, post, reading
_includes/           # Components: head, header, navigation, footer
_pages/              # Static pages (home, blog, reading, about, contact, services)
_posts/              # Blog posts (nav: "Writing", URL: /blog/)
_readings/           # Reading posts (nav: "Dispatches", URL: /reading/)
_services/           # Services collection
_sass/               # SCSS partials (see Styling below)
.cursor/commands/    # Slash commands for Cursor IDE (e.g., d.md for /d)
assets/css/main.scss # Main stylesheet (imports all partials)
assets/js/main.js    # JS: header scroll, smooth anchors, fade animations, copy buttons
assets/images/       # Logo files and images
llms.txt             # Project description for AI tools
```

## Collections

| Collection | URL Pattern | Layout |
|------------|-------------|--------|
| pages | `/:slug/` | page |
| posts | `/blog/:slug/` | post |
| readings | `/reading/:slug/` | reading |
| services | `/services/:slug/` | page |

## Content Patterns

**Blog post (`_posts/`) - displayed under "Writing" nav:**
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
author: john garrish
excerpt: "Brief description"
---
```

**Reading post (`_readings/`) - displayed under "Dispatches" nav:**
```yaml
---
layout: reading
title: "Title"
date: YYYY-MM-DD
author: john garrish
---
```

**Important:** Use `/d` slash command to create new reading posts with proper format.

## Styling

SCSS files in `_sass/`:
- `_variables.scss` - Colors, typography, spacing, breakpoints
- `_base.scss` - Reset and base element styles
- `_typography.scss` - Headings and text
- `_header.scss` - Fixed header with scroll shadow
- `_navigation.scss` - Nav menu with underline animation
- `_home.scss` - Home page layout with sticky sidebar
- `_footer.scss` - Footer styles
- `_animations.scss` - Fade-in and slide animations
- `_grid.scss` - Grid utilities (grid-2, grid-3, grid-4)
- `_utilities.scss` - Spacing, buttons, cards, utility classes

**Key colors (in _variables.scss):**
- Ocean blue: `rgb(135, 177, 222)` - Primary accent
- Teal: `rgb(16, 179, 149)` - CTAs, buttons
- Text: `#333333` / `#666666`

**Breakpoints:** 768px (mobile), 1024px (tablet), 1280px (desktop)

## Navigation

Edit `_data/navigation.yml` to modify menu. Set `visible: false` to hide items without deleting them.

## Key Files to Know

- `_layouts/home.html` - Home page with dynamic "Latest Dispatches" section (pulls 3 most recent from `_readings/`)
- `_includes/navigation.html` - Renders menu with active state detection
- `assets/js/main.js` - Intersection Observer for fade animations, header scroll effect, copy buttons for code blocks
- `_config.yml` - Site settings, collection definitions, plugin list
- `_data/navigation.yml` - Navigation menu configuration (visible: true/false)
- `.cursor/commands/` - Custom slash commands (e.g., `/d` for new reading posts)

## Plugins & Dependencies

**Jekyll Plugins:**
- jekyll-feed (RSS)
- jekyll-seo-tag (meta tags)
- jekyll-sitemap (XML sitemap)

**Ruby Gems (in Gemfile):**
- jekyll ~> 4.4
- webrick ~> 1.8 (required for Jekyll 4+)

## Features

**Code Copy Buttons:**
- Automatically added to all code blocks (fenced with triple backticks)
- Appears on hover in top-right corner
- Shows "Copied!" confirmation with teal background
- Implemented in `assets/js/main.js` and styled in `_sass/_utilities.scss`

**Scroll Effects:**
- Header shadow appears when scrolling past 50px
- Smooth scroll for anchor links with 127px offset for fixed header

**Animations:**
- Fade-in effects using Intersection Observer
- Elements with `.fade-in-visible` class animate when scrolling into view

## Notes

- Container max-width: 735px
- Header height: 103px (CSS), but use 127px offset for smooth scroll calculations
- Sass deprecation warnings are cosmetic (uses @import, will need migration to @use eventually)
- Site hosted on GitHub Pages at bellemonti.com (CNAME file)
- `llms.txt` provides project description for AI tools