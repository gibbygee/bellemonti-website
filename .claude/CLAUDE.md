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

**Starting the local server (read this before doing it):**
- Run the `jekyll serve` command with `dangerouslyDisableSandbox: true` and `run_in_background: true`. The sandbox blocks `bind(2)` with `Errno::EPERM` and the server stays in the foreground, so both flags are required.
- If port 4001 is already in use, find the PID with `lsof -i :4001` and kill it with `kill -9 <pid>` (also needs sandbox disabled — sending signals to processes outside the sandbox is blocked).
- After starting, smoke-test with `curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:4001/` before reporting "the server is up." Sandbox blocks network too, so this also needs sandbox disabled.

**Slash Commands:**
- `/new-dispatch` - Create new reading post (Dispatch) in `_dispatches/` directory with today's date

To add more slash commands, create `.md` files in `.cursor/commands/`

## Project Structure

```
_config.yml          # Jekyll config (title, url, collections, plugins)
_data/navigation.yml # Menu items (visible: true/false controls display)
_layouts/            # Templates: default, home, page, post, reading, login
_includes/           # Components: head, header, navigation, footer, about/ (about copy is included into the home page)
_pages/              # Static pages (home, blog, reading, contact, login)
_posts/              # Blog posts (nav: "Writing", URL: /blog/)
_dispatches/         # Dispatches (nav: "Dispatches", URL: /dispatches/)
_binder/             # Binder entries (long-form notes, URL: /binder/:slug/)
_data/binder.yml     # Binder section metadata + ordered entry slug lists (TOC)
_sass/               # SCSS partials (see Styling below)
.cursor/commands/    # Slash commands for Cursor IDE (e.g., d.md for /d)
assets/css/main.scss # Main stylesheet (imports all partials)
assets/js/main.js    # JS: header scroll, smooth anchors, fade animations, copy buttons
assets/images/       # Logo files and images
assets/fonts/        # Self-hosted woff2 (Newsreader, Inter) — required because CSP blocks external fonts
```

## Collections

| Collection | URL Pattern | Layout |
|------------|-------------|--------|
| pages | `/:slug/` | page |
| posts | `/blog/:slug/` | post |
| dispatches | `/dispatches/:slug/` | reading |
| binder | `/binder/:slug/` | binder |

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

**Inline screenshots (not avatars):**
Plain `![alt](/path.png)` on its own line gets the 140×140 floated-avatar treatment from `_sass/_utilities.scss`. For full-width inline screenshots, append `{: .screenshot}`:
```markdown
![Alt text](/assets/images/some-screenshot.png){: .screenshot}
```
The `.screenshot` opt-out in `_sass/_utilities.scss` overrides the float, sets `width: 100%`, and restores normal paragraph spacing.

**Sign-off convention:**
End dispatches with `J.` on its own line, separated from the preceding text by a blank line, so it renders as its own `<p>`:
```markdown
Be good.

J.
```
The site previously had JS in `assets/js/main.js` that swapped a trailing `J.` paragraph for a handwritten-signature image (`/assets/images/signature-j-small.png`). That was removed — sign-offs are plain text now. The small signature asset is unused but kept in `assets/images/` in case the swap is reintroduced.

**Author byline is suppressed on dispatch pages:**
`_layouts/reading.html` no longer renders `page.author`. The front-matter `author: john garrish` field is still written (used by `/d`/`/new-dispatch`) but it does not appear in the rendered header — only the date does. If you want the author back, restore the `{% if page.author %} • {{ page.author }} {% endif %}` block above the `<h1>` in `_layouts/reading.html`.

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
- `_utilities.scss`, `_about-hero.scss` - Utility partials
- `_binder.scss`, `_article.scss`, `_dispatch-list.scss`, `_coming-soon.scss` - Page/layout-specific partials

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

- `_layouts/home.html` - Home page wrapper. Renders `{{ content }}` from `_pages/home.md` then a "recent dispatches" list (5 most recent) below the main content.
- `_pages/home.md` - Home page content: handwritten "Less process. More judgment." headline, then the about hero (flip-card photo + LinkedIn/X follow links + "Getting Started with AI" button + about copy + signature + email). Body copy is pulled from `_includes/about/about.md`.
- `_includes/about/about.md` - The "Market-based product management..." heading and bullets. Edit this file to change the home page body copy. (Still imported by `_pages/home.md`; the standalone `/about/` page was removed.)
- `_binder/getting-started-with-ai.md` - "Getting Started with AI" binder entry. Wraps its content in `.neo-hero` (photo-right hero with helmet headshot) — the markdown body lives inside `<div class="neo-text" markdown="1">` so kramdown processes it despite the HTML wrapper. Surfaced as the first binder tile.
- `_layouts/binder.html` - Has three render branches: cover (`/binder/`), single-page entry (when section has `direct_url`), and standard entry-with-TOC.
- `_includes/header.html` - Two-row header: `.header-top` (logo) and `.header-bottom` (nav left, Login button right, both on the same baseline). Login href is `{{ site.aardvark_url }}/login`.
- `_includes/navigation.html` - Renders menu with active state detection.
- `_includes/social-icons.html` - LinkedIn + X follow icons (inline SVG). Used on the home page. Add another icon by dropping a `<li>` with its own SVG.
- `_includes/article-nav.html` - Prev/next nav for posts and dispatches. Shared by `_layouts/post.html` and `_layouts/reading.html`.
- `assets/js/main.js` - Intersection Observer for fade animations, header scroll effect, copy buttons for code blocks.
- `_config.yml` - Site settings, collection definitions, plugin list. Custom keys: `aardvark_url` (login/forgot-password redirect target — change here, not in markup).
- `_data/navigation.yml` - Navigation menu configuration (visible: true/false).
- `.cursor/commands/` - Custom slash commands (e.g., `/d` for new reading posts).

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

