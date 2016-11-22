---
layout: gym-default
title: "Events"
permalink: /events/
baseurl:
---
{% comment %}
<dl>
    {% assign sorted = (site.events | sort: 'date') | reverse %}
    {% for item in sorted %}
    <dt><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></dt>
    <dd>{{ item.date  | date: '%B %d, %Y' }}</dd>
    {% endfor %}
</dl>
{% endcomment %}
