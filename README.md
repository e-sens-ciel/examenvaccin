# Covid Killer

## Infos
Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- épreuve théorique: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (interactions utilisateur): 30 pts

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note.*

*Deux langues autorisées: français, anglais.*

*Copier/coller de code d'internet sanctionnés.*

*Pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS.*

*Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...).*

*Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées.*

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question.

Vous pouvez répondre à même ce document ou dans un fichier à part.

- Qu'est-ce que JavaScript vanilla ?
JavaScript vanilla est un gramework rapide et léger avec lequel on peut créer de puissantes et incroyables applications JavaScript. Il est utilisé par les grands comme facebook,twitter,amazon,linkedin,ebay etc etc... La puissance et la vitesse de ce framework est incomparable avec les autres frameworks. On dit qu'il est le framework JavaScript le plus utilisé au monde.
On peut gérer la gestion du DOM, de canvas, il est souple,léger, complet et pèse peu(25bytes). 

- Qu'est-ce qu'AJAX ?
AJAX est une API web présente dans JavaScript qui permet de faire des requêtes HTTP sans devoir recharger la page web. Exemple: lorsqu'on veut afficher la liste complète de ses amis, nous n'avons pas besoin de recharger pour ce faire. AJAX(Asychronous JavaScript and XML) ne porte pas bien son nom, car il peut envoyer et recevoir autre chose que du XML, c'est à dire du JSON aussi.

- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
Le JavaScript est un langage différents des langages comme c#, java ou c++ ... Il peut être
mal aimé, car il est fait de différences comme le typage qui est dynamique, la sémantique du mot clé this est différente, il y a de l'omni-présence de l'asynchrone, c'est une programmation fonctionnelle et la portée des variables est étendue aux fonctions et non aux blocs. Il fait des conversions bizzares, les variables globales sont par défaut et il n'y a pas d'espace de nommage.

- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
Oui mais il n'a que 6 types. Objet , number, string, boolean, null et undefined. Les types null et undefined sont des types spéciaux. 

- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
SASS n'est pas un langage. C'est un préprocesseur CSS, une technologie qiu améliore le code base et nous simplifie le travail.
Grâce à la compilation, nous pourrons transformer SASS en CSS traditionnel car le navigateur est incapable de comprendre SASS. Il faut donc traduire la syntaxe de SASS en CSS pour que le navigateur puisse l'utiliser(compilation).
- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
On dit qu'il est multi-paradigme, car il supporte le paradigme objet, impératif et fonctionnel.
Par exemple depuis ES6 il existe en JavaScript, des classes. En fonction du problème à résoudre, il est possible de travailler avec un paradigme ou un autre.
- En JS, une fonction peut-elle retourner une fonction ?
Oui, une fonction peut retourner une fonction.
En JavaScript, une fonction est de première classe. Elle peut être traîtée comme un type primitif ou un objet. 
- Est-ce que `alert` existe en Node.JS ?
Alert est une méthode de window. En node JS il y a un module npm connu sous le nom de "popups" qui peut être utilisé pour faire un popup.alert. 
- Est-ce que `window.console.log === console.log` dans le navigateur ?
`window.console.log === console.log` retournent true. Window est un objet qui est présent côté navigateur. Il contient pleins de choses. On utilise ce qu'il contient sans citer "window".
- Quel est votre aspect préféré de JavaScript ? **(s)**
J'ai d'abord découvert JAVA et c#, donc au début JavaScript m'a fait assez peur. Mais au fur et à mesure, au plus j'apprends à le connaître, au plus je commence à apprécier. Il offre une certain flexibilité à manipuler les données, il peut être utilisé en front-end et en back-end(node js). Je le trouve facile à apprendre, c'est un langage puissant, car il est multi-paradigme et il permet de créer des sites dynamiques, c'est ce que j'aime le plus dans ce langage. 
## Épreuve pratique sur 80pts
Vous êtes codeuse/codeur JavaScript dans une clinique du centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks publics de la ville, pour les responsables d'équipes médicales.
Votre site doit permettre à ces personnes de réserver différents types de vaccins parmi ceux en cours de développement.

Cloner et utiliser cette "seed" pour produire votre Single Page Application.

Le script `./script.js` est déjà lié à la page `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture (ne jamais toucher le HTML, garder le lien vers les styles dans le script).

- supprimer le dossier ".git" à la racine du clone
- créer votre propre repo/remote sur votre github et l'associer à votre clone du projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"
- add, commit, et push réguliers sont recommandés

### Modéliser les données
Produire un fichier data.js dans `./src`, qui exporte un Array d'objets avec les data suivantes:
#### Vaccin 1
Nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 420  
Prix unitaire: 17$  
Approuvé: oui  
#### Vaccin 2
Nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 130  
Prix unitaire: 12$  
Approuvé: non  
#### Vaccin 3
Nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 5028  
Prix unitaire: 1.78$  
Approuvé: non  
#### Vaccin 4
Nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 980  
Prix unitaire: 14$  
Approuvé: oui  
#### Vaccin 5
Nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 240  
Prix unitaire: 28$  
Approuvé: non  
#### Vaccin 6
Nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 110  
Prix unitaire: 31$  
Approuvé: non  

### Transformer les données en éléments du DOM
Les éléments suivants sont créés dans la div `#app` via JavaScript:
- un `h1` avec le nom du site
- un élément `header`, présentant 
  - un bouton pour classer les vaccins par prix
  - un bouton pour cacher les vaccins "non approuvés" 
- un élément HTML `main`. 
  - c'est le catalogue montrant tous les vaccins sous forme de "cartes", côte à côte ou à la ligne
  - chaque carte présente 
    - une image de vaccin (présente dans le dossier "static")
    - toutes les infos disponibles pour ce vaccin
    - un "input" de "quantité" et un bouton "réserver" à côté
- un élément `footer` résume la commande en cours (vide au début), et contient un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur
- Lorsque l'utilisateur clique sur "cacher les vaccins non approuvés" les vaccins non approuvés sont cachés. On peut désormais 
les re-montrer grâce au même bouton
- Lorsqu'un utilisateur clique sur le bouton "réserver" d'une carte de vaccin
  - le vaccin apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
  - l'input de quantité disparaît de la carte
  - le bouton "réserver" de ce vaccin devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide entièrement
  - un message indique "La commande a bien été enregistrée..."

### Bonus (pas compté dans les points - peut réhausser la note finale):
- sur cet écran final, un bouton "Annuler la commande" permet de  recharger automatiquement la page dans son état initial
- le bouton "classer les vaccins par prix" fonctionne, et réordonne les cartes du vaccin le moins cher au plus cher
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
