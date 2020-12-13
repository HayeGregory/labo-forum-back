# Pour toute API

## STEP 0 : structurer mon application selon le modele ( mvc - ??): 
    - dossier DB (recoit ma db)

    - dossier models avec un index.js
        + modele à utiliser
        + liaison des tables (associate)
        + instance de sequelize
        + type de sequelize (acces aux fonctions statique)

    - dossier modules ( respresente mes entités)
      dans chacun de ceux-ci :
        + un model : definition de ma table (init, validation, hook, beforevalidation etc...) 
        + un controller : CRUD et methodes specifique
        + un route : definition de mes routes
        + un index : pour export routes et controller
---
# Labo Forum

#### STEP 0 Structurer mon application API 
    1. voir Step 0

#### STEP 1 Completer ma table user

    1. Completer le modele table user
    2. Completer le controler 
    3. Completer le route
    4. Completer index
    5. Completer models/index     
    6. Completer App/index
    7. tester avec postman

#### STEP 2 Completer check role

    1. model, controller, routes, index, models/index et app/index
    2. etablir la liaison de table dans le/les model concerné ( 11, 1N, NN )
    3. selon ce que j'ai besoins : include dans controller
    4. tester postman

#### STEP 3 Faire la meme chose pour table discussion et Message (relation 0N -> 1,1)

    1. Discussion :  model, controller, routes, index, models/index, app/index
    2. Message : model, controller, routes, index, models/index, app/index
    3. test postman
    4. liaison, include
    5. test postman


#### -----------------
Fonctionnalite :
•	Une page d’accueil permettant l’affichage de toutes les discussions ouverte aux visiteurs et membres connectés
•	Une page d’administration permettant à l’administrateur 
o	de nommé des modérateurs parmi les membres ( !!! trié les membres selon leur activité)
o	d’assigné un modérateur à une discussions
o	d’administrer les discussions (supprimer si ne réponds pas à la charte)
•	Une page de modération permettant aux modérateurs d’afficher les messages signalés et le les accepter / éditer / supprimer
•	Quand un modérateur supprime un message, avertir par message privé l’auteur de celui-ci
•	Dès la troisième suppression d’un message d’un auteur, celui-ci passe en inactif. Il ne peut dès lors plus se connecter
•	Créer un formulaire de connection
•	Un utilisateur connecté peut créer des messages dans les discussions suivie
•	Un utilisateur connecté peut signalé un message ne respectant pas la charte du forum
•	Un visiteur peut s’inscrire
•	Un visiteur ne peut voir que les discutions ouverte au public
•	Un visiteur ne peut poster de message
•	Lors de la désactivation d’un membre, un mail (utilisation de NodeMailler) doit lui être envoyé !!!BONUS !!!
