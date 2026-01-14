# How to Add Blog Posts

This folder contains all your blog posts. Adding a new post is easy!

## Quick Start: Add a Post on GitHub

1. Go to: https://github.com/gibbygee/bellemonti-website/tree/main/_posts
2. Click **"Add file"** → **"Create new file"**
3. Name your file: `YYYY-MM-DD-your-post-title.md`
   - Example: `2026-01-15-my-first-post.md`
4. Add the content (see template below)
5. Click **"Commit changes"**
6. Your post will be live in 1-2 minutes!

## Post Template

Copy and paste this template for every new post:

```markdown
---
layout: post
title: "Your Post Title Here"
date: 2026-01-15
author: Your Name
excerpt: "A brief 1-2 sentence summary that appears on the blog listing page."
---

Write your blog post content here using Markdown.

## You Can Use Headings

Like this!

### Subheadings Too

- Bullet points work
- Just like this
- Super easy

**Bold text** and *italic text* are supported.

[Links work too](https://example.com)

You can even add code:

```
code block here
```

Images work too:
![Alt text](/bellemonti-website/assets/images/your-image.png)
```

## File Naming Rules

**IMPORTANT:** Your filename MUST follow this format:
- `YYYY-MM-DD-title.md`
- Use dashes instead of spaces
- Must end in `.md`

**Good examples:**
- `2026-01-15-industry-trends.md`
- `2026-02-20-case-study-success.md`
- `2026-03-10-five-tips-for-growth.md`

**Bad examples:**
- ❌ `my post.md` (no date, has spaces)
- ❌ `2026-1-15-post.md` (month/day must be 2 digits)
- ❌ `post.txt` (wrong file extension)

## Front Matter Fields

The stuff between the `---` lines is called "front matter". Here's what each field does:

- **layout:** Always use `post`
- **title:** Your post title (use quotes if it has special characters)
- **date:** YYYY-MM-DD format
- **author:** Optional - your name or "Bellemonti Team"
- **excerpt:** Optional - shown on blog listing page (1-2 sentences)

## Markdown Tips

- Use `##` for main headings
- Use `###` for subheadings
- Create lists with `-` or `1.`
- Make links with `[text](url)`
- Add images with `![alt text](image-url)`
- **Bold** with `**text**`
- *Italic* with `*text*`

## Publishing Workflow

1. **Draft locally** (optional): Edit in `_posts/` folder and test with `bundle exec jekyll serve`
2. **Or draft on GitHub**: Create file directly on github.com
3. **Commit**: Changes go live automatically in 1-2 minutes
4. **View**: Visit https://gibbygee.github.io/bellemonti-website/blog.html

## Need Help?

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [Jekyll Posts Documentation](https://jekyllrb.com/docs/posts/)

Happy blogging! 🎉
