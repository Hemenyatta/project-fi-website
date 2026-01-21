const talentTrees = {
    class1: {
        name: "Cristalomancien",
        //
Liste des talents pour la classe 1
        talents: [
          { id: 1, name:
"Sommet du Cristal", description: "Bonus de concentration +15%", image:
"images/talents/fire.png", x: 416, y: 1176, prerequisites: [] },
          { id: 2, name:
"Arête Gauche Supérieure", description: "Résistance aux sorts +10%", image:
"images/talents/fire.png", x: 315, y: 1043, prerequisites: [] },
          { id: 3,
name: "Arête Droite Supérieure", description: "Dégâts magiques +10%", image:
"images/talents/fire.png", x: 415, y: 1109, prerequisites: [] },
          { id:
4, name: "Arête Gauche Moyenne", description: "Vitesse d'attaque +5%", image:
"images/talents/fire.png", x: 534, y: 1057, prerequisites: [] },
          { id: 5,
name: "Cœur Gauche", description: "Soins +5%", image:
"images/talents/fire.png", x: 161, y: 857, prerequisites: [] },
          { id: 6, name: "Extrémité
Gauche", description: "Résistance physique +10%", image: "images/talents/fire.png",
x: 363, y: 923, prerequisites: [] },
          { id: 7, name: "Base Gauche",
description: "Défense +15%", image: "images/talents/fire.png", x: 448, y: 1006,
prerequisites: [] },
          { id: 8, name: "Cœur Central", description: "Bonus de
régénération +10%", image: "images/talents/fire.png", x: 646, y: 913,
prerequisites: [] },
          { id: 9, name: "Arête Droite Moyenne", description:
"Dégâts de feu +10%", image: "images/talents/fire.png", x: 80, y: 661, prerequisites:
[] },
          { id: 10, name: "Fracture Gauche", description: "Critique +5%",
image: "images/talents/fire.png", x: 163, y: 700, prerequisites: [] },
         
{ id: 11, name: "Éclat de Givre", description: "Résistance au froid +15%",
image: "images/talents/fire.png", x: 409, y: 827, prerequisites: [] },
          {
id: 12, name: "Lumière Gauche", description: "Dégâts de lumière +10%", image:
"images/talents/fire.png", x: 715, y: 762, prerequisites: [] },
          { id: 13,
name: "Lumière Droite", description: "Dégâts sacrés +10%", image:
"images/talents/fire.png", x: 115, y: 520, prerequisites: [] },
          { id: 14, name:
"Fracture Droite", description: "Pénétration magique +10%", image:
"images/talents/fire.png", x: 164, y: 599, prerequisites: [] },
          { id: 15, name: "Pic
Central", description: "Mana +20%", image: "images/talents/fire.png", x: 240, y:
576, prerequisites: [] },
          { id: 16, name: "Équilibre", description:
"Stabilité +15%", image: "images/talents/fire.png", x: 535, y: 580, prerequisites:
[] },
          { id: 17, name: "Sommet Inférieur", description: "Bonus
d'expérience +10%", image: "images/talents/fire.png", x: 719, y: 580, prerequisites: []
},
          { id: 18, name: "Ancrage Magique", description: "Coût en mana
-10%", image: "images/talents/fire.png", x: 316, y: 197, prerequisites: [] },
      
   { id: 19, name: "Harmonie", description: "Bonus de groupe +10%", image:
"images/talents/fire.png", x: 472, y: 268, prerequisites: [] },
          { id: 20,
name: "Écho Magique", description: "Dégâts de zone +15%", image:
"images/talents/fire.png", x: 563, y: 397, prerequisites: [] },
          { id: 21, name:
"Noyau", description: "Tous les attributs +5%", image: "images/talents/fire.png", x:
643, y: 353, prerequisites: [] },
          { id: 22, name: "Apogée",
description: "Bonus ultime +25%", image: "images/talents/fire.png", x: 355, y: 136,
prerequisites: [] },
          { id: 23, name: "Apogée2", description: "Bonus ultime
+25%", image: "images/talents/fire.png", x: 491, y: 176, prerequisites: [] },
   
      { id: 24, name: "Apogée3", description: "Bonus ultime +25%", image:
"images/talents/fire.png", x: 610, y: 233, prerequisites: [] },
          { id: 25,
name: "Apogée4", description: "Bonus ultime +25%", image:
"images/talents/fire.png", x: 452, y: 72, prerequisites: [] }
          ],
        // Liste des liens
pour la classe 1 - Liens bidirectionnels
        links: [
          // Nœud 1 ->
2, 3, 4
          { from: 1, to: 2 }, { from: 2, to: 1 },
          { from: 1,
to: 3 }, { from: 3, to: 1 },
          { from: 1, to: 4 }, { from: 4, to: 1 },

 
        // Nœud 2 -> 5, 1 (1 déjà couvert)
          { from: 2, to: 5 }, {
from: 5, to: 2 },
          { from: 2, to: 6 }, { from: 6, to: 2 },

          //
Nœud 3 -> 6, 7, 1 (1 déjà couvert)
          { from: 3, to: 6 }, { from: 6, to: 3
},
          { from: 3, to: 7 }, { from: 7, to: 3 },

          // Nœud 4 -> 8,
          1 (1 déjà couvert)
          { from: 4, to: 8 }, { from: 8, to: 4 },

         
// Nœud 5 -> 2, 6, 9, 10 (2 déjà couvert)
          { from: 5, to: 6 }, { from:
6, to: 5 },
          { from: 5, to: 9 }, { from: 9, to: 5 },
          { from:
5, to: 10 }, { from: 10, to: 5 },

          // Nœud 6 -> 3, 5, 7, 10, 11 (3, 5,
10 déjà couverts)
          { from: 6, to: 7 }, { from: 7, to: 6 },
          {
from: 6, to: 11 }, { from: 11, to: 6 },

          // Nœud 7 -> 3, 6, 12 (3, 6
          déjà couverts)
          { from: 7, to: 12 }, { from: 12, to: 7 },
          {
from: 7, to: 8 }, { from: 8, to: 7 },
          { from: 7, to: 11 }, { from: 11, to:
7 },

          // Nœud 8 -> 4, 12 (4 déjà couvert)
          { from: 8, to:
12 }, { from: 12, to: 8 },

          // Nœud 9 -> 5, 13 (5 déjà couvert)
     
    { from: 9, to: 13 }, { from: 13, to: 9 },

          // Nœud 10 -> 5, 6,
14, 15 (5, 6 déjà couverts)
          { from: 10, to: 14 }, { from: 14, to: 10 },
          { from: 10, to: 15 }, { from: 15, to: 10 },

          // Nœud 11 ->
6, 15, 16 (6 déjà couvert)
          { from: 11, to: 15 }, { from: 15, to: 11 },

         { from: 11, to: 16 }, { from: 16, to: 11 },

          // Nœud 12 ->
7, 8, 16, 17 (7, 8 déjà couverts)
          { from: 12, to: 16 }, { from: 16, to:
12 },
          { from: 12, to: 17 }, { from: 17, to: 12 },

          // Nœud
13 -> 9, 14, 18 (9 déjà couvert)
          { from: 13, to: 14 }, { from: 14, to:
13 },
          { from: 13, to: 18 }, { from: 18, to: 13 },

          // Nœud
14 -> 10, 13, 15, 18 (10, 13, 18 déjà couverts)
          { from: 14, to: 15 },
{ from: 15, to: 14 },

          // Nœud 15 -> 10, 11, 14, 18, 19 (10, 11, 14
déjà couverts)
          { from: 15, to: 18 }, { from: 18, to: 15 },
          {
from: 15, to: 19 }, { from: 19, to: 15 },

          // Nœud 16 -> 11, 12, 19, 20
(11, 12 déjà couverts)
          { from: 16, to: 19 }, { from: 19, to: 16 },
          { from: 16, to: 20 }, { from: 20, to: 16 },

          // Nœud 17 -> 12,
20, 21 (12 déjà couvert)
          { from: 17, to: 20 }, { from: 20, to: 17 },

         { from: 17, to: 21 }, { from: 21, to: 17 },

          // Nœud 18 ->
13, 14, 15, 22 (13, 14, 15 déjà couverts)
          { from: 18, to: 22 }, { from:
22, to: 18 },

          // Nœud 19 -> 15, 16, 23 (15, 16 déjà couverts)
      
   { from: 19, to: 23 }, { from: 23, to: 19 },

          // Nœud 20 -> 16, 17,
23 (16, 17 déjà couverts)
          { from: 20, to: 23 }, { from: 23, to: 20
},

          // Nœud 21 -> 17, 24 (17 déjà couvert)
          { from: 21, to: 24
}, { from: 24, to: 21 },

          // Nœud 22 -> 18, 25 (18 déjà couvert)
     
    { from: 22, to: 25 }, { from: 25, to: 22 },

          // Nœud 23 -> 19,
22, 24, 25 (19, 22 déjà couverts)
          { from: 23, to: 24 }, { from: 24, to:
23 },
          { from: 23, to: 25 }, { from: 25, to: 23 },

          // Nœud
24 -> 21, 23, 25 (21, 23 déjà couverts)
          { from: 24, to: 25 }, { from:
25, to: 24 }

          // Nœud 25 -> 22, 23, 24 (tous couverts)
        ]
   
},
    class2: {
        name: "Mécanicien",
        // Liste des talents pour la
classe 2
        talents: [
          { id: 1, name: "Cœur de l'Engrenage",
description: "Bonus de précision +15%", image: "images/talents/gear.png", x: 494, y:
507, prerequisites: [] },
          { id: 2, name: "Rouage Supérieur",
description: "Vitesse d'attaque +10%", image: "images/talents/gear.png", x: 491, y: 173,
prerequisites: [] },
          { id: 3, name: "Engrenage de Précision",
description: "Critique +10%", image: "images/talents/gear.png", x: 624, y: 50,
prerequisites: [] },
          { id: 4, name: "Mécanisme Rapide", description:
"Réduction du temps de recharge +5%", image: "images/talents/gear.png", x: 720, y: 93,
prerequisites: [] },
          { id: 5, name: "Pignon Renforcé", description:
"Résistance physique +10%", image: "images/talents/gear.png", x: 733, y: 268,
prerequisites: [] },
          { id: 6, name: "Transmission Énergétique", description:
"Bonus de mana +10%", image: "images/talents/gear.png", x: 911, y: 280,
prerequisites: [] },
          { id: 7, name: "Rouage de Puissance", description:
"Dégâts physiques +10%", image: "images/talents/gear.png", x: 951, y: 375,
prerequisites: [] },
          { id: 8, name: "Mécanisme Central", description: "Bonus de
régénération +10%", image: "images/talents/gear.png", x: 829, y: 507,
prerequisites: [] },
          { id: 9, name: "Engrenage de Vitesse", description:
"Vitesse de déplacement +10%", image: "images/talents/gear.png", x: 946, y: 642,
prerequisites: [] },
          { id: 10, name: "Ressort de Saut", description: "Bonus
de saut +15%", image: "images/talents/gear.png", x: 913, y: 734, prerequisites:
[] },
          { id: 11, name: "Rouage de Défense", description: "Défense
+15%", image: "images/talents/gear.png", x: 732, y: 747, prerequisites: [] },
  { id: 12, name: "Mécanisme de Soin", description: "Soins +10%", image:
"images/talents/gear.png", x: 721, y: 927, prerequisites: [] },
          { id: 13,
name: "Engrenage de Résistance", description: "Résistance magique +10%", image:
"images/talents/gear.png", x: 626, y: 965, prerequisites: [] },
          { id:
14, name: "Transmission de Puissance", description: "Dégâts de zone +15%", image:
"images/talents/gear.png", x: 490, y: 843, prerequisites: [] },
          { id:
15, name: "Rouage d'Équilibre", description: "Stabilité +15%", image:
"images/talents/gear.png", x: 360, y: 964, prerequisites: [] },
          { id: 16, name:
"Mécanisme de Protection", description: "Résistance aux sorts +10%", image:
"images/talents/gear.png", x: 266, y: 929, prerequisites: [] },
          { id: 17,
name: "Engrenage de Furtivité", description: "Bonus de furtivité +10%", image:
"images/talents/gear.png", x: 251, y: 747, prerequisites: [] },
          { id:
18, name: "Ressort de Réflexes", description: "Bonus d'esquive +15%", image:
"images/talents/gear.png", x: 73, y: 739, prerequisites: [] },
          { id: 19,
name: "Rouage de Chance", description: "Bonus de chance +10%", image:
"images/talents/gear.png", x: 33, y: 645, prerequisites: [] },
          { id: 20, name:
"Mécanisme d'Adaptation", description: "Bonus d'adaptation +10%", image:
"images/talents/gear.png", x: 155, y: 506, prerequisites: [] },
          { id: 21, name:
"Engrenage d'Innovation", description: "Bonus d'expérience +10%", image:
"images/talents/gear.png", x: 35, y: 374, prerequisites: [] },
          { id: 22,
name: "Rouage de Maîtrise", description: "Bonus de maîtrise +15%", image:
"images/talents/gear.png", x: 75, y: 283, prerequisites: [] },
          { id: 23, name:
"Mécanisme d'Efficacité", description: "Bonus d'efficacité +10%", image:
"images/talents/gear.png", x: 253, y: 270, prerequisites: [] },
          { id: 24,
name: "Engrenage de Puissance", description: "Bonus de puissance +15%", image:
"images/talents/gear.png", x: 264, y: 92, prerequisites: [] },
          { id: 25,
name: "Rouage Ultime", description: "Bonus ultime +25%", image:
"images/talents/gear.png", x: 356, y: 51, prerequisites: [] }
        ],
        // Liste des
liens pour la classe 2
        links: [
          // Liens pour le nœud 1
         
{ from: 1, to: 2 },
          { from: 2, to: 1 },
          { from: 1, to: 8
},
          { from: 8, to: 1 },
          { from: 1, to: 14 },
          { from:
14, to: 1 },
          { from: 1, to: 20 },
          { from: 20, to: 1 },
          // Liens pour le nœud 2
          { from: 2, to: 23 },
          { from:
23, to: 2 },
          { from: 2, to: 25 },
          { from: 25, to: 2 },
      
   { from: 2, to: 3 },
          { from: 3, to: 2 },
          { from: 2, to: 5
},
          { from: 5, to: 2 },

          // Liens pour le nœud 3
          {
from: 3, to: 4 },
          { from: 4, to: 3 },

          // Liens pour le
nœud 4
          { from: 4, to: 5 },
          { from: 5, to: 4 },

          //
Liens pour le nœud 5
          { from: 5, to: 6 },
          { from: 6, to: 5 },
          { from: 5, to: 8 },
          { from: 8, to: 5 },

          // Liens
pour le nœud 6
          { from: 6, to: 7 },
          { from: 7, to: 6 },

     
    // Liens pour le nœud 7
          { from: 7, to: 8 },
          { from: 8,
to: 7 },

          // Liens pour le nœud 8
          { from: 8, to: 9 },
      
   { from: 9, to: 8 },
          { from: 8, to: 11 },
          { from: 11, to:
8 },

          // Liens pour le nœud 9
          { from: 9, to: 10 },
        
 { from: 10, to: 9 },

          // Liens pour le nœud 10
          { from: 10,
to: 11 },
          { from: 11, to: 10 },

          // Liens pour le nœud 11
 
        { from: 11, to: 12 },
          { from: 12, to: 11 },
          { from:
11, to: 14 },
          { from: 14, to: 11 },

          // Liens pour le nœud
12
          { from: 12, to: 13 },
          { from: 13, to: 12 },

          //
Liens pour le nœud 13
          { from: 13, to: 14 },
          { from: 14, to:
13 },

          // Liens pour le nœud 14
          { from: 14, to: 15 },
     
    { from: 15, to: 14 },
          { from: 14, to: 17 },
          { from: 17,
to: 14 },

          // Liens pour le nœud 15
          { from: 15, to: 16 },
          { from: 16, to: 15 },

          // Liens pour le
nœud 16
          { from: 16, to: 17 },
          { from: 17, to: 16 },

          // Liens pour le
nœud 17
          { from: 17, to: 18 },
          { from: 18, to: 17 },
         
{ from: 17, to: 20 },
          { from: 20, to: 17 },

          // Liens pour
le nœud 18
          { from: 18, to: 19 },
          { from: 19, to: 18 },

    
     // Liens pour le nœud 19
          { from: 19, to: 20 },
          { from:
20, to: 19 },

          // Liens pour le nœud 20
          { from: 20, to: 21
},
          { from: 21, to: 20 },
          { from: 20, to: 23 },
          {
from: 23, to: 20 },

          // Liens pour le nœud 21
          { from: 21, to:
22 },
          { from: 22, to: 21 },

          // Liens pour le nœud 22
     
    { from: 22, to: 23 },
          { from: 23, to: 22 },

          // Liens
pour le nœud 23
          { from: 23, to: 24 },
          { from: 24, to: 23 },

         // Liens pour le nœud 24
          { from: 24, to: 25 },
          {
from: 25, to: 24 },

          // Liens pour le nœud 25
          { from: 25, to:
2 },
          { from: 2, to: 25 }
        ]
    },
    class3: {
        name:
"Druide",
        // Liste des talents pour la classe 3
        talents: [
    
     { id: 1, name: "Talent 1", description: "Description placeholder", image:
"images/talents/nature.png", x: 716, y: 1136, prerequisites: [] },
          {
id: 2, name: "Talent 2", description: "Description placeholder", image:
"images/talents/nature.png", x: 498, y: 1012, prerequisites: [] },
          { id: 3,
name: "Talent 3", description: "Description placeholder", image:
"images/talents/nature.png", x: 530, y: 784, prerequisites: [] },
          { id: 4, name: "Talent
4", description: "Description placeholder", image: "images/talents/nature.png",
x: 580, y: 892, prerequisites: [] },
          { id: 5, name: "Talent 5",
description: "Description placeholder", image: "images/talents/nature.png", x: 748,
y: 967, prerequisites: [] },
          { id: 6, name: "Talent 6", description:
"Description placeholder", image: "images/talents/nature.png", x: 942, y: 941,
prerequisites: [] },
          { id: 7, name: "Talent 7", description: "Description
placeholder", image: "images/talents/nature.png", x: 845, y: 829,
prerequisites: [] },
          { id: 8, name: "Talent 8", description: "Description
placeholder", image: "images/talents/nature.png", x: 1088, y: 785, prerequisites: [] },
 
        { id: 9, name: "Talent 9", description: "Description placeholder",
image: "images/talents/nature.png", x: 1137, y: 532, prerequisites: [] },
          {
id: 10, name: "Talent 10", description: "Description placeholder", image:
"images/talents/nature.png", x: 872, y: 424, prerequisites: [] },
          { id:
11, name: "Talent 11", description: "Description placeholder", image:
"images/talents/nature.png", x: 894, y: 256, prerequisites: [] },
          { id: 12, name:
"Talent 12", description: "Description placeholder", image:
"images/talents/nature.png", x: 771, y: 23, prerequisites: [] },
          { id: 13, name: "Talent
13", description: "Description placeholder", image: "images/talents/nature.png",
x: 534, y: 127, prerequisites: [] },
          { id: 14, name: "Talent 14",
description: "Description placeholder", image: "images/talents/nature.png", x: 498,
y: 311, prerequisites: [] },
          { id: 15, name: "Talent 15", description:
"Description placeholder", image: "images/talents/nature.png", x: 446, y: 214,
prerequisites: [] },
          { id: 16, name: "Talent 16", description:
"Description placeholder", image: "images/talents/nature.png", x: 216, y: 324,
prerequisites: [] },
          { id: 17, name: "Talent 17", description: "Description
placeholder", image: "images/talents/nature.png", x: 268, y: 560, prerequisites:
[] },
          { id: 18, name: "Talent 18", description: "Description
placeholder", image: "images/talents/nature.png", x: 58, y: 611, prerequisites: [] },
    
     { id: 19, name: "Talent 19", description: "Description placeholder",
image: "images/talents/nature.png", x: 158, y: 750, prerequisites: [] },
          {
id: 20, name: "Talent 20", description: "Description placeholder", image:
"images/talents/nature.png", x: 327, y: 851, prerequisites: [] },
          { id: 21,
name: "Talent 21", description: "Description placeholder", image:
"images/talents/nature.png", x: 396, y: 618, prerequisites: [] },
          { id: 22, name:
"Talent 22", description: "Description placeholder", image:
"images/talents/nature.png", x: 547, y: 454, prerequisites: [] },
          { id: 23, name: "Talent
23", description: "Description placeholder", image: "images/talents/nature.png",
x: 575, y: 647, prerequisites: [] },
          { id: 24, name: "Talent 24",
description: "Description placeholder", image: "images/talents/nature.png", x: 733,
y: 516, prerequisites: [] },
          { id: 25, name: "Talent 25", description:
"Description placeholder", image: "images/talents/nature.png", x: 739, y: 777,
prerequisites: [] }
        ],
        // Liste des liens pour la classe 3 -
Liens bidirectionnels
        links: [
          // Nœud 1 -> 2
          { from: 1,
to: 2 }, { from: 2, to: 1 },

          // Nœud 2 -> 1, 3 (1 déjà couvert)
    
     { from: 2, to: 3 }, { from: 3, to: 2 },

          // Nœud 3 -> 2, 4, 20,
21, 23, 25 (2 déjà couvert)
          { from: 3, to: 4 }, { from: 4, to: 3 },
  
       { from: 3, to: 20 }, { from: 20, to: 3 },
          { from: 3, to: 21 },
{ from: 21, to: 3 },
          { from: 3, to: 23 }, { from: 23, to: 3 },
      
   { from: 3, to: 25 }, { from: 25, to: 3 },

          // Nœud 4 -> 3, 5 (3
déjà couvert)
          { from: 4, to: 5 }, { from: 5, to: 4 },

          // Nœud
5 -> 4, 6 (4 déjà couvert)
          { from: 5, to: 6 }, { from: 6, to: 5 },

 
        // Nœud 6 -> 5, 7 (5 déjà couvert)
          { from: 6, to: 7 }, {
from: 7, to: 6 },

          // Nœud 7 -> 6, 8, 25 (6 déjà couvert)
          {
from: 7, to: 8 }, { from: 8, to: 7 },
          { from: 7, to: 25 }, { from: 25, to:
7 },

          // Nœud 8 -> 7, 9 (7 déjà couvert)
          { from: 8, to: 9
}, { from: 9, to: 8 },

          // Nœud 9 -> 8, 10 (8 déjà couvert)
          {
from: 9, to: 10 }, { from: 10, to: 9 },

          // Nœud 10 -> 9, 11, 24 (9
déjà couvert)
          { from: 10, to: 11 }, { from: 11, to: 10 },
          {
from: 10, to: 24 }, { from: 24, to: 10 },

          // Nœud 11 -> 10, 12 (10
déjà couvert)
          { from: 11, to: 12 }, { from: 12, to: 11 },

          //
Nœud 12 -> 11, 13 (11 déjà couvert)
          { from: 12, to: 13 }, { from: 13,
to: 12 },

          // Nœud 13 -> 12, 14 (12 déjà couvert)
          { from: 13,
to: 14 }, { from: 14, to: 13 },

          // Nœud 14 -> 13, 15, 22 (13 déjà
couvert)
          { from: 14, to: 15 }, { from: 15, to: 14 },
          { from:
14, to: 22 }, { from: 22, to: 14 },

          // Nœud 15 -> 14, 16 (14 déjà
couvert)
          { from: 15, to: 16 }, { from: 16, to: 15 },

          // Nœud 16
