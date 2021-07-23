// const lista1 = [
//     100, 
//     200, 
//     300,
//     500,
// ];

function calcularMediaAritmetica(lista) {
        
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }

    // encapsular funciones
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista/lista.length;    

    return promedioLista;
}