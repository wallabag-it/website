---
title: wallabag.it will fund development work contributed back to wallabag
slug: wallabag-it-funds-open-source-development
date: 2026-06-30
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  For the first time, wallabag.it will directly fund features and fixes that will be contributed back to the open-source wallabag project.
---

Since the beginning, wallabag.it has existed to offer a hosted version of wallabag to people who do not want to, or cannot, maintain their own instance.

Your subscriptions help run the service, but they also help contribute to the open-source wallabag project.

Today, we are taking an important step: for the first time, wallabag.it will directly fund the development of features and fixes that will be contributed back to the open-source project.

This work will be done by [Yassine Guedidi](https://github.com/yguedidi), whom many people already know in the wallabag ecosystem.

## From the SaaS to the open-source project

Some features have existed on wallabag.it for years, but have never been properly integrated into wallabag core.

That could create a somewhat frustrating situation: people using wallabag.it could benefit from them, but people hosting their own instance could not necessarily enable them easily.

This funding will make these features available to everyone. And, along the way, it will also be an opportunity to dust them off, improve their integration, and make them more robust for the years to come.

## Spam protection

The first topic is adding [optional CAPTCHA protection](https://github.com/wallabag/wallabag/issues/8902) for public registration and user creation by an administrator.

The goal is not to impose an external service on every installation. The feature will be disabled by default, configurable, and based on a local solution so it does not add a dependency on a third-party provider.

For public instances that receive automated registration attempts, this will provide an extra layer of protection directly in wallabag, without necessarily having to rely on a reverse proxy, a WAF, or a custom patch.

## RSS and Atom feed management

The second topic is [native RSS and Atom feed management](https://github.com/wallabag/wallabag/issues/8907).

The idea is simple: let your wallabag instance subscribe to feeds, then choose whether items should be reviewed before being saved or automatically added to your reading list.

This opens up very practical uses for following blogs, newsletters published as feeds, release notes, or sources you want to read later. Today, many people work around this with scripts, external services, or automation tools. The goal is to make it possible directly in wallabag, with settings suitable for self-hosted instances.

## Saving links by email via IMAP

The third topic is [saving links by email through an IMAP mailbox](https://github.com/wallabag/wallabag/issues/8908).

On wallabag.it, sending a link by email is already a very practical workflow: from a mobile app, a newsletter, an email client, or an automation tool, sometimes forwarding a message is enough to save an article for later.

Integrating this into wallabag will allow instance administrators to configure their own IMAP mailbox, then let users enable the feature with a private and revocable address. Here too, the goal is to keep the approach self-hostable, without a proprietary forwarding service and without depending on wallabag.it.

## And security fixes too

Part of this funding will also be used to work on security fixes.

That is less visible than a new feature, but just as important. A project like wallabag needs to remain reliable, maintainable, and secure, whether you use wallabag.it or your own instance.

## Why this matters

wallabag.it is a paid service, but it is built on a free software project. It is important that subscription money does not only pay for servers, backups, monitoring, and support.

It must also help the project that makes all of this possible.

This first direct funding is a step in that direction.

If you want to use wallabag without managing a server, while helping the open-source project move forward, you can subscribe to wallabag.it.

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/en/pricing/">
See wallabag.it subscriptions <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>Your subscription funds the hosted service and contributes to the open-source project.</em>
</div>

See you soon,

Nicolas
