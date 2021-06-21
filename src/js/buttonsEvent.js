window.onload = () => {
    let btnShowStocks = document.getElementById('btnShowStocks');
    let stocks = document.getElementById('stocks');
    let stockItems = stocks.querySelectorAll('.stocks__item');
// специалисты
    let btnShowExperts = document.getElementById('btnShowExperts');
    let experts = document.getElementById('experts');
    let expertsItems = experts.querySelectorAll('.stocks__item');
// акции
    btnShowStocks.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(stockItems)
        for (let i of stockItems) {
            console.log(i)
            i.style.display = 'block';
        }
        btnShowStocks.style.display = 'none';
    })


    btnShowExperts.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(expertsItems)
        for (let i of expertsItems) {
            console.log(i)
            i.style.display = 'block';
        }
        btnShowExperts.style.display = 'none';
    })
}
