const menuBar = document.getElementById('menu-bar');
const bg = document.querySelector('.bg');
const playlists = document.getElementById('playlists');
menuBar.addEventListener('click', () => {
    playlists.classList.toggle('visible');
    bg.classList.toggle('visible');
});

bg.addEventListener('click', () => {
    playlists.classList.toggle('visible');
    bg.classList.toggle('visible');
});