//Input Fields
const quantityInput = document.querySelector('.select-quantity');
const colorInput = document.querySelector('.select-color');
const priceInput = document.querySelector('.price');
const calculate = document.querySelector('.calculate');

//Output Fields
cartFinalPrice = document.querySelector('.final-price');
cartFinalQuantity = document.querySelector('.final-quantity');
cartFinalColor = document.querySelector('.color-swatch');


//Event Listener button Calcular Total
calculate.addEventListener('click',() => {

    //Assigning variables into function scope - then reformating
    let total = quantityInput.value * priceInput.textContent.split(".").join("");
    let totalLocaleString = total.toLocaleString("es-CL", {style: "decimal", currency: "CLP", miniumFractionDigits: 0 });

    //Replacing contents to print
    cartFinalColor.style.background = colorInput.value;
    cartFinalQuantity.textContent = quantityInput.value;
    cartFinalPrice.textContent = '$' + totalLocaleString;

});