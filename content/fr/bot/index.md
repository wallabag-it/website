---
title: Le robot de wallabag.it
linkTitle: Robot
slug: bot
description: "Ce qu'est le robot de wallabag.it, quand il récupère vos pages, et comment nous contacter si vous gérez un site."
---

{{% blocks/cover title="Le robot de wallabag.it" color="primary" image_anchor="bottom" height="auto" %}}

{{% /blocks/cover %}}

{{% blocks/section color="white" %}}

Si vous voyez ce User-Agent dans vos logs, c'est nous :

```
Mozilla/5.0 (compatible; wallabag; +https://wallabag.it)
```

## Ce qu'il fait

wallabag.it est un service de lecture différée. Quand un de nos utilisateurs enregistre un lien, notre serveur récupère la page et garde le texte de l'article, pour qu'il puisse le lire plus tard, sur n'importe quel appareil.

- Il ne récupère que les pages qu'un utilisateur a demandé d'enregistrer. Il ne parcourt pas votre site et ne suit pas les liens.
- Un utilisateur peut recharger un article : la page est alors récupérée à nouveau.
- Si un utilisateur suit un de vos flux RSS dans wallabag.it, le flux est consulté au plus une fois par heure.
- L'article n'est visible que par l'utilisateur qui l'a enregistré. Nous ne le republions pas et nous ne le revendons pas.

Chaque récupération est lancée par une personne, comme quand on ouvre la page dans un navigateur. C'est pour ça que le robot ne lit pas le `robots.txt`.

## Pourquoi son propre User-Agent

On préfère dire qui on est plutôt que se faire passer pour un navigateur. Si votre site bloque ce User-Agent, nos utilisateurs obtiennent un article vide au lieu du texte.

## Vous gérez un site ?

- Pour que nos utilisateurs puissent enregistrer vos articles, autorisez ce User-Agent dans votre pare-feu ou votre protection anti-bots (Cloudflare, par exemple).
- Un article est mal extrait, ou vous préférez qu'on ne récupère pas votre site ? Écrivez à [helpdesk@wallabag.it](mailto:helpdesk@wallabag.it). On peut aussi ajuster les règles d'extraction pour votre site.

wallabag est open source : le code qui récupère et extrait les articles est dans [wallabag](https://github.com/wallabag/wallabag) et [Graby](https://github.com/j0k3r/graby).

{{% /blocks/section %}}
