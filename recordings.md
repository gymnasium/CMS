---
layout: gym-default
title: "Live Event Recordings"
permalink: /events/recordings/
baseurl:
---

<div markdown = "0"> <!-- This is a hack to force the html to render -->
{% assign sorted = site.events | reverse %}
{% for item in sorted %}
  {% if item.video %}

    <h2>{{ item.event_title | strip_html }}</h2>
    <small>{{ item.event_date  | date: '%B, %Y' }}</small>
    <!-- <p>{{ item.short_description}}</p> -->

    <div class="event-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/{{ item.video_ID }}" frameborder="0" allowfullscreen></iframe>
    </div>

    <hr>
  {% endif %}

{% endfor %}
</div>
