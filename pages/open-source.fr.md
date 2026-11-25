---
title: Ce que wallabag.it finance dans wallabag
slug: open-source
description: "Les abonnements wallabag.it financent le développement de wallabag, le projet open source : nouvelles fonctionnalités, performances, sécurité et corrections."
hero:
  title: Votre abonnement finance wallabag
  color: primary
  compact: true
  lead: Les développements payés par wallabag.it sont ajoutés au projet open source. Tout le monde en profite, même sans abonnement.
blocks:
  - type: features
    color: light
    wide: true
    title: Les principales nouveautés
    items:
      - icon: fa-rss
        title: Les flux RSS et Atom
        text: "Abonnez-vous à un site directement dans wallabag. Vous choisissez les nouveaux articles à garder, ou vous les ajoutez tous automatiquement. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/9207)"
      - icon: fa-envelope
        title: La sauvegarde par email
        text: "Envoyez ou transférez un email contenant des liens, wallabag les enregistre. Pendant des années, c’était réservé à wallabag.it. Toutes les instances peuvent maintenant en profiter. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/9227)"
      - icon: fa-shield
        title: Un CAPTCHA à l’inscription
        text: "Si votre instance est ouverte au public, il bloque les inscriptions de robots. Il est optionnel et ne dépend d’aucun service externe. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/8960)"
      - icon: fa-key
        title: Les mots de passe compromis
        text: "wallabag peut refuser un mot de passe qui apparaît dans une fuite de données. L’option est désactivée par défaut. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/8767)"
      - icon: fa-ban
        title: Le blocage de certains sites
        text: "Vous hébergez votre instance ? Vous pouvez empêcher wallabag de contacter certains domaines. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/8966)"
      - icon: fa-universal-access
        title: L’accessibilité
        text: "Les boutons de l’interface fonctionnent mieux au clavier et avec un lecteur d’écran. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/8978)"
  - type: features
    wide: true
    title: Performances et fiabilité
    intro: Certains comptes wallabag.it contiennent énormément d’articles. Ça nous aide à repérer les lenteurs et les bugs, puis à les corriger dans wallabag.
    items:
      - icon: fa-bolt
        title: Des applications plus rapides
        text: "La liste de vos articles se charge plus vite dans les applications. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/9224)"
      - icon: fa-book
        title: L’export EPUB
        text: "Certains articles [faisaient planter l’export](https://github.com/wallabag/wallabag/pull/9223), c’est réparé. Et [la couverture est de retour](https://github.com/wallabag/wallabag/pull/9221)."
      - icon: fa-wrench
        title: Imports et temps de lecture
        text: "Corrections sur [l’import HTML de Pocket](https://github.com/wallabag/wallabag/pull/9222) et sur [le calcul du temps de lecture](https://github.com/wallabag/wallabag/pull/9253) des articles mal encodés."
  - type: features
    color: light
    columns: col-md-6
    title: Sécurité
    intro: Une partie du financement sert aussi à la sécurité.
    items:
      - icon: fa-network-wired
        title: Votre réseau privé
        text: "wallabag ne télécharge plus les images hébergées sur des adresses de votre réseau privé. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/9220)"
      - icon: fa-broom
        title: Le contenu des articles
        text: "wallabag nettoie mieux le contenu des articles qu’il enregistre. [Voir sur GitHub](https://github.com/wallabag/wallabag/pull/9198)"
  - title: Et aussi
    text: |
      - Pour les personnes qui hébergent leur instance : [l’adresse de signalement d’un article](https://github.com/wallabag/wallabag/pull/8958), [le niveau des logs](https://github.com/wallabag/wallabag/pull/8957) et [le nom des cookies](https://github.com/wallabag/wallabag/pull/9181) sont configurables.
      - Dans l’interface : corrections sur [la suppression d’un article archivé](https://github.com/wallabag/wallabag/pull/9182), [le menu Tags](https://github.com/wallabag/wallabag/pull/9180) et [les liens d’export](https://github.com/wallabag/wallabag/pull/9183).
      - Côté technique : [les menus ont été réorganisés](https://github.com/wallabag/wallabag/pull/9192), et des corrections ont été faites sur [la configuration](https://github.com/wallabag/wallabag/pull/9175), [l’installation](https://github.com/wallabag/wallabag/pull/8976) et [l’environnement de développement](https://github.com/wallabag/wallabag/pull/8975).
    buttons:
      - label: Toutes les contributions sur GitHub
        url: "https://github.com/wallabag/wallabag/pulls?q=is%3Apr+%22Backed+by+wallabag.it%22"
        style: outline-primary
        icon: external-link
trial:
  title: Vous aussi, financez le projet open source
  lead: 14 jours d’essai gratuit, sans carte bancaire. Vous vous abonnez ensuite si ça vous plaît.
---

wallabag.it est un service payant qui repose sur un logiciel libre. Vos abonnements ne servent pas uniquement à payer les serveurs et le support : ils aident aussi le projet.

Depuis juillet 2026, wallabag.it finance directement des développements, réalisés par [Yassine Guedidi](https://github.com/yguedidi) et par moi, Nicolas. **Au 31 décembre 2026, wallabag.it aura investi presque 4 000 € dans le projet open source.**

Pour les détails, lisez [l’annonce](/fr/blog/2026/06/30/wallabag-it-finance-developpements-open-source/), [les premières contributions](/fr/blog/2026/07/23/captcha-optionnel-wallabag-financement-wallabag-it/) et [le point de novembre 2026](/fr/blog/2026/11/24/vos-abonnements-continuent-d-ameliorer-wallabag/).