**Home page composition:**
- `_pages/home.md` contains the handwritten headline (`.welcome-section`) followed by the about hero (`.about-hero` flex row with `.about-photo-col` and `.about-text`). The body copy inside `.about-text` is pulled from `_includes/about/about.md` via Liquid `{% include %}`.
- Under the LinkedIn/X icons sits a `.matrix-toggle.about-ai-btn` anchor that links to `/binder/getting-started-with-ai/`. (Earlier iterations toggled an in-place "matrix mode" via JS `toggleMatrix()`; that JS still exists in `assets/js/main.js` but the home page no longer wires it up. The `body.matrix-active` CSS in `_sass/_base.scss` is now reduced to hiding `.site-header` / `.home-dispatches` and theming `.neo-title`.)
- `_layouts/home.html` is a thin wrapper: it renders `{{ content }}` and then a `<section class="home-dispatches">` list of the 5 most recent dispatches below the main content. There is no sidebar.
- The about hero uses `flex-direction: row-reverse` so the photo sits on the right; mobile collapses to column. Flip-card sizing lives in `_sass/_about-hero.scss` (180px desktop / 140px tablet / 120px small mobile).
- The follow icons under the photo are a `<ul class="follow-links about-follow-links">`. The `.about-follow-links` rule MUST stay after `.follow-links { margin: 0 }` in `_sass/_home.scss` so its `margin-top` override wins on source order.

**Binder layout (`_layouts/binder.html`):**
- Branches by URL/front matter: cover (`/binder/`), single-page entry (section has `direct_url`), or theme/entry with TOC.
- Cover tiles (`.binder-theme-card`) are fully clickable via a stretched `::before` overlay on the h2 anchor (`.stretched-link`). The whole card responds to hover (background lift + accent-color title). Don't wrap the card in `<a>` — keep the stretched-link pattern so the description text remains selectable.
- A section in `_data/binder.yml` with `direct_url: /some/path/` makes its cover tile link straight to that URL and skips the section-TOC view. Used for one-page sections like Getting Started with AI. The matching `_binder/<slug>.md` entry must also exist; the layout's "single-page" branch fires when `current_section.direct_url` is truthy and renders inside `.binder-single > .binder-content.binder-content-wide` (no sidebar).
- The page-level `<h1>Binder</h1>` header and per-page `← Back to Binder` link have been removed across all branches — navigation back to the cover lives in the top site nav only.

**Binder data model (read before adding/editing an entry):**
- `_data/binder.yml` is the table of contents. Each section has `slug`, `title`, `description`, optional `narrative`, optional `direct_url`, and `entries:` — an ordered list of binder slugs (strings, not objects).
- `_binder/<slug>.md` is the content. The entry's title lives in its own front matter `title:` field — never duplicated in yml.
- To add an entry: create `_binder/<new-slug>.md` with a `title:` front matter field, then add `- new-slug` to the right section's `entries:` list in `_data/binder.yml`. Position in the list controls TOC order.
- To rename an entry: edit `title:` in the entry file. The yml only stores the slug (= filename), so it's untouched.
- To move an entry between sections: cut the slug from one section's `entries:` and paste into another.
- The layout resolves entry titles in the TOC via `site.binder | where: 'slug', entry_slug | first`. If you misspell a slug in yml, the entry silently disappears from the TOC (no build error). Verify after edits.
- The five section pages (`_pages/binder-*.md`) are 4-line permalink shims that set `theme_slug:` matching a yml section. Add a new shim when you add a new section to yml.

**About page is gone:**
- `_pages/about.md` and `_layouts/about.html` were removed; the About entry was deleted from `_data/navigation.yml`. The About content now lives on the home page.
- `_includes/about/about.md` is still used by the home page. Do not delete it.
- If you need to support inbound `/about/` links from external sources (LinkedIn, email signatures), add `redirect_from: /about/` to the front matter of `_pages/home.md` (the `jekyll-redirect-from` plugin is already enabled).

**Header layout:**
- `_includes/header.html` has two rows: `.header-top` (logo only) and `.header-bottom` (`.site-nav` left, `.login-btn` right). Both are `display: flex; justify-content: space-between`. Styles are in `_sass/_header.scss`.