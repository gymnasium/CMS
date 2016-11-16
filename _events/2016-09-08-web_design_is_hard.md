---
title: "Web Design is Hard"
layout: event
permalink: /events/web_design_is_hard/
collection: events
date: 2016-09-08
landing: true
register: false
video: true
webinar_ID: abc1101010101
video_ID: mqph05uxqn
---

# {{ page.title }}

## {{ page.date | date: '%B %d, %Y' }}

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


{% if page.register %}
### Webinar Registration: {{ page.webinar_ID}}
{% include _form.html %}
{% endif %}

{% if page.video %}

### Video: {{ page.video_ID}}

<script src="//fast.wistia.com/embed/medias/mqph05uxqn.jsonp" async></script><script src="//fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_mqph05uxqn videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>
{% endif %}