-> 15, 17 (15 déjà couvert)
          { from: 16, to: 17 }, { from: 17, to: 16
},

          // Nœud 17 -> 16, 18, 21 (16 déjà couvert)
          { from: 17,
to: 18 }, { from: 18, to: 17 },
          { from: 17, to: 21 }, { from: 21, to:
17 },

          // Nœud 18 -> 17, 19 (17 déjà couvert)
          { from: 18, to:
19 }, { from: 19, to: 18 },

          // Nœud 19 -> 18, 20 (18 déjà couvert)
        { from: 19, to: 20 }, { from: 20, to: 19 },

          // Nœud 20 ->
19, 3 (tous couverts)

          // Nœud 21 -> 3, 17 (tous couverts)

          //
Nœud 22 -> 14, 23 (14 déjà couvert)
          { from: 22, to: 23 }, { from: 23,
to: 22 },

          // Nœud 23 -> 3, 22, 24 (3, 22 déjà couverts)
          {
from: 23, to: 24 }, { from: 24, to: 23 },

          // Nœud 24 -> 10, 23 (tous
couverts)

          // Nœud 25 -> 3, 7 (tous couverts)
        ]
   
},
};

function generatePrerequisites(talents, links) {
    const prerequisitesMap = {};


   talents.forEach(talent => {
        prerequisitesMap[talent.id] = [];
   
});

    links.forEach(link => {
        const { from, to } = link;
        if
(!prerequisitesMap[to].includes(from)) {
           
prerequisitesMap[to].push(from);
        }
    });

    return talents.map(talent => ({
        ...talent,
   
    prerequisites: prerequisitesMap[talent.id]
    }));
}

