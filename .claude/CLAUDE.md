# CLAUDE.md

Claude Code guidelines for this workspace.

All conventions and behavioral guidelines live in `AGENTS.md` at the project root. That file is the single source of truth for any AI agent working in this repo.

Project context is in this file.

Read `AGENTS.md` before making any changes.

---

# Bellemonti Website

Jekyll-based website for Bellemonti, a product management consulting company. Hosted on GitHub Pages at bellemonti.com.

**Deployment: GitHub Pages only.** Do NOT deploy this site to Vercel. Never run `vercel`, `vercel deploy`, or `vercel link` in this repo. There is no `vercel.json`, and `.vercel/` should not exist — if you see it, delete it. Production deploys happen automatically when commits land on `main`.

## Quick Commands

```bash
bundle exec jekyll serve --port 4001    # Always use port 4001 for this project
bundle install                          # Install dependencies
```

**Slash Commands:**
- `/new-dispatch` - Create new reading post (Dispatch) in `_dispatches/` directory with today's date

**Important:** Whenever a new post (`_posts/`) or dispatch (`_dispatches/`) is added, update `llms.txt` in the project root to include the new entry with its title, URL, and date.

To add more slash commands, create `.md` files in `.cursor/commands/`

## Project Structure

```
_config.yml          # Jekyll config (title, url, collections, plugins)
_data/navigation.yml # Menu items (visible: true/false controls display)
_layouts/            # Templates: default, home, page, post, reading
_includes/           # Components: head, header, navigation, footer, about/
_pages/              # Static pages (home, blog, reading, about, contact)
_posts/              # Blog posts (nav: "Writing", URL: /blog/)
_dispatches/         # Dispatches (nav: "Dispatches", URL: /dispatches/)
_sass/               # SCSS partials (see Styling below)
.cursor/commands/    # Slash commands for Cursor IDE (e.g., d.md for /d)
assets/css/main.scss # Main stylesheet (imports all partials)
assets/js/main.js    # JS: header scroll, smooth anchors, fade animations, copy buttons
assets/images/       # Logo files and images
assets/fonts/        # Self-hosted woff2 (Newsreader, Inter) — required because CSP blocks external fonts
llms.txt             # Project description for AI tools
```

## Collections

| Collection | URL Pattern | Layout |
|------------|-------------|--------|
| pages | `/:slug/` | page |
| posts | `/blog/:slug/` | post |
| dispatches | `/dispatches/:slug/` | reading |

Services collection was removed. Don't re-introduce references in nav, config, or content.

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

**Reading post (`_dispatches/`) - displayed under "Dispatches" nav:**
```yaml
---
layout: reading
title: "Title"
date: YYYY-MM-DD
author: john garrish
---
```

**CRITICAL — Front matter breaks easily when editing in Cursor:**
- The `---` fences are YAML delimiters, NOT markdown horizontal rules. Editors may auto-format them.
- Common breakage: blank lines inserted inside the block, `layout:` gets a `##` prefix, closing `---` gets removed.
- **After any manual edit**, always verify the front matter is exactly 6 lines: opening `---`, four YAML fields, closing `---`, with NO blank lines and NO markdown formatting inside.
- If front matter breaks, the dispatch won't render and the home page will show raw text or nothing.

**Important:** Use `/d` slash command to create new reading posts with proper format.

**Dispatch section pattern (standard markdown, no Liquid includes):**
When a dispatch links to someone's post/tweet, open the section with a markdown image-link. The avatar floats right and the surrounding text wraps around it automatically. Commentary should be regular paragraphs, NOT bullet lists.
```markdown
[![Display Name](/assets/images/name.jpg)](PROFILE_URL)

[Article Title](POST_URL)

> Blockquote text
>
> — [Author Name](ATTRIBUTION_URL)

Commentary as regular paragraphs separated by blank lines.

More commentary in a separate paragraph.
```
- Avatar images go in `assets/images/`.
- Use `##` for section headers (e.g. `## Your Zen for Monday`). Section headers also auto-clear any floated avatar from the previous section, so no manual `clear` is needed.
- All links must be markdown `[text](url)`, never HTML `<a>` tags. External links are opened in a new tab automatically by `assets/js/main.js`.
- For pull-quote attributions inside a blockquote, use the `> — [Name](url)` line — plain markdown, no kramdown attributes.

