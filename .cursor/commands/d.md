Create a new READING post (dispatch) in the `_readings/` directory with the following specifications:

1. Filename format: `YYYY-MM-DD-slug.md` where:
   - YYYY-MM-DD is today's date
   - slug is the title converted to lowercase with hyphens (remove special characters)

2. Front matter format:
```yaml
---
layout: reading
title: "[TITLE PROVIDED BY USER]"
date: YYYY-MM-DD
author: john garrish
---
```

3. Leave the content area empty after the front matter

Example: If user provides title "Product Strategy Matters", create:
- File: `_readings/2026-01-19-product-strategy-matters.md`
- With proper front matter using the exact title provided