// Mettre à jour les
prérequis pour chaque classe
Object.keys(talentTrees).forEach(classKey => {
   
talentTrees[classKey].talents = generatePrerequisites(
       
talentTrees[classKey].talents,
        talentTrees[classKey].links
    );
});

// Fonction pour
normaliser les coordonnées de tous les talents
// Normalise chaque arbre
individuellement pour garantir le même centrage
function normalizeAllTalents() {
   
Object.keys(talentTrees).forEach(classKey => {
        const talents =
talentTrees[classKey].talents;
        
        // Trouver les limites pour CETTE classe
        let minX = Infinity, minY = Infinity;
        let maxX =
-Infinity, maxY = -Infinity;

        talents.forEach(talent => {
            if
(talent.x < minX) minX = talent.x;
            if (talent.y < minY) minY = talent.y;

           if (talent.x > maxX) maxX = talent.x;
            if (talent.y >
maxY) maxY = talent.y;
        });

        // Calculer les dimensions de cet
arbre
        const width = maxX - minX;
        const height = maxY - minY;

       
// Facteur d'échelle pour adapter à 1200x1500
        const scaleX = 1200 /
width;
        const scaleY = 1500 / height;
        const scale = Math.min(scaleX,
scaleY) * 0.9; // 0.9 pour un peu de padding

        // Centrage : chaque
arbre est centré individuellement
        const offsetX = (1200 - width * scale) /
2;
        const offsetY = (1500 - height * scale) / 2;

        // Appliquer à
CETTE classe uniquement
        talents.forEach(talent => {
            talent.x
= (talent.x - minX) * scale + offsetX;
            talent.y = (talent.y - minY)
* scale + offsetY;
        });
    });
}

