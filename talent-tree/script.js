const talentTrees = {
    class1: {
        name: "Cristalomancien",
        talents: [
          { id: 1, name: "Sommet du Cristal", description: "Bonus de concentration +15%", image: "../images/talents/fire.png", x: 416, y: 1176, prerequisites: [] },
          { id: 2, name: "Arete Gauche Superieure", description: "Resistance aux sorts +10%", image: "../images/talents/fire.png", x: 315, y: 1043, prerequisites: [] },
          { id: 3, name: "Arete Droite Superieure", description: "Degats magiques +10%", image: "../images/talents/fire.png", x: 415, y: 1109, prerequisites: [] },
          { id: 4, name: "Arete Gauche Moyenne", description: "Vitesse d'attaque +5%", image: "../images/talents/fire.png", x: 534, y: 1057, prerequisites: [] },
          { id: 5, name: "Coeur Gauche", description: "Soins +5%", image: "../images/talents/fire.png", x: 161, y: 857, prerequisites: [] },
          { id: 6, name: "Extremite Gauche", description: "Resistance physique +10%", image: "../images/talents/fire.png", x: 363, y: 923, prerequisites: [] },
          { id: 7, name: "Base Gauche", description: "Defense +15%", image: "../images/talents/fire.png", x: 448, y: 1006, prerequisites: [] },
          { id: 8, name: "Coeur Central", description: "Bonus de regeneration +10%", image: "../images/talents/fire.png", x: 646, y: 913, prerequisites: [] },
          { id: 9, name: "Arete Droite Moyenne", description: "Degats de feu +10%", image: "../images/talents/fire.png", x: 80, y: 661, prerequisites: [] },
          { id: 10, name: "Fracture Gauche", description: "Critique +5%", image: "../images/talents/fire.png", x: 163, y: 700, prerequisites: [] },
          { id: 11, name: "Eclat de Givre", description: "Resistance au froid +15%", image: "../images/talents/fire.png", x: 409, y: 827, prerequisites: [] },
          { id: 12, name: "Lumiere Gauche", description: "Degats de lumiere +10%", image: "../images/talents/fire.png", x: 715, y: 762, prerequisites: [] },
          { id: 13, name: "Lumiere Droite", description: "Degats sacres +10%", image: "../images/talents/fire.png", x: 115, y: 520, prerequisites: [] },
          { id: 14, name: "Fracture Droite", description: "Penetration magique +10%", image: "../images/talents/fire.png", x: 164, y: 599, prerequisites: [] },
          { id: 15, name: "Pic Central", description: "Mana +20%", image: "../images/talents/fire.png", x: 240, y: 576, prerequisites: [] },
          { id: 16, name: "Equilibre", description: "Stabilite +15%", image: "../images/talents/fire.png", x: 535, y: 580, prerequisites: [] },
          { id: 17, name: "Sommet Inferieur", description: "Bonus d'experience +10%", image: "../images/talents/fire.png", x: 719, y: 580, prerequisites: [] },
          { id: 18, name: "Ancrage Magique", description: "Cout en mana -10%", image: "../images/talents/fire.png", x: 316, y: 197, prerequisites: [] },
          { id: 19, name: "Harmonie", description: "Bonus de groupe +10%", image: "../images/talents/fire.png", x: 472, y: 268, prerequisites: [] },
          { id: 20, name: "Echo Magique", description: "Degats de zone +15%", image: "../images/talents/fire.png", x: 563, y: 397, prerequisites: [] },
          { id: 21, name: "Noyau", description: "Tous les attributs +5%", image: "../images/talents/fire.png", x: 643, y: 353, prerequisites: [] },
          { id: 22, name: "Apogee", description: "Bonus ultime +25%", image: "../images/talents/fire.png", x: 355, y: 136, prerequisites: [] },
          { id: 23, name: "Apogee2", description: "Bonus ultime +25%", image: "../images/talents/fire.png", x: 491, y: 176, prerequisites: [] },
          { id: 24, name: "Apogee3", description: "Bonus ultime +25%", image: "../images/talents/fire.png", x: 610, y: 233, prerequisites: [] },
          { id: 25, name: "Apogee4", description: "Bonus ultime +25%", image: "../images/talents/fire.png", x: 452, y: 72, prerequisites: [] }
        ],
        links: [
          { from: 1, to: 2 }, { from: 2, to: 1 },
          { from: 1, to: 3 }, { from: 3, to: 1 },
          { from: 1, to: 4 }, { from: 4, to: 1 },
          { from: 2, to: 5 }, { from: 5, to: 2 },
          { from: 2, to: 6 }, { from: 6, to: 2 },
          { from: 3, to: 6 }, { from: 6, to: 3 },
          { from: 3, to: 7 }, { from: 7, to: 3 },
          { from: 4, to: 8 }, { from: 8, to: 4 },
          { from: 5, to: 6 }, { from: 6, to: 5 },
          { from: 5, to: 9 }, { from: 9, to: 5 },
          { from: 5, to: 10 }, { from: 10, to: 5 },
          { from: 6, to: 7 }, { from: 7, to: 6 },
          { from: 6, to: 11 }, { from: 11, to: 6 },
          { from: 7, to: 12 }, { from: 12, to: 7 },
          { from: 7, to: 8 }, { from: 8, to: 7 },
          { from: 7, to: 11 }, { from: 11, to: 7 },
          { from: 8, to: 12 }, { from: 12, to: 8 },
          { from: 9, to: 13 }, { from: 13, to: 9 },
          { from: 10, to: 14 }, { from: 14, to: 10 },
          { from: 10, to: 15 }, { from: 15, to: 10 },
          { from: 11, to: 15 }, { from: 15, to: 11 },
          { from: 11, to: 16 }, { from: 16, to: 11 },
          { from: 12, to: 16 }, { from: 16, to: 12 },
          { from: 12, to: 17 }, { from: 17, to: 12 },
          { from: 13, to: 14 }, { from: 14, to: 13 },
          { from: 13, to: 18 }, { from: 18, to: 13 },
          { from: 14, to: 15 }, { from: 15, to: 14 },
          { from: 15, to: 18 }, { from: 18, to: 15 },
          { from: 15, to: 19 }, { from: 19, to: 15 },
          { from: 16, to: 19 }, { from: 19, to: 16 },
          { from: 16, to: 20 }, { from: 20, to: 16 },
          { from: 17, to: 20 }, { from: 20, to: 17 },
          { from: 17, to: 21 }, { from: 21, to: 17 },
          { from: 18, to: 22 }, { from: 22, to: 18 },
          { from: 19, to: 23 }, { from: 23, to: 19 },
          { from: 20, to: 23 }, { from: 23, to: 20 },
          { from: 21, to: 24 }, { from: 24, to: 21 },
          { from: 22, to: 25 }, { from: 25, to: 22 },
          { from: 23, to: 24 }, { from: 24, to: 23 },
          { from: 23, to: 25 }, { from: 25, to: 23 },
          { from: 24, to: 25 }, { from: 25, to: 24 }
        ]
    },
    class2: {
        name: "Mecanicien",
        talents: [
          { id: 1, name: "Coeur de l'Engrenage", description: "Bonus de precision +15%", image: "../images/talents/gear.png", x: 494, y: 507, prerequisites: [] },
          { id: 2, name: "Rouage Superieur", description: "Vitesse d'attaque +10%", image: "../images/talents/gear.png", x: 491, y: 173, prerequisites: [] },
          { id: 3, name: "Engrenage de Precision", description: "Critique +10%", image: "../images/talents/gear.png", x: 624, y: 50, prerequisites: [] },
          { id: 4, name: "Mecanisme Rapide", description: "Reduction du temps de recharge +5%", image: "../images/talents/gear.png", x: 720, y: 93, prerequisites: [] },
          { id: 5, name: "Pignon Renforce", description: "Resistance physique +10%", image: "../images/talents/gear.png", x: 733, y: 268, prerequisites: [] },
          { id: 6, name: "Transmission Energetique", description: "Bonus de mana +10%", image: "../images/talents/gear.png", x: 911, y: 280, prerequisites: [] },
          { id: 7, name: "Rouage de Puissance", description: "Degats physiques +10%", image: "../images/talents/gear.png", x: 951, y: 375, prerequisites: [] },
          { id: 8, name: "Mecanisme Central", description: "Bonus de regeneration +10%", image: "../images/talents/gear.png", x: 829, y: 507, prerequisites: [] },
          { id: 9, name: "Engrenage de Vitesse", description: "Vitesse de deplacement +10%", image: "../images/talents/gear.png", x: 946, y: 642, prerequisites: [] },
          { id: 10, name: "Ressort de Saut", description: "Bonus de saut +15%", image: "../images/talents/gear.png", x: 913, y: 734, prerequisites: [] },
          { id: 11, name: "Rouage de Defense", description: "Defense +15%", image: "../images/talents/gear.png", x: 732, y: 747, prerequisites: [] },
          { id: 12, name: "Mecanisme de Soin", description: "Soins +10%", image: "../images/talents/gear.png", x: 721, y: 927, prerequisites: [] },
          { id: 13, name: "Engrenage de Resistance", description: "Resistance magique +10%", image: "../images/talents/gear.png", x: 626, y: 965, prerequisites: [] },
          { id: 14, name: "Transmission de Puissance", description: "Degats de zone +15%", image: "../images/talents/gear.png", x: 490, y: 843, prerequisites: [] },
          { id: 15, name: "Rouage d'Equilibre", description: "Stabilite +15%", image: "../images/talents/gear.png", x: 360, y: 964, prerequisites: [] },
          { id: 16, name: "Mecanisme de Protection", description: "Resistance aux sorts +10%", image: "../images/talents/gear.png", x: 266, y: 929, prerequisites: [] },
          { id: 17, name: "Engrenage de Furtivite", description: "Bonus de furtivite +10%", image: "../images/talents/gear.png", x: 251, y: 747, prerequisites: [] },
          { id: 18, name: "Ressort de Reflexes", description: "Bonus d'esquive +15%", image: "../images/talents/gear.png", x: 73, y: 739, prerequisites: [] },
          { id: 19, name: "Rouage de Chance", description: "Bonus de chance +10%", image: "../images/talents/gear.png", x: 33, y: 645, prerequisites: [] },
          { id: 20, name: "Mecanisme d'Adaptation", description: "Bonus d'adaptation +10%", image: "../images/talents/gear.png", x: 155, y: 506, prerequisites: [] },
          { id: 21, name: "Engrenage d'Innovation", description: "Bonus d'experience +10%", image: "../images/talents/gear.png", x: 35, y: 374, prerequisites: [] },
          { id: 22, name: "Rouage de Maitrise", description: "Bonus de maitrise +15%", image: "../images/talents/gear.png", x: 75, y: 283, prerequisites: [] },
          { id: 23, name: "Mecanisme d'Efficacite", description: "Bonus d'efficacite +10%", image: "../images/talents/gear.png", x: 253, y: 270, prerequisites: [] },
          { id: 24, name: "Engrenage de Puissance", description: "Bonus de puissance +15%", image: "../images/talents/gear.png", x: 264, y: 92, prerequisites: [] },
          { id: 25, name: "Rouage Ultime", description: "Bonus ultime +25%", image: "../images/talents/gear.png", x: 356, y: 51, prerequisites: [] }
        ],
        links: [
          { from: 1, to: 2 }, { from: 2, to: 1 },
          { from: 1, to: 8 }, { from: 8, to: 1 },
          { from: 1, to: 14 }, { from: 14, to: 1 },
          { from: 1, to: 20 }, { from: 20, to: 1 },
          { from: 2, to: 23 }, { from: 23, to: 2 },
          { from: 2, to: 25 }, { from: 25, to: 2 },
          { from: 2, to: 3 }, { from: 3, to: 2 },
          { from: 2, to: 5 }, { from: 5, to: 2 },
          { from: 3, to: 4 }, { from: 4, to: 3 },
          { from: 4, to: 5 }, { from: 5, to: 4 },
          { from: 5, to: 6 }, { from: 6, to: 5 },
          { from: 5, to: 8 }, { from: 8, to: 5 },
          { from: 6, to: 7 }, { from: 7, to: 6 },
          { from: 7, to: 8 }, { from: 8, to: 7 },
          { from: 8, to: 9 }, { from: 9, to: 8 },
          { from: 8, to: 11 }, { from: 11, to: 8 },
          { from: 9, to: 10 }, { from: 10, to: 9 },
          { from: 10, to: 11 }, { from: 11, to: 10 },
          { from: 11, to: 12 }, { from: 12, to: 11 },
          { from: 11, to: 14 }, { from: 14, to: 11 },
          { from: 12, to: 13 }, { from: 13, to: 12 },
          { from: 13, to: 14 }, { from: 14, to: 13 },
          { from: 14, to: 15 }, { from: 15, to: 14 },
          { from: 14, to: 17 }, { from: 17, to: 14 },
          { from: 15, to: 16 }, { from: 16, to: 15 },
          { from: 16, to: 17 }, { from: 17, to: 16 },
          { from: 17, to: 18 }, { from: 18, to: 17 },
          { from: 17, to: 20 }, { from: 20, to: 17 },
          { from: 18, to: 19 }, { from: 19, to: 18 },
          { from: 19, to: 20 }, { from: 20, to: 19 },
          { from: 20, to: 21 }, { from: 21, to: 20 },
          { from: 20, to: 23 }, { from: 23, to: 20 },
          { from: 21, to: 22 }, { from: 22, to: 21 },
          { from: 22, to: 23 }, { from: 23, to: 22 },
          { from: 23, to: 24 }, { from: 24, to: 23 },
          { from: 24, to: 25 }, { from: 25, to: 24 },
          { from: 25, to: 2 }, { from: 2, to: 25 }
        ]
    },
    class3: {
        name: "Druide",
        talents: [
          { id: 1, name: "Talent 1", description: "Description placeholder", image: "../images/talents/nature.png", x: 716, y: 1136, prerequisites: [] },
          { id: 2, name: "Talent 2", description: "Description placeholder", image: "../images/talents/nature.png", x: 498, y: 1012, prerequisites: [] },
          { id: 3, name: "Talent 3", description: "Description placeholder", image: "../images/talents/nature.png", x: 530, y: 784, prerequisites: [] },
          { id: 4, name: "Talent 4", description: "Description placeholder", image: "../images/talents/nature.png", x: 580, y: 892, prerequisites: [] },
          { id: 5, name: "Talent 5", description: "Description placeholder", image: "../images/talents/nature.png", x: 748, y: 967, prerequisites: [] },
          { id: 6, name: "Talent 6", description: "Description placeholder", image: "../images/talents/nature.png", x: 942, y: 941, prerequisites: [] },
          { id: 7, name: "Talent 7", description: "Description placeholder", image: "../images/talents/nature.png", x: 845, y: 829, prerequisites: [] },
          { id: 8, name: "Talent 8", description: "Description placeholder", image: "../images/talents/nature.png", x: 1088, y: 785, prerequisites: [] },
          { id: 9, name: "Talent 9", description: "Description placeholder", image: "../images/talents/nature.png", x: 1137, y: 532, prerequisites: [] },
          { id: 10, name: "Talent 10", description: "Description placeholder", image: "../images/talents/nature.png", x: 872, y: 424, prerequisites: [] },
          { id: 11, name: "Talent 11", description: "Description placeholder", image: "../images/talents/nature.png", x: 894, y: 256, prerequisites: [] },
          { id: 12, name: "Talent 12", description: "Description placeholder", image: "../images/talents/nature.png", x: 771, y: 23, prerequisites: [] },
          { id: 13, name: "Talent 13", description: "Description placeholder", image: "../images/talents/nature.png", x: 534, y: 127, prerequisites: [] },
          { id: 14, name: "Talent 14", description: "Description placeholder", image: "../images/talents/nature.png", x: 498, y: 311, prerequisites: [] },
          { id: 15, name: "Talent 15", description: "Description placeholder", image: "../images/talents/nature.png", x: 446, y: 214, prerequisites: [] },
          { id: 16, name: "Talent 16", description: "Description placeholder", image: "../images/talents/nature.png", x: 216, y: 324, prerequisites: [] },
          { id: 17, name: "Talent 17", description: "Description placeholder", image: "../images/talents/nature.png", x: 268, y: 560, prerequisites: [] },
          { id: 18, name: "Talent 18", description: "Description placeholder", image: "../images/talents/nature.png", x: 58, y: 611, prerequisites: [] },
          { id: 19, name: "Talent 19", description: "Description placeholder", image: "../images/talents/nature.png", x: 158, y: 750, prerequisites: [] },
          { id: 20, name: "Talent 20", description: "Description placeholder", image: "../images/talents/nature.png", x: 327, y: 851, prerequisites: [] },
          { id: 21, name: "Talent 21", description: "Description placeholder", image: "../images/talents/nature.png", x: 396, y: 618, prerequisites: [] },
          { id: 22, name: "Talent 22", description: "Description placeholder", image: "../images/talents/nature.png", x: 547, y: 454, prerequisites: [] },
          { id: 23, name: "Talent 23", description: "Description placeholder", image: "../images/talents/nature.png", x: 575, y: 647, prerequisites: [] },
          { id: 24, name: "Talent 24", description: "Description placeholder", image: "../images/talents/nature.png", x: 733, y: 516, prerequisites: [] },
          { id: 25, name: "Talent 25", description: "Description placeholder", image: "../images/talents/nature.png", x: 739, y: 777, prerequisites: [] }
        ],
        links: [
          { from: 1, to: 2 }, { from: 2, to: 1 },
          { from: 2, to: 3 }, { from: 3, to: 2 },
          { from: 3, to: 4 }, { from: 4, to: 3 },
          { from: 3, to: 20 }, { from: 20, to: 3 },
          { from: 3, to: 21 }, { from: 21, to: 3 },
          { from: 3, to: 23 }, { from: 23, to: 3 },
          { from: 3, to: 25 }, { from: 25, to: 3 },
          { from: 4, to: 5 }, { from: 5, to: 4 },
          { from: 5, to: 6 }, { from: 6, to: 5 },
          { from: 6, to: 7 }, { from: 7, to: 6 },
          { from: 7, to: 8 }, { from: 8, to: 7 },
          { from: 7, to: 25 }, { from: 25, to: 7 },
          { from: 8, to: 9 }, { from: 9, to: 8 },
          { from: 9, to: 10 }, { from: 10, to: 9 },
          { from: 10, to: 11 }, { from: 11, to: 10 },
          { from: 10, to: 24 }, { from: 24, to: 10 },
          { from: 11, to: 12 }, { from: 12, to: 11 },
          { from: 12, to: 13 }, { from: 13, to: 12 },
          { from: 13, to: 14 }, { from: 14, to: 13 },
          { from: 14, to: 15 }, { from: 15, to: 14 },
          { from: 15, to: 16 }, { from: 16, to: 15 },
          { from: 16, to: 17 }, { from: 17, to: 16 },
          { from: 17, to: 21 }, { from: 21, to: 17 },
          { from: 17, to: 18 }, { from: 18, to: 17 },
          { from: 18, to: 19 }, { from: 19, to: 18 },
          { from: 19, to: 20 }, { from: 20, to: 19 },
          { from: 22, to: 14 }, { from: 14, to: 22 },
          { from: 22, to: 23 }, { from: 23, to: 22 },
          { from: 23, to: 24 }, { from: 24, to: 23 }
        ]
    }
};

