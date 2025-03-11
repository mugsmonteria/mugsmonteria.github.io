const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    // Cambia el contenido entre ☰ y X
    menuToggle.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});