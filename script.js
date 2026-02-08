// Initialize animation on page load
document.addEventListener('DOMContentLoaded', function() {
    animateRoses();
    createStarfield();
});

// Animate all roses with staggered effect
function animateRoses() {
    const roseContainers = document.querySelectorAll('.rose-container');
    
    roseContainers.forEach((container, containerIndex) => {
        const rose = container.querySelector('.rose');
        const petals = container.querySelectorAll('.petal');
        const roseCenter = container.querySelector('.rose-center');
        
        // Stagger the animation of each rose
        setTimeout(() => {
            // Bloom the rose
            rose.style.animation = 'bloom 3s ease-out forwards';
            
            // Animate petals individually
            petals.forEach((petal, petalIndex) => {
                petal.style.animation = `bloom-petal 3s ease-out ${petalIndex * 0.1}s forwards`;
            });
            
            // Animate center
            if (roseCenter) {
                roseCenter.style.animation = `bloom 3s ease-out ${petals.length * 0.1}s forwards`;
            }
        }, containerIndex * 800);
    });
}

// Create a starfield effect in the background
function createStarfield() {
    const stars = document.querySelector('.stars');
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        star.style.animationDelay = Math.random() * 2 + 's';
        
        stars.appendChild(star);
    }
}

// Add interactivity - click to reset animation
document.addEventListener('click', function() {
    const roseContainers = document.querySelectorAll('.rose-container');
    
    roseContainers.forEach(container => {
        const rose = container.querySelector('.rose');
        const petals = container.querySelectorAll('.petal');
        const roseCenter = container.querySelector('.rose-center');
        
        // Remove animations
        rose.style.animation = 'none';
        petals.forEach(petal => {
            petal.style.animation = 'none';
        });
        if (roseCenter) {
            roseCenter.style.animation = 'none';
        }
        
        // Trigger reflow to restart animation
        void rose.offsetWidth;
        
        // Restart animations
        animateRoses();
    });
});

// Add keyboard shortcut to reset (press 'R')
document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        const roseContainers = document.querySelectorAll('.rose-container');
        
        roseContainers.forEach(container => {
            const rose = container.querySelector('.rose');
            const petals = container.querySelectorAll('.petal');
            const roseCenter = container.querySelector('.rose-center');
            
            rose.style.animation = 'none';
            petals.forEach(petal => {
                petal.style.animation = 'none';
            });
            if (roseCenter) {
                roseCenter.style.animation = 'none';
            }
            
            void rose.offsetWidth;
            
            animateRoses();
        });
    }
});

// Mouse hover effect
document.addEventListener('mouseover', function(event) {
    if (event.target.closest('.rose-container')) {
        const container = event.target.closest('.rose-container');
        container.style.transform = 'scale(1.1)';
        container.style.transition = 'transform 0.3s ease';
    }
});

document.addEventListener('mouseout', function(event) {
    if (event.target.closest('.rose-container')) {
        const container = event.target.closest('.rose-container');
        container.style.transform = 'scale(1)';
    }
});