function generatePrerequisites(talents, links) {
    const prerequisitesMap = {};
    talents.forEach(talent => {
        prerequisitesMap[talent.id] = [];
    });
    links.forEach(link => {
        const { from, to } = link;
        if (!prerequisitesMap[to].includes(from)) {
            prerequisitesMap[to].push(from);
        }
    });
    return talents.map(talent => ({
        ...talent,
        prerequisites: prerequisitesMap[talent.id]
    }));
}

Object.keys(talentTrees).forEach(classKey => {
    talentTrees[classKey].talents = generatePrerequisites(
        talentTrees[classKey].talents,
        talentTrees[classKey].links
    );
});

function normalizeAllTalents() {
    Object.keys(talentTrees).forEach(classKey => {
        const talents = talentTrees[classKey].talents;
        let minX = Infinity, minY = Infinity;
        let maxX = -Infinity, maxY = -Infinity;

        talents.forEach(talent => {
            if (talent.x < minX) minX = talent.x;
            if (talent.y < minY) minY = talent.y;
            if (talent.x > maxX) maxX = talent.x;
            if (talent.y > maxY) maxY = talent.y;
        });

        const width = maxX - minX;
        const height = maxY - minY;
        const scaleX = 1200 / width;
        const scaleY = 1500 / height;
        const scale = Math.min(scaleX, scaleY) * 0.9;

        const offsetX = (1200 - width * scale) / 2;
        const offsetY = (1500 - height * scale) / 2;

        talents.forEach(talent => {
            talent.x = (talent.x - minX) * scale + offsetX;
            talent.y = (talent.y - minY) * scale + offsetY;
        });
    });
}

