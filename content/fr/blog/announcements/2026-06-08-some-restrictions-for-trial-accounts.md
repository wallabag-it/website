---
title: Des restrictions pour les comptes d'essai sur wallabag.it
slug: des-restrictions-pour-les-comptes-d-essai
date: 2026-06-08
author: Nicolas Lœuillet ([@nicosomb](https://piaille.fr/@nicosomb))
---

J'ai récemment apporté un petit changement, mais un changement important, à wallabag.it, et j'aimerais vous expliquer pourquoi.  
Certaines fonctionnalités peuvent être assez gourmandes en ressources pour le serveur :

- **la sauvegarde d'articles par email** : envoyez un lien à votre adresse wallabag personnelle pour le sauvegarder instantanément.
- **l'import de flux RSS / Atom** : récupérez automatiquement les articles de vos sources préférées.
- **l'import depuis d'autres services** : rapatriez vos articles depuis Pocket, Instapaper, les marque-pages de votre navigateur, et plus encore.

Ces fonctionnalités sont vraiment pratiques, mais elles consomment aussi beaucoup de ressources en coulisses. Ces derniers mois, nous avons constaté qu'un certain nombre de **comptes d'essai et de test** les utilisaient de façon très intensive et, dans certains cas, clairement abusive.

Le résultat était simple : une poignée de comptes ralentissait le service pour **tous les autres**, y compris nos abonnés, qui attendent à juste titre un service rapide et fiable.

## Ce que j'ai changé

Pour que la plateforme reste rapide et fiable, ces trois fonctionnalités sont désormais **réservées aux comptes disposant d'un abonnement actif**.

Si vous n'êtes pas encore abonné, vous verrez toujours ces fonctionnalités dans l'application. En les ouvrant, je vous inviterai simplement à vous abonner pour les débloquer. Tout le reste continue de fonctionner exactement comme avant.

## Un petit ménage de printemps

En parallèle de ce changement, j'ai nettoyé les données accumulées par les comptes inactifs et non abonnés. Pour vous donner une idée de l'ampleur :

- **plus de 2,1 millions** d'articles RSS en file d'attente ont été supprimés
- **plus de 2 100** flux automatisés ont été retirés
- **environ 600** configurations de sauvegarde par email ont été nettoyées

## Ce que ça change pour vous

- **Si vous êtes abonné :** rien ne change, si ce n'est que le service devrait être encore plus réactif. Merci de soutenir wallabag.it 🦘 ❤️
- **Si vous avez un compte d'essai ou gratuit :** vous pouvez continuer à sauvegarder et lire vos articles comme d'habitude. Pour débloquer la sauvegarde par email, les flux RSS et les imports, il suffit de [vous abonner ici](https://app.wallabag.it/subscription/) — c'est aussi un soutien direct au projet.

Je ne prends pas ce genre de décision à la légère, mais la fiabilité de wallabag.it pour celles et ceux qui comptent dessus au quotidien doit passer en premier. Comme toujours, si vous avez la moindre question, contactez-moi à [nicolas@wallabag.it](mailto:nicolas@wallabag.it).

Nicolas
