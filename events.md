---
layout: default
permalink: /events/
baseurl: /
---

# Events

## Featured Event

This is the featured _something_ but I don't know where/how it'll work

### Events

{% for event in site.events %}
<dl>
    <dt><a href="{{ site.baseurl }}{{ event.url }}">{{ event.title }}</a></dt>
    <dd>{{ event.date | date: '%B %d, %Y' }}</dd>
</dl>
{% endfor %}