normalizeAllTalents();

let currentTalents = [];
let currentLinks = [];
let currentIndex = 0;
let currentClass = 'class1';

function initTree() {
    const urlParams = new URLSearchParams(window.location.search);
    const classParam = urlParams.get('class') || 'class1';
    currentClass = classParam;
    currentTalents = JSON.parse(JSON.stringify(talentTrees[currentClass].talents));
    currentLinks = talentTrees[currentClass].links;
    currentTalents = generatePrerequisites(currentTalents, currentLinks);

    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    const treeSlot = document.createElement('div');
    treeSlot.className = 'tree-slot active';
    
    const treeContainer = document.createElement('div');
    treeContainer.id = 'tree-container-0';
    treeContainer.className = 'tree-container';

    const tree = document.createElement('div');
    tree.id = 'tree-0';
    tree.className = 'tree';
    tree.dataset.classKey = currentClass;
    tree.dataset.index = 0;

    treeContainer.appendChild(tree);
    treeSlot.appendChild(treeContainer);
    carousel.appendChild(treeSlot);

    renderTalentTree();
    renderLinks();
    setupNodeListeners();
}

function renderTalentTree() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;

    let activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    if (!activeTalents.includes(1)) {
        activeTalents.push(1);
    }

    currentTalents.forEach(talent => {
        let node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        if (!node) {
            node = document.createElement('div');
            node.className = 'node';
            node.dataset.id = talent.id;
            node.dataset.tooltip = talent.description;
            node.style.left = `${talent.x}px`;
            node.style.top = `${talent.y}px`;
            node.innerHTML = `<img src="${talent.image}" alt="${talent.name}" class="node-img" />`;
            tree.appendChild(node);
        }

        let isActive = talent.id === 1 || activeTalents.includes(talent.id);
        if (isActive) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }

        const isAccessible = checkPrerequisites(talent.id, activeTalents);
        const isNotActive = !isActive;
        const hasDirectLinkFromActive = hasDirectLinkFromActiveNode(talent.id, activeTalents);

        if (isAccessible && isNotActive && hasDirectLinkFromActive) {
            node.classList.add('highlight');
        } else {
            node.classList.remove('highlight');
        }

        if (!isActive && !isAccessible) {
            node.classList.add('locked');
        } else {
            node.classList.remove('locked');
        }
    });

    renderLinks();
}

