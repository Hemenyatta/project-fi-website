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
                    role: "Défenseur",
                    description: "Maître du combat rapproché et défenseur inébranlable",
                    fullDescription: "Le Champion est un gardien inébranlable qui se tient entre ses alliés et le danger. Maîtrisant l'art du combat rapproché et de la défense tactique, il peut encaisser des dégâts massifs tout en protégeant son équipe. Son expertise avec le bouclier et l'armure lourde en fait le pilier de toute formation.",
                    image: "../images/classes/Sentinelle.png"
                },
                {
                    name: "Paladin",
                    role: "Gardien Sacré",
                    description: "Guerrier sacré combinant foi et force martiale",
                    fullDescription: "Le Paladin canalise la puissance divine pour protéger les innocents et punir les malfaiteurs. Combinant prouesses martiales et magie sacrée, il peut soigner ses alliés tout en frappant ses ennemis avec une fureur righteous. Sa dévotion lui confère une résilience exceptionnelle face aux ténèbres.",
                    image: "../images/classes/Sentinelle.png"
                },
                {
                    name: "Porteur de Tempête",
                    role: "Guerrier Élémentaire",
                    description: "Combattant qui canalise la fureur des éléments",
                    fullDescription: "Le Porteur de Tempête maîtrise les forces primordiales de la nature pour dévaster ses ennemis. Capable d'invoquer éclairs, vents violents et glace mordante, il transforme le champ de bataille en un chaos élémentaire. Sa rage channelise les tempêtes elles-mêmes.",
                    image: "../images/classes/Sentinelle.png"
                }
            ]
        },
        {
            name: "Sorcier",
            image: "../images/classes/Sorcier.png",
            classes: [
                {
                    name: "Arcanomancien",
                    role: "Mage des Arcanes",
                    description: "Érudit des arts arcaniques et tisseur de sorts",
                    fullDescription: "L'Arcanomancien plie la réalité à sa volonté grâce à une maîtrise incomparable de la magie arcanique. Ses sorts dévastateurs peuvent anéantir des groupes entiers d'ennemis, tandis que ses barrières mystiques le protègent des attaques. La connaissance est son arme ultime.",
                    image: "../images/classes/Sorcier.png"
                },
                {
                    name: "Cristalomancien",
                    role: "Sculpteur de Cristal",
                    description: "Manipulateur des énergies cristallines et de leurs pouvoirs",
                    fullDescription: "Le Cristalomancien façonne et manipule les cristaux magiques pour créer des constructions défensives et offensives. Ses créations cristallines peuvent piéger les ennemis, amplifier la magie alliée ou exploser en fragments tranchants. Il transforme le champ de bataille en un jardin de cristal mortel.",
                    talentTree: "class1",
                    image: "../images/classes/Sorcier.png"
                },
                {
                    name: "Anathème",
                    role: "Mage Maudit",
                    description: "Sorcier des ombres qui puise dans les énergies interdites",
                    fullDescription: "L'Anathème puise dans les ténèbres pour affliger ses ennemis de malédictions débilitantes. Ses hexes affaiblissent, tourmentent et corrompent ceux qui osent s'opposer à lui. Maître de la magie interdite, il paie le prix de son pouvoir avec son essence même.",
                    image: "../images/classes/Sorcier.png"
                }
            ]
        },
        {
            name: "Vagabond",
            image: "../images/classes/Vagabond.png",
            classes: [
                {
                    name: "Garde forestier",
                    role: "Protecteur de la Nature",
                    description: "Protecteur de la nature et tireur d'élite",
                    fullDescription: "Le Garde forestier est un maître du pistage et du tir à l'arc, capable de frapper ses cibles avec une précision mortelle depuis les ombres. Protecteur de la nature, il peut se fondre dans l'environnement et communiquer avec les créatures sauvages pour obtenir de l'aide.",
                    image: "../images/classes/Vagabond.png"
                },
                {
                    name: "Voltigeur",
                    role: "Acrobate",
                    description: "Acrobate agile spécialiste du combat mobile",
                    fullDescription: "Le Voltigeur combine agilité extraordinaire et techniques de combat mobile pour désorienter ses adversaires. Bondissant à travers le champ de bataille, il frappe avec rapidité avant de disparaître. Sa maîtrise acrobatique lui permet d'éviter les attaques les plus dangereuses.",
                    image: "../images/classes/Vagabond.png"
                },
                {
                    name: "Corsaire",
                    role: "Aventurier des Mers",
                    description: "Aventurier des mers et maître de la ruse",
                    fullDescription: "Le Corsaire est un aventurier rusé qui a survécu aux dangers des mers. Expert en navigation et en combat naval, il utilise la ruse et l'opportunisme pour surmonter ses ennemis. Son charisme naturel et ses tactiques sournoises en font un allié précieux ou un ennemi redoutable.",
                    image: "../images/classes/Vagabond.png"
                }
            ]
        },
        {
            name: "Artisan",
            image: "../images/classes/Artisan.png",
            classes: [
                {
                    name: "Alchimiste",
                    role: "Savant",
                    description: "Savant des potions et transmutations mystiques",
                    fullDescription: "L'Alchimiste transforme la matière elle-même grâce à des connaissances ésotériques et des formules secrètes. Ses potions peuvent guérir, améliorer ou détruire, tandis que ses transmutations manipulent les éléments. La science et la magie se mêlent dans son art.",
                    image: "../images/classes/Artisan.png"
                },
                {
                    name: "Mécanicien",
                    role: "Inventeur",
                    description: "Inventeur de merveilles technologiques et d'automates",
                    fullDescription: "Le Mécanicien crée des merveilles de technologie magique, des automates aux armes sophistiquées. Ses inventions peuvent transformer le cours d'une bataille, offrant soutien tactique ou puissance de feu dévastatrice. L'ingéniosité est son plus grand atout.",
                    talentTree: "class2",
                    image: "../images/classes/Artisan.png"
                },
                {
                    name: "Forgeron",
                    role: "Artisan Légendaire",
                    description: "Artisan légendaire qui forge armes et armures enchantées",
                    fullDescription: "Le Forgeron est un maître artisan capable de créer des armes et armures d'une qualité légendaire. Infusant ses créations de magie runique, il peut forger des objets aux pouvoirs extraordinaires. Chaque pièce qu'il crée est une œuvre d'art mortelle.",
                    image: "../images/classes/Artisan.png"
                }
            ]
        },
        {
            name: "Mystique",
            image: "../images/classes/Mystique.png",
            classes: [
                {
                    name: "Oracle",
                    role: "Voyant",
                    description: "Voyant capable de percevoir le passé et l'avenir",
                    fullDescription: "L'Oracle possède le don de percevoir au-delà du voile du temps. Ses visions du passé et de l'avenir guident ses alliés vers la victoire, tandis que ses prophéties peuvent sceller le destin de ses ennemis. Le temps lui-même plie à sa volonté.",
                    image: "../images/classes/Oracle.png"
                },
                {
                    name: "Druide",
                    role: "Gardien de l'Équilibre",
                    description: "Gardien de l'équilibre naturel et métamorphe",
                    fullDescription: "Le Druide maintient l'équilibre entre civilisation et nature sauvage. Capable de prendre des formes animales et de commander aux forces naturelles, il peut soigner ou détruire selon les besoins. La nature elle-même répond à son appel.",
                    talentTree: "class3",
                    image: "../images/classes/Druide.png"
                },
                {
                    name: "Disciple",
                    role: "Canal Divin",
                    description: "Adepte des arts spirituels et canal d'énergies divines",
                    fullDescription: "Le Disciple est un canal des énergies divines, capable de bénir ses alliés et de maudire ses ennemis. Ses prières peuvent inverser le cours d'une bataille, apportant guérison miraculeuse ou châtiment divin. Sa foi est son bouclier et son épée.",
                    image: "../images/classes/Disciple.png"
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
    const classRole = document.getElementById('classRole');
    const classFullDescription = document.getElementById('classFullDescription');
    const classImage = document.getElementById('classImage');
    const classDots = document.getElementById('classDots');
    const talentTreeIframe = document.getElementById('talentTreeIframe');
    
    const prevArchetypeBtn = document.getElementById('prevArchetype');
    const nextArchetypeBtn = document.getElementById('nextArchetype');
    const prevClassBtn = document.getElementById('prevClass');
    const nextClassBtn = document.getElementById('nextClass');

    // Éléments de la barre sticky
    const archetypeStickyBar = document.querySelector('.archetype-sticky-bar');
    const archetypeNameSticky = document.getElementById('archetypeNameSticky');
    const prevArchetypeStickyBtn = document.getElementById('prevArchetypeSticky');
    const nextArchetypeStickyBtn = document.getElementById('nextArchetypeSticky');

    // Fonction pour mettre à jour l'affichage de l'archétype
    function updateArchetypeDisplay() {
        const archetype = archetypes[currentArchetypeIndex];
        if (archetypeSection) {
            archetypeSection.style.backgroundImage = `url(${archetype.image})`;
        }

        // Mettre à jour la barre sticky
        if (archetypeNameSticky) {
            archetypeNameSticky.textContent = archetype.name;
        }

        // Réinitialiser à la première classe de l'archétype
        currentClassIndex = 0;
        updateClassDisplay();
    }

    // Fonction pour mettre à jour l'affichage de la classe
    function updateClassDisplay() {
        const archetype = archetypes[currentArchetypeIndex];
        const currentClass = archetype.classes[currentClassIndex];
        
        // Mettre à jour les textes
        if (className) className.textContent = currentClass.name;
        if (classRole) classRole.textContent = currentClass.role || "Classe";
        if (classFullDescription) classFullDescription.textContent = currentClass.fullDescription || currentClass.description;
        
        // Mettre à jour l'image de la classe
        if (classImage && currentClass.image) {
            classImage.src = currentClass.image;
            classImage.alt = currentClass.name;
        }
        
        // Mettre à jour l'iframe du talent tree si la classe a un arbre défini
        if (talentTreeIframe && currentClass.talentTree) {
            talentTreeIframe.src = `../talent-tree/index.html?class=${currentClass.talentTree}`;
        }
        
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

    // Navigation des archétypes via la barre sticky
    prevArchetypeStickyBtn.addEventListener('click', () => {
        currentArchetypeIndex = (currentArchetypeIndex - 1 + archetypes.length) % archetypes.length;
        updateArchetypeDisplay();
    });

    nextArchetypeStickyBtn.addEventListener('click', () => {
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

    // Gestion du scroll pour afficher/cacher la barre sticky
    window.addEventListener('scroll', () => {
        const archetypeSection = document.getElementById('archetypeSection');
        if (archetypeSection && archetypeStickyBar) {
            const rect = archetypeSection.getBoundingClientRect();
            // Afficher la barre quand on atteint la moitié de la section 1
            if (rect.bottom < window.innerHeight / 2) {
                archetypeStickyBar.classList.add('visible');
            } else {
                archetypeStickyBar.classList.remove('visible');
            }
        }
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

    // Initialiser le carousel de cartes
    const carousel = new CardCarousel('carouselContainer', 'carouselTrack');

    // Initialiser l'affichage
    updateArchetypeDisplay();
});
