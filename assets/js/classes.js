// Classes Navigation System - Project Fi
document.addEventListener('DOMContentLoaded', function() {
    // Données des archétypes et classes
    const archetypes = [
        {
            name: "Sentinelle",
            image: "../images/classes/Sentinelle.png",
            classes: [
                {
                    name: "Champion",
                    description: "Maître du combat rapproché et défenseur inébranlable"
                },
                {
                    name: "Paladin",
                    description: "Guerrier sacré combinant foi et force martiale"
                },
                {
                    name: "Porteur de Tempête",
                    description: "Combattant qui canalise la fureur des éléments"
                }
            ]
        },
        {
            name: "Sorcier",
            image: "../images/classes/Sorcier.png",
            classes: [
                {
                    name: "Arcanomancien",
                    description: "Érudit des arts arcaniques et tisseur de sorts"
                },
                {
                    name: "Cristalomancien",
                    description: "Manipulateur des énergies cristallines et de leurs pouvoirs"
                },
                {
                    name: "Anathème",
                    description: "Sorcier des ombres qui puise dans les énergies interdites"
                }
            ]
        },
        {
            name: "Vagabond",
            image: "../images/classes/Vagabond.png",
            classes: [
                {
                    name: "Garde forestier",
                    description: "Protecteur de la nature et tireur d'élite"
                },
                {
                    name: "Voltigeur",
                    description: "Acrobate agile spécialiste du combat mobile"
                },
                {
                    name: "Corsaire",
                    description: "Aventurier des mers et maître de la ruse"
                }
            ]
        },
        {
            name: "Artisan",
            image: "../images/classes/Artisan.png",
            classes: [
                {
                    name: "Alchimiste",
                    description: "Savant des potions et transmutations mystiques"
                },
                {
                    name: "Mécanicien",
                    description: "Inventeur de merveilles technologiques et d'automates"
                },
                {
                    name: "Forgeron",
                    description: "Artisan légendaire qui forge armes et armures enchantées"
                }
            ]
        },
        {
            name: "Mystique",
            image: "../images/classes/Mystique.png",
            classes: [
                {
                    name: "Oracle",
                    description: "Voyant capable de percevoir le passé et l'avenir"
                },
                {
                    name: "Druide",
                    description: "Gardien de l'équilibre naturel et métamorphe"
                },
                {
                    name: "Disciple",
                    description: "Adepte des arts spirituels et canal d'énergies divines"
                }
            ]
        }
    ];

    // État actuel
    let currentArchetypeIndex = 0;
    let currentClassIndex = 0;

    // Éléments DOM
    const archetypeSection = document.getElementById('archetypeSection');
    const className = document.getElementById('className');
    const classDescription = document.getElementById('classDescription');
    const classDots = document.getElementById('classDots');
    
    const prevArchetypeBtn = document.getElementById('prevArchetype');
    const nextArchetypeBtn = document.getElementById('nextArchetype');
    const prevClassBtn = document.getElementById('prevClass');
    const nextClassBtn = document.getElementById('nextClass');

    // Fonction pour mettre à jour l'affichage de l'archétype
    function updateArchetypeDisplay() {
        const archetype = archetypes[currentArchetypeIndex];
        if (archetypeSection) {
            archetypeSection.style.backgroundImage = `url(${archetype.image})`;
        }

        // Réinitialiser à la première classe de l'archétype
        currentClassIndex = 0;
        updateClassDisplay();
    }

    // Fonction pour mettre à jour l'affichage de la classe
    function updateClassDisplay() {
        const archetype = archetypes[currentArchetypeIndex];
        const currentClass = archetype.classes[currentClassIndex];
        
        className.textContent = currentClass.name;
        classDescription.textContent = currentClass.description;
        
        // Mettre à jour les points de navigation
        updateClassDots();
    }

    // Fonction pour créer/mettre à jour les points de navigation des classes
    function updateClassDots() {
        const archetype = archetypes[currentArchetypeIndex];
        classDots.innerHTML = '';
        
        archetype.classes.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (index === currentClassIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                currentClassIndex = index;
                updateClassDisplay();
            });
            classDots.appendChild(dot);
        });
    }

    // Navigation des archétypes
    prevArchetypeBtn.addEventListener('click', () => {
        currentArchetypeIndex = (currentArchetypeIndex - 1 + archetypes.length) % archetypes.length;
        updateArchetypeDisplay();
    });

    nextArchetypeBtn.addEventListener('click', () => {
        currentArchetypeIndex = (currentArchetypeIndex + 1) % archetypes.length;
        updateArchetypeDisplay();
    });

    // Navigation des classes
    prevClassBtn.addEventListener('click', () => {
        const archetype = archetypes[currentArchetypeIndex];
        currentClassIndex = (currentClassIndex - 1 + archetype.classes.length) % archetype.classes.length;
        updateClassDisplay();
    });

    nextClassBtn.addEventListener('click', () => {
        const archetype = archetypes[currentArchetypeIndex];
        currentClassIndex = (currentClassIndex + 1) % archetype.classes.length;
        updateClassDisplay();
    });

    // Support des touches clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (e.shiftKey) {
                prevArchetypeBtn.click();
            } else {
                prevClassBtn.click();
            }
        } else if (e.key === 'ArrowRight') {
            if (e.shiftKey) {
                nextArchetypeBtn.click();
            } else {
                nextClassBtn.click();
            }
        }
    });

    // Initialiser l'affichage
    updateArchetypeDisplay();
});