function setupNodeListeners() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;

    tree.removeEventListener('click', handleNodeClick);
    tree.addEventListener('click', handleNodeClick);
}

function handleNodeClick(event) {
    const node = event.target.closest('.node');
    if (node) {
        const talentId = parseInt(node.dataset.id);
        toggleTalent(talentId);
    }
}

function hasDirectLinkFromActiveNode(talentId, activeTalents) {
    const activeIds = activeTalents.map(id => parseInt(id));
    return currentLinks.some(link =>
        (link.to === talentId && activeIds.includes(link.from)) ||
        (link.from === talentId && activeIds.includes(link.to))
    );
}

function renderLinks() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!tree) return;

    tree.querySelectorAll('.connection').forEach(el => el.remove());

    currentLinks.forEach(link => {
        const fromNode = tree.querySelector(`.node[data-id="${link.from}"]`);
        const toNode = tree.querySelector(`.node[data-id="${link.to}"]`);
        if (!fromNode || !toNode) return;

        const fromX = parseFloat(fromNode.style.left);
        const fromY = parseFloat(fromNode.style.top);
        const toX = parseFloat(toNode.style.left);
        const toY = parseFloat(toNode.style.top);

        const dx = toX - fromX;
        const dy = toY - fromY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        const line = document.createElement('div');
        line.className = 'connection';

        const fromActive = fromNode.classList.contains('active');
        const toActive = toNode.classList.contains('active');
        if (fromActive && toActive) {
            line.classList.add('active');
        }

        const isToTalentAccessible = checkPrerequisites(parseInt(toNode.dataset.id));
        const isToTalentNotActive = !toNode.classList.contains('active');
        if (fromActive && isToTalentAccessible && isToTalentNotActive) {
            line.classList.add('highlight');
        }

        line.style.width = `${length}px`;
        line.style.position = 'absolute';
        line.style.left = `${fromX}px`;
        line.style.top = `${fromY}px`;
        line.style.transform = `rotate(${angle}rad)`;
        line.style.transformOrigin = '0 0';

        tree.appendChild(line);
    });
}

