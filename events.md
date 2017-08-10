---
layout: gym-default
title: "Events"
meta_description: "Aquent Gymnasium Live Events and Recordings"
og_image: default_ogimage.png
permalink: /events/
baseurl:

---


{% assign sorted = (site.events | sort: 'date') | reverse %}
{% for item in sorted %}
{% if item.landing %}

<small>{{ item.event_date  | date: '%B %d, %Y' }}</small>
{% if item.register == true %}
<img src="{{site.baseurl}}/img/{{ item.event_ogimage }}" class="event-thumb" />
{% else %}
<img src="{{site.baseurl}}/img/{{ item.recording_ogimage }}" class="event-thumb" />
{% endif %}
<h3><a href="{{ site.baseurl }}{{ item.url }}">{{ item.event_title | strip_html }}</a></h3>
<p>{{ item.short_description}}</p>
<hr />
{% endif %}
{% endfor %}
