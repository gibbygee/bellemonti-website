---
layout: post
title: "You will regret snowflakes"
date: 2024-08-19
author: john garrish
excerpt: "Snowflaking products continues against all logic"
---
I keep encountering this phenomena and it baffles me. How can this possibly persist in this day and age. Even in the "on-prem" packaged era of software (late 90s - early 00') it was 'relatively' uncommon to see snowflakes among scaled vendors. But you see it enough and you wonder how it happens. Even in cloud, now, which is arguably worse because YOU, the vendor, pay the freight.

Customers don't care, really, whether you snowflake your solutions, or not. But they do notice, and care, that inevitably when the soot and grime accumulate in the engine, and you are unable to keep delivering at the fevered pace they've come to expect. Or, the pace that they see in the market. 

Snowflakes are sclerosis. I think most software teams know this, but nonetheless the practice persists.

Why?

My intuition is that the $$$ is so seductive that they can't resist. And like the recovering addict who tells themself - just this once - this is it - I wont make a habit of it... they end up making a habit of it.

Snowflakes for the uninitiated are unique, one-of-a-kind solutions that diverge from the standard product of the company. They are one-offs. Singletons.

Snowflakes ALWAYS increase complexity, increase maintenance costs, lengthen development cycles, and handbrake scalability. Company scalability that is. They will catch up with your company and I don't think I've seen a case where they didn't undermine the prosperity of the enterprise.  

How do you counter? What do you do?

Summon your courage, to start. It won't go the way you think it will go, trust me, and you'll be glad you had the temerity to stand up when you had the chance. 

In more practical terms, platforms are your friend. A lot of times the genesis of the snowflake is the customer that wants something unique, something unusual, something off-piste. Something that breaks the fundamental tenets of what you are building. A platform gives you a way to build toggles, to build alternatives in the form of configurations.

Think of it this way. There is a duality of software that good teams embrace. 

A product without a platform is a dead end. 

A platform without a product is a science project. 

You need to do both. A little of one, a little of the other. Even though it seems hard and costly to build a platform from the jump, it is probably the single largest value driver you have for your company. It seems like cost right now when you a staring down the barrel of the cash gun. But it doesn't have to be that way, it doesn't and shouldn't be an exercise in masterpiece building. It should be an exercise in balance. Think: yoga, not spring break in cancun.

Some concepts apply.

First one pays the freight. The first product, or first product in a series products is going to take incrementally longer. Because this product needs to pay some freight to get the contours of the platform in place. Such that the next feature or the next product can speed along and reuse the basics. Leverage is the name of the game.

Platform may need to leapfrog. As you gain experience, the team is going to identify places to advance the platform ahead of the products, and this isnt a bad thing. Its just a dangerous thing to get TOO far ahead. Stay tethered.

One bridge onto the island. Document all your platform enhancements on the roadmap, alongside the product features. Platform is really part of your product, in a way the most important part. Make sure they both align, there cant be two bridges onto two islands or you wont get the leverage. Remember - leverage is your friend. It makes your economic scale.

Never ever ever snowflake. You heard it here.

Resist the siren song. Resist with all your might. It is cyanide that takes like Diet Coke. Lose the customer if you have to. Get yourself fired if thats what it takes. Because what you are agreeing to is the heat death of your software company when you agree to a snowflake. Never ever ever do it.

// commentary

Per Gregg Machacz, from whom I have learned more about dev and agile processes than anyone else:  "if its part of your business, it will always be part of your business. It's a one-way ticket."
