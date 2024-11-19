function toggleMenu() {
    const menu = document.getElementById('hamburger-menu');
    menu.classList.toggle('hidden');
    menu.classList.toggle('visible');
}

// Menutup menu ketika klik di luar
window.onclick = function(event) {
    const menu = document.getElementById('hamburger-menu');
    const hamburger = document.querySelector('.hamburger');

    // Jika klik di luar menu dan hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        if (menu.classList.contains('visible')) {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
        }
    }
};