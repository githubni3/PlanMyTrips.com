// hamburger

const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const nav_list = document.querySelector('.nav-list');


function showM(){
    nav_list.style.display = 'block';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
}

function closeM(){
    nav_list.style.display = 'none';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
}