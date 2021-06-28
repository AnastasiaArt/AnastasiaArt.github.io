import '@/scss/index.scss';
import 'lightgallery.js/src/js/lightgallery.js'
import './navigation';

import IMask from 'imask';


function onHoverService(services) {
    if (window.innerWidth > 768) {
        console.log('122')
        for (let item of services) {
            item.onmouseover = (e) => {
                console.log(e)
                e.preventDefault();
                const modal = item.querySelector('.modal-hover');
                // closeServicesModal(modal);
                // if (modal.style.display === "none") {
                modal.style.display = "flex";
                // } else {
                //     modal.style.display = "none";
                // }
            }
            item.onmouseout = (e) => {
                console.log(e)
                e.preventDefault();
                const modal = item.querySelector('.modal-hover');
                // closeServicesModal(modal);
                // if (modal.style.display === "none") {
                // modal.style.display = "flex";
                // } else {
                modal.style.display = "none";
            }
        }
    }
}

function resize(callback ) {
    console.log('11')
    callback;
}
window.addEventListener("resize", () => {
    const services = document.querySelectorAll('.services__item');
    resize( onHoverService(services));
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

    // for(let item of services) {
    //     item.onmouseover = (e) => {
    //         console.log(e)
    //         e.preventDefault();
    //         const modal = item.querySelector('.modal-hover');
    //         // closeServicesModal(modal);
    //         // if (modal.style.display === "none") {
    //             modal.style.display = "flex";
    //         // } else {
    //         //     modal.style.display = "none";
    //         // }
    //     }
    //    item.onmouseout= (e) => {
    //        console.log(e)
    //        e.preventDefault();
    //        const modal = item.querySelector('.modal-hover');
    //        // closeServicesModal(modal);
    //        // if (modal.style.display === "none") {
    //        // modal.style.display = "flex";
    //        // } else {
    //        modal.style.display = "none";
    //    }
    // }

}
// // если закрыли вкладку браузера
// window.onbeforeunload = () => {
//
// };

