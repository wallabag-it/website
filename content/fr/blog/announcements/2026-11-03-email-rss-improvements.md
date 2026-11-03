---
title: Des améliorations pour la sauvegarde par email et les flux RSS
slug: ameliorations-sauvegarde-email-flux-rss
date: 2026-11-03
author: Nicolas Lœuillet ([@wallabagit](https://fosstodon.org/@wallabagit))
description: >
  Ces deux fonctionnalités avaient besoin d'un peu d'amour.
---

Bonjour à toutes et à tous,

La sauvegarde par email et l'import des flux RSS existent sur wallabag.it depuis quelques années maintenant. Et je ne m'en étais pas beaucoup occupé depuis leur mise en place, ce qui fait que des bugs un peu gênants étaient présents depuis le début.

Je viens d'apporter quelques correctifs.

## Sauvegarde par email

### Comment ça marche

Depuis [la page de configuration](https://app.wallabag.it/imap/config), vous activez la fonctionnalité et vous créez un jeton. Vous obtenez alors une adresse privée, du genre `save+votre-identifiant+jeton@wallabag.it`.

Pour sauvegarder un article, envoyez un email à cette adresse avec le lien dans le corps du message. C'est tout.

Quelques détails :

- tous les liens `http://` ou `https://` du message sont sauvegardés, vous pouvez donc en mettre plusieurs (et donc si vous en mettez plusieurs, ça vous archive plusieurs articles !)
- l'objet de l'email et les pièces jointes sont ignorés
- si l'email a une version texte et une version HTML, c'est la version texte qui est lue
- un lien déjà présent dans votre compte n'est pas ajouté une deuxième fois

Certain·es d'entre vous utilisent cette adresse pour recevoir des newsletters. Ça marche, mais attention ⚠️ : tous les liens de la newsletter sont sauvegardés, y compris ceux du pied de page (donc je le reconnais que ça n'est pas vraiment fait pour ça).

> **Et lire une newsletter dans wallabag ?**
>
> On me l'a déjà demandé plusieurs fois : pouvoir s'abonner à une newsletter et la retrouver en entier dans wallabag, comme un article. Ce n'est pas ce que fait la sauvegarde par email aujourd'hui, qui ne récupère que les liens.
>
> Mais oui, c'est prévu. Quand ? Quand ça sera prêt 😅

### Ce qui a été corrigé

- Certains emails n'étaient pas bien lus, notamment les emails en HTML ou envoyés par certains logiciels de messagerie. Les liens étaient parfois coupés.
- Si la sauvegarde de l'article échouait, l'email était quand même considéré comme traité, et l'article était perdu. Maintenant, l'email est gardé et wallabag.it réessaie plus tard.
- Si un lien apparaît plusieurs fois dans le même email, il n'est sauvegardé qu'une fois.

J'ai aussi fait un peu de ménage côté serveur. Les emails envoyés vers un compte qui n'existe plus restaient dans la boîte de réception et étaient relus en boucle.

## Flux RSS

Le bug le plus pénible concernait les flux automatiques (ceux pour lesquels wallabag.it sauvegarde directement les nouveaux articles) : les mêmes articles étaient sauvegardés à chaque passage. Si vous en supprimiez un, il pouvait revenir. Pas vraiment l'idéal, mais logiquement, c'est corrigé.

Autres corrections :

- quand un site remettait un vieil article en haut de son flux, les nouveaux articles publiés ensuite étaient ignorés
- un seul flux en erreur (site indisponible, flux mal formé, etc.) pouvait bloquer la récupération de tous les autres. Oups.
- certains sites refusaient d'être lu par wallabag.it. Ça devrait aller mieux, n'hésitez pas à réessayer un flux qui ne marchait pas. Et prévenez-moi si vous constatez un flux défaillant !
- si la page d'un article ne peut pas être récupérée, l'article garde au moins le titre donné par le flux

Et deux petites nouveautés :

- vous n'êtes plus obligé·e de trouver l'adresse exacte du flux : collez l'adresse du site, wallabag.it cherche le flux tout seul 🎉
- dans la liste de vos flux, vous voyez maintenant la date de la dernière récupération réussie, et un message s'affiche quand un flux ne fonctionne plus depuis quelques jours

(Petite précision : au premier passage après la mise à jour, les 10 derniers articles de vos flux automatiques peuvent être ajoutés une dernière fois. Ça ne devrait plus arriver, c'était juste pour remettre tout à niveau).

## Un souci ?

Si vous voyez encore quelque chose de bizarre avec les emails ou les flux RSS, écrivez-moi à nicolas@wallabag.it.

Merci aux abonné·es, c'est grâce à vous que je peux passer du temps sur ce genre de corrections 🦘 ❤️

Bonne journée,

Nicolas
