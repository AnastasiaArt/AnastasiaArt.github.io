import '@/scss/index.scss';
import 'lightgallery.js/src/js/lightgallery.js'
import './navigation';

import IMask from 'imask';
const header = document.querySelector('.main-header')

function onHoverService(services) {
    if (window.innerWidth > 768) {
        for (let item of services) {
            item.onclick = (e) => {
                e.preventDefault();
                const modal = item.querySelector('.modal-hover');
                const li = item.closest('li');
                const link = li.querySelector('a');
                // closeServicesModal(modal);
                if (modal.style.display === "none") {
                modal.style.display = "flex";
                link.style.display = "inline-block"
                } else {
                    modal.style.display = "none";
                    link.style.display = "none";
                }
            }
            // item.onmouseout = (e) => {
            //     e.preventDefault();
            //     const modal = item.querySelector('.modal-hover');
            //     // closeServicesModal(modal);
            //     // if (modal.style.display === "none") {
            //     // modal.style.display = "flex";
            //     // } else {
            //     modal.style.display = "none";
            // }
        }
    }
}

function resize(callback ) {
    callback;
}
window.addEventListener("resize", () => {
    const services = document.querySelectorAll('.services__item');
    resize( onHoverService(services));
    if (window.innerWidth >= 1650) {
        header.classList.remove('main-header--opened');
    }
        // resize();
});
function addAutoResize() {
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
        element.style.boxSizing = 'border-box';
        let offset = element.offsetHeight - element.clientHeight;
        element.addEventListener('input', function (event) {
            event.target.style.height = 'auto';
            event.target.style.height = event.target.scrollHeight + offset + 'px';
        });
        element.removeAttribute('data-autoresize');
    });
}

window.onload = () => {
require('./buttonsEvent')
    const services = document.querySelectorAll('.services__item');
    resize( onHoverService(services));
    addAutoResize ();
    let element = document.getElementById('phoneMask');
    let maskOptions = {
        mask: '+{7}(000)00-00'
    };
    if (IMask && element) {
        let mask = IMask(element, maskOptions);
        console.log(mask)
    }
}
// // если закрыли вкладку браузера
// window.onbeforeunload = () => {
//
// };

