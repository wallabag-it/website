---
title: The wallabag.it bot
linkTitle: Bot
slug: bot
description: "What the wallabag.it bot is, when it fetches your pages, and how to contact us if you run a website."
---

{{% blocks/cover title="The wallabag.it bot" color="primary" image_anchor="bottom" height="auto" %}}

{{% /blocks/cover %}}

{{% blocks/section color="white" %}}

If you see this user agent in your logs, it's us:

```
Mozilla/5.0 (compatible; wallabag; +https://wallabag.it)
```

## What it does

wallabag.it is a read-it-later service. When one of our users saves a link, our server fetches the page and keeps the article text, so they can read it later, on any device.

- It only fetches pages that a user asked to save. It doesn't crawl your site and doesn't follow links.
- A user can reload an article: the page is then fetched again.
- If a user follows one of your RSS feeds in wallabag.it, the feed is checked at most once an hour.
- The article is only shown to the user who saved it. We don't republish it and we don't sell it.

Every fetch is started by a person, like opening the page in a browser. That's why the bot doesn't read `robots.txt`.

## Why its own user agent

We'd rather say who we are than pretend to be a browser. If your site blocks this user agent, our users get an empty article instead of the text.

## You run a website?

- To let our users save your articles, allow this user agent in your firewall or bot protection (Cloudflare, for example).
- An article is badly extracted, or you'd rather we didn't fetch your site? Write to [helpdesk@wallabag.it](mailto:helpdesk@wallabag.it). We can also adjust the extraction rules for your site.

wallabag is open source: the fetching and extraction code is in [wallabag](https://github.com/wallabag/wallabag) and [Graby](https://github.com/j0k3r/graby).

{{% /blocks/section %}}
