---
layout: page
title: Dispatches
permalink: /blog/
---

<style>
  .page-header {
    padding-top: 8px;
  }

  .page-header h1 {
    font-size: 28px;
    padding-top: 5px;
  }

  .dispatch-list {
    margin-top: 20px;
  }

  .dispatch-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 0;
    border-bottom: 1px solid #e5e5e5;
  }

  .dispatch-item:first-child {
    border-top: 1px solid #e5e5e5;
  }

  .dispatch-item:hover {
    background-color: #f8f8f8;
  }

  .dispatch-content {
    flex: 1;
    margin-right: 20px;
  }

  .dispatch-title {
    margin-bottom: 4px;
  }

  .dispatch-title a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
  }

  .dispatch-title a:hover {
    color: #3498db;
    text-decoration: underline;
  }

  .dispatch-excerpt {
    color: #7f8c8d;
    font-size: 13px;
    line-height: 1.4;
    margin: 0;
  }

  .dispatch-date {
    color: #7f8c8d;
    font-size: 14px;
    white-space: nowrap;
  }
</style>

{% if site.posts.size > 0 %}
  <div class="dispatch-list">
    {% for post in site.posts %}
      <div class="dispatch-item">
        <div class="dispatch-content">
          <div class="dispatch-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </div>
          {% if post.excerpt %}
            <p class="dispatch-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          {% endif %}
        </div>
        <div class="dispatch-date">
          <time>{{ post.date | date: "%b %d, %Y" }}</time>
        </div>
      </div>
    {% endfor %}
  </div>
{% else %}
  <p>No posts yet. Check back soon for updates!</p>
{% endif %}
