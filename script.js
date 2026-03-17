// script.js

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Skills Progress Animation
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');
let animated = false;

window.addEventListener('scroll', () => {
    if (!skillsSection) return;
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos && !animated) {
        progressBars.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width;
        });
        animated = true;
    }
});

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.section-title, .about-img-wrapper, .cert-card, .portfolio-card, .timeline-item, .skill-item');

const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            revealElements[i].style.opacity = '1';
            revealElements[i].style.transform = 'translateY(0)';
        }
    }
};

window.addEventListener('scroll', reveal);

// Initialize reveal styles
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.6s ease-out';
});

// Trigger once in case elements are already visible
reveal();