function getActiveTree() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return null;
    return activeSlot.querySelector(`#tree-${currentIndex}`);
}

function adjustCoordinates() {
    const activeSlot = document.querySelector('.tree-slot.active');
    if (!activeSlot) return;
    const container = activeSlot.querySelector(`#tree-container-${currentIndex}`);
    const tree = activeSlot.querySelector(`#tree-${currentIndex}`);
    if (!container || !tree) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const padding = 20;
    const availableWidth = containerWidth - (padding * 2);
    const availableHeight = containerHeight - (padding * 2);

    const scaleX = availableWidth / 1200;
    const scaleY = availableHeight / 1500;
    const scale = Math.min(scaleX, scaleY, 1);

    document.documentElement.style.setProperty('--scale-factor', scale);
}

function toggleTalent(id) {
    const activeSlot = document.querySelector('.tree-slot.active');
    const tree = activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;

    const talent = currentTalents.find(t => t.id == id);
    if (!talent) return;

    const node = tree.querySelector(`.node[data-id="${id}"]`);
    if (!node) return;

    if (id === 1) {
        if (!node.classList.contains('active')) {
            node.classList.add('active');
        }
        return;
    }

    let activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));
    if (!activeTalents.includes(1)) {
        activeTalents.push(1);
    }

    const isCurrentlyActive = node.classList.contains('active');

    if (!isCurrentlyActive) {
        if (!checkPrerequisites(id, activeTalents)) {
            return;
        }
        node.classList.add('active');
    } else {
        if (!isConnectedToRoot(id)) {
            return;
        }
        node.classList.remove('active');
    }

    renderTalentTree();
    renderLinks();
    setupNodeListeners();
    requestAnimationFrame(() => {
        adjustCoordinates();
        updateTooltips();
    });
}

