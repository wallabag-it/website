---
title: wallabag.it va financer des développements reversés à wallabag
slug: wallabag-it-finance-developpements-open-source
date: 2026-06-30
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  Pour la première fois, wallabag.it va financer directement des fonctionnalités et des corrections qui seront reversées au projet open source wallabag.
---

Depuis le début, wallabag.it existe pour proposer une version hébergée de wallabag aux personnes qui ne veulent pas, ou ne peuvent pas, maintenir leur propre instance.

Vos abonnements servent à faire tourner le service, mais aussi à contribuer au projet open source wallabag.

Aujourd'hui, on passe une étape importante : pour la première fois, wallabag.it va financer directement le développement de fonctionnalités et de corrections qui seront reversées dans le projet open source.

Ce travail sera réalisé par [Yassine Guedidi](https://github.com/yguedidi), que beaucoup connaissent déjà dans l'écosystème de wallabag.

## Du SaaS vers le projet open source

Certaines fonctionnalités existent depuis des années sur wallabag.it, mais n'ont jamais été intégrées proprement dans le cœur de wallabag.

Ça pouvait créer une situation un peu frustrante : les personnes qui utilisent wallabag.it peuvent en profiter, mais celles qui hébergent leur propre instance ne peuvent pas forcément les activer simplement.

Ce financement permettra à tout le monde d'en bénéficier. Et, au passage, ça permettra aussi de dépoussiérer ces fonctionnalités, d'améliorer leur intégration, et de les rendre plus solides pour les années à venir.

## Protection contre le SPAM

Le premier sujet concerne l'ajout d'une [protection CAPTCHA optionnelle](https://github.com/wallabag/wallabag/issues/8902) pour l'inscription publique et la création d'utilisateurs par un administrateur.

L'objectif n'est pas d'imposer un service externe à toutes les installations. La fonctionnalité sera désactivée par défaut, configurable, et basée sur une solution locale afin de ne pas ajouter une dépendance à un fournisseur tiers.

Pour les instances publiques qui reçoivent des tentatives d'inscriptions automatisées, ce sera une protection supplémentaire directement disponible dans wallabag, sans devoir forcément passer par un reverse proxy, un WAF ou un correctif maison.

## Gestion des flux RSS et Atom

Le deuxième sujet est la [gestion native de flux RSS et Atom](https://github.com/wallabag/wallabag/issues/8907).

L'idée est simple : pouvoir abonner son instance wallabag à des flux, puis choisir si les éléments doivent être relus avant sauvegarde ou ajoutés automatiquement dans sa liste de lecture.

Cela ouvre des usages très pratiques pour suivre des blogs, des newsletters publiées en flux, des notes de version, ou des sources longues à lire plus tard. Aujourd'hui, beaucoup de personnes bricolent ça avec des scripts, des services externes ou des automatisations. L'objectif est que ce soit possible directement dans wallabag, avec des réglages adaptés aux instances auto-hébergées.

## Sauvegarder des liens par email via IMAP

Le troisième sujet concerne la [sauvegarde de liens par email via une boîte IMAP](https://github.com/wallabag/wallabag/issues/8908).

Sur wallabag.it, envoyer un lien par email est déjà un usage très pratique : depuis une application mobile, une newsletter, un client mail ou un outil d'automatisation, il suffit parfois de transférer un message pour mettre un article de côté.

L'intégration dans wallabag permettra aux administrateurs d'instance de configurer leur propre boîte IMAP, puis aux utilisateurs d'activer cette fonctionnalité avec une adresse privée et révocable. Là aussi, le but est de garder une approche auto-hébergeable, sans service de transfert propriétaire et sans dépendance à wallabag.it.

## Et aussi des correctifs de sécurité

Une partie de ce financement servira également à traiter des correctifs de sécurité.

C'est moins visible qu'une nouvelle fonctionnalité, mais c'est tout aussi important. Un projet comme wallabag doit rester fiable, maintenable et sûr, que vous utilisiez wallabag.it ou votre propre instance.

## Pourquoi c'est important

wallabag.it est un service payant, mais il repose sur un projet libre. Il est important que l'argent des abonnements ne serve pas seulement à payer les serveurs, les sauvegardes, la supervision et le support.

Il doit aussi aider le projet qui rend tout cela possible.

Ce premier financement direct est une étape dans cette direction.

Si vous voulez utiliser wallabag sans gérer de serveur, tout en aidant le projet open source à avancer, vous pouvez vous abonner à wallabag.it.

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/fr/tarifs/">
Voir les abonnements wallabag.it <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>Votre abonnement finance le service hébergé et contribue au projet open source.</em>
</div>

À bientôt,

Nicolas
