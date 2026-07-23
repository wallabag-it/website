---
title: Le CAPTCHA optionnel arrive dans wallabag grâce au financement de wallabag.it
slug: captcha-optionnel-wallabag-financement-wallabag-it
date: 2026-07-23
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  Trois premières contributions financées par wallabag.it ont été mergées dans le projet open source wallabag, dont une protection CAPTCHA optionnelle.
---

Il y a quelques semaines, j'expliquais que [wallabag.it allait financer des développements reversés dans wallabag](/fr/blog/2026/06/30/wallabag-it-finance-developpements-open-source/).

Les premières contributions sont maintenant mergées dans le projet open source.

Ce travail a été réalisé par [Yassine Guedidi](https://github.com/yguedidi), grâce au financement de wallabag.it. C'est exactement ce que je veux continuer à faire avec le service : payer l'hébergement, le support et la maintenance, mais aussi contribuer concrètement au logiciel libre qui rend tout cela possible.

## Une protection CAPTCHA optionnelle

La contribution la plus visible est l'ajout d'une [protection CAPTCHA optionnelle pour la création d'utilisateurs](https://github.com/wallabag/wallabag/pull/8960).

Certaines instances publiques de wallabag peuvent recevoir des tentatives d'inscription automatisées. Jusqu'ici, il fallait souvent gérer ce problème en dehors de wallabag : avec un reverse proxy, un WAF, une règle de filtrage, ou parfois un correctif maison.

Cette nouvelle fonctionnalité ajoute une protection directement dans wallabag, pour l'inscription publique et la création d'utilisateurs depuis l'administration.

Elle reste désactivée par défaut. Les administrateurs qui en ont besoin pourront l'activer avec la variable `WALLABAG_CAPTCHA_ENABLED`. Le CAPTCHA fonctionne localement, sans imposer un service externe ni ajouter une dépendance à un fournisseur tiers.

C'est important : toutes les instances n'ont pas les mêmes besoins. Une instance privée n'a pas forcément besoin d'un CAPTCHA. Une instance publique très exposée peut, au contraire, avoir besoin d'une protection supplémentaire. wallabag doit permettre les deux.

L'API d'inscription reste inchangée, et la documentation précise aussi les limites de cette protection, notamment sur l'accessibilité. Un CAPTCHA ne remplace pas une vraie stratégie anti-abus, mais c'est une brique utile de plus pour les personnes qui hébergent leur propre instance.

## Une URL de signalement configurable

Deux autres contributions ont été mergées dans la même période.

La première rend [l'URL de signalement d'un problème d'affichage configurable](https://github.com/wallabag/wallabag/pull/8958).

Quand un article est mal récupéré ou mal affiché, wallabag propose un lien pour signaler le problème. Jusqu'ici, ce lien pointait vers une destination par défaut. Les administrateurs d'instance pourront maintenant configurer leur propre destination avec `WALLABAG_ARTICLE_REPORTING_URL`, par exemple vers une adresse email de support ou vers un formulaire HTTPS.

C'est moins visible qu'une nouvelle fonctionnalité dans l'interface, mais c'est utile pour les instances auto-hébergées ou les organisations qui veulent intégrer wallabag à leur propre circuit de support.

## Des logs plus faciles à ajuster

La deuxième contribution permet de [configurer le niveau de verbosité des logs de production](https://github.com/wallabag/wallabag/pull/8957) avec `WALLABAG_LOG_LEVEL`.

Là encore, ce n'est pas la fonctionnalité qui fera le plus de bruit. Mais pour administrer une instance, diagnostiquer un problème et récupérer le bon niveau d'information au bon moment, c'est le genre d'amélioration qui compte.

Le comportement par défaut reste prudent, et les administrateurs peuvent choisir d'obtenir plus de contexte quand une requête se termine en erreur, sans transformer les logs de production en flux beaucoup trop bavard.

## Ce que financent vos abonnements

Ces trois PR sont de petites pierres, mais elles montrent bien l'idée.

wallabag.it n'est pas seulement une version hébergée de wallabag. C'est aussi un moyen de financer du travail qui revient ensuite au projet open source, et donc à toutes les personnes qui utilisent wallabag, qu'elles soient abonnées à wallabag.it ou qu'elles hébergent leur propre instance.

Merci aux personnes abonnées : ces contributions existent aussi grâce à vous.

Si vous voulez utiliser wallabag sans gérer de serveur, tout en aidant le projet open source à avancer, vous pouvez vous abonner à wallabag.it.

<div class="text-center my-4">
<a class="btn btn-lg btn-secondary" href="/fr/tarifs/">
Voir les abonnements wallabag.it <i class="fa fa-heart ms-2"></i>
</a><br/>
<em>À partir de 11 € par an, sans publicité ni revente de données.</em>
</div>

À bientôt,

Nicolas
