---
title: Le CAPTCHA optionnel arrive dans wallabag grâce au financement de wallabag.it
slug: captcha-optionnel-wallabag-financement-wallabag-it
date: 2026-07-23
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  Trois premières contributions financées par wallabag.it ont été mergées dans le projet open source wallabag, dont une protection CAPTCHA optionnelle.
images: ["/images/blog/fr-2026-07-23-optional-captcha-wallabag-it-funded-open-source.png"]
categories: ["Nouveautés"]
---

Il y a quelques semaines, je vous expliquais que [wallabag.it allait financer des développements reversés dans wallabag](/fr/blog/2026/06/30/wallabag-it-finance-developpements-open-source/).

Les trois premières contributions sont mergées. C'est [Yassine Guedidi](https://github.com/yguedidi) qui les a réalisées, grâce au financement de wallabag.it.

## Un CAPTCHA optionnel

[Cette contribution](https://github.com/wallabag/wallabag/pull/8960) ajoute un CAPTCHA pour l'inscription publique et la création d'utilisateurs depuis l'administration. Certaines instances publiques reçoivent des inscriptions automatisées, et jusqu'ici il fallait gérer ça en dehors de wallabag (reverse proxy, WAF, correctif maison).

C'est désactivé par défaut et ça s'active avec `WALLABAG_CAPTCHA_ENABLED`. Le CAPTCHA fonctionne localement, sans service externe. L'API d'inscription ne change pas, et la documentation précise les limites de cette protection, notamment sur l'accessibilité.

## Deux autres petites choses

- [L'URL de signalement est configurable](https://github.com/wallabag/wallabag/pull/8958) : quand un article s'affiche mal, wallabag propose un lien pour le signaler. Les administrateurs peuvent maintenant choisir où il mène avec `WALLABAG_ARTICLE_REPORTING_URL` (une adresse email de support ou un formulaire HTTPS).
- [Le niveau des logs de production est réglable](https://github.com/wallabag/wallabag/pull/8957) avec `WALLABAG_LOG_LEVEL`. Le comportement par défaut reste prudent, mais on peut demander plus de détails quand une requête se termine en erreur.

Ce n'est pas ce qui fera le plus de bruit, mais c'est à ça que je veux que serve wallabag.it : payer l'hébergement et le support, et aussi du travail qui profite à toutes les personnes qui utilisent wallabag, abonnées ou non.

Merci aux abonné·es, ces contributions existent grâce à vous 🦘 ❤️

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/fr/tarifs/">
Voir les abonnements wallabag.it <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>À partir de 11 € par an, sans publicité ni revente de données.</em>
</div>

À bientôt,

Nicolas
