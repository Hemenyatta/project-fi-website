// Equipment Compendium JavaScript
// Load and display equipment from JSON data

document.addEventListener('DOMContentLoaded', function() {
    const equipmentGrid = document.getElementById('equipment-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    let equipmentData = [];
    let currentFilter = 'all';

    // Load equipment data
    async function loadEquipment() {
        try {
            const response = await fetch('../data/equipment.json');
            if (!response.ok) {
                throw new Error('Failed to load equipment data');
            }
            equipmentData = await response.json();
            displayEquipment(equipmentData);
        } catch (error) {
            console.error('Error loading equipment:', error);
            equipmentGrid.innerHTML = `
                <div class="loading">
                    <p>Unable to load equipment data. Using sample data.</p>
                </div>
            `;
            // Use sample data as fallback
            useSampleData();
        }
    }

    // Use sample equipment data
    function useSampleData() {
        equipmentData = [
            {
                name: "Longsword",
                type: "weapons",
                category: "Weapons",
                description: "A versatile blade forged from tempered steel, balanced for both slashing and thrusting attacks.",
                damage: "1d8",
                cost: "15 gold"
            },
            {
                name: "Plate Armor",
                type: "armor",
                category: "Armor",
                description: "Heavy armor consisting of shaped, interlocking metal plates covering the entire body.",
                defense: "+8 AC",
                cost: "1500 gold"
            },
            {
                name: "Health Potion",
                type: "potions",
                category: "Potions",
                description: "A crimson elixir that restores vitality when consumed.",
                effect: "Restore 2d4+2 HP",
                cost: "50 gold"
            },
            {
                name: "Ring of Protection",
                type: "magical",
                category: "Magical Items",
                description: "A silver ring inscribed with protective runes that ward against harm.",
                effect: "+1 AC, +1 to saving throws",
                cost: "Rare"
            },
            {
                name: "Battleaxe",
                type: "weapons",
                category: "Weapons",
                description: "A heavy axe with a broad blade, designed to cleave through armor and bone.",
                damage: "1d10",
                cost: "10 gold"
            },
            {
                name: "Leather Armor",
                type: "armor",
                category: "Armor",
                description: "Light armor made of supple leather, offering protection without hindering movement.",
                defense: "+2 AC",
                cost: "10 gold"
            },
            {
                name: "Mana Potion",
                type: "potions",
                category: "Potions",
                description: "A glowing blue liquid that restores magical energy.",
                effect: "Restore 2d4+2 MP",
                cost: "75 gold"
            },
            {
                name: "Staff of Fire",
                type: "magical",
                category: "Magical Items",
                description: "A wooden staff topped with a ruby that crackles with flame magic.",
                effect: "Cast Fireball 3/day",
                cost: "Very Rare"
            },
            {
                name: "Shortbow",
                type: "weapons",
                category: "Weapons",
                description: "A compact ranged weapon perfect for hunters and scouts.",
                damage: "1d6",
                cost: "25 gold"
            },
            {
                name: "Shield",
                type: "armor",
                category: "Armor",
                description: "A sturdy wooden shield reinforced with metal bands.",
                defense: "+2 AC",
                cost: "10 gold"
            },
            {
                name: "Antidote",
                type: "potions",
                category: "Potions",
                description: "A bitter remedy that neutralizes poisons and toxins.",
                effect: "Cure poison",
                cost: "50 gold"
            },
            {
                name: "Cloak of Elvenkind",
                type: "magical",
                category: "Magical Items",
                description: "A gossamer cloak that helps its wearer blend into surroundings.",
                effect: "Advantage on Stealth checks",
                cost: "Uncommon"
            }
        ];
        displayEquipment(equipmentData);
    }

    // Display equipment cards
    function displayEquipment(items) {
        if (!items || items.length === 0) {
            equipmentGrid.innerHTML = '<div class="loading">No equipment found.</div>';
            return;
        }

        equipmentGrid.innerHTML = items.map(item => `
            <div class="equipment-card fade-in-up" data-category="${item.type}">
                <h3>${item.name}</h3>
                <div class="equipment-type">${item.category}</div>
                <p>${item.description}</p>
                <div class="equipment-stats">
                    ${item.damage ? `<span class="stat">⚔️ ${item.damage}</span>` : ''}
                    ${item.defense ? `<span class="stat">🛡️ ${item.defense}</span>` : ''}
                    ${item.effect ? `<span class="stat">✨ ${item.effect}</span>` : ''}
                    ${item.cost ? `<span class="stat">💰 ${item.cost}</span>` : ''}
                </div>
            </div>
        `).join('');

        // Re-observe new elements for scroll animation
        const newCards = equipmentGrid.querySelectorAll('.fade-in-up');
        newCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.05}s`;
            setTimeout(() => card.classList.add('visible'), 50);
        });
    }

    // Filter equipment
    function filterEquipment(category) {
        currentFilter = category;
        
        if (category === 'all') {
            displayEquipment(equipmentData);
        } else {
            const filtered = equipmentData.filter(item => item.type === category);
            displayEquipment(filtered);
        }
    }

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter equipment
            const category = this.getAttribute('data-category');
            filterEquipment(category);
        });
    });

    // Initialize
    loadEquipment();
});
