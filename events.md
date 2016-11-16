---
layout: default
permalink: /events/
baseurl: /
---

# Events

## Featured Event

This is the featured _something_ but I don't know where/how it'll work

### Events

<dl>
    {% assign sorted = (site.events | sort: 'date') | reverse %}
    {% for item in sorted %}
    <dt><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></dt>
    <dd>{{ item.date  | date: '%B %d, %Y' }}</dd>
    {% endfor %}
</dl>
