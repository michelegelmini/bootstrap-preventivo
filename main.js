'use strict'

/* comportamento all'invio del form */
const myForm = document.querySelector('form')

var forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {

        myForm.addEventListener('submit', function (event) {
            event.preventDefault()

            if (!form.checkValidity()) {
                event.stopPropagation()
            }

            form.classList.add('was-validated')


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

            // console.log(`hai selezionato ${selectedWork.value}, il preventivo è di ${finalPrice}`);


            /* suddivisione prezzo in parte integer e float */

            const finalPriceFormatted = priceSplitter(finalPrice)
            console.log(finalPriceFormatted.integerPart, finalPriceFormatted.fractionalPart);

            /* comparsa del prezzo */

            document.getElementById('final-price').classList.remove('d-none');

            const finalPriceOutputInteger = document.getElementById('final-price-integer');
            finalPriceOutputInteger.innerHTML = `€ ${finalPriceFormatted.integerPart}`;

            const finalPriceOutputFractional = document.getElementById('final-price-fractional');
            finalPriceOutputFractional.innerHTML = `${finalPriceFormatted.fractionalPart}`;



        }, false)
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