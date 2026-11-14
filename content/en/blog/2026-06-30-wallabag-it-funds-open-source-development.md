---
title: wallabag.it will fund development work contributed back to wallabag
slug: wallabag-it-funds-open-source-development
date: 2026-06-30
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  For the first time, wallabag.it will directly fund features and fixes that will be contributed back to the open-source wallabag project.
images: ["/images/blog/en-2026-06-30-wallabag-it-funds-open-source-development.png"]
categories: ["The service"]
---

From the start, wallabag.it has let you use wallabag without maintaining your own instance. Your subscriptions pay for the service and also help the open-source project.

This time, we are going a bit further: for the first time, wallabag.it will directly fund features and fixes that will go into wallabag. [Yassine Guedidi](https://github.com/yguedidi), whom many of you already know, is doing the work.

## Bringing wallabag.it features into wallabag

Some features have existed on wallabag.it for years but were never properly integrated into wallabag. If you host your own instance, you could not always use them, which was a bit frustrating. It is also a chance to clean them up.

Three topics to start with:

- **[Optional CAPTCHA](https://github.com/wallabag/wallabag/issues/8902)** for public registration and user creation by an administrator. Disabled by default, configurable, and based on a local solution: no external service to plug in.
- **[RSS and Atom feeds](https://github.com/wallabag/wallabag/issues/8907)**: subscribe your instance to feeds, then choose whether items are reviewed before saving or added directly to your reading list. Today, many people hack this together with scripts or external services.
- **[Saving by email via IMAP](https://github.com/wallabag/wallabag/issues/8908)**: each administrator sets up their IMAP mailbox, then users turn the feature on with a private, revocable address. No dependency on wallabag.it.

Part of the funding will also go to security fixes. You see them less, but they are needed.

wallabag.it is a paid service built on free software. Subscription money should not only pay for servers and support, it should also help the project that makes all of this possible.

If you want to use wallabag without running a server, and help the project along the way, you can subscribe.

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/en/pricing/">
See wallabag.it subscriptions <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>Your subscription funds the hosted service and contributes to the open-source project.</em>
</div>

Thanks to all subscribers 🦘 ❤️

See you soon,

Nicolas
