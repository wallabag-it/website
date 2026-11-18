---
title: Tarifs, dès 11€ par an
slug: tarifs
description: "Les abonnements wallabag.it : 3 mois pour 4€, un an pour 11€ ou l'abonnement soutien à 30€. Fonctionnalités premium incluses : sauvegarde par email, imports, flux RSS. Essai gratuit de 14 jours, sans carte bancaire."
#image: images/social/pricing-fr.png
software_schema: true
menu: {main: {weight: 35, name: "Tarifs"}}
hero:
  title: Dès 11€ par an
  color: primary
  compact: true
  lead: "Tous les abonnements donnent accès à tout. Choisissez juste la durée. Commencez par un **essai gratuit de 14 jours**, sans carte bancaire."
  cta: trial
blocks:
  - type: plans
    plans:
      - id: 3m
        title: 3 mois
        period: pour 3 mois
        highlights: ["Service complet inclus", "Sans carte bancaire", "Export à tout moment"]
        text: Pour essayer sans engagement. Vous pouvez exporter vos articles à tout moment.
        button: Essayer gratuitement
      - id: 1y
        title: 1 an
        period: moins de 1 €/mois
        featured: true
        badge: Le plus populaire
        highlights: ["Le moins cher sur un an", "Pas de renouvellement automatique", "Toutes les fonctionnalités"]
        text: Le moins cher sur un an. Un paiement, pas de renouvellement automatique.
        button: Essayer gratuitement
      - id: heart
        title: "L'abonnement ❤️"
        period: par an
        highlights: ["Les mêmes fonctionnalités", "Aide un peu plus wallabag", "Merci !"]
        text: "Les mêmes fonctionnalités que l’abonnement annuel. Vous payez un peu plus pour aider wallabag, merci ❤️"
        button: Soutenir wallabag
    notes:
      - "Essai gratuit de 14 jours · aucune carte bancaire demandée · sauvegarde par email, flux et imports avec l’abonnement · exportez vos données à tout moment"
      - Votre abonnement paie le développement de wallabag et garde le service sans publicité.
  - type: proof
    color: light
    title: Ce que vous obtenez après l’inscription
    text: Vous sauvegardez depuis le navigateur, vous retrouvez tout dans votre liste, vous lisez sur votre téléphone. Même sans réseau.
    items:
      - image: images/features/firefox.png
        alt: Extension navigateur wallabag sauvegardant un article en un clic.
        title: Sauvegarder en un clic
        text: Envoyez les articles vers wallabag.it depuis votre navigateur au lieu de garder un nouvel onglet ouvert.
      - image: images/features/homepage.png
        alt: Liste de lecture wallabag.it avec des articles sauvegardés.
        title: Une vraie liste de lecture
        text: L’article entier est stocké dans votre compte, nettoyé pour être facile à lire et à retrouver.
      - image: images/hero/reader-mobile.webp
        alt: Un article sauvegardé, lu sur un téléphone avec wallabag.it.
        title: Lire plus tard, même hors connexion
        text: Retrouvez vos articles sur votre téléphone ou votre tablette quand vous avez le temps.
  - type: features
    wide: true
    title: Pourquoi wallabag.it est payant
    items:
      - icon: fa-user-secret
        title: Sans publicité, sans revente de données
        text: wallabag.it vit des abonnements. Pas de pub, pas de pistage, et vos données ne sont jamais revendues.
      - icon: fa-server
        title: Hébergé en Europe
        text: L’abonnement paie les serveurs en Europe, les sauvegardes, les mises à jour et le support.
      - icon: fa-heart
        title: Il finance le projet open source wallabag
        text: |
          wallabag existe depuis 2013 et wallabag.it depuis 2016. Votre abonnement paie le service hébergé et le projet open source derrière.
          [Ce que ça finance](/fr/blog/2026/06/30/wallabag-it-finance-developpements-open-source/) · [Voir wallabag sur GitHub](https://github.com/wallabag/wallabag).
  - type: features
    color: dark
    wide: true
    title: Ce que l’abonnement ajoute
    items:
      - icon: fa-envelope
        title: Sauvegarde par email
        text: "Recevez votre adresse privée `save+USER+TOKEN@wallabag.it` : envoyez ou transférez un email contenant des liens, ils sont sauvegardés automatiquement. Pratique pour les liens que vos proches vous envoient."
      - icon: fa-cloud-download
        title: Import depuis un autre service
        text: Rapatriez votre liste de lecture depuis Pocket, Instapaper, Pinboard, Omnivore, Shaarli ou un autre wallabag. Les tags et les statuts lu/favori sont conservés.
      - icon: fa-rss
        title: Suivre des flux RSS et Atom
        text: "Collez l’adresse d’un site : wallabag.it trouve son flux et sauvegarde les nouveaux articles dans votre compte, automatiquement si vous le souhaitez."
  - type: checklist
    color: light
    title: Et tout le reste
    items:
      - Lecture confortable, sans distraction
      - Applications Android et iOS, avec lecture hors-ligne
      - Extensions Firefox et Chrome
      - Tags et recherche full text
      - Surlignage et annotations
      - Export en PDF, ePUB, mobi et plus
      - Support inclus
      - Hébergé en Europe, conforme RGPD
    outro: "[Découvrir toutes les fonctionnalités de wallabag.it →](/fr/features/)"
  - type: testimonials
    title: Ce qu’en disent nos lecteurs
  - color: light
    align: center
    title: wallabag.it et les autres
    text: |
      |  | **wallabag.it** | Instapaper | Raindrop.io | Pinboard |
      |---|---|---|---|---|
      | Prix par an | **11 €** | ~55 € | ~26 € | ~22 € |
      | Article complet sauvegardé, pas seulement le lien | ✅ | ✅ | ❌ orienté favoris | ❌ pas de vue lecture |
      | Open source | ✅ | ❌ | ❌ | ❌ |
      | Sans pub, sans pistage | ✅ | ❌ | ❌ | ✅ |
      | Hébergé en Europe | ✅ | ❌ | ❌ | ❌ |
      | Applications avec lecture hors-ligne | ✅ | ✅ | partiel | ❌ |
      | Import facile depuis Pocket | ✅ | ✅ | ✅ | ❌ |
    outro: "Plus de détails dans [Quelle alternative à Pocket choisir ?](/fr/alternatives/pocket/)"
  - type: faq
    title: Questions fréquentes sur l’abonnement
    ids: ["trial-end", "trial-limits", "renewal", "payment", "refund"]
    outro: "[Consulter toutes les questions fréquentes →](/fr/faq/)"
trial:
  title: Essayez avec votre premier article
  lead: Créez votre compte et essayez gratuitement pendant 14 jours. Aucune carte bancaire demandée.
  button: Se créer un compte
---
