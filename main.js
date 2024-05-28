'use strict'




/* comportamento all'invio del form */

const myForm = document.querySelector('form')

myForm.addEventListener('submit', function (event) {
    /* comparsa del prezzo */
    event.preventDefault();
    document.getElementById('final-price').classList.toggle('d-none');

    /* assegnazione costanti fornite */
    const hoursOfWork = 10;
    const backendDevelompentPrice = 20.50;
    const frontendDevelopmentPrice = 15.30;
    const projectAnalysisPrice = 33.60;


    /* calcolo del prezzo */
    const selectedWork = document.getElementById('form-select');
    const promoCode = document.getElementById('promoCode');
    let selectedWorkPrice = 0;

    if (selectedWork.value === 'backendDevelopment') {
        selectedWorkPrice = backendDevelompentPrice;
    } else if (selectedWork.value === 'frontendDevelopment') {
        selectedWorkPrice = frontendDevelopmentPrice;
    } else if (selectedWork.value === 'projectAnalysis') {
        selectedWorkPrice = projectAnalysisPrice;
    }

    let finalPrice = priceCalculator(selectedWorkPrice, promoCode, hoursOfWork);


    console.log(`hai selezionato ${selectedWork.value}, il preventivo è di ${finalPrice}`);

})

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