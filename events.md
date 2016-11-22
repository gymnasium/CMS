---
layout: gym-default
permalink: /events/
baseurl:
---

# Events Landing Page

This page intentionally left blank

### Events

<dl>
    {% assign sorted = (site.events | sort: 'date') | reverse %}
    {% for item in sorted %}
    <dt><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></dt>
    <dd>{{ item.date  | date: '%B %d, %Y' }}</dd>
    {% endfor %}
</dl>
