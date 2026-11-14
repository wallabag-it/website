---
title: wallabag.it va financer des développements reversés à wallabag
slug: wallabag-it-finance-developpements-open-source
date: 2026-06-30
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  Pour la première fois, wallabag.it va financer directement des fonctionnalités et des corrections qui seront reversées au projet open source wallabag.
images: ["/images/blog/fr-2026-06-30-wallabag-it-funds-open-source-development.png"]
categories: ["Le service"]
---

Depuis le début, wallabag.it permet d'utiliser wallabag sans avoir à maintenir sa propre instance. Vos abonnements paient le service et aident aussi le projet open source.

Cette fois, on va un peu plus loin : pour la première fois, wallabag.it va financer directement des fonctionnalités et des corrections qui iront dans wallabag. C'est [Yassine Guedidi](https://github.com/yguedidi), que beaucoup d'entre vous connaissent déjà, qui s'en charge.

## Ramener des fonctionnalités de wallabag.it dans wallabag

Certaines fonctionnalités existent depuis des années sur wallabag.it, mais n'ont jamais été intégrées proprement dans wallabag. Si vous hébergez votre instance, vous ne pouviez pas forcément en profiter, et c'était un peu frustrant. Ça sera aussi l'occasion de les dépoussiérer.

Trois sujets pour commencer :

- **[Un CAPTCHA optionnel](https://github.com/wallabag/wallabag/issues/8902)** pour l'inscription publique et la création d'utilisateurs par un administrateur. Désactivé par défaut, configurable, et basé sur une solution locale : pas de service externe à brancher.
- **[Les flux RSS et Atom](https://github.com/wallabag/wallabag/issues/8907)** : abonner son instance à des flux, puis choisir si les articles sont relus avant sauvegarde ou ajoutés directement à sa liste de lecture. Aujourd'hui, beaucoup de gens bricolent ça avec des scripts ou des services externes.
- **[La sauvegarde par email via IMAP](https://github.com/wallabag/wallabag/issues/8908)** : chaque administrateur configure sa boîte IMAP, puis les utilisateurs activent la fonctionnalité avec une adresse privée et révocable. Sans dépendre de wallabag.it.

Une partie du financement servira aussi à des correctifs de sécurité. Ça se voit moins, mais il en faut.

wallabag.it est un service payant qui repose sur un logiciel libre. L'argent des abonnements ne doit pas servir qu'à payer les serveurs et le support, il doit aussi aider le projet qui rend tout ça possible.

Si vous voulez utiliser wallabag sans gérer de serveur, et aider le projet au passage, vous pouvez vous abonner.

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/fr/tarifs/">
Voir les abonnements wallabag.it <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>Votre abonnement finance le service hébergé et contribue au projet open source.</em>
</div>

Merci aux abonné·es 🦘 ❤️

À bientôt,

Nicolas
