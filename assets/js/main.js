// Project Fi Website - Main JavaScript
// Vanilla JS for scroll animations and interactivity

document.addEventListener('DOMContentLoaded', function() {
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

    // Console welcome message
    console.log('%c Welcome to Project Fi! ', 
        'background: #586DCF; color: #E6D1B4; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%c Built with vanilla JavaScript ', 
        'color: #586DCF; font-size: 14px;');
});
