---
layout: page
title: Dispatches
permalink: /dispatches/
---

{% if site.dispatches.size > 0 %}
  <div class="reading-list">
    {% assign sorted_readings = site.dispatches | sort: 'date' | reverse %}
    {% for reading in sorted_readings %}
      <div class="reading-item">
        <div class="reading-item-content">
          <div class="reading-title">
            <a href="{{ reading.url | relative_url }}">{{ reading.title }}</a>
          </div>
        </div>
        <div class="reading-date">
          <time>{{ reading.date | date: "%b %d, %Y" }}</time>
        </div>
      </div>
    {% endfor %}
  </div>
{% else %}
  <p>No reading posts yet. Check back soon!</p>
{% endif %}
