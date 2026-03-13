---
layout: reading
title: "AI Product Managers where art thou? Enter, The Slop"
date: 2026-01-26
author: john garrish
---

Aakash Gupta wrote a [provocative piece](https://aakashgupta.medium.com/what-is-an-ai-product-manager-and-why-theyre-making-300k-while-regular-pms-get-laid-off-2c0ba0811008) about AI product managers making $300k while regular PMs get laid off. The core argument: AI PMs understand how to work with AI systems to build products, while traditional PMs are stuck in old workflows.

I. See. This. Every. Day. It's so so hard to get PMs to adopt the new tools and it's somewhat mystifying to me. PMs are universally overworked and strapped for time — you'd think they would be clamoring for this. But it is nigh onto impossible to get adoption of new tools. It's wild.

[Product School](https://productschool.com) founder Carlos Gonzalez de Villaumbrosia writes:

> Type #1 (traditional PM) is fading fast. In 2026 and beyond, there’s little room for a PM who isn’t leveraging AI in some form. Kind of like a photographer refusing to go digital. ... Let me be clear: if you’re a traditional PM who hasn’t leaned into AI, your days in the field may be numbered. 
[https://productschool.com/blog/artificial-intelligence/guide-ai-product-manager](https://productschool.com/blog/artificial-intelligence/guide-ai-product-manager)

It's not getting better. Karri Saarinen, CEO of [Linear](https://x.com/linear), [pointed this out](https://x.com/karrisaarinen/status/2007534281011155419?s=20) about design and UX:

> "As these systems improve, this middle becomes thinner. Less time is spent manually translating intent into implementation."

### The Slop!

The problem isn't just adoption resistance, though. There's a deeper issue with how AI is being used, or maybe this is all of a piece.

As [staysaasy put it](https://x.com/staysaasy/status/2011911516455416068?s=20): "Folks I cannot express just how disrespectful it is to try to get someone to do you a favor by dropping an AI slop document in their inbox. How to lose friends and piss off people."

![staysaasy tweet about AI slop](/assets/images/staysaasy-tweet-ai-slop.png)

### I use AI all day, but I'm determined not to look like I do

So as much as I'm advocating for it, using it like a consumer is a bad look. Here's the "skill" I added to cursor, for this very reason.

- No emdashes
- No emojis
- Sentence case for headers - Dont Capitalize Every First Letter

If you have other good ones, let me know. I'm pondering maybe puting misspelings in as well, just as a clue.

```
---
name: format-markdown
description: Formats markdown documents to improve readability while preserving all content. Removes emdashes and emojis, applies sentence case to headers, and ensures consistent formatting. Use when formatting markdown files, cleaning up documentation, or when the user asks to format or clean markdown content.
---

# Format markdown

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
```



Stay safe out there folks.

