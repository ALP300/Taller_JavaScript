//Crear una función que reciba un array como parámetro.
//Usar un bucle for para iterar sobre los elementos del array.
//Imprimir cada elemento en cada iteración del bucle.

function imprimirElemento(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

const miArray=['manzana','pera','naranja'];
imprimirElemento(miArray);