// Appeler cette fonction AVANT
d'initialiser l'arbre
normalizeAllTalents();

function findBounds(talents) {
    let
minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

  
 talents.forEach(talent => {
        if (talent.x < minX) minX = talent.x;
    
   if (talent.y < minY) minY = talent.y;
        if (talent.x > maxX) maxX =
talent.x;
        if (talent.y > maxY) maxY = talent.y;
    });

    return {
minX, minY, maxX, maxY };
}

// Variables globales pour stocker l'arbre de talents
let currentTalents = [];
let currentLinks = [];
let currentClass =
'class1';

// Variables pour le carousel
let currentIndex = 0;
const classes =
Object.keys(talentTrees);
let totalSlots = 0; // Sera calculé après initCarousel

//
Initialiser le carousel avec duplication pour l'effet infini
function
initCarousel() {
    const carousel = document.getElementById('carousel');
   
carousel.innerHTML = '';

    // Créer 3 cycles de classes pour l'effet infini
    const
numCycles = 3;
    
    for (let cycle = 0; cycle < numCycles; cycle++) {
       
classes.forEach((classKey, index) => {
            const treeSlot =
document.createElement('div');
            treeSlot.className = 'tree-slot';
           
treeSlot.id = `tree-slot-${cycle * classes.length + index}`;
            
           
const treeContainer = document.createElement('div');
           
treeContainer.id = `tree-container-${cycle * classes.length + index}`;
           
treeContainer.className = 'tree-container';

            const tree =
            document.createElement('div');
            tree.id = `tree-${cycle * classes.length + index}`;
       
    tree.className = 'tree';
            tree.dataset.classKey = classKey;
    
       tree.dataset.index = cycle * classes.length + index;

           
treeContainer.appendChild(tree);
            treeSlot.appendChild(treeContainer);
    
       carousel.appendChild(treeSlot);
        });
    }
    
    totalSlots =
classes.length * numCycles;
    currentIndex = classes.length; // Commencer au
cycle central
    updateCarouselPosition();
}

