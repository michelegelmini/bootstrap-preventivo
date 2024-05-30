'use strict'

/* comportamento all'invio del form */
const myForm = document.querySelector('form:not(.special).needs-validation');

/* let forms = document.querySelectorAll('.needs-validation') */


myForm.addEventListener('submit', function (event) {
    event.preventDefault()

    if (!myForm.checkValidity()) {
        /*   event.stopPropagation() */
        document.getElementById('final-price').classList.add('d-none');
    } else if (myForm.checkValidity()) {


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

        /* invocazione delle funzioni di calcolo */

        const promoCode = promoCodeValidator()
        let finalPrice = priceCalculator(selectedWorkPrice, promoCode, hoursOfWork);


        /* suddivisione prezzo in parte integer e float */

        const finalPriceFormatted = priceSplitter(finalPrice)
        console.log(finalPriceFormatted.integerPart, finalPriceFormatted.fractionalPart);

        /* comparsa del prezzo */

        document.getElementById('final-price').classList.remove('d-none');

        const finalPriceOutputInteger = document.getElementById('final-price-integer');
        finalPriceOutputInteger.innerHTML = `€ ${finalPriceFormatted.integerPart}`;

        const finalPriceOutputFractional = document.getElementById('final-price-fractional');
        finalPriceOutputFractional.innerHTML = `${finalPriceFormatted.fractionalPart}`;

    }


    myForm.classList.add('was-validated');



}, false)




/* funzione con operazioni aritmetiche e verifica dello sconto */

function priceCalculator(selectedWorkPrice, promoCode, hoursOfWork) {
    let price = selectedWorkPrice * hoursOfWork;
    let finalPrice = 0;

    if (promoCode) {
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

/* funzione per suddividere il numero decimale */
function priceSplitter(floatNumber) {
    const numberString = floatNumber.toString();
    let integerPart = numberString.split(".")[0];
    let fractionalPart = numberString.split(".")[1];

    if (fractionalPart == undefined) {
        fractionalPart = '00';
    }

    return { integerPart, fractionalPart };
}

/* funzione per la validazione del promo-code */

function promoCodeValidator(promoCode) {

    promoCode = document.getElementById('promoCode');

    const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];

    if (promoCodes.includes(promoCode.value)) {
        /* promoCode.setAttribute('required', true); */
        promoCode.classList.remove('is-invalid')
        console.log('codice valido')
        return true;
    } else if (promoCode.value == '') {
        console.log('non hai inserito un codice')
        /* promoCode.setAttribute('required', false); */
        promoCode.classList.remove('is-invalid')
        promoCode.classList.remove('was-validated')
        return false;
    } else
        /* promoCode.setAttribute('required', true); */
        promoCode.classList.add('is-invalid')
    promoCode.classList.remove('was-validated')
    console.log('codice NON valido')
    return false;

}



/* price calculator backup */

// function priceCalculator(selectedWorkPrice, promoCode, hoursOfWork) {
//     let price = selectedWorkPrice * hoursOfWork;
//     const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
//     let finalPrice = 0;

//     if (promoCodes.includes(promoCode.value)) {
//         let discountedPrice = price - (price * 0.25);
//         console.log(discountedPrice);
//         finalPrice = discountedPrice;
//         return finalPrice

//     } else {
//         console.log(price);
//         finalPrice = price;
//         return finalPrice
//     }

// }