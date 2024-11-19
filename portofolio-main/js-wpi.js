let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let logo = document.querySelector('.logo'); // Added to track the logo element

// Toggle menu on click
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// Scroll reveal configuration
const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true,
});

// Close menu when scrolling
document.addEventListener('scroll', function() {
    // Check if the logo or menu-btn is visible
    if (navbar.classList.contains('open') && 
        (menu.getBoundingClientRect().top < window.innerHeight || logo.getBoundingClientRect().top < window.innerHeight)) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }
});

// Close menu when clicking outside of it
document.addEventListener('click', function(event) {
    // Check if the click is outside the menu or menu-btn
    if (!menu.contains(event.target) && !navbar.contains(event.target) && navbar.classList.contains('open')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }
});

// Scroll reveal animations
sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.navbar', { delay: 400, origin: 'top' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.home-text span', { delay: 600, origin: 'top' });
sr.reveal('.home-text h1', { delay: 690, origin: 'left' });
sr.reveal('.home-text p', { delay: 690, origin: 'top' });
sr.reveal('.social-media', { delay: 690, origin: 'top' });
sr.reveal('.main-btn', { delay: 870, origin: 'left' });
sr.reveal('.share', { delay: 950, origin: 'bottom' });
sr.reveal('.share p', { delay: 950, origin: 'bottom' });
sr.reveal('.home-img', { delay: 1000, origin: 'right' });