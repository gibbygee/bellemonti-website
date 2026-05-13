---
layout: home
title: Home
permalink: /
redirect_from:
  - /about/
---

<section class="welcome-section">

<h2 class="welcome-handwritten" aria-label="Less process. More judgment.">
  <img src="/assets/images/less-process.png" alt="" class="welcome-line welcome-line-1">
  <img src="/assets/images/more-judgment.png" alt="" class="welcome-line welcome-line-2">
</h2>

</section>

<div class="about-hero">
  <div class="about-photo-col">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/assets/images/headshot.jpg" alt="John Garrish">
        </div>
        <div class="flip-card-back">
          <img src="/assets/images/headshot-bike.jpg" alt="John Garrish on bike">
        </div>
      </div>
    </div>
    {% include social-icons.html %}
    <a class="about-ai-btn" href="{{ '/binder/getting-started-with-ai/' | relative_url }}">Getting Started with AI</a>
  </div>
  <div class="about-text">
    {% capture about_content %}{% include about/about.md %}{% endcapture %}
    {{ about_content | markdownify }}
    <p class="about-name"><img src="/assets/images/signature-j.png" alt="John Garrish signature" class="about-signature"> John Garrish</p>
    <p class="about-email"><a href="mailto:contact@bellemonti.com">contact@bellemonti.com</a></p>
  </div>
</div>
