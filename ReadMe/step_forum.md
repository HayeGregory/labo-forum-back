# pour toute API

## STEP 0 : structurer mon application selon le modele (??): 
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
    2. Completer le controler et router et tester avec postamn
    3. 