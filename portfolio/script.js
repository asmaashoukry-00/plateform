/* ==================== SMOOTH SCROLL NAVIGATION ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ==================== ACTIVE NAV LINK ON SCROLL ==================== */
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

/* ==================== CTA BUTTON CLICK HANDLER ==================== */
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        // You can add your call functionality here
        console.log('Call button clicked');
        // Example: window.location.href = 'tel:+1234567890';
    });
}

/* ==================== HOVER EFFECTS ON CARDS ==================== */
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ==================== PROFILE IMAGE PARALLAX ==================== */
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 50;
        const y = (window.innerHeight / 2 - e.clientY) / 50;
        profileImage.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)`;
    });

    window.addEventListener('mouseleave', () => {
        profileImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

/* ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
projectCards.forEach(card => {
    observer.observe(card);
});

// Observe triangles
const triangles = document.querySelectorAll('.triangle');
triangles.forEach(triangle => {
    observer.observe(triangle);
});

/* ==================== SOCIAL ICONS INTERACTION ==================== */
const socialIcons = document.querySelectorAll('.social-icon, .side-social');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        // Add your social link handling here
        console.log('Social icon clicked:', this.title);
    });

    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-3px)';
    });

    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

/* ==================== RESPONSIVE NAVBAR TOGGLE ==================== */
// Add a mobile menu toggle if needed
const navMenu = document.querySelector('.navbar-menu');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close menu on mobile after clicking
        if (window.innerWidth < 768) {
            navMenu.classList.remove('active');
        }
    });
});

/* ==================== PAGE LOAD ANIMATION ==================== */
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroRight = document.querySelector('.hero-right');
    
    if (heroContent) {
        heroContent.style.animation = 'fadeInLeft 0.8s ease forwards';
    }
    if (heroRight) {
        heroRight.style.animation = 'fadeInRight 0.8s ease forwards';
    }
});

/* ==================== DEBOUNCE FUNCTION FOR PERFORMANCE ==================== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ==================== HANDLE WINDOW RESIZE ==================== */
const handleResize = debounce(() => {
    console.log('Window resized');
    // Add any responsive adjustments here
}, 250);

window.addEventListener('resize', handleResize);

/* ==================== CONSOLE WELCOME MESSAGE ==================== */
console.log('%c🎨 Welcome to Refka HaNNa GhaTas Portfolio', 'font-size: 20px; color: #a4ff00; font-weight: bold;');
console.log('%cUI/UX Designer Portfolio - 2024', 'color: #00d4ff; font-size: 14px;');
