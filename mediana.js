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

// const lista1 = [
//     100, 
//     200, 
//     500,
//     400000000,
// ];

function esPar(numero) {
    // para saber si es par se saca el mod
    if (numero % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

function calcularMediana(lista) {

    let mediana;
    const mitadLista = lista.length / 2;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
         const promedioElemento1y2 = calcularMediaAritmetica([
             elemento1,
             elemento2,
         ]);
    
        return mediana = promedioElemento1y2;
    } else {
        return mediana = lista[mitadLista];
    }
}

// convertir todo el codigo en funcion para que no tener listas quemadas
// ordenar la lista con el método .sort