function checkPrerequisites(id, activeTalents = null) {
    const talent = currentTalents.find(t => t.id == id);
    if (!talent) return false;

    if (activeTalents === null) {
        const tree = getActiveTree();
        if (!tree) return false;
        activeTalents = Array.from(tree.querySelectorAll('.node.active'))
            .map(node => parseInt(node.dataset.id));
        if (!activeTalents.includes(1)) {
            activeTalents.push(1);
        }
    }

    if (id === 1) {
        return true;
    }

    if (talent.prerequisites.length === 0) {
        return false;
    }

    const activeSet = new Set(activeTalents);
    return talent.prerequisites.some(prereqId => {
        return activeSet.has(prereqId);
    });
}

function initTooltips() {
    const activeSlot = document.querySelector('.tree-slot.active');
    const tree = activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    const activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));

    tree.querySelectorAll('.node').forEach(node => {
        if (node._tippy) {
            node._tippy.destroy();
        }
    });

    currentTalents.forEach(talent => {
        const node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        if (node) {
            const isActive = node.classList.contains('active');
            const isAccessible = checkPrerequisites(talent.id, activeTalents);

            const tooltipContent = document.createElement('div');
            tooltipContent.className = 'tooltip-content';

            const title = document.createElement('div');
            title.className = 'tooltip-title';
            title.textContent = talent.name;
            tooltipContent.appendChild(title);

            const description = document.createElement('div');
            description.className = 'tooltip-description';
            description.textContent = talent.description;
            tooltipContent.appendChild(description);

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

            tippy(node, {
                content: tooltipContent,
                animation: 'scale',
                arrow: true,
                theme: 'talent-tooltip',
                placement: 'right',
                followCursor: false,
                interactive: true,
                allowHTML: true,
                hideOnClick: false,
            });
        }
    });
}

