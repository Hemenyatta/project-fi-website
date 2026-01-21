// Override initCarousel pour affichage direct sans carousel
const originalDOMContentLoaded = window.addEventListener;
window.addEventListener = function(event, handler) {
  if (event === 'DOMContentLoaded') {
    const newHandler = function() {
      const urlParams = new URLSearchParams(window.location.search);
      const classParam = urlParams.get('class') || 'class1';
      
      const carousel = document.getElementById('carousel');
      if (carousel) {
        carousel.innerHTML = '';
        carousel.style.transform = 'none';
        
        const treeSlot = document.createElement('div');
        treeSlot.className = 'tree-slot active';
        treeSlot.style.width = '100%';
        
        const treeContainer = document.createElement('div');
        treeContainer.id = 'tree-container-0';
        treeContainer.className = 'tree-container';
        
        const tree = document.createElement('div');
        tree.id = 'tree-0';
        tree.className = 'tree';
        tree.dataset.classKey = classParam;
        
        treeContainer.appendChild(tree);
        treeSlot.appendChild(treeContainer);
        carousel.appendChild(treeSlot);
        
        window.currentClassKey = classParam;
        
        requestAnimationFrame(() => {
          adjustCoordinates();
          renderTalentTree();
          renderLinks();
          initTooltips();
        });
      }
    };
    return originalDOMContentLoaded.call(this, event, newHandler);
  }
  return originalDOMContentLoaded.call(this, event, handler);
};