// Met à jour la position du
carousel
function updateCarouselPosition() {
    const carousel =
document.getElementById('carousel');
    const translateX = -currentIndex * 100;
   
carousel.style.transform = `translateX(${translateX}%)`;

    // Récupérer le slot actif et la
classe correspondante
    const actualClassIndex = currentIndex %
classes.length;
    const classKey = classes[actualClassIndex];
    
    // Appliquer le fade
out à tous les arbres
    document.querySelectorAll('.tree').forEach(tree => {

       tree.classList.add('fade-out');
    });
    
    // Attendre que le fade
se termine avant de mettre à jour le contenu (au milieu du mouvement)
   
setTimeout(() => {
        // Mettre à jour les classes active/prev/next
       
document.querySelectorAll('.tree-slot').forEach((slot, index) => {
           
slot.classList.remove('active', 'prev', 'next');
            if (index ===
currentIndex) {
                slot.classList.add('active');
            } else if (index
< currentIndex) {
                slot.classList.add('prev');
            }
else {
                slot.classList.add('next');
            }
        });

     
  // Mettre à jour l'arbre actif
        currentClass = classKey;
       
currentTalents = JSON.parse(JSON.stringify(talentTrees[currentClass].talents));
     
  currentLinks = talentTrees[currentClass].links;
        currentTalents =
generatePrerequisites(currentTalents, currentLinks);

        // Rendre l'arbre
actif
        const activeSlot = document.querySelector('.tree-slot.active');
      
 if (activeSlot) {
            const tree =
activeSlot.querySelector(`#tree-${currentIndex}`);
            if (tree) {
                tree.innerHTML = ''; //
Vider complètement le tree avant de rendre
                renderTalentTree();
 
              renderLinks();
                setupNodeListeners();
            
   // Attendre que le DOM soit mis à jour avant d'ajuster les coordonnées
     
          requestAnimationFrame(() => {
                   
adjustCoordinates();
                    initTooltips();
                });
            }
       
}
        
        // Retirer le fade out et ajouter le fade in
       
setTimeout(() => {
            document.querySelectorAll('.tree').forEach(tree => {
    
           tree.classList.remove('fade-out');
            });
        }, 0);
  
 }, 600);
}