function updateTooltips() {
    const activeSlot = document.querySelector('.tree-slot.active');
    const tree = activeSlot ? activeSlot.querySelector(`#tree-${currentIndex}`) : null;
    if (!tree) return;
    const activeTalents = Array.from(tree.querySelectorAll('.node.active')).map(n => parseInt(n.dataset.id));

    currentTalents.forEach(talent => {
        const node = tree.querySelector(`.node[data-id="${talent.id}"]`);
        if (node && node._tippy) {
            const isActive = node.classList.contains('active');
            const isAccessible = checkPrerequisites(talent.id, activeTalents);

            const tippyContent = node._tippy.popper.querySelector('.tooltip-content');
            if (tippyContent) {
                const statusDiv = tippyContent.querySelector('.tooltip-status');
                if (statusDiv) {
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
                }
            }
        } else if (node) {
            const isActive = node.classList.contains('active');
            const isAccessible = checkPrerequisites(talent.id, activeTalents);

            const tooltipContent = document.createElement('div');
            tooltipContent.className = 'tooltip-content';

            const title = document.createElement('div');
            title.className = 'tooltip-title';
            title.textContent = talent.name;
            tooltipContent.appendChild(title);

            const description = document.createElement('div');
            description.className = 'tooltip-description';
            description.textContent = talent.description;
            tooltipContent.appendChild(description);

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

            tippy(node, {
                content: tooltipContent,
                animation: 'scale',
                arrow: true,
                theme: 'talent-tooltip',
                placement: 'right',
                followCursor: false,
                interactive: true,
                allowHTML: true,
                hideOnClick: false,
            });
        }
    });
}

