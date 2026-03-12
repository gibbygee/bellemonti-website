---
layout: page
title: Dispatches
permalink: /dispatches/
---

<style>
  .reading-list {
    margin-top: 20px;
  }

  .reading-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6px 0;
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

  .reading-date {
    color: #7f8c8d;
    font-size: 14px;
    white-space: nowrap;
  }
</style>

{% if site.dispatches.size > 0 %}
  <div class="reading-list">
    {% assign sorted_readings = site.dispatches | sort: 'date' | reverse %}
    {% for reading in sorted_readings %}
      <div class="reading-item">
        <div class="reading-content">
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
