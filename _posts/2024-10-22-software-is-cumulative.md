---
layout: post
title: "Software is cumulative"
date: 2024-10-22
author: john garrish
excerpt: "Software is not manufacturing"
---
Watching Elon Musk talk about manufacturing is a guilty pleasure. Not because of amazing technical feats (to wit: Mechazilla) but rather, how he articulates the differences between physical and digital products:

> The hard part isn't designing the thing. The hard part is building it ten thousand times without going bankrupt.

But software? Software has a different physics entirely.

Manufacturing has this brutal but clarifying constraint - you have to figure out how to BUILD the thing at scale. Software? We just keep building. And building. And building. Each feature layering on top of the last one like geological strata.

It's not that we're making bad decisions (okay, sometimes we are, but that's not the point). It's that software is CUMULATIVE. Every feature you ship doesn't just exist in isolation - it exists in relationship to every other feature you've ever shipped.

Year 1: "Let's add search!"

Year 2: "Let's add filters to search!"

Year 3: "Let's add saved searches!"

Year 4: "Let's add sharing for saved searches!"

The surface area of your product grows. Not because you're doing anything wrong - but because that's just how software works. Each layer building on the last. Each feature creating new possibilities for the next feature.

Think about how a product might progress:

Started as a simple tool

Added some basic workflows

Added automation for those workflows

Added exceptions to that automation

Added management of those exceptions

Added reporting on all of the above

Added automation of that reporting

Added exceptions to THAT automation

The pattern is not necessarily feature bloat. It's feature accumulation. Each layer makes perfect sense. Each addition is logical. But the breadth of it all keeps growing.

Your codebase becomes like a city built over centuries:

The old parts still work (mostly)

The new parts connect to the old parts

Everything depends on everything else

And it all needs maintenance

This is what makes enterprise software such a different beast than physical products. A car manufacturer can say "that's the 2023 model, here's the 2024." They can plan for backward compatibility if they want, or not bother. Software? Everything you've ever built is still there, still running, still needs to work with everything else, until you decide to remove it.

What does this mean for PMs?

Early lifecycle products: You're not just building features - you're laying down the first layers of sediment. Your job is not only to drive use, sale and adoption to keep the product line (and maybe the company afloat) but also to build foundations that can support the weight of success.

Mid-lifecycle products - often the growth phase: This is where it gets real. Your product isn't just growing - it's growing geometrically. Each new feature interacts with every existing feature. Your surface area isn't just expanding - it's exploding.

Late cycle and maturity: You're managing weight. Your product has gravity. Everything you do has to work within that gravity well.

Mostly this problem isn't about "good decisions versus bad decisions." It's about understanding the cumulative nature of software. Each feature you add isn't just ONE feature. It's a feature that lives in relationship to every other feature.

The real skill in product management isn't knowing what to build in this moment. It's understanding how what you build today shapes what you can build tomorrow.
