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

#### STEP 1 Structurer mon application API 
    1. voir Step 0

#### STEP 2 Completer ma table user

    1. Completer le modele table user
    2. Completer le controler 
    3. Completer le route
    4. Completer index
    5. Completer models/indexindex     
    6. tester avec postman

#### STEP 3 Completer check role

    1. model, controller, routes, index et models/index
    2. etablir la liaison de table dans le/les model concerné ( 11, 1N, NN )
    3. selon ce que j'ai besoins : include dans controller
    4. tester postman

#### STEP 4 Faire la meme chose pour table discussion et Message (relation 0N -> 1,1)

    1. model, controller, routes, index et models/index, liaison, include et postman
    2. 