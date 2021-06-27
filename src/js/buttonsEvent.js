// let btnShowStocks = document.getElementById('btnShowStocks');
// let stocks = document.getElementById('stocks');
// let stockItems = stocks.querySelectorAll('.experts__item');
// специалисты
let btnShowExperts = document.getElementById('btnShowExperts');
let experts = document.getElementById('experts');
let firstPageExperts = null;
let secondPageExperts = null;
let expertsItems = null;
if (experts) {
    firstPageExperts = experts.querySelector('.firstPage');
    secondPageExperts = experts.querySelector('.secondPage');
    expertsItems = experts.querySelectorAll('.experts__item');
}
// акции
// if (btnShowStocks) {
//     btnShowStocks.addEventListener('click', (e) => {
//         e.preventDefault();
//         console.log(stockItems)
//         for (let i of stockItems) {
//             console.log(i)
//             i.style.display = 'block';
//         }
//         btnShowStocks.style.display = 'none';
//     })
// }


if (btnShowExperts) {
    btnShowExperts.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.innerWidth >= 1650) {
            firstPageExperts.classList.toggle('active');
            secondPageExperts.classList.toggle('active');
            btnShowExperts.classList.toggle('prev')
        } else {
            for (let i of expertsItems) {
                i.style.display = 'block';
                btnShowExperts.style.display = 'none';
            }
        }
    })
}

