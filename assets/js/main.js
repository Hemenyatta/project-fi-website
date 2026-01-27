// Project Fi Website - Main JavaScript
// Vanilla JS for scroll animations and interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Music Player Control
    const musicToggle = document.querySelector('#music-toggle');
    const backgroundMusic = document.querySelector('#background-music');
    let isPlaying = false;

    if (musicToggle && backgroundMusic) {
        const DEFAULT_VOLUME = 0.15;
        backgroundMusic.volume = DEFAULT_VOLUME;

        const MUSIC_PREF_KEY = 'projectfi_music_enabled';
        const getUserMusicEnabledPreference = () => {
            try {
                return localStorage.getItem(MUSIC_PREF_KEY) === 'true';
            } catch {
                return false;
            }
        };

        const setUserMusicEnabledPreference = (enabled) => {
            try {
                localStorage.setItem(MUSIC_PREF_KEY, enabled ? 'true' : 'false');
            } catch {
                // ignore
            }
        };

        const updateMusicToggleUI = () => {
            musicToggle.classList.toggle('playing', isPlaying);
            musicToggle.classList.toggle('muted', isPlaying && backgroundMusic.muted);

            if (!isPlaying) {
                musicToggle.title = 'Lecture de la musique';
            } else if (backgroundMusic.muted) {
                musicToggle.title = 'Activer la musique';
            } else {
                musicToggle.title = 'Couper la musique';
            }
        };

        const tryPlayMuted = () => {
            backgroundMusic.muted = true;

            const playPromise = backgroundMusic.play();
            if (playPromise && typeof playPromise.then === 'function') {
                return playPromise
                    .then(() => {
                        isPlaying = true;
                        updateMusicToggleUI();
                    })
                    .catch(() => {
                        // Some environments still block autoplay; wait for user interaction.
                        isPlaying = false;
                        updateMusicToggleUI();
                    });
            }

            // Older browsers: assume it started.
            isPlaying = true;
            updateMusicToggleUI();
            return Promise.resolve();
        };

        const tryUnmuteAndPlay = () => {
            backgroundMusic.muted = false;
            const playPromise = backgroundMusic.play();
            if (playPromise && typeof playPromise.catch === 'function') {
                playPromise.catch(() => {
                    // If unmute-without-gesture is blocked, fall back to muted playback.
                    backgroundMusic.muted = true;
                    isPlaying = false;
                    updateMusicToggleUI();
                });
            }
            isPlaying = true;
            updateMusicToggleUI();
        };

        const initAutoplay = () => {
            // Hosted browsers often block autoplay with sound, but allow muted autoplay.
            tryPlayMuted();

            // If the user already opted-in earlier, try audible autoplay too.
            // This will still be blocked on some browsers, but it works on others once engaged.
            if (getUserMusicEnabledPreference()) {
                tryUnmuteAndPlay();
            }

            // On first user interaction anywhere, try to unmute.
            const unlockOnFirstGesture = () => {
                // Important: do NOT chain promises here; keep play() inside the gesture call stack.
                backgroundMusic.muted = false;
                const p = backgroundMusic.play();

                if (p && typeof p.catch === 'function') {
                    p.catch(() => {
                        // If audible playback is blocked, attempt muted playback instead.
                        backgroundMusic.muted = true;
                        const p2 = backgroundMusic.play();
                        if (p2 && typeof p2.catch === 'function') {
                            p2.catch(() => {
                                isPlaying = false;
                                updateMusicToggleUI();
                            });
                        }
                    });
                }

                isPlaying = true;
                updateMusicToggleUI();
            };

            // Browsers treat some actions as a "user gesture" (needed to start audio with sound).
            // Scrolling is typically represented by wheel/touch events rather than a plain "scroll" event.
            const addUnlockListener = (eventName, options) => {
                document.addEventListener(eventName, unlockOnFirstGesture, options);
            };

            // Click/tap/drag
            addUnlockListener('pointerdown', { once: true, capture: true });

            // Scroll gestures
            addUnlockListener('wheel', { once: true, capture: true, passive: true });
            addUnlockListener('touchstart', { once: true, capture: true, passive: true });
            addUnlockListener('touchmove', { once: true, capture: true, passive: true });

            // Keyboard (space/arrow keys often scroll)
            addUnlockListener('keydown', { once: true, capture: true });
        };

        if (backgroundMusic.readyState >= 2) {
            initAutoplay();
        } else {
            backgroundMusic.addEventListener('canplay', initAutoplay, { once: true });
        }

        musicToggle.addEventListener('click', function(e) {
            e.preventDefault();

            // If it is playing but muted, the first click should unmute (not pause).
            if (isPlaying && backgroundMusic.muted) {
                tryUnmuteAndPlay();
                setUserMusicEnabledPreference(true);
                return;
            }

            if (isPlaying) {
                backgroundMusic.pause();
                isPlaying = false;
                setUserMusicEnabledPreference(false);
                updateMusicToggleUI();
            } else {
                // User gesture: we can try audible playback directly.
                tryUnmuteAndPlay();
                setUserMusicEnabledPreference(true);
            }
        });

        updateMusicToggleUI();
    }

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-up class
    const elementsToAnimate = document.querySelectorAll('.fade-in-up');
    elementsToAnimate.forEach(element => {
        animateOnScroll.observe(element);
    });

    // Parallax Scroll Effect for Hero Section
    const parallaxElements = document.querySelectorAll('.parallax-layer');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach((element, index) => {
                // Different scroll speeds for different layers
                const speed = (index + 1) * 0.3;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll-based navbar styling
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(21, 26, 50, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)';
        } else {
            navbar.style.background = 'rgba(21, 26, 50, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        }

        lastScroll = currentScroll;
    });

    // Add stagger effect to feature cards and class cards
    const cardContainers = document.querySelectorAll('.features-grid, .classes-grid');
    
    cardContainers.forEach(container => {
        const cards = container.querySelectorAll('.feature-card, .class-card');
        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // Full Page Scroll after intro (only on homepage)
    const heroIntro = document.querySelector('.hero-intro');
    const sections = document.querySelectorAll('.parallax-illustration, .intro-section, .cta-section');
    let isScrolling = false;
    let scrollTimeout;

    // Only enable full page scroll if hero-intro exists (homepage only)
    if (heroIntro && sections.length > 0) {
        function scrollToSection(index) {
            if (index >= 0 && index < sections.length) {
                isScrolling = true;
                const section = sections[index];
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
                
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 1000);
            }
        }

        window.addEventListener('wheel', function(e) {
            const scrollTop = window.pageYOffset;
            const introHeight = heroIntro.offsetHeight;
            
            // Only apply full page scroll after intro
            if (scrollTop >= introHeight - 50 && !isScrolling) {
                e.preventDefault();
                
                // Find current section based on viewport position
                let currentIndex = -1;
                const viewportMiddle = scrollTop + window.innerHeight / 2;
                
                sections.forEach((section, index) => {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;
                    
                    if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) {
                        currentIndex = index;
                    }
                });
                
                // If no section found, find closest one
                if (currentIndex === -1) {
                    let minDistance = Infinity;
                    sections.forEach((section, index) => {
                        const distance = Math.abs(section.offsetTop - scrollTop);
                        if (distance < minDistance) {
                            minDistance = distance;
                            currentIndex = index;
                        }
                    });
                }
                
                // Scroll to next or previous section
                if (e.deltaY > 0) {
                    // Scrolling down
                    if (currentIndex < sections.length - 1) {
                        scrollToSection(currentIndex + 1);
                    }
                } else {
                    // Scrolling up
                    if (currentIndex > 0) {
                        scrollToSection(currentIndex - 1);
                    } else if (currentIndex === 0) {
                        // Go back to intro
                        isScrolling = true;
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                        clearTimeout(scrollTimeout);
                        scrollTimeout = setTimeout(() => {
                            isScrolling = false;
                        }, 1000);
                    }
                }
            }
        }, { passive: false });
    }

    // Navbar hover effect during intro
    const navbarMain = document.querySelector('.navbar-main');
    const heroIntroSection = document.querySelector('.hero-intro');
    let isInIntro = true;

    if (navbarMain && heroIntroSection) {
        // Check if we're in the intro section
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const introHeight = heroIntroSection.offsetHeight;
            
            if (scrollTop >= introHeight - 100) {
                isInIntro = false;
                navbarMain.classList.add('revealed');
                navbarMain.classList.remove('show-on-hover');
            } else {
                isInIntro = true;
                navbarMain.classList.remove('revealed');
            }
        });

        // Show navbar when mouse is at top of screen during intro
        document.addEventListener('mousemove', function(e) {
            if (isInIntro) {
                if (e.clientY < 80) {
                    navbarMain.classList.add('show-on-hover');
                } else {
                    navbarMain.classList.remove('show-on-hover');
                }
            }
        });
    }

    // Console welcome message
    console.log('%c Welcome to Project Fi! ', 
        'background: #586DCF; color: #E6D1B4; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%c Built with vanilla JavaScript ', 
        'color: #586DCF; font-size: 14px;');
});
