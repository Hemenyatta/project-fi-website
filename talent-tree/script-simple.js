// Initialisation simplifiée sans carousel - affiche directement l'arbre demandé
window.addEventListener('DOMContentLoaded', () => {
    // Vérifier si un paramètre de classe est passé dans l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const classParam = urlParams.get('class') || 'class1';
    
    const carousel = document.getElementById('carousel');
    if (!carousel) return;
    
    carousel.innerHTML = '';
    carousel.style.transform = 'none';
    carousel.style.transition = 'none';
    
    // Créer un seul slot pour l'arbre demandé
    const treeSlot = document.createElement('div');
    treeSlot.className = 'tree-slot active';
    treeSlot.id = 'tree-slot-0';
    treeSlot.style.width = '100%';
    
    const treeContainer = document.createElement('div');
    treeContainer.id = 'tree-container-0';
    treeContainer.className = 'tree-container';
    
    const tree = document.createElement('div');
    tree.id = 'tree-0';
    tree.className = 'tree';
    tree.dataset.classKey = classParam;
    tree.dataset.index = 0;
    
    treeContainer.appendChild(tree);
    treeSlot.appendChild(treeContainer);
    carousel.appendChild(treeSlot);
    
    // Afficher directement l'arbre
    currentClassKey = classParam;
    
    requestAnimationFrame(() => {
        adjustCoordinates();
        renderTalentTree();
        renderLinks();
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
