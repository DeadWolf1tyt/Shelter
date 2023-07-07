
const nav = document.querySelector('.nav');
const burgerMenu = document.querySelector('.burger-menu');
const menuSpan = document.querySelectorAll('.burger-menu-span');
const body = document.querySelector('body');
const navBackground = document.querySelector('.nav-background');

function burger () {
    nav.classList.toggle('_active');
    burgerMenu.classList.toggle('_active');
    body.classList.toggle('_active');
    navBackground.classList.toggle('_active');
    for (let i = 0; i < menuSpan.length; i++) {
        menuSpan[i].classList.toggle('_active');
    }
}

function linkKlick () {
    burger();
}