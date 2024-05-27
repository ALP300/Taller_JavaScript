//Crear una función que reciba un array como parámetro.
//Inicializar una variable de suma en 0.
//Iterar sobre cada elemento del array y sumar su valor a la variable de suma.
//Devolver el valor de la suma.

function sumaArray(numeros){
    let suma=0;
    for(let i=0; i<numeros.length; i++){
        suma+=numeros[i];
    }
    return suma;
}

const array= [1,2,3,4,5,6]
console.log(sumaArray(array));