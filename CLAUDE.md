# Bellemonti Website

Jekyll-based website for Bellemonti, a product management consulting company. Hosted on GitHub Pages at bellemonti.com.

## Quick Commands

```bash
bundle exec jekyll serve    # Start local server at http://127.0.0.1:4000
bundle install              # Install dependencies
```

## Project Structure

```
_config.yml          # Jekyll config (title, url, collections, plugins)
_data/navigation.yml # Menu items (visible: true/false controls display)
_layouts/            # Templates: default, home, page, post, reading
_includes/           # Components: head, header, navigation, footer
_pages/              # Static pages (home, blog, reading, about, contact, services)
_posts/              # Blog posts ("Writing")
_readings/           # Dispatches collection
_services/           # Services collection
_sass/               # SCSS partials (see Styling below)
assets/css/main.scss # Main stylesheet (imports all partials)
assets/js/main.js    # JS: header scroll effect, smooth anchors, fade animations
assets/images/       # Logo files and images
```

## Collections

| Collection | URL Pattern | Layout |
|------------|-------------|--------|
| pages | `/:slug/` | page |
| posts | `/blog/:slug/` | post |
| readings | `/reading/:slug/` | reading |
| services | `/services/:slug/` | page |

## Content Patterns

**Blog post front matter - referred to as Writing on the site:**
```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
author: john garrish
excerpt: "Brief description"
---
```

**Dispatches item front matter:**
```yaml
---
layout: reading
title: "Title"
date: YYYY-MM-DD
---
```

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

- `_layouts/home.html` - Home page with dynamic "Latest Dispatches" section
- `_includes/navigation.html` - Renders menu with active state detection
- `assets/js/main.js` - Intersection Observer for fade animations, header scroll effect
- `_config.yml` - Site settings, collection definitions, plugin list

## Plugins

- jekyll-feed (RSS)
- jekyll-seo-tag (meta tags)
- jekyll-sitemap (XML sitemap)

## Notes

- Container max-width: 735px
- Header height: 103px (account for in scroll offsets)
- Sass deprecation warnings are cosmetic (uses @import, will need migration to @use eventually)
