---
layout: default
permalink: /news/
baseurl: /
---

# News and Events

## Feature

This is the featured _something_ but I don't know where/how it'll work

### Events

<dl>
    {% assign sorted = (site.events | sort: 'date') | reverse %}
    {% for item in sorted %}
    <dt><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a></dt>
    <dd>{{ item.date  | date: '%B %d, %Y' }}</dd>
    {% endfor %}
</dl>


### Blog Posts

_Where does this come from? RSS or something?_

### Press Releases

_Can we get this automatically — or do we need to move `/pr` into this Pseudo-CMS?_

### In the News

_This is probably going to be a manual thing right here. Just sayin'_
