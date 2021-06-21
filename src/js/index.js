import '@/scss/index.scss';
import 'lightgallery.js/dist/js/lightgallery.min.js'
import './navigation';
import './buttonsEvent';
import IMask from 'imask';
// import 'lightgallery.js';
// import Swiper from 'swiper';
// let swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         1900: {
//             slidesPerView: 3,
//             spaceBetween: 50,
//         },
//     },
// })
// console.log(swiper)
// let reviewsSwiper2 = new Swiper(".reviewsSwiper2", {
//     loop: true,
//     spaceBetween: 10,
//     slidesPerView: 4,
//     freeMode: true,
//     watchSlidesVisibility: true,
//     watchSlidesProgress: true,
// });
// let reviewsSwiper = new Swiper(".reviewsSwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//
// });
// swiper.params.control = swiper2;
// swiper2.params.control = swiper;
// console.log(reviewsSwiper2)
// console.log(reviewsSwiper)
// import SlimSelect from 'slim-select'

// function closeServicesModal(modal = null) {
//     const serviceModals = document.querySelectorAll('.modal-hover');
//     for (let m of serviceModals) {
//         if( !modal  ||   m !== modal) {m.style.display = "none"}
//     }
// }

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