// Configure les écouteurs des flèches (appelé UNE SEULE
FOIS)
function setupCarouselListeners() {
    const leftArrow =
document.getElementById('carousel-left');
    const rightArrow =
document.getElementById('carousel-right');

    if (leftArrow && rightArrow) {
       
leftArrow.addEventListener('click', () => {
            // Avancer avec les totalSlots pour effet infini
    
       currentIndex = (currentIndex - 1 + totalSlots) % totalSlots;
           
updateCarouselPosition();
        });

       
rightArrow.addEventListener('click', () => {
            // Avancer avec les totalSlots pour effet infini
      
     currentIndex = (currentIndex + 1) % totalSlots;
           
updateCarouselPosition();
        });
    }

    // Navigation au clavier - boucle infinie
   
document.addEventListener('keydown', (e) => {
        if (e.key ===
'ArrowLeft') {
            currentIndex = (currentIndex - 1 + totalSlots) % totalSlots;
   
        updateCarouselPosition();
        } else if (e.key === 'ArrowRight') {

           currentIndex = (currentIndex + 1) % totalSlots;
           
updateCarouselPosition();
        }
    });
}

// Fonction pour dessiner les nœuds de
l'arbre
function renderTalentTree() {
    const activeSlot =
document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree =
activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;
    
    //
Récupérer les talents actuellement actifs AVANT de modifier l'arbre
    let
activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n =>
parseInt(n.dataset.id));
    
    // S'assurer que le nœud 1 est toujours dans
activeTalents (car il est toujours actif)
    if (!activeTalents.includes(1)) {
       
activeTalents.push(1);
    }

    currentTalents.forEach(talent => {
        let
node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        
        // Si
le nœud n'existe pas, le créer
        if (!node) {
            node =
document.createElement('div');
            node.className = 'node';
           
node.dataset.id = talent.id;
            node.dataset.tooltip = talent.description;
     
      node.style.left = `${talent.x}px`;
            node.style.top =
`${talent.y}px`;
            node.innerHTML = `<img src="${talent.image}"
alt="${talent.name}" class="node-img" />`;
            tree.appendChild(node);
        }
      
 
        // Mettre à jour les classes du nœud
        let isActive = talent.id
=== 1 || activeTalents.includes(talent.id);
        
        if (isActive) {
  
         node.classList.add('active');
        } else {
           
node.classList.remove('active');
        }

        // Vérifie si le talent est accessible
ET s'il y a un lien direct depuis un nœud actif
        const isAccessible =
checkPrerequisites(talent.id, activeTalents);
        const isNotActive =
!isActive;
        const hasDirectLinkFromActive = hasDirectLinkFromActiveNode(talent.id,
activeTalents);
        
        if (isAccessible && isNotActive &&
hasDirectLinkFromActive) {
            node.classList.add('highlight');
        } else {
  
         node.classList.remove('highlight');
        }

        // Ajouter ou
retirer la classe locked
        if (!isActive && !isAccessible) {
           
node.classList.add('locked');
        } else {
           
node.classList.remove('locked');
        }
    });

    renderLinks();
}

// Attacher les listeners
avec event delegation pour éviter les doublons
function setupNodeListeners() {
   
const activeSlot = document.querySelector('.tree-slot.active');
    if
(!activeSlot) return;
    const tree =
activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;
    
    // Retirer l'ancien listener
   
tree.removeEventListener('click', handleNodeClick);
    // Attacher le nouveau
   
tree.addEventListener('click', handleNodeClick);
}

function handleNodeClick(event) {
   
const node = event.target.closest('.node');
    if (node) {
        const
talentId = parseInt(node.dataset.id);
        toggleTalent(talentId);
    }
}

//
Vérifie s'il existe un lien DIRECT depuis/vers un nœud actif
function
hasDirectLinkFromActiveNode(talentId, activeTalents) {
    // S'assurer que activeTalents
contient des integers
    const activeIds = activeTalents.map(id => parseInt(id));

 
  // Vérifier s'il existe un lien DIRECT dans les deux sens:
    return
currentLinks.some(link => 
        (link.to === talentId &&
activeIds.includes(link.from)) ||
        (link.from === talentId && activeIds.includes(link.to))
   
);
}

// Fonction pour dessiner les liens entre les talents
function renderLinks() {

   const activeSlot = document.querySelector('.tree-slot.active');
    if
(!activeSlot) return;
    const tree =
activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;
    
   
tree.querySelectorAll('.connection').forEach(el => el.remove());

    currentLinks.forEach(link => {
        const fromNode
= tree.querySelector(`.node[data-id="${link.from}"]`);
        const toNode =
tree.querySelector(`.node[data-id="${link.to}"]`);
        if (!fromNode ||
!toNode) return;

        // Utiliser les coordonnées de style (pas
        getBoundingClientRect)
        const fromX = parseFloat(fromNode.style.left);
        const fromY
= parseFloat(fromNode.style.top);
        const toX =
parseFloat(toNode.style.left);
        const toY = parseFloat(toNode.style.top);

        // Calculer la
distance et l'angle entre les deux nœuds
        const dx = toX - fromX;
       
const dy = toY - fromY;
        const length = Math.sqrt(dx * dx + dy * dy);
  
     const angle = Math.atan2(dy, dx);

        // Créer le lien
        const
line = document.createElement('div');
        line.className = 'connection';

  
     const fromActive = fromNode.classList.contains('active');
        const
toActive = toNode.classList.contains('active');
        if (fromActive &&
toActive) {
            line.classList.add('active');
        }

        const
isToTalentAccessible = checkPrerequisites(parseInt(toNode.dataset.id));
        const
isToTalentNotActive = !toNode.classList.contains('active');
        if (fromActive
&& isToTalentAccessible && isToTalentNotActive) {
           
line.classList.add('highlight');
        }

        // Appliquer les styles au lien
       
line.style.width = `${length}px`;
        line.style.position = 'absolute';
       
line.style.left = `${fromX}px`;
        line.style.top = `${fromY}px`;
       
line.style.transform = `rotate(${angle}rad)`;
        line.style.transformOrigin =
'0 0';

        tree.appendChild(line);
    });
}

