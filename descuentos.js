// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {

    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onclicButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue); 

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}

// console.log({
//      precioOriginal,
//      descuento,
//      porcentajePrecioConDescuento,
//      precioConDescuento,
// });