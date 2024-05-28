'use strict'

/* assegnazione costanti fornite */
const hoursOfWork = 10;
const backendDevelompentPrice = 20.50;
const frontendDevelopmentPrice = 15.30;
const projectAnalysisPrice = 33.60;
const promoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];


/* comportamento all'invio del form */

const myForm = document.querySelector('form')

myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('final-price').classList.toggle('d-none');

    const selectedWork = document.querySelector('form-select');


})