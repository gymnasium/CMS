---
layout: gym-default
title: "Events"
meta_description: "Aquent Gymnasium Live Events and Recordings"
permalink: /events/
baseurl:

---


{% assign sorted = (site.events | sort: 'date') | reverse %}
{% for item in sorted %}
{% if item.landing %}
<small>{{ item.event_date  | date: '%B %d, %Y' }}</small>
<p><a href="{{ site.baseurl }}{{ item.url }}">{{ item.event_title | strip_html }}</a></p>
<small>{{ item.short_description}}</small>
<hr>
{% endif %}
{% endfor %}
