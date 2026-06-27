# Funnel conversion wallabag.it

Objectif : suivre le passage visiteur -> essai -> activation -> abonnement -> renouvellement, avec assez peu de données pour rester simple à maintenir chaque semaine.

## Événements à suivre

Sites Matomo :

- `wallabag.it` site vitrine : `idSite=14`
- `app.wallabag.it` application : `idSite=12`

### Site marketing

Le site Hugo envoie déjà ces événements Matomo :

| Événement | Catégorie Matomo | Action Matomo | Nom |
| --- | --- | --- | --- |
| Vue page tarifs | `Conversion` | `pricing_view` | chemin de page |
| Clic inscription | `Conversion` | `register_click` | chemin de page + libellé CTA |

Tous les liens vers `https://app.wallabag.it/register/` sont décorés automatiquement avec :

- `utm_source=wallabag_site`
- `utm_medium=referral`
- `utm_campaign=trial_conversion`
- `utm_content=<page>__<cta>`

Les campagnes externes gardent leur propre convention UTM, par exemple celle définie dans `docs/communication/wallabag-it-after-pocket-campaign.md`.

### Application

`app.wallabag.it` envoie les conversions côté serveur vers Matomo `idSite=12`, sous forme de pages virtuelles. Cela couvre aussi les usages API depuis les applications tierces.

| Conversion | Moment exact | Page virtuelle Matomo |
| --- | --- | --- |
| `trial_created` | compte d'essai créé | `/api-tracking/trial-created` |
| `first_article_saved` | premier article sauvegardé avec succès | `/api-tracking/first-article-saved/{method}` |
| `activation_step_completed` | extension installée, app connectée ou import lancé | `/api-tracking/activation-step/{step}` |
| `subscription_started` | paiement validé | `/api-tracking/subscription-started/{plan}` |
| `renewal_completed` | renouvellement payé | `/api-tracking/renewal-completed/{plan}` |

Configurer les objectifs Matomo de l'app sur ces URLs virtuelles plutôt que sur des événements. Les hits serveur utilisent un `uid` pseudonymisé et ne transmettent ni email, ni username, ni URL/titre d'article.

## Tableau hebdomadaire

Mettre à jour chaque lundi matin avec les 7 derniers jours et un cumul 4 semaines.

Un modèle prêt à remplir est disponible dans `docs/communication/weekly-funnel-report-template.md`.

| Métrique | 7 jours | 4 semaines | Source |
| --- | ---: | ---: | --- |
| Visiteurs uniques |  |  | Matomo |
| Sessions par source principale |  |  | Matomo acquisition |
| Vues page tarifs |  |  | `pricing_view` |
| Clics vers inscription |  |  | `register_click` |
| Taux visite -> clic inscription |  |  | calcul |
| Comptes d'essai créés |  |  | app |
| Taux clic inscription -> compte |  |  | calcul |
| Comptes avec premier article sauvegardé |  |  | `first_article_saved` |
| Taux compte -> premier article |  |  | calcul |
| Comptes activés extension/app/import |  |  | `activation_step_completed` |
| Abonnements démarrés |  |  | `subscription_started` |
| Taux essai -> abonnement |  |  | calcul |
| Renouvellements |  |  | `renewal_completed` |
| CA nouveau |  |  | paiements |
| CA renouvellement |  |  | paiements |

## Lecture attendue

- Si les clics inscription montent mais pas les comptes créés : vérifier la page d'inscription, les erreurs, la vitesse et la clarté du formulaire.
- Si les comptes créés montent mais pas le premier article : améliorer l'onboarding J0 et le premier écran app.
- Si l'activation est bonne mais pas l'abonnement : clarifier les fonctionnalités réservées aux abonnés, le prix annuel et la fin d'essai.
- Ne pas modifier les prix avant 4 semaines de baseline.
