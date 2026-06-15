---
title: Some restrictions for trial accounts on wallabag.it
date: 2026-06-08
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  wallabag.it now reserves resource-intensive features — saving by email, RSS import, and service imports — for subscribers, to keep the platform fast and reliable for everyone.
---

I recently made a small but important change to wallabag.it, and I'd like to explain why.  
Some features may be a bit resource-intensive for the server:

- **saving articles by email**: send a link to your personal wallabag address to save it instantly.
- **importing RSS / Atom feeds**: automatically pull in articles from your favourite sources.
- **importing from other services**: bring in your articles from Pocket, Instapaper, your browser bookmarks, and more.

These features are really handy, but they also use a lot of resources behind the scenes. Over the past months, we noticed that a number of **trial and test accounts** were using them very heavily and in some cases, in a clearly abusive way.

The result was simple: a handful of accounts were slowing things down for **everyone else**, including our subscribers, who rightly expect a fast and reliable service.

## What I changed

To keep the platform fast and dependable, these three features are now **reserved for accounts with an active subscription**.

If you're not subscribed yet, you'll still see these features in the app. When you open one, I'll simply invite you to subscribe to unlock it. Everything else keeps working exactly as before.

## A bit of spring cleaning

Alongside this change, I cleaned up the data that had piled up from inactive and non-subscribed accounts. To give you an idea of the scale:

- **more than 2.1 million** queued RSS articles were cleared out
- **over 2.100** automated feeds were removed
- **around 600** email-saving setups were cleaned up

## What this means for you

- **If you're a subscriber:** nothing changes, except that the service should feel even snappier. Thank you for supporting wallabag.it 🦘 ❤️
- **If you're on a trial or free account:** you can keep saving and reading your articles as usual. To unlock saving by email, RSS feeds and imports, just [subscribe here](https://app.wallabag.it/subscription/), it also directly supports the project.

I don't take decisions like this lightly, but keeping wallabag.it reliable for the people who count on it every day has to come first. As always, if you have any questions, contact me at [nicolas@wallabag.it](mailto:nicolas@wallabag.it).

Nicolas