// Fonction utilitaire pour
récupérer l'arbre actif
function getActiveTree() {
    const activeSlot =
document.querySelector('.tree-slot.active');
    if (!activeSlot) return null;
   
return activeSlot.querySelector(`#tree-${currentIndex}`);
}

function
adjustCoordinates() {
    const activeSlot = document.querySelector('.tree-slot.active');
   
if (!activeSlot) return;
    const container =
activeSlot.querySelector(`#tree-container-${currentIndex}`);
    const tree =
activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!container || !tree) return;
    
    const
    containerWidth = container.clientWidth;
    const containerHeight =
container.clientHeight;

    // Ajouter du padding pour que l'arbre ne soit pas collé aux bords
   
const padding = 20;
    const availableWidth = containerWidth - (padding * 2);
   
const availableHeight = containerHeight - (padding * 2);

    // Calculer le
facteur d'échelle pour adapter l'arbre à la fenêtre
    const scaleX =
availableWidth / 1200;
    const scaleY = availableHeight / 1500;
    
    // Utiliser le
facteur le plus petit pour maintenir les proportions
    const scale =
Math.min(scaleX, scaleY, 1); // Max 1 pour ne pas agrandir

    // Appliquer le facteur
d'échelle via la variable CSS
   
document.documentElement.style.setProperty('--scale-factor', scale);
}

// Fonction pour activer/désactiver un talent
function
toggleTalent(id) {
    // Obtenir d'abord l'arbre actif
    const activeSlot =
document.querySelector('.tree-slot.active');
    const tree = activeSlot ?
activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    
   
const talent = currentTalents.find(t => t.id == id);
    if (!talent) return;
 
  
    // Rechercher le nœud UNIQUEMENT dans l'arbre actif
    const node =
tree.querySelector(`.node[data-id="${id}"]`);
    if (!node) return;

    // Le
nœud 1 ne peut JAMAIS être désélectionné
    if (id === 1) {
        if
(!node.classList.contains('active')) {
            node.classList.add('active');
        }

       // Ne rien faire si on essaie de cliquer sur le nœud 1 qui est déjà
actif
        return;
    }

    // Récupérer les talents actuellement actifs
UNIQUEMENT dans l'arbre actif
    let activeTalents =
Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    // S'assurer que le
nœud 1 est toujours inclus (car il est toujours actif)
    if
(!activeTalents.includes(1)) {
        activeTalents.push(1);
    }

    const isCurrentlyActive
= node.classList.contains('active');

    if (!isCurrentlyActive) {
        //
On veut ACTIVER le nœud - vérifier les prérequis AVANT de faire quoi que ce soit

       if (!checkPrerequisites(id, activeTalents)) {
            // Blocage
silencieux - le nœud ne peut pas être activé
            return;
        }
       
// Les prérequis sont OK - activer le nœud
       
node.classList.add('active');
    } else {
        // On veut DÉSACTIVER le nœud - vérifier la connexion à la
racine AVANT de faire quoi que ce soit
        if (!isConnectedToRoot(id)) {
  
         // Blocage silencieux - le nœud ne peut pas être désactivé
           
return;
        }
        // La connexion est OK - désactiver le nœud
       
node.classList.remove('active');
    }

    renderTalentTree();
   
renderLinks();
    setupNodeListeners();
    requestAnimationFrame(() => {
       
adjustCoordinates();
        // Mettre à jour les tooltips sans les détruire (garde le
tooltip ouvert)
        updateTooltips();
    });
}

// Vérifie si AU MOINS UN
prérequis DIRECT est rempli
function checkPrerequisites(id, activeTalents = null) {

   const talent = currentTalents.find(t => t.id == id);
    if (!talent) return
false;

    // Si activeTalents n'est pas fourni, récupérer du DOM (arbre actif
uniquement)
    if (activeTalents === null) {
        const tree =
getActiveTree();
        if (!tree) return false;
        activeTalents =
Array.from(tree.querySelectorAll('.node.active'))
            .map(node =>
parseInt(node.dataset.id));
        // S'assurer que le nœud 1 est inclus
        if
(!activeTalents.includes(1)) {
            activeTalents.push(1);
        }
    }

    // Le nœud
1 est toujours accessible
    if (id === 1) {
        return true;
    }

    //
Si le talent n'a pas de prérequis directs, il n'est PAS accessible
    // (sauf
le nœud 1, déjà géré ci-dessus)
    if (talent.prerequisites.length === 0) {
  
     return false;
    }

    // Convertir activeTalents en Set pour recherche
O(1)
    const activeSet = new Set(activeTalents);

    // Vérifie si AU MOINS
UN prérequis DIRECT est actif
    // (pas de prérequis indirects - seulement la
proximité directe compte)
    return talent.prerequisites.some(prereqId => {
    
   return activeSet.has(prereqId);
    });
}

// Initialise les tooltips avec
Tippy.js
function initTooltips() {
    // Récupérer les talents actifs
UNIQUEMENT dans l'arbre actif
    const activeSlot =
document.querySelector('.tree-slot.active');
    const tree = activeSlot ?
activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    const activeTalents =
Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    
   
// Détruire les anciennes instances Tippy pour ce tree
   
tree.querySelectorAll('.node').forEach(node => {
        if (node._tippy) {
           
node._tippy.destroy();
        }
    });

    currentTalents.forEach(talent => {
        const
node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        if (node)
{
            // Récupérer l'état du talent depuis le DOM
            const
isActive = node.classList.contains('active');
            const isAccessible =
checkPrerequisites(talent.id, activeTalents);
            // Créer le contenu HTML du
tooltip
            const tooltipContent = document.createElement('div');
     
      tooltipContent.className = 'tooltip-content';

            // Titre
     
      const title = document.createElement('div');
            title.className
= 'tooltip-title';
            title.textContent = talent.name;
           
tooltipContent.appendChild(title);

            // Description
            const
description = document.createElement('div');
            description.className =
'tooltip-description';
            description.textContent = talent.description;
 
          tooltipContent.appendChild(description);

            // Statut
     
      const statusDiv = document.createElement('div');
           
statusDiv.className = 'tooltip-status';

            if (isActive) {
               
statusDiv.classList.add('active');
                statusDiv.textContent = '✓ Activé';

           } else if (isAccessible) {
               
statusDiv.classList.add('available');
                statusDiv.textContent = '◆ Disponible';
           
} else {
                statusDiv.classList.add('locked');
               
statusDiv.textContent = '✕ Verrouillé';
            }

           
tooltipContent.appendChild(statusDiv);

            // Initialiser Tippy
            tippy(node,
            {
                content: tooltipContent,
                animation: 'scale',

               arrow: true,
                theme: 'talent-tooltip',
          
     placement: 'right',
                followCursor: false,
               
interactive: true,
                allowHTML: true,
                hideOnClick:
false,
            });
        }
    });
}

