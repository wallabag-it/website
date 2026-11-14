---
title: Optional CAPTCHA protection comes to wallabag thanks to wallabag.it funding
slug: optional-captcha-wallabag-wallabag-it-funding
date: 2026-07-23
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  The first three contributions funded by wallabag.it have been merged into the open-source wallabag project, including optional CAPTCHA protection.
images: ["/images/blog/en-2026-07-23-optional-captcha-wallabag-it-funded-open-source.png"]
categories: ["News"]
---

A few weeks ago, I explained that [wallabag.it would fund development work contributed back to wallabag](/en/blog/2026/06/30/wallabag-it-funds-open-source-development/).

The first three contributions are merged. [Yassine Guedidi](https://github.com/yguedidi) did the work, thanks to wallabag.it funding.

## An optional CAPTCHA

[This contribution](https://github.com/wallabag/wallabag/pull/8960) adds a CAPTCHA for public registration and for user creation from the administration. Some public instances get automated sign-ups, and until now you had to deal with that outside wallabag (reverse proxy, WAF, homemade patch).

It is disabled by default and you turn it on with `WALLABAG_CAPTCHA_ENABLED`. The CAPTCHA runs locally, with no external service. The registration API does not change, and the documentation explains the limits of this protection, especially for accessibility.

## Two other small things

- [The reporting URL is configurable](https://github.com/wallabag/wallabag/pull/8958): when an article displays badly, wallabag offers a link to report it. Administrators can now choose where it goes with `WALLABAG_ARTICLE_REPORTING_URL` (a support email address or an HTTPS form).
- [The production log level is adjustable](https://github.com/wallabag/wallabag/pull/8957) with `WALLABAG_LOG_LEVEL`. The default stays cautious, but you can ask for more details when a request ends in an error.

This won't make the most noise, but it is what I want wallabag.it to be for: paying for hosting and support, and also for work that benefits everyone who uses wallabag, subscribers or not.

Thanks to all subscribers, these contributions exist because of you 🦘 ❤️

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/en/pricing/">
See wallabag.it subscriptions <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>From 11 euros a year, with no advertising and no data reselling.</em>
</div>

See you soon,

Nicolas
