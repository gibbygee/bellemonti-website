---
layout: page
title: Writing
permalink: /blog/
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

{% if site.posts.size > 0 %}
  <div class="reading-list">
    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}
    {% for post in sorted_posts %}
      <div class="reading-item">
        <div class="reading-content">
          <div class="reading-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </div>
        </div>
        <div class="reading-date">
          <time>{{ post.date | date: "%b %d, %Y" }}</time>
        </div>
      </div>
    {% endfor %}
  </div>
{% else %}
  <p>No posts yet. Check back soon!</p>
{% endif %}
