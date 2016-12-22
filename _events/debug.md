---
title: "Debug Event"
layout: debug
permalink: /events/debug/
collection: events
date: 2016-12-20
landing: true
register: false
video: true
webinar_ID: 1922962652293998851
webinar_question_key: 41565741
video_ID: mzhd1ut9he
host: josborn
speaker:
    - emarcotte
    - kmcgrane
---

- **`site.url`:** `{{ site.url }}`
- **`site.baseurl`:** `{{ site.baseurl }}`
- **`page.url`:** `{{ page.url }}`
- **`page.layout`:** `{{ page.layout }}`
- **`page.date`:** `{{ page.date }}`

---

- **`page.landing`:** `{{ page.landing }}`
- **`page.register`:** `{{ page.register }}`
  - **`page.webinar_ID`:** `{{ page.webinar_ID }}`
  - **`page.webinar_question_key`:** `{{ page.webinar_question_key }}`
- **`page.video`:** `{{ page.video }}`
  - **`page.video_ID`:** `{{ page.video_ID }}`

---
 - **`page.host`:**
{% for host in page.host %}
   - `{{ host }}`
{% endfor %}
 - **`page.speaker`:**
{% for speaker in page.speaker %}
   - `{{ speaker }}`
{% endfor %}
---

{% if page.landing %}
**I'm a landing page!**
{% endif %}

{% if page.register %}
**Registration is open!**
`I want to include a registration form for webinar_ID {{page.webinar_ID}}`
{% endif %}

{% if page.register == false %}
{% if page.video == false %}
**Registration is closed!**
`I want to include a signup form for the recording`
{% endif %}
{% endif %}


{% if page.video %}
**Here's the video**
`I want to include a video for video_ID {{page.video_ID}}`
{% endif %}
