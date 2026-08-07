const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuIcon = menuToggle.querySelector('i');
// Toggle menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Ganti ikon
    if (navMenu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});
// Tutup menu saat klik link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});
const overlay = document.querySelector(".menu-overlay");

menuToggle.addEventListener("click", () => {
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    navMenu.classList.remove("active");
    overlay.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
});