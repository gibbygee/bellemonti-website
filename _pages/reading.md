---
layout: page
title: What I'm Reading
permalink: /reading/
---

<style>
  .page-header {
    padding-top: 8px;
  }

  .page-header h1 {
    font-size: 28px;
    padding-top: 5px;
  }
</style>

{% if site.readings.size > 0 %}
  <div class="reading-list">
    {% assign sorted_readings = site.readings | sort: 'date' | reverse %}
    {% for reading in sorted_readings %}
      <article class="card mb-sm hover-lift" style="padding: 12px 20px;">
        <h2 style="margin-bottom: 4px; font-size: 20px;">
          <a href="{{ reading.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ reading.title }}</a>
        </h2>
        <p class="text-secondary text-small" style="margin-bottom: 6px;">
          <time>{{ reading.date | date: "%B %d, %Y" }}</time>
        </p>
        <p style="margin: 4px 0 8px 0;">{{ reading.excerpt | strip_html | truncatewords: 30 }}</p>
        <a href="{{ reading.url | relative_url }}" class="btn btn-outline">Read More →</a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No reading posts yet. Check back soon for updates!</p>
{% endif %}
