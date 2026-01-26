class CardCarousel {
    constructor(containerId, trackId) {
        this.container = document.getElementById(containerId);
        this.track = document.getElementById(trackId);
        this.cards = [];
        this.currentIndex = 0;
        this.isDragging = false;
        this.startX = 0;
        this.lastX = 0;
        this.velocity = 0;
        this.animationFrameId = null;
        this.accumulatedDrag = 0;
        this.hasMovedThisDrag = false;
        
        // Configuration
            this.cardImage = '../images/cartes/mystiques/Carte_test.png';
            this.numCards = 5;
            this.dragSensitivity = 4;
            this.dragThreshold = 180;
        
        this.init();
    }

    init() {
        this.createCards();
        this.setupEventListeners();
        this.updateCarousel();
    }

    createCards() {
        for (let i = 0; i < this.numCards; i++) {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = i;
            card.innerHTML = `<img src="${this.cardImage}" alt="Carte ${i + 1}" />`;
            this.track.appendChild(card);
            this.cards.push(card);
        }
    }

    setupEventListeners() {
        this.container.addEventListener('mousedown', (e) => this.onMouseDown(e));
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseup', (e) => this.onMouseUp(e));

        this.container.addEventListener('touchstart', (e) => this.onTouchStart(e));
        document.addEventListener('touchmove', (e) => this.onTouchMove(e));
        document.addEventListener('touchend', (e) => this.onTouchEnd(e));

        this.container.addEventListener('dragstart', (e) => e.preventDefault());
    }

    onMouseDown(e) {
        this.isDragging = true;
        this.startX = e.clientX;
        this.lastX = e.clientX;
        this.accumulatedDrag = 0;
        this.hasMovedThisDrag = false;
        this.container.classList.add('dragging');
        this.velocity = 0;
        
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    onMouseMove(e) {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.lastX;
        this.accumulatedDrag += deltaX;
        this.lastX = e.clientX;

        if (!this.hasMovedThisDrag) {
            const cardsToMove = Math.floor(Math.abs(this.accumulatedDrag) / this.dragThreshold);
            if (cardsToMove > 0) {
                const direction = this.accumulatedDrag > 0 ? -1 : 1;
                this.currentIndex += direction;
                this.accumulatedDrag = 0;
                this.hasMovedThisDrag = true;
                this.updateCarousel();
            }
        }
    }

    onMouseUp(e) {
        this.isDragging = false;
        this.container.classList.remove('dragging');
        this.hasMovedThisDrag = false;
        this.accumulatedDrag = 0;

        if (Math.abs(this.velocity) > 5) {
            this.applyInertia();
        }
    }

    onTouchStart(e) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.lastX = e.touches[0].clientX;
        this.accumulatedDrag = 0;
        this.hasMovedThisDrag = false;
        this.container.classList.add('dragging');
        this.velocity = 0;
    }

    onTouchMove(e) {
        if (!this.isDragging) return;

        const deltaX = e.touches[0].clientX - this.lastX;
        this.accumulatedDrag += deltaX;
        this.lastX = e.touches[0].clientX;

        if (!this.hasMovedThisDrag) {
            const cardsToMove = Math.floor(Math.abs(this.accumulatedDrag) / this.dragThreshold);
            if (cardsToMove > 0) {
                const direction = this.accumulatedDrag > 0 ? -1 : 1;
                this.currentIndex += direction;
                this.accumulatedDrag = 0;
                this.hasMovedThisDrag = true;
                this.updateCarousel();
            }
        }
    }

    onTouchEnd(e) {
        this.isDragging = false;
        this.container.classList.remove('dragging');
        this.hasMovedThisDrag = false;
        this.accumulatedDrag = 0;

        if (Math.abs(this.velocity) > 5) {
            this.applyInertia();
        }
    }

    applyInertia() {
        const deceleration = 0.95;
        let currentVelocity = this.velocity;

        const animate = () => {
            currentVelocity *= deceleration;

            if (Math.abs(currentVelocity) > 0.5) {
                const cardMovement = Math.sign(currentVelocity) * 0.1;
                this.currentIndex -= cardMovement;
                this.updateCarousel();
                this.animationFrameId = requestAnimationFrame(animate);
            } else {
                this.currentIndex = Math.round(this.currentIndex);
                this.updateCarousel();
            }
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }

    updateCarousel() {
        this.currentIndex = ((this.currentIndex % this.numCards) + this.numCards) % this.numCards;

        this.cards.forEach((card, index) => {
            const distance = this.getCardDistance(index);
            const xPosition = distance * 120;

            card.classList.remove('active', 'side', 'far', 'very-far');

            if (distance === 0) {
                card.classList.add('active');
            } else if (Math.abs(distance) === 1) {
                card.classList.add('side');
            } else if (Math.abs(distance) === 2) {
                card.classList.add('far');
            } else {
                card.classList.add('very-far');
            }

            const scale = this.getScale(distance);
            const yOffset = this.getYOffset(distance);
            const opacity = this.getOpacity(distance);
            const zIndex = 50 - Math.abs(distance) * 10;

            card.style.transform = `translateX(${xPosition}px) translateY(${yOffset}px) scale(${scale})`;
            card.style.opacity = opacity;
            card.style.zIndex = zIndex;
        });
    }

    getCardDistance(index) {
        const distance = index - this.currentIndex;
        const absDistance = Math.abs(distance);

        let finalDistance;
        if (distance > 0 && distance > this.numCards / 2) {
            finalDistance = -(this.numCards - distance);
        } else if (distance < 0 && distance < -this.numCards / 2) {
            finalDistance = this.numCards + distance;
        } else {
            finalDistance = distance;
        }

        return finalDistance;
    }

    getScale(distance) {
        const absDistance = Math.abs(distance);
        if (absDistance === 0) return 1;
        if (absDistance === 1) return 0.85;
        if (absDistance === 2) return 0.7;
        return 0.6;
    }

    getYOffset(distance) {
        const absDistance = Math.abs(distance);
        if (absDistance === 0) return 0;
        if (absDistance === 1) return 20;
        if (absDistance === 2) return 40;
        return 60;
    }

    getOpacity(distance) {
        const absDistance = Math.abs(distance);
        if (absDistance === 0) return 1;
        if (absDistance === 1) return 0.6;
        if (absDistance === 2) return 0.3;
        return 0;
    }

    setCardCount(count) {
        this.track.innerHTML = '';
        this.cards = [];
        this.numCards = count;
        this.currentIndex = 0;

        this.createCards();
        this.updateCarousel();
    }

    setCardImage(imagePath) {
        this.cardImage = imagePath;
        this.cards.forEach((card, index) => {
            card.innerHTML = `<img src="${imagePath}" alt="Carte ${index + 1}" />`;
        });
    }
}