function hasPathToRoot(talentId, activeTalents, visited = new Set()) {
    if (talentId === 1) return true;

    if (visited.has(talentId)) {
        return false;
    }
    visited.add(talentId);

    const talent = currentTalents.find(t => t.id === talentId);
    if (!talent) return false;

    for (const prereqId of talent.prerequisites) {
        if (activeTalents.includes(prereqId) && hasPathToRoot(prereqId, activeTalents, visited)) {
            return true;
        }
    }

    return false;
}

function isConnectedToRoot(id) {
    const tree = getActiveTree();
    if (!tree) return false;

    const activeTalents = Array.from(tree.querySelectorAll('.node.active'))
        .map(node => parseInt(node.dataset.id));

    if (id === 1) {
        return false;
    }

    const activeTalentsWithoutNode = activeTalents.filter(talentId => talentId !== id);

    for (const talentId of activeTalentsWithoutNode) {
        if (talentId === 1) continue;

        if (!hasPathToRoot(talentId, activeTalentsWithoutNode, new Set())) {
            return false;
        }
    }

    return true;
}

window.addEventListener('DOMContentLoaded', () => {
    initTree();
    requestAnimationFrame(() => {
        adjustCoordinates();
        initTooltips();
    });
});

window.addEventListener('load', () => {
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
