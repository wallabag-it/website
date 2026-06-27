# Templates emails essai wallabag.it

Objectif : séquence simple pour transformer un compte d'essai en utilisateur activé, puis en abonné, sans pression inutile.

Règles d'envoi :

- envoyer uniquement aux comptes d'essai ;
- arrêter la séquence dès que `subscription_started` est enregistré ;
- ne pas envoyer J2/J5 si le compte n'a jamais confirmé son email, si cette contrainte existe côté app ;
- conserver un lien de désinscription clair ;
- ajouter les UTM indiqués sur chaque CTA.

## FR - J0 - Bienvenue

Objet : `Bienvenue sur wallabag.it - sauvegardez votre premier article`

Preheader : `Votre essai gratuit est actif. Commencez par ajouter un article à votre liste de lecture.`

Bonjour,

Votre compte wallabag.it est prêt.

Le plus simple, maintenant, c'est de sauvegarder un premier article. Collez l'adresse d'un article dans wallabag.it, puis ouvrez-le dans la vue de lecture : vous verrez tout de suite l'intérêt du service.

Pendant l'essai, vous pouvez sauvegarder et lire vos articles sur tous vos appareils. Aucune carte bancaire n'est demandée.

CTA : `Sauvegarder mon premier article`

URL : `https://app.wallabag.it/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=fr_j0_first_article`

Signature :

Nicolas  
wallabag.it

## EN - J0 - Welcome

Subject: `Welcome to wallabag.it - save your first article`

Preheader: `Your free trial is active. Start by adding one article to your reading list.`

Hello,

Your wallabag.it account is ready.

The easiest next step is to save your first article. Paste an article URL into wallabag.it, then open it in the reading view: that is where the service starts to make sense.

During the trial, you can save and read your articles across your devices. No credit card is required.

CTA: `Save my first article`

URL: `https://app.wallabag.it/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=en_j0_first_article`

Signature:

Nicolas  
wallabag.it

## FR - J2 - Installer l'outil qui crée l'habitude

Objet : `Le plus simple : sauvegarder en un clic`

Preheader : `Installez l'extension navigateur ou l'application mobile pour utiliser wallabag.it sans y penser.`

Bonjour,

wallabag.it devient vraiment utile quand la sauvegarde d'un article ne demande presque aucun effort.

Si vous lisez surtout depuis votre ordinateur, installez l'extension Firefox ou Chrome : un clic suffit pour envoyer une page dans wallabag.it.

Si vous lisez plutôt sur téléphone ou tablette, connectez l'application mobile pour retrouver vos articles plus tard, y compris hors connexion.

CTA : `Voir les applications`

URL : `https://wallabag.it/fr/applications/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=fr_j2_apps`

## EN - J2 - Install the habit-forming tool

Subject: `The easiest way: save in one click`

Preheader: `Install the browser extension or mobile app so wallabag.it fits your reading habits.`

Hello,

wallabag.it becomes much more useful when saving an article takes almost no effort.

If you mostly read from your computer, install the Firefox or Chrome extension: one click sends the page to wallabag.it.

If you prefer reading on your phone or tablet, connect the mobile app so your articles are ready later, including offline.

CTA: `See the applications`

URL: `https://wallabag.it/en/applications/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=en_j2_apps`

## FR - J5 - Importer ses anciennes lectures

Objet : `Vous venez de Pocket ou Instapaper ?`

Preheader : `wallabag.it peut récupérer votre ancienne liste de lecture.`

Bonjour,

Si vous arrivez depuis Pocket, Instapaper, Pinboard ou un autre service, vous n'avez pas besoin de repartir de zéro.

wallabag.it peut importer votre liste de lecture et conserver autant que possible les informations utiles comme les tags et les statuts de lecture. C'est souvent le moment où le service devient votre vraie bibliothèque d'articles.

Note : les imports depuis d'autres services sont réservés aux comptes abonnés, car ils consomment plus de ressources. Vous pouvez continuer l'essai gratuitement pour sauvegarder et lire des articles, puis vous abonner si vous voulez débloquer l'import.

CTA : `Lire le guide d'import`

URL : `https://helpdesk.wallabag.it/help/en-gb/2-import?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=fr_j5_import`

## EN - J5 - Import your old reading list

Subject: `Coming from Pocket or Instapaper?`

Preheader: `wallabag.it can bring your old reading list with you.`

Hello,

If you are coming from Pocket, Instapaper, Pinboard or another service, you do not have to start from an empty account.

wallabag.it can import your reading list and preserve useful information such as tags and read status whenever possible. For many people, this is when wallabag.it becomes their real article library.

Note: imports from other services are reserved for subscribers because they use more resources. You can keep using the free trial to save and read articles, then subscribe if you want to unlock imports.

CTA: `Read the import guide`

URL: `https://helpdesk.wallabag.it/help/en-gb/2-import?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=en_j5_import`

## FR - J10 - Rappel valeur

Objet : `Vos articles, vos données, 11 € par an`

Preheader : `wallabag.it est open source, hébergé en Europe, sans publicité ni revente de données.`

Bonjour,

wallabag.it n'est pas financé par la publicité, par la revente de données ou par une logique d'investisseurs.

Le service repose sur un abonnement simple : dès 11 € par an, toutes les fonctionnalités sont incluses. Votre abonnement finance l'hébergement, la maintenance, le support et le développement du projet open source wallabag.

Vos articles restent exportables. Votre liste de lecture vous appartient.

CTA : `Voir mon abonnement`

URL : `https://app.wallabag.it/subscription/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=fr_j10_subscription`

## EN - J10 - Value reminder

Subject: `Your articles, your data, EUR 11 a year`

Preheader: `wallabag.it is open source, hosted in Europe, with no ads and no data resale.`

Hello,

wallabag.it is not funded by advertising, data resale or investor pressure.

The service uses a simple subscription: from EUR 11 a year, every feature is included. Your subscription funds hosting, maintenance, support and the development of the open-source wallabag project.

Your articles remain exportable. Your reading list belongs to you.

CTA: `See my subscription`

URL: `https://app.wallabag.it/subscription/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=en_j10_subscription`

## FR - J13 - Fin d'essai

Objet : `Votre essai wallabag.it se termine bientôt`

Preheader : `Aucun prélèvement automatique : choisissez un abonnement si vous voulez continuer.`

Bonjour,

Votre essai wallabag.it arrive bientôt à la fin des 14 jours.

Rien ne sera prélevé automatiquement : nous ne demandons pas de carte bancaire pendant l'essai. Si wallabag.it vous aide à sauvegarder et lire vos articles, vous pouvez choisir un abonnement depuis votre compte.

L'offre annuelle revient à moins de 1 € par mois. L'abonnement soutien permet aussi d'aider davantage le projet.

CTA : `Choisir un abonnement`

URL : `https://app.wallabag.it/subscription/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=fr_j13_trial_end`

## EN - J13 - Trial ending

Subject: `Your wallabag.it trial ends soon`

Preheader: `No automatic charge: choose a subscription if you want to continue.`

Hello,

Your wallabag.it trial is about to reach the end of the 14 days.

Nothing will be charged automatically: we do not ask for a credit card during the trial. If wallabag.it helps you save and read your articles, you can choose a subscription from your account.

The yearly plan is less than EUR 1 a month. The supporter plan is also available if you want to help the project more directly.

CTA: `Choose a subscription`

URL: `https://app.wallabag.it/subscription/?utm_source=email&utm_medium=lifecycle&utm_campaign=trial_activation&utm_content=en_j13_trial_end`
