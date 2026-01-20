// Hero Intro Animation Script
document.addEventListener('DOMContentLoaded', function() {
    const introPhrase = document.getElementById('intro-phrase');
    const heroIntroSection = document.getElementById('hero-intro');
    const introBgParallax = document.querySelector('.intro-bg-parallax');
    const navbarMain = document.getElementById('navbar-main');
    const introIllustrationContainer = document.querySelector('.intro-illustration-container');

    if (!introPhrase || !heroIntroSection) return;

    // Split text into characters
    const text = introPhrase.textContent;
    introPhrase.innerHTML = '';
    const spans = [];

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.05}s`;
        introPhrase.appendChild(span);
        spans.push(span);
    }

    // Handle scroll animation
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const heroIntroHeight = heroIntroSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress in hero intro section (0 to 1)
        // We want the phrase to be fully revealed before we hide the black bg
        const scrollProgress = Math.min(scrollTop / (heroIntroHeight * 0.7), 1);

        // Reveal characters based on scroll progress
        const revealCount = Math.floor(spans.length * scrollProgress);
        spans.forEach((span, index) => {
            if (index < revealCount) {
                span.classList.add('revealed');
            } else {
                span.classList.remove('revealed');
            }
        });

        // Parallax effect on black background - moves up and fades out
        // Only fade after 70% scroll
        const bgFadeProgress = Math.max(0, (scrollProgress - 0.7) / 0.3);
        const parallaxOffset = scrollTop * 0.5;
        const opacity = Math.max(0, 1 - (bgFadeProgress * 1.2));
        introBgParallax.style.transform = `translateY(${parallaxOffset}px)`;
        introBgParallax.style.opacity = opacity;

        // Illustration parallax - moves up slower
        const illustrationOffset = scrollTop * 0.3;
        introIllustrationContainer.style.transform = `translateY(${-illustrationOffset}px)`;

        // Show navbar after phrase is complete (90% scroll)
        if (scrollProgress > 0.9) {
            navbarMain.classList.add('revealed');
        } else {
            navbarMain.classList.remove('revealed');
        }
    });

    // Initial reveal for fast scrollers
    window.dispatchEvent(new Event('scroll'));
});
