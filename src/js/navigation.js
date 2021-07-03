const button = document.querySelector('.main-nav__button');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.main-header--opened');
const overlay = document.getElementById('overlay');
const body =  document.querySelector("body");

nav.classList.remove('main-nav--nojs');
header.classList.remove('main-header--opened');

button.addEventListener('click', openNav);

function openNav() {
    if (nav.classList.contains('main-nav--closed')) {
        nav.classList.remove('main-nav--closed');
        nav.classList.add('main-nav--opened');
        overlay.style.display = 'block';
        header.classList.add('main-header--opened');
        button.blur();
        body.classList.add('noscroll');

    } else {
        nav.classList.add('main-nav--closed');
        overlay.style.display = 'none';
        nav.classList.remove('main-nav--opened');
        header.classList.remove('main-header--opened');
        button.blur();
        body.classList.remove('noscroll');
    }
}