**How floated avatars work (so you can debug if it looks off):**
- `_sass/_utilities.scss` has a rule that targets any `<p>` whose only child is an image-link (`p:has(> a:only-child > img:only-child)`) and collapses its margin/line-height to zero. That makes the avatar's top edge align with the first line of the next paragraph.
- The image itself is set to `float: right; width: 140px; height: 140px; object-fit: cover;`.
- `.reading-content h2, h3, h4 { clear: both }` ends the float at each section break.
- Do not add `target="_blank"` to dispatch links by hand — the JS does it for any external href at runtime.


## Styling

SCSS files in `_sass/` (import order in `assets/css/main.scss`):
- `_fonts.scss` - `@font-face` for Newsreader (display) and Inter (wordmark). Imported first.
- `_variables.scss` - Colors, typography, spacing, breakpoints, brand tokens
- `_base.scss` - Reset and base element styles; includes `.matrix-active` dark mode hook
- `_typography.scss` - Headings (h1/h2 use `$font-display` / Newsreader)
- `_header.scss` - Dark charcoal header, masked logo, wordmark in Inter
- `_navigation.scss` - Nav with animated underline, muted gray link color
- `_home.scss` - Home grid, welcome section, dispatch card
- `_footer.scss` - Footer styles
- `_animations.scss` - Fade-in and slide animations
- `_grid.scss`, `_utilities.scss`, `_flip-card.scss` - Utility partials

**Brand tokens (`_sass/_variables.scss`) — single source of truth:**
- `$color-accent` / `$color-accent-dark` - Site accent color. Currently vivid orange (`#F97316` / `#C2410C`). Change these two values to re-theme the whole site (nav underline, dispatch eyebrow, dispatch date, hover states).
- `$font-display` - Newsreader (self-hosted serif). Used on h1/h2 and dispatch titles.
- Wordmark uses `"Inter"` directly (self-hosted variable font) — not via `$font-display`.
- Header background: hardcoded `#1F2937` in `_header.scss`.
- Dispatch card background: hardcoded `#F7F7F5` in `_home.scss`.

**Breakpoints:** 768px (mobile), 1024px (tablet), 1280px (desktop)

## Navigation

Edit `_data/navigation.yml` to modify menu. Set `visible: false` to hide items without deleting them.

## Key Files to Know

- `_layouts/home.html` - Home page with dynamic "Latest Dispatches" section (pulls 3 most recent from `_dispatches/`)
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

- Container max-width: 960px (`$container-width`)
- Sass deprecation warnings are cosmetic (uses @import, will need migration to @use eventually)
- Site hosted on GitHub Pages at bellemonti.com (CNAME file)
- `llms.txt` provides project description for AI tools

## Gotchas (non-obvious, read before changing)

**Strict Content-Security-Policy in `_includes/head.html`:**
- `default-src 'self'` means no external fonts, scripts, or styles.
- Google Fonts CDN is blocked. All fonts must be self-hosted in `assets/fonts/` and declared in `_sass/_fonts.scss`.
- If adding a new typeface: download woff2, place in `assets/fonts/`, add `@font-face` to `_sass/_fonts.scss`.

**Logo flash fix (do not revert):**
- The header logo is rendered as an empty `<span class="site-logo-mark">` with `mask: url(logo-small.png)` and `background-color: white` in `_sass/_header.scss`.
- It was previously an `<img>` with `filter: brightness(0) invert(1)`, which flashed blue during page navigation before CSS applied. The mask approach paints the mask region white from first paint — no flash.
- The PNG is still the source file (1920×1080); only how it's rendered changed. Do not switch back to `<img>` + filter.

**Wordmark optical offset:**
- `.site-title` (Inter, 56px) has `transform: translateY(-13px)` in `_sass/_header.scss` to sit optically on the logo-mark baseline. Flex `align-items: baseline` alone lands the text too low because the mask span has no true baseline. Don't remove the translate without re-testing alignment.

**Home page intro copy:**
- Lives in `_pages/home.md`, wrapped in `<section class="welcome-section" markdown="1">`. The `markdown="1"` attribute is required for kramdown to process markdown inside an HTML block.
- The layout (`_layouts/home.html`) renders `{{ content }}` above a hairline divider and the latest-dispatch card. Anything added to `home.md` lands in the intro slot.
- The "Recent Dispatches" sidebar list uses `offset:1` so it intentionally skips whatever is featured in the main column.