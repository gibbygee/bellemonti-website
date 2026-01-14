---
layout: home
title: Home
permalink: /
---

# Welcome to Bellemonti

### Market-based product management for enterprise software teams

**We build great PMs!**

Follow: [X](https://x.com/SteelAardvark)

contact at bellemonti.com

---

## What I'm Reading

{% if site.readings.size > 0 %}
  {% assign recent_readings = site.readings | sort: 'date' | reverse | limit: 3 %}
  <ul style="list-style: none; padding-left: 0;">
    {% for reading in recent_readings %}
      <li style="margin-bottom: 12px;">
        <a href="{{ reading.url | relative_url }}">{{ reading.title }}</a>
        <span class="text-secondary text-small"> • {{ reading.date | date: "%B %d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
  <p><a href="{{ '/reading/' | relative_url }}" class="btn btn-outline">View All →</a></p>
{% else %}
  <p>No reading posts yet. Check back soon!</p>
{% endif %}
