---
title: 'Présentation du logiciel marknotes'
created_time: '2020-12-13 15:29:39'
language: fr
subtitle: ''
---

# Présentation du logiciel marknotes

<small>v1 12 mai 2017</small>

https://www.marknotes.fr - https://github.com/cavo789/marknotes

## Téléchargement

Cette présentation sera téléchargeable sur le site https://www.joomladay.fr/ dès la fin du **#jd17fr**.

Elle sera également disponible en ligne sur le site https://www.marknotes.fr.

## Qui suis-je ?

*   Développeur d’[aeSecure](https://www.aesecure.com/) solution de sécurisation, d’optimisation et de nettoyage de sites web Apache
*   Développeur de [marknotes](https://github.com/cavo789/marknotes), logiciel de conversion de notes en un site web de gestion de connaissances
*   Administrateur sur le forum de [Joomla! France](https://forum.joomla.fr) ([cavo789](https://forum.joomla.fr/member.php?38299-cavo789&tab=aboutme))
*   Membre fondateur du [JUG! Wallonie](https://www.jugwallonie.be/)

---

![Logo marknotes](.images/logo/logo-marknotes.svg)

## 1. Qu'est-ce que marknotes ?

---

Logiciel pour **centraliser** en un seul endroit et

dans un **format simple** et

**ouvert** des notes

en **conservant la maîtrise totale** des données.

### Des notes ?

*   des documentations techniques, mode d'emploi de logiciels, ...
*   des comptes-rendu de réunions,
*   des notes prises sur le vif,
*   des trucs &amp; astuces, pense-bêtes,
*   des informations sur des abonnements,
*   des factures, tickets de caisse, comptabilité,
*   des présentations,
*   des marque-pages (bookmarks),
*   ...

---

![Evernote fait ça](.images/presentation/evernote_fait_ca.jpg)

---

![Et OneNote aussi en fait](.images/presentation/onenote_aussi.jpg)

---

![](.images/presentation/linus_torvalds_free.png)

[source](https://twitter.com/linus__torvalds/status/296333253571387392?lang=en)

----

Lisez-vous les conditions d'utilisation et leurs modifications ?

*Vous devriez...*

---

![](.images/presentation/evernote.jpg)

<small>**La dernière mise à jour de la Politique de confidentialité permet à certains employés d'Evernote d'exercer un contrôle des technologies d'apprentissage machine appliquées aux contenus des comptes, sous réserve des limites décrites ci-dessous, afin de développer et d'améliorer le service Evernote.<br/><br/>Le principal objectif est de vérifier que nos technologies d'apprentissage machine fonctionnent correctement pour vous montrer des contenus et fonctionnalités pertinents. Nos systèmes informatiques font du bon travail, mais une intervention humaine est parfois indispensable pour vérifier que tout fonctionne comme prévu.**</small>

https://blog.evernote.com/fr/2016/12/15/politique-de-confidentialite/

## marknotes est Open Source et ouvert

*   Vous l'**auto-hébergez** sur votre serveur web,
*   Il va convertir vos notes en un site **web** fonctionnel,
*   Vos informations restent votre propriété,
*   Parce qu'il est ouvert,
	* vos notes seront toujours accessibles,
	* modifiez-le grâce aux **plugins**.

### Format de fichier texte

Les notes sont des fichiers textes sur votre disque et seront donc aisément modifiable et, mieux,  réutilisable :

|  |  |  |  |
| --- | --- | --- | --- |
| [docx](Presentation-de-marknotes.docx) | [epub](Presentation-de-marknotes.epub) | [html](Presentation-de-marknotes.html) | [odt](Presentation-de-marknotes.odt) |
| [pdf](Presentation-de-marknotes.reveal.pdf) | [txt](Presentation-de-marknotes.txt) | ... | ... |

Il suffit d'écrire un convertisseur (un plugin); plusieurs sont déjà disponibles. **Écrivez le vôtre, c'est facile.**

### Slideshow / Présentation en ligne

Mais ce n'est pas tout, vous pourrez même écrire des notes qui seront affichées comme si vous aviez rédigé une présentation.

<div class="blink frame">Cette présentation en est un exemple ! :")</div>

<small>*Et cela sans rien faire (ou presque)*</small>

## Cette présentation est donc une note

Voici le fichier sur le disque : [md](Presentation-de-marknotes.md).

Et mis en forme, avec un template basé sur [reveal.js](http://lab.hakim.se/reveal-js/).

Peut-être préférez-vous [remark](Presentation-de-marknotes.remark) ou, plus simplement, en [html](Presentation-de-marknotes.html).

---

![Notepad](.images/presentation/notepad.png)

## 2. Installation de marknotes

*   Rendez-vous sur https://github.com/cavo789/marknotes
*   Cliquez sur le bouton **Clone or download** pour télécharger le zip
*   Décompressez l'archive; gardez juste le dossier /src
*   Uploadez le dossier /src sur votre serveur web (local ou distant)
*   Accédez au site, l'installation est déjà finie.

---

![Dossiers](.images/presentation/folders.png)

## 3. Écrire une note

![Écrire une note](.images/presentation/ecrire.png)

### Choix d'un éditeur offline

Une note, c'est **juste un fichier texte**.

Vous pouvez utiliser l'éditeur le plus basique qui soit (**Notepad**, **TextEdit**, **gedit**, **Vi**, ...)

### Intérêt du mode offline

Il  n'est pas nécessaire de lancer un navigateur, ouvrir une URL, se connecter à une administration, se rendre dans un menu Article, nouvel article, ...

**On lance l'éditeur et on est prêt à écrire sa note**

On visualise sa note depuis son navigateur (mode slideshow p.ex.), on retourne dans son éditeur, on modifie, sauve et on rafraichit la page. C'est simple et rapide !

### Courbe d'apprentissage

*   Savez-vous écrire un document texte dans Notepad ?
*   Savez-vous créer un dossier sur votre disque dur ?

Oui ? **Vous maitrisez donc déjà marknotes.**

C'est ... simplissime !!!

### Mise en forme

Pour avoir un minimum de mise en forme, marknotes supporte nativement le langage **Markdown** *qui est cependant optionnel*.

```markdown
# Écrire avec Mardown
Il est vraiment très simple de mettre quelques mots en **gras**
et d'autres en *italique* avec Markdown.
Vous pouvez même ajouter un
[lien vers marknotes.fr](https://www.marknotes.fr)
```

Tutoriel : [Mastering markdown sur GitHub](https://guides.github.com/features/mastering-markdown/)

---

![Rappel de la syntaxe markdown](.images/presentation/cheatsheet.jpg)

### Où sauver la note ?

Vos notes doivent être sauvées dans le dossier /docs de votre installation marknotes. Vous pouvez créer autant de dossiers que vous le souhaitez; sur votre disque dur.

![Dossier où stocker les notes](.images/presentation/docs.png)

## 3. L'interface de marknotes

Démo en ligne https://www.marknotes.fr

---

![L'interface de marknotes](.images/presentation/interface.png)

<ul>
<li class="fragment highlight-current">Interface en deux partie : le `treeview` à gauche et le contenu de la note sélectionnée à droite</li>
<li class="fragment highlight-current">Moteur de recherche en haut à gauche</li>
<li class="fragment highlight-current">Grâce aux plugins, une zone de traduction en haut à gauche ou encore des icônes de partage en haut à droite</li>
<li class="fragment highlight-current">Deux boutons <i class="fa fa-cog"></i> donnant accès à une multitude d'options à gauche et à droite</li>
</ul>

### Interface dépourvue car ...

**priorité au contenu**

marknotes propose la surcharge des templates, adaptez l'affichage selon vos préférences :-)

Vous pouvez aussi activer/désactiver les **plugins** comme p.ex. ceux de la traduction et du partage et créer les vôtres !

### La recherche

Lors de la frappe, la zone d'édition affiche une liste de **tags**. La recherche est multi-critère comme illustré ci-dessous.

![Recherche](.images/presentation/recherche.png)

### L'accès aux options

marknotes affiche deux petites roues dentées à gauche pour l'application et à droite pour la note en cours d'affichage.

![Barres d'outils](.images/presentation/toolbar.png)

Un clic sur le bouton fait apparaître la liste des options.

### Édition en ligne d'une note

Un éditeur basé sur [Simple MarkDown Editor](https://github.com/NextStepWebs/simplemde-markdown-editor) est accessible depuis le bouton des fonctionnalités.

![Bouton édition](.images/presentation/bouton-edit.png)

*Selon que vous ayez désactivé ou pas l'authentication, il faudra d'abord s'authentifier pour accéder à l'option d'édition*

### Connexion : login et mot de passe par défaut

Le fichier `settings.json.dist` reprend le login et le mot de passe par défaut :

```ini
"username": "admin",
"password": "marknotes"
```

Copiez settings.json.dist et créez le fichier settings.json pour spécifier vos propres paramètres.

---

![Éditeur en ligne](.images/presentation/editor-online.png)

<span>**L'éditeur permet, entre autre, un affichage en deux colonnes : le code source et le rendu HTML<br/>
Il donne aussi accès à plusieurs options dont un bouton d'encryption**
</span>

## 4. Utilisation avancée

### Le routeur de marknotes

Le mode réécriture des URLs est immédiatement activé.

#### Les fichiers spécifiques

Ces fichiers n'existent pas sur le disque :

*   [tag.json](%ROOT%/tag.json) - La liste de vos tags
*   [timeline.html](%ROOT%/timeline.html) - Affichage de la liste des notes, par ordre chronologique inversé,
*   [sitemap.xml](%ROOT%/sitemap.xml) - Liste de vos notes pour alimenter les moteurs de recherche

#### Accès direct aux fichiers

L'accès aux notes peut se faire au travers de l'interface ainsi qu'en accès direct en tapant le lien vers la note p.e. `%ROOT%/docs/joomla/Presentation-de-marknotes.html` et l'on peut utiliser les différents formats supportés (.epub, .docx, .html, .md, .odt, .pdf, .reveal, .remark, .txt, ...)

### Fichiers spécifiques

#### Ligne du temps - timeline.html

La ligne du temps (**timeline.html**) permet d'obtenir la liste des notes, de la plus récente à la plus ancienne.

![timeline](.images/presentation/timeline.png)

#### Sitemap - sitemap.xml

Une carte du site, générée en temps, réel est disponible à l'adresse **sitemap.xml**.

![sitemap](.images/presentation/sitemap.png)

#### .slides, .reveal ou .remark

marknotes génère, en temps réel, des affichages au format `slideshow` de vos notes.

Il suffit de changer l'extension en .reveal ou .remark  (https://...ma-note.html, https://...ma-note.reveal, etc.)

Le format .slides est dynamique et respecte le choix posé par le webmaster (fichier settings.json)

https://github.com/hakimel/reveal.js - https://github.com/gnab/remark

#### pdf

L'exportation au format .pdf utilise [dompdf](https://github.com/dompdf/dompdf) mais il est possible de paramétrer son site pour utiliser [decktape](https://github.com/astefanutti/decktape) ou [pandoc](http://pandoc.org/) afin d'avoir un rendu nettement meilleur (*actuellement uniquement sous Windows*).

#### epub, docx, odt, txt, ...

L'exportation aux autres formats est pris en charge par des plugins nécessitant une installation de [pandoc](http://pandoc.org/).

### Astuce : mode présentation - choix du thème

Cliquez en bas à gauche sur le bouton `hamburger` puis sélectionnez `Thèmes`

![Themes](.images/presentation/themes.png)

### Astuce : cacher des fichiers/dossiers

Si vous désirez masquer certains dossiers comme les dossiers qui vont contenir des images, il suffit de **préfixer le nom du dossier par un point**.

.images, .sauvegardes, ... seront ignoré et non mentionné dans la liste de gauche.

### Optimisation de la vitesse du logiciel

marknotes utilise différents **mécanismes de cache**, tant au niveau du serveur qu'au niveau du navigateur pour fluidifier son utilisation.

*Le bouton des options, au niveau de la liste des fichiers, permet de vider le cache.*

### Plugin d'encryption

Parce qu'une note .md est un fichier texte, marknotes propose un plugin, actif par défaut, pour crypter ses données afin qu'elles ne soient pas lisibles par quiconque aurait accès au fichier sur le disque. Il suffit pour crypter quelque chose de l'inclure dans un tag &lt;encrypt&gt;

**&lt;encrypt&gt;Mot de passe&lt;/encrypt&gt;**

Le texte sera alors immédiatement crypté sur le disque.

### Exemple de notes partiellement cryptée
![](.images/presentation/encryption.png)

Sans votre mot de passe et votre mode de cryptage, il va être compliqué de décrypter votre contenu.

### Vous êtes développeur ?

#### Plugins

marknotes est structuré autour de dizaines de plugins; à la manière de Joomla!

**Des plugins de contenu, d'exportation, de tâches, ...**

Vous pouvez aisément greffer vos propres fonctionnalités et **étendre le logiciel à vos besoins.**

#### Templates

De la même manière, les modèles d'affichage sont surchargeables, comme pour Joomla! : vous pouvez redéfinir chaque écran du logiciel, comme une **surcharge d'un template dans Joomla!**

#### Templates multiples

**3 niveaux de templating**

Vous pouvez définir un template pour tout le site marknotes ou par dossier (un template pour vos factures, un template pour vos trucs &amp; astuces, ...) et même, un template précis pour une note précise.

#### Personnalisation poussée

Outre les plugins et les templates, vous pouvez modifier les paramètres de marknotes en intervenant dans le fichier **settings.json** (pour les paramètres) et intégrer sans difficulté aucune vos scripts javascript et feuille de style (fichiers **custom.js** et **custom.css**)

#### Mode débogage

Si vous souhaitez comprendre les arcannes du logiciel marknotes, le fichier `settings.json` permet d'activer deux modes de débogage : simple ou avancé.

```json
{
	"debug": 1,
    "development": 1,
}
```
Ce mode permet de générer un fichier **tmp/debug.log** ainsi que certains affichages à l'écran pour vous aider à, p.ex., développer votre propre plugin.
---
![Debugging](.images/presentation/debug.png)

#### Documenter vos extensions Joomla grâce à AllEvents

**Emmanuel Lecoester**, le développeur de [AllEvents](https://www.allevents3.com/fr) a écrit un composant Joomla permettant de générer la documentation technique d'une extension Joomla!.

Son logiciel est disponible sur gitHub : https://github.com/elecoest/Manifest2MD

Démo : https://www.allevents3.com/documentation/

## Quelques liens utiles

*   Site de démo https://www.marknotes.fr
*   Site de téléchargement https://github.com/cavo789/marknotes
*   Wikipédia, documentation en ligne https://github.com/cavo789/marknotes/wiki

## Extra : Écrire un livre en 2017

https://www.quaternum.net/2017/03/07/ecrire-un-livre-en-2017/

<small>Cet article est vraiment **très intéressant** car il illustre le potentiel d'écrire un livre complet au départ de fichier écrit avec un langage nommé AsciiDoc (fort semblable à Markdown).</small>

<small>L'auteur rédige des chapitres, peut p.ex. les publier sur une plateforme collaborative comme Git, autoriser certaines personnes à corriger le texte (comité de relecture, éditeur, ...), cela durant tout le processus d'écriture.</small>

<small>Ensuite, l'auteur peut générer des fichiers en sortie en pdf, epub, odt, ... mais aussi générer un site web. Tout cela au départ d'une et une seule source et donc, si l'on modifie la source, il suffirait de regénérer les différentes publications (ce qui peut être automatisé bien sûr).</small>

## marknotes est libre

Usez-en ! Abusez-en !

N'hésitez pas à me proposer vos suggestions et pourquoi pas, votre code, le plugin que vous auriez écris.

## ... et ouvert

marknotes est disponible sur [GitHub](https://github.com/cavo789/marknotes) : n'hésitez pas à me rejoindre et à participer; à améliorer l'interface graphique, à proposer un plugin, une correction de code, résolution d'un bug, à proposer une traduction, ...

**Faisons-en un projet collaboratif !**

## Merci pour votre attention

*   Blog: https://www.marknotes.fr
*   Facebook: https://www.facebook.com/marknotes789
*   [christophe AT aesecure.com](mailto:christophe@aesecure.com)