// Met à jour les tooltips sans
détruire les instances existantes (pour garder le tooltip ouvert)
function
updateTooltips() {
    // Récupérer les talents actifs UNIQUEMENT dans l'arbre actif
   
const activeSlot = document.querySelector('.tree-slot.active');
    const tree =
activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if
(!tree) return;
    const activeTalents =
Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));

    currentTalents.forEach(talent
=> {
        const node = tree.querySelector(`.node[data-id="${talent.id}"]`);
 
      if (node && node._tippy) {
            // Le tooltip existe déjà, on met
            à jour juste son contenu sans recalculer la position
            const isActive
= node.classList.contains('active');
            const isAccessible =
checkPrerequisites(talent.id, activeTalents);

            // Chercher le div de statut
existant dans le contenu du tooltip
            const tippyContent =
node._tippy.popper.querySelector('.tooltip-content');
            if (tippyContent) {
       
        // Mettre à jour le texte et les classes du statut
               
const statusDiv = tippyContent.querySelector('.tooltip-status');
                if
(statusDiv) {
                    statusDiv.className = 'tooltip-status';
      
             if (isActive) {
                       
statusDiv.classList.add('active');
                        statusDiv.textContent = '✓ Activé';
           
        } else if (isAccessible) {
                       
statusDiv.classList.add('available');
                        statusDiv.textContent = '◆
Disponible';
                    } else {
                       
statusDiv.classList.add('locked');
                        statusDiv.textContent = '✕ Verrouillé';
      
             }
                }
            }
        } else if (node) {
      
      // Le tooltip n'existe pas encore, le créer
            const isActive =
node.classList.contains('active');
            const isAccessible =
checkPrerequisites(talent.id, activeTalents);

            // Créer le contenu HTML du
tooltip
            const tooltipContent = document.createElement('div');
           
tooltipContent.className = 'tooltip-content';

            // Titre
           
const title = document.createElement('div');
            title.className =
'tooltip-title';
            title.textContent = talent.name;
           
tooltipContent.appendChild(title);

            // Description
            const
description = document.createElement('div');
            description.className =
'tooltip-description';
            description.textContent = talent.description;
       
    tooltipContent.appendChild(description);

            // Statut
           
const statusDiv = document.createElement('div');
           
statusDiv.className = 'tooltip-status';

            if (isActive) {
               
statusDiv.classList.add('active');
                statusDiv.textContent = '✓ Activé';
      
     } else if (isAccessible) {
               
statusDiv.classList.add('available');
                statusDiv.textContent = '◆ Disponible';
            }
else {
                statusDiv.classList.add('locked');
               
statusDiv.textContent = '✕ Verrouillé';
            }

           
tooltipContent.appendChild(statusDiv);

            // Initialiser Tippy
            tippy(node, {
   
            content: tooltipContent,
                animation: 'scale',
      
         arrow: true,
                theme: 'talent-tooltip',
               
placement: 'right',
                followCursor: false,
               
interactive: true,
                allowHTML: true,
                hideOnClick:
false,
            });
        }
    });
}

// Vérifie s'il existe un chemin entre un
nœud et le nœud 1
function hasPathToRoot(talentId, activeTalents, visited = new
Set()) {
    if (talentId === 1) return true;

    // Évite les boucles infinies
en vérifiant si ce nœud a déjà été visité
    if (visited.has(talentId)) {
    
   return false;
    }
    visited.add(talentId);

    const talent =
    currentTalents.find(t => t.id === talentId);
    if (!talent) return false;

    //
Vérifie chaque prérequis actif
    for (const prereqId of talent.prerequisites) {
   
    if (activeTalents.includes(prereqId) && hasPathToRoot(prereqId,
activeTalents, visited)) {
            return true;
        }
    }

    return
false;
}

function isConnectedToRoot(id) {
    const tree = getActiveTree();
    if (!tree)
return false;
    
    const activeTalents =
Array.from(tree.querySelectorAll('.node.active'))
        .map(node => parseInt(node.dataset.id));

    // Si on
essaie de désélectionner le nœud 1, c'est interdit
    if (id === 1) {
       
return false;
    }

    // Simuler la désélection du nœud
    const
activeTalentsWithoutNode = activeTalents.filter(talentId => talentId !== id);

    // Vérifier chaque nœud actif restant
    for (const talentId of activeTalentsWithoutNode)
{
        if (talentId === 1) continue; // Ignorer le nœud 1

        //
Vérifier s'il existe un chemin entre ce nœud et le nœud 1
        if
(!hasPathToRoot(talentId, activeTalentsWithoutNode, new Set())) {
            return false;
     
  }
    }

    return true;
}

// Appelle cette fonction au chargement de la
page
window.addEventListener('DOMContentLoaded', () => {
    // Vérifier si un paramètre de classe est passé dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const classParam = urlParams.get('class');
    
    initCarousel();
    
    // Si un paramètre de classe est fourni, naviguer vers cette classe
    if (classParam && classes.includes(classParam)) {
        const classIndex = classes.indexOf(classParam);
        currentIndex = classes.length + classIndex; // Cycle central
        updateCarouselPosition();
    }
    
    setupCarouselListeners();
    requestAnimationFrame(() => {
       
adjustCoordinates();
        initTooltips();
    });
});

window.addEventListener('load', ()
=> {
    requestAnimationFrame(() => {
        adjustCoordinates();
       
initTooltips();
    });
});

window.addEventListener('resize', () => {
   
adjustCoordinates();
    renderTalentTree();
    renderLinks();
});
