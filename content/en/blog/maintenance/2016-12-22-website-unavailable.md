---
title: All wallabag.it websites unavailable on December, 22 during 8 hours
date: 2016-12-22
author: Nicolas Lœuillet ([@nicosomb](https://piaille.fr/@nicosomb))
description: >
  Our websites were unavailable during 8 hours today. We are sorry for this inconvience.
---

On December, 21 at 22pm (Paris time), our server didn’t respond. Our monitoring service alerted us and our websites were available quickly (websites were down for 17 minutes and 7 seconds).

Few minutes later, new downtime. When our server restarted, websites were still unavailable and our users saw this page:

The problem wasn’t detected immediatly and we saw it (thanks to some users on our Twitter account), we restarted our web server and all was OK at 8am (Paris time).

Don’t forget: on wallabag.it, there is a Status link (in the footer) to see the current status of our websites. We just added it on this blog too (in the header).

Technical part: in fact, when our server rebooted at 23pm, Nginx failed to restart because the port was already in use. And the problem was … Apache, which is not used on our web server but was installed. We killed Apache processes and Nginx finally restarted.
