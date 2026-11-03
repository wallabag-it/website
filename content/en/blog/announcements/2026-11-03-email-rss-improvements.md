---
title: Improvements to saving by email and RSS feeds
slug: email-saving-rss-feeds-improvements
date: 2026-11-03
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  These two features needed a bit of love.
---

Hello everyone,

Saving articles by email and importing RSS feeds have been available on wallabag.it for a few years now. I hadn't really looked after them since they were released, so some annoying bugs had been there from the start.

I just shipped a few fixes.

## Saving by email

### How it works

On [the configuration page](https://app.wallabag.it/imap/config), enable the feature and create a token. You then get a private address, something like `save+your-username+token@wallabag.it`.

To save an article, send an email to this address with the link in the body of the message. That's it.

A few details:

- every `http://` or `https://` link in the message is saved, so you can put several of them (and if you do, you will get several articles!)
- the subject of the email and the attachments are ignored
- if the email has both a text and an HTML version, the text version is read
- a link already in your account is not added a second time

Some of you use this address to receive newsletters. It works, but be careful ⚠️: every link of the newsletter is saved, including the ones in the footer (so I admit it is not really made for that).

> **What about reading a newsletter in wallabag?**
>
> I have been asked several times: subscribe to a newsletter and find it in full in wallabag, as an article. This is not what saving by email does today, it only picks up the links.
>
> But yes, it is planned. When? When it's ready 😅

### What was fixed

- Some emails were not read properly, especially HTML emails or emails sent by some mail clients. Links were sometimes cut.
- If saving the article failed, the email was still considered as processed, and the article was lost. Now the email is kept and wallabag.it tries again later.
- If a link appears several times in the same email, it is only saved once.

I also did some cleanup on the server side. Emails sent to an account that no longer exists stayed in the inbox and were read again and again.

## RSS feeds

The most annoying bug was about automatic feeds (the ones where wallabag.it directly saves the new articles): the same articles were saved on every fetch. If you deleted one, it could come back. Not really ideal, but it should be fixed now.

Other fixes:

- when a website put an old article back at the top of its feed, the new articles published after it were ignored
- a single failing feed (website down, broken feed, etc.) could block fetching all the other ones. Oops.
- some websites refused to be read by wallabag.it. It should be better now, so feel free to try again a feed that did not work. And let me know if you notice a broken feed!
- if the page of an article cannot be fetched, the article at least keeps the title given by the feed

And two small new features:

- you no longer need to find the exact address of the feed: paste the address of the website, and wallabag.it finds the feed by itself 🎉
- in your list of feeds, you now see the date of the last successful fetch, and a message shows up when a feed has not worked for a few days

(A small note: on the first fetch after the update, the 10 latest articles of your automatic feeds may be added one last time. It should not happen again, it was only to get everything back on track.)

## Something wrong?

If you still see something weird with emails or RSS feeds, write to me at nicolas@wallabag.it.

Thanks to all subscribers, you are the reason I can spend time on fixes like these 🦘 ❤️

Have a nice day,

Nicolas
