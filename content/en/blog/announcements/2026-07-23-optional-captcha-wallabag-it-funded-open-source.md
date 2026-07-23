---
title: Optional CAPTCHA protection comes to wallabag thanks to wallabag.it funding
slug: optional-captcha-wallabag-wallabag-it-funding
date: 2026-07-23
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  The first three contributions funded by wallabag.it have been merged into the open-source wallabag project, including optional CAPTCHA protection.
---

A few weeks ago, I explained that [wallabag.it would fund development work contributed back to wallabag](/en/blog/2026/06/30/wallabag-it-funds-open-source-development/).

The first contributions have now been merged into the open-source project.

This work was done by [Yassine Guedidi](https://github.com/yguedidi), thanks to wallabag.it funding. This is exactly what I want to keep doing with the service: pay for hosting, support and maintenance, but also contribute concrete work to the free software that makes all of this possible.

## Optional CAPTCHA protection

The most visible contribution is the addition of [optional CAPTCHA protection for user creation](https://github.com/wallabag/wallabag/pull/8960).

Some public wallabag instances can receive automated registration attempts. Until now, this often had to be handled outside wallabag: with a reverse proxy, a WAF, a filtering rule, or sometimes a custom patch.

This new feature adds protection directly in wallabag, for public registration and user creation from the administration interface.

It remains disabled by default. Administrators who need it will be able to enable it with the `WALLABAG_CAPTCHA_ENABLED` variable. The CAPTCHA works locally, without imposing an external service or adding a dependency on a third-party provider.

That matters: not every instance has the same needs. A private instance does not necessarily need a CAPTCHA. A very exposed public instance may, on the other hand, need an extra layer of protection. wallabag should allow both.

API registration remains unchanged, and the documentation also explains the limits of this protection, especially around accessibility. A CAPTCHA does not replace a real anti-abuse strategy, but it is one more useful building block for people hosting their own instance.

## A configurable reporting URL

Two other contributions were merged during the same period.

The first one makes [the URL used to report article display problems configurable](https://github.com/wallabag/wallabag/pull/8958).

When an article is not fetched or displayed correctly, wallabag offers a link to report the problem. Until now, that link pointed to a default destination. Instance administrators will now be able to configure their own destination with `WALLABAG_ARTICLE_REPORTING_URL`, for example to a support email address or an HTTPS form.

This is less visible than a new feature in the interface, but it is useful for self-hosted instances or organizations that want to integrate wallabag into their own support workflow.

## Logs that are easier to adjust

The second contribution makes it possible to [configure production log verbosity](https://github.com/wallabag/wallabag/pull/8957) with `WALLABAG_LOG_LEVEL`.

Again, this is not the feature that will make the most noise. But when administering an instance, diagnosing a problem, and getting the right level of information at the right time, this kind of improvement matters.

The default behavior remains conservative, and administrators can choose to get more context when a request ends in an error, without turning production logs into something far too verbose.

## What your subscriptions fund

These three PRs are small steps, but they show the idea well.

wallabag.it is not only a hosted version of wallabag. It is also a way to fund work that then goes back to the open-source project, and therefore to everyone who uses wallabag, whether they subscribe to wallabag.it or host their own instance.

Thank you to the people who subscribe: these contributions exist thanks to you too.

If you want to use wallabag without managing a server, while helping the open-source project move forward, you can subscribe to wallabag.it.

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/en/pricing/">
See wallabag.it subscriptions <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>From 11 euros a year, with no advertising and no data reselling.</em>
</div>

See you soon,

Nicolas
