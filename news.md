---
layout: default
permalink: /news/
baseurl: /CMS
---

# News and Events

## Feature

This is the featured _something_ but I don't know where/how it'll work

### Events

{% for event in site.events %}
<dl>
    <dt><a href="{{ site.baseurl }}{{ event.url }}">{{ event.title }}</a></dt>
    <dd>{{ event.date }}</dd>
</dl>
{% endfor %}

### Blog Posts

_Where does this come from? RSS or something?_

### Press Releases

_Can we get this automatically — or do we need to move `/pr` into this Pseudo-CMS?_

### In the News

_This is probably going to be a manual thing right here. Just sayin'_
