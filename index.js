/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

let resultsOneEl = document.getElementById("results-1")
let resultsTwoEl = document.getElementById("results-2")
let resultsThreeEl = document.getElementById("results-3")
let inputEl = document.getElementById("num-input")

const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function(){
    
    // call a function() here
    ConversionMeterToFeet()
    ConversionLiterToGallon()
    ConversionKiloToPound()
})

function ConversionMeterToFeet(){
    let mTf = (inputEl.value)*meterToFeet
    let fTm = (inputEl.value)/meterToFeet
    resultsOneEl.innerHTML = `${inputEl.value} meters = ${mTf.toFixed(3)} feet |
     ${inputEl.value} feet = ${fTm.toFixed(3)} meters`
    
}

function ConversionLiterToGallon(){
    let lTg = (inputEl.value)*literToGallon
    let gTl = (inputEl.value)/literToGallon
    resultsTwoEl.innerHTML = `${inputEl.value} meters = ${lTg.toFixed(3)} feet |
     ${inputEl.value} feet = ${gTl.toFixed(3)} meters`
    
}

function ConversionKiloToPound(){
    let kTp = (inputEl.value)*kiloToPound
    let pTk = (inputEl.value)/kiloToPound
    resultsThreeEl.innerHTML = `${inputEl.value} meters = ${kTp.toFixed(3)} feet |
     ${inputEl.value} feet = ${pTk.toFixed(3)} meters`
    
}