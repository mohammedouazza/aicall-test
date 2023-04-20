# Les questions et réponses:


## 1. Les variables existent en Javascript mais n’existent ni en HTML ni en CSS. Vrai ou Faux ? 
#### Vrai, HTML et CSS ne sont pas considérés comme des langages de programmation.

## 2. Quelle est la différence entre ces différentes méthodes de stockage : 
#### Cookie  => C’est un fichier de données stocké dans le navigateur à une durée limitée.
#### SessionStorage => C’est une objet de données stocké chez le client pour une session spécifique à une illimité.
#### LocalStorage  => C’est un objet de données stocké chez le client pour toutes les sessions à une durée illimitée.

## 3. Quelles sont les règles CSS qui doivent être ajoutées pour appliquer un ellipsis sur un texte (réduire dynamiquement la longueur d’un texte afin qu’il ne dépasse pas son container et sans qu’il n’aille à la ligne) ? 
####  Il faut appliquer le style suivant: “text-overflow: ellipsis; white-space: nowrap; overflow: hidden;”
####  Il faut définir un height ou max-height sur le parent pour qu’il sache où couper le texte.


## 4. Vous êtes face à une liste de 1000 éléments pour lesquels chacun de ces éléments déclenche au clic une alerte avec le texte du contenu. Comment et pourquoi optimisez-vous l’écoute d'événement dans ce cas ? 
#### 1000 éléments avec chacun son eventListner va certainement baisser la performance du navigateur.  
#### Dans ce cas, on peut définir un seul eventListner sur le parent contant la liste, puis gérer le cas d’un event déclenché par la balise


## 5. Quelles sont les différences entre les types de variable suivants : var, let et const ?
####  var: permet de déclarer une constante ou une variable qui peut être changé avec un scope illimité.
####  let: permet de déclarer une variable qui peut être changé avec un scope limité (ex: le scope de la fonction où est déclaré)
####  const: permet de déclarer une constante qui ne peut pas être changé dans son scope limité.


## 6. Quels sont les différents avantages à l’utilisation des outils de développement “Performances” et “Mémoire” dans les navigateurs Firefox et Chromium ?  
####  Ils permettent de faire un diagnostique sur l’application pour faire les optimisation nécessaires comme: 
####  L’amélioration de temps de réponse les requète longue,
####  Détection des composants qui consomment plus de mémoire par des couleurs.


## 7. Quelle a été votre tâche la plus ardue face à laquelle vous vous êtes confronté au cours de votre expérience professionnelle ?
####  Comme au début de tout expérience, j’ai trouvé la tâche de team lead avec 5 ingénieurs jeunes diplômés un peu difficile en terme temps consacré pour les former et les suivre, en plus de développer une version de maintenance du projet. Pourtant j’ai réussi à les accompagner à livrer 90% des tâches du kickoff. 
#### Toujours les expériences difficiles sont les plus belles.

## 8. Quelle est la dernière chose que vous avez apprise récemment ? 
####  J’ai appris comment travailler avec avec un page builder à grande échelle comme ARC publishing.

## 9. Cette année, quelle techno aimeriez-vous apprendre et utiliser ?
#### J’aimerai apprendre nodejs car j’ai un background coté backend avec le framework Laravel.
