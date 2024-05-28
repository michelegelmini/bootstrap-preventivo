'use strict'

/* comportamento all'invio del form */
const myForm = document.querySelector('form')

myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    /* assegnazione costanti fornite */
    const hoursOfWork = 10;
    const backendDevelompentPrice = 20.50;
    const frontendDevelopmentPrice = 15.30;
    const projectAnalysisPrice = 33.60;


    /* calcolo del prezzo sulla base del tipo di lavoro selezionato*/
    const selectedWork = document.getElementById('form-select');

    let selectedWorkPrice = 0;

    if (selectedWork.value === 'backendDevelopment') {
        selectedWorkPrice = backendDevelompentPrice;
    } else if (selectedWork.value === 'frontendDevelopment') {
        selectedWorkPrice = frontendDevelopmentPrice;
    } else if (selectedWork.value === 'projectAnalysis') {
        selectedWorkPrice = projectAnalysisPrice;
    }

    /* invocazione della funzione */

    const promoCode = document.getElementById('promoCode');

    let finalPrice = priceCalculator(selectedWorkPrice, promoCode, hoursOfWork);

    console.log(`hai selezionato ${selectedWork.value}, il preventivo è di ${finalPrice}`);


    /* comparsa del prezzo */

    document.getElementById('final-price').classList.remove('d-none');

    const finalPriceOutput = document.getElementById('final-price-calculation');
    finalPriceOutput.innerHTML = `€ ${finalPrice}`;

})



/* funzione con operazioni aritmetiche e verifica dello sconto */

function priceCalculator(selectedWorkPrice, promoCode, hoursOfWork) {
    let price = selectedWorkPrice * hoursOfWork;
    const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    let finalPrice = 0;

    if (promoCodes.includes(promoCode.value)) {
        let discountedPrice = price - (price * 0.25);
        console.log(discountedPrice);
        finalPrice = discountedPrice;
        return finalPrice

    } else {
        console.log(price);
        finalPrice = price;
        return finalPrice
    }

}