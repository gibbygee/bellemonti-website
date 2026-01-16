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
    padding-top: 5px;
  }

  .reading-list {
    margin-top: 20px;
  }

  .reading-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .reading-item:first-child {
    border-top: 1px solid #e5e5e5;
  }

  .reading-item:hover {
    background-color: #f8f8f8;
  }

  .reading-content {
    flex: 1;
    margin-right: 20px;
  }

  .reading-title {
    margin-bottom: 4px;
  }

  .reading-title a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
  }

  .reading-title a:hover {
    color: #3498db;
    text-decoration: underline;
  }

  .reading-excerpt {
    color: #7f8c8d;
    font-size: 13px;
    line-height: 1.4;
    margin: 0;
  }

  .reading-date {
    color: #7f8c8d;
    font-size: 14px;
    white-space: nowrap;
  }
</style>

{% if site.readings.size > 0 %}
  <div class="reading-list">
    {% assign sorted_readings = site.readings | sort: 'date' | reverse %}
    {% for reading in sorted_readings %}
      <div class="reading-item">
        <div class="reading-content">
          <div class="reading-title">
            <a href="{{ reading.url | relative_url }}">{{ reading.title }}</a>
          </div>
          {% if reading.excerpt %}
            <p class="reading-excerpt">{{ reading.excerpt | strip_html | truncatewords: 20 }}</p>
          {% endif %}
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
