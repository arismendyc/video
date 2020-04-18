const menuBar = document.getElementById('menu-bar');
const bg = document.querySelector('.bg');
const playlists = document.getElementById('playlists');
const visible = function(){
    playlists.classList.toggle('visible');
    bg.classList.toggle('visible');
};
menuBar.addEventListener('click', visible);
bg.addEventListener('click', visible);