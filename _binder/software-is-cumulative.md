---
title: "Software is cumulative"
date: 2024-10-22
redirect_from:
  - /2024/10/22/software-is-cumulative/
  - /dispatches/software-is-cumulative/
---

Watching Elon Musk talk about manufacturing is a guilty pleasure. Not because of amazing technical feats (to wit: Mechazilla) but rather, how he articulates the differences between physical and digital products:

> The hard part isn't designing the thing. The hard part is building it ten thousand times without going bankrupt.
>
> — Elon Musk, via [Rakesh Maali on LinkedIn](https://www.linkedin.com/posts/rakesh-maali_elon-musk-manufacturing-is-10x-harder-than-activity-7393079171410812929-AiuU)

But software? Software has a different physics entirely.

Manufacturing has this brutal but clarifying constraint - you have to figure out how to BUILD the thing at scale. Software? We just keep building. And building. And building. Each feature layering on top of the last one like geological strata.

It's not that we're making bad decisions (okay, sometimes we are, but that's not the point). It's that software is CUMULATIVE. Every feature you ship doesn't just exist in isolation - it exists in relationship to every other feature you've ever shipped.

- Month 1: "Let's add search!"
- Month 2: "Let's add filters to search!"
- Month 3: "Let's add saved searches!"
- Month 4: "Let's add sharing for saved searches!"

The surface area of your product grows. Not because you're doing anything wrong - but because that's just how software works. Each layer building on the last. Each feature creating new possibilities for the next feature.

Think about how a product might progress:

- Started as a simple tool
- Added some basic workflows
- Added automation for those workflows
- Added exceptions to that automation
- Added management of those exceptions
- Added reporting on all of the above
- Added automation of that reporting
- Added exceptions to THAT automation

The pattern is not necessarily feature bloat. It's feature accumulation. Each layer makes perfect sense, at the time. Each addition is logical, at the time. But the breadth of it all keeps growing.

Your codebase becomes like a city built over centuries:

- The old parts still work (mostly)
- The new parts connect to the old parts
- Everything depends on everything else
- And it all needs maintenance

Doug Burgum, then North Dakota's governor, made the parallel point about literal cities at the 2024 National Governors Association winter meeting:

<div class="binder-quote">
  <p>"The cost of running a city is the linear feet of sewer and water and sidewalk and roads. And then when you get more of that you need to have more fire stations. You've got school districts that independently decide to build greenfield elementary schools out on the edge. So you drive all this linear cost, the cost of that infrastructure..."</p>
  <cite>Doug Burgum, 2024 NGA Winter Meeting — via <a href="https://www.strongtowns.org/journal/2024-3-6-who-says-we-need-walkable-cities-a-former-republican-presidential-candidate">Strong Towns</a></cite>
</div>

Same physics. Every linear foot of sewer is like a feature you shipped. Every greenfield elementary school is like a new microservice. 

This is what makes enterprise software such a different beast than physical products (but I guess similar to cities??). A car manufacturer can say "that's the 2023 model, here's the 2024 model." They can plan for backward compatibility if they want, or not bother. 

But in software? Everything you've ever built is still there, still running, still needs to work with everything else, until you decide to remove it.

## What does this mean for PMs?

**Early lifecycle products:** You're not just building features - you're laying down the first layers of sediment. Your job is not only to drive use, sale and adoption to keep the product line (and maybe the company afloat) but also to build foundations that can support the weight of success.

**Mid-lifecycle products - often the growth phase:** This is where it gets real. Your product isn't just growing - it's growing geometrically. Each new feature interacts with every existing feature. Your surface area isn't just expanding - it's exploding.

**Late cycle and maturity:** You're managing weight. Your product has gravity. Everything you do has to work within that gravity well.

Mostly this problem isn't about "good decisions versus bad decisions." It's about understanding the cumulative nature of software. Each feature you add isn't just ONE feature. It's a feature that lives in relationship to every other feature.

The real skill in product management isn't knowing what to build in this moment. It's understanding how what you build today shapes what you can build tomorrow.
