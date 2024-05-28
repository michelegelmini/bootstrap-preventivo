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
    const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    /* calcolo del prezzo */
    const selectedWork = document.getElementById('form-select');
    let selectedWorkPrice = 0;

    if (selectedWork.value === 'backendDevelopment') {
        selectedWorkPrice = backendDevelompentPrice;
    } else if (selectedWork.value === 'frontendDevelopment') {
        selectedWorkPrice = frontendDevelopmentPrice;
    } else if (selectedWork.value === 'projectAnalysis') {
        selectedWorkPrice = projectAnalysisPrice;
    }
    console.log(selectedWork.value);
    console.log(selectedWorkPrice);

    priceCalculator(selectedWorkPrice, hoursOfWork);


})

function priceCalculator(selectedWorkPrice, hoursOfWork) {
    let finalPrice = selectedWorkPrice * hoursOfWork;

    /* if (promoCodes.includes(promoCode)) {
        finalPrice = finalPrice * 0, 25;
    } */

    /* return finalPrice;
 */
    console.log(finalPrice);

}