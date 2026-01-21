// Hero Intro Animation Script - Séquence d'animation précise
document.addEventListener('DOMContentLoaded', function() {
    const introPhrase = document.getElementById('intro-phrase');
    const heroIntroSection = document.getElementById('hero-intro');
    const introBgGradient = document.querySelector('.intro-bg-gradient');
    const navbarMain = document.getElementById('navbar-main');
    const parallaxIllustration = document.getElementById('parallax-illustration');
    const parallaxBackground = document.querySelector('.parallax-background');
    const parallaxOverlay = document.querySelector('.parallax-overlay');
    const introContentWrapper = document.querySelector('.intro-content-wrapper');

    if (!introPhrase || !heroIntroSection) return;

    // Split text into characters (préserver les espaces et les <br>)
    const originalHTML = introPhrase.innerHTML;
    introPhrase.innerHTML = '';
    const spans = [];

    // Parser le HTML pour gérer le <br>
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = originalHTML;
    
    // Parcourir tous les nœuds texte et <br>
    const walker = document.createTreeWalker(
        tempDiv,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
        null,
        false
    );

    let node;
    while (node = walker.nextNode()) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                const char = text[i];
                // Préserver les espaces
                span.textContent = char === ' ' ? '\u00A0' : char;
                introPhrase.appendChild(span);
                spans.push(span);
            }
        } else if (node.nodeName === 'BR') {
            const br = document.createElement('br');
            introPhrase.appendChild(br);
        }
    }

    let lastScrollTop = 0;
    let phraseComplete = false;

    // Handle scroll animation
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroIntroHeight = heroIntroSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Écran 1: Révélation caractère par caractère (0% à 60% du scroll de hero-intro)
        const phraseRevealProgress = Math.min((scrollTop / (heroIntroHeight * 0.6)), 1);
        
        // Reveal characters based on scroll progress
        const revealCount = Math.floor(spans.length * phraseRevealProgress);
        spans.forEach((span, index) => {
            if (index < revealCount) {
                span.classList.add('revealed');
            }
        });

        // Marquer la phrase comme complète quand tous les caractères sont révélés
        if (phraseRevealProgress >= 1 && !phraseComplete) {
            phraseComplete = true;
        }

        // Transition vers l'écran 2 (60% à 100% du scroll)
        if (scrollTop > heroIntroHeight * 0.6) {
            const transitionProgress = (scrollTop - (heroIntroHeight * 0.6)) / (heroIntroHeight * 0.4);
            
            // Fade out du fond noir
            if (introBgGradient) {
                introBgGradient.style.opacity = Math.max(0, 1 - transitionProgress);
            }
            
            // Fade out de la phrase
            if (introContentWrapper) {
                introContentWrapper.style.opacity = Math.max(0, 1 - (transitionProgress * 1.5));
            }
            
            // Fade in de l'illustration parallaxe
            if (parallaxIllustration) {
                parallaxIllustration.classList.add('visible');
                parallaxIllustration.style.opacity = Math.min(1, transitionProgress * 1.5);
            }

            // Révéler la navbar en même temps que l'illustration
            if (navbarMain) {
                navbarMain.classList.add('revealed');
            }
        } else {
            // Cacher l'illustration et la navbar si on scroll vers le haut
            if (parallaxIllustration) {
                parallaxIllustration.classList.remove('visible');
                parallaxIllustration.style.opacity = 0;
            }
            // Réafficher la phrase
            if (introContentWrapper) {
                introContentWrapper.style.opacity = 1;
            }
            if (navbarMain) {
                navbarMain.classList.remove('revealed');
            }
            if (introBgGradient) {
                introBgGradient.style.opacity = 1;
            }
        }

        // Écran 2: Effet parallaxe sur les 3 couches + premier plan overlay
        if (scrollTop > heroIntroHeight) {
            const parallaxScroll = scrollTop - heroIntroHeight;
            
            // Arrière plan (bouge le plus lentement) - direction vers le haut
            if (parallaxBackground) {
                const bgOffset = parallaxScroll * 0.15;
                parallaxBackground.style.transform = `translateY(-${bgOffset}px)`;
            }

            // Premier plan overlay (parallaxe appliqué)
            if (parallaxOverlay) {
                const overlayOffset = parallaxScroll * 0.15;
                parallaxOverlay.style.transform = `translateY(-${overlayOffset}px)`;
            }
        } else {
            // Reset parallax when scrolling back up
            if (parallaxBackground) parallaxBackground.style.transform = 'translateY(0)';
            if (parallaxOverlay) parallaxOverlay.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    }

    // Écouteur de scroll avec throttling pour optimisation
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    handleScroll();
});
