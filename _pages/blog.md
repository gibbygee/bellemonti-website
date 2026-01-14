---
layout: page
title: Dispatches
permalink: /blog/
---

<style>
  .page-header h1 {
    font-size: 28px;
  }
</style>

{% if site.posts.size > 0 %}
  <div class="post-list">
    {% for post in site.posts %}
      <article class="card mb-lg hover-lift">
        <h2 style="margin-bottom: 8px;">
          <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.title }}</a>
        </h2>
        <p class="text-secondary text-small">
          <time>{{ post.date | date: "%B %d, %Y" }}</time>
        </p>
        <p style="margin: 16px 0;">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
        <a href="{{ post.url | relative_url }}" class="btn btn-outline">Read More →</a>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p>No posts yet. Check back soon for updates!</p>
{% endif %}
