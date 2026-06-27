# Activation essai et emails wallabag.it

Objectif : aider un compte d'essai à comprendre la valeur de wallabag.it avant la fin des 14 jours, sans pression commerciale agressive.

## Onboarding app

Après création du compte, afficher une action principale :

> Sauvegarder votre premier article

Étapes recommandées :

1. Proposer un champ URL simple avec le bouton `Sauvegarder`.
2. Après sauvegarde réussie, ouvrir l'article dans la vue de lecture.
3. Ensuite seulement, proposer trois prochaines actions au choix :
   - installer l'extension navigateur ;
   - connecter l'application mobile ;
   - importer depuis Pocket, Instapaper ou un autre service.

Fonctionnalités réservées aux abonnés à afficher avec transparence :

- sauvegarde par email ;
- flux RSS/Atom privés ;
- imports depuis d'autres services.

Message suggéré :

> Ces fonctionnalités consomment plus de ressources et sont incluses dans tous les abonnements. Vous pouvez continuer l'essai gratuitement pour sauvegarder et lire vos articles, puis vous abonner quand vous voulez les débloquer.

## Séquence email d'essai

Règles :

- envoyer seulement aux comptes d'essai ;
- arrêter la séquence dès qu'un abonnement est démarré ;
- garder un lien de désinscription clair ;
- utiliser les UTM `utm_source=email`, `utm_medium=lifecycle`, `utm_campaign=trial_activation`.

### J0 - Bienvenue

Objet FR : `Bienvenue sur wallabag.it - sauvegardez votre premier article`

Objet EN : `Welcome to wallabag.it - save your first article`

But : faire accomplir la première sauvegarde.

CTA : `Sauvegarder mon premier article` / `Save my first article`

### J2 - Installer l'outil qui crée l'habitude

Objet FR : `Le plus simple : sauvegarder en un clic`

Objet EN : `The easiest way: save in one click`

But : installer l'extension navigateur ou connecter l'application mobile.

CTA : page applications.

### J5 - Retrouver ses anciennes lectures

Objet FR : `Vous venez de Pocket ou Instapaper ?`

Objet EN : `Coming from Pocket or Instapaper?`

But : expliquer l'import, surtout pour les utilisateurs venant d'un autre service.

CTA : documentation d'import.

### J10 - Rappel valeur

Objet FR : `Vos articles, vos données, 11 € par an`

Objet EN : `Your articles, your data, €11 a year`

But : rappeler le prix annuel, l'hébergement européen, l'open source, l'absence de publicité et l'export.

CTA : abonnement.

### J13 - Fin d'essai

Objet FR : `Votre essai wallabag.it se termine bientôt`

Objet EN : `Your wallabag.it trial ends soon`

But : prévenir calmement de la fin d'essai et donner le lien abonnement.

CTA : abonnement.

## Mesure

Chaque email doit remonter :

- ouvertures si disponible ;
- clics CTA ;
- abonnement démarré dans les 72 heures après clic ;
- désinscriptions.

Mesurer séparément les personnes ayant déjà sauvegardé un article et celles qui ne l'ont pas encore fait : les messages J2/J5 peuvent être adaptés plus tard selon ce comportement.

Les textes prêts à intégrer sont disponibles dans `docs/communication/trial-email-templates.md`.
