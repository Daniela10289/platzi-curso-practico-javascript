// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
 }
 
 function calcularMediaAritmetica(lista) {
     // encapsular funciones
     const sumaLista = lista.reduce(
         function(valorAcumulado = 0, nuevoElemento) {
             return valorAcumulado + nuevoElemento;
         }
     );
 
     const promedioLista = sumaLista/lista.length;    
     return promedioLista;
 }

 
// calcular la mediana general de los salarios
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }else {
        const personaMitad = lista[mitad];
        return personaMitad
    }
}


// recorrer el array para obtener el salario
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

// ordenar la lista de los salarios 
const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryA;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100; 
const spliceCount = salariosColSorted.length -spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});