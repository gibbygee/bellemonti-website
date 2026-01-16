---
layout: post
title: "Financial physics"
date: 2024-10-29
author: john garrish
excerpt: "Your maintenance load doesn't just add up - it compounds. But unlike an investment strategy, instead of compound interest, it's compound complexity."
---

Here's what your CFO thinks software development looks like (a version of underpants gnomes):

BUILD FEATURE -> 
SELL FEATURE -> 
PROFIT!

Here's what actually happens:

BUILD FEATURE -> 
MAINTAIN FEATURE -> 
BUILD NEW FEATURE -> 
MAINTAIN BOTH FEATURES -> 
BUILD ANOTHER FEATURE -> 
MAINTAIN ALL THREE FEATURES -> 
...

Your maintenance load doesn't just add up - it compounds. But unlike an investment strategy, instead of compound interest, it's compound complexity.

Here is your dev team over time:

Year 1: 5 devs building new stuff

Year 2: 8 devs (6 building, 2 maintaining)

Year 3: 12 devs (8 building, 4 maintaining)

Year 4: 20 devs (10 building, 10 maintaining)

Year 5: 30 devs (12 building, 18 maintaining)

Intuitively or perhaps counter-intuitively, the ratio of "building" to "maintaining" flips. It has to. Because software is cumulative. 

This is why software companies that look wildly profitable on paper sometimes can't seem to ship anything new. Their dev team isn't slow or unskilled or unmotivated (I mean, maybe they are all those things too!) but mostly they are just underwater maintaining what's already there.

The financial implications are brutal:

Dev costs grow non-linearly

Support costs follow the same curve

QA needs explode (so your product doesn't explode)

Infrastructure costs compound

Technical documentation multiplies

And, sadly, pricing models probably assumed linear growth. Gah.

This is why enterprise software companies are always trying to move upmarket. It's survival math. When your costs grow geometrically, you need your revenue to do the same thing.

What to do?

Early lifecycle products:

Expect maintenance from DAY ONE - the minute you have code out in the wild, you need to support it - and typically your first customers are the most hard fought and the most dear - you need to keep them happy happy happy

Assume every feature costs 3x what you think it will cost - its not only the diffculty of building new things (who can predict) but also the maintenance burden - its 1x to build, 2x to maintain 

Start planning your "move upmarket" strategy before you need it

Mid-lifecycle / growth products:

Watch your maintenance-to-development ratio like a hawk - if you dont track it, you need to track it

Build maintenance cost into your ROI calculations - this is especially important for budgeting and team planning in dev

Start segmenting customers by maintenance cost - you might need to fire a few

Figure out what features are costing you the most to maintain - and whether its worth it

Late cycle and maturity:

Accept that most of your dev budget is now fixed cost

Look for automation opportunities in maintenance - AI is a gift 

Consider maintenance cost in every product decision

Find ways to turn maintenance into money - this is partly why enterprise tool companies keep launching developer tools - you can also charge for support levels

The sad truth about software economics is that your cost structure will always try to kill you. Not because you're doing anything wrong persay - but because that's how "software weight" works. Every feature adds weight. That weight requires support. Support requires people. People require money.

This is why so many enterprise software companies end up looking like they're standing still despite massive engineering teams. They're not standing still - they're just carrying a lot of weight.
