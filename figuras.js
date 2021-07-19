// Código del cuadrado
// agrupar por secciones
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
    // console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
}

function areaCuadrado(lado) {
    return lado * lado;
    // console.log("El área del cuadrado es: " + areaCuadrado + "cm~2");
} 

console.groupEnd();

// Código del triangulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
    // ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    // console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
    // (baseTriangulo * alturaTriangulo) / 2;
    // console.log("El área del triángulo es: " + areaTriangulo + "cm~2");
} 

console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
// const radioCirulo = 4;
// console.log("El radio del círculo es: " + radioCirulo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
    // radioCirulo * 2;  
    // console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
} 

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
    // diametroCirculo * PI;
    // console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");
} 

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
    // (radioCirulo * radioCirulo) * PI;  
    // console.log("El área del círculo es: " + areaCirculo + "cm~2");
} 

console.groupEnd();

// Aqui interactuamos con el html

function calcularPerimetroCuadrado() {
    // obtener el valor del input
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    // obtener el valor del input
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}