---
layout: gym-default
title: "Live Event Recordings"
permalink: /events/recordings/
baseurl:
---

<div markdown = "0"> <!-- This is a hack to force the html to render -->
{% assign sorted = (site.events | sort: 'date') | reverse %}
{% for item in sorted %}
  {% if item.video && item.video_ID %}

    <h2>{{ item.event_title | strip_html }}</h2>
    <small>{{ item.event_date  | date: '%B, %Y' }}</small>
    <!-- <p>{{ item.short_description}}</p> -->

    <div class="event-video">
      <script src="https://fast.wistia.com/embed/medias/{{ item.video_ID }}.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_embed wistia_async_{{ item.video_ID }}" style="width: 100%;">&nbsp;</div>
    </div>

    <hr>
  {% endif %}

{% endfor %}
</div>
