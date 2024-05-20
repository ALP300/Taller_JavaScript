//Calcular el factorial de un número ingresado por el usuario utilizando un bucle for.

let numero= parseInt(prompt("Ingresa un número para calcular su factorial: ")) //10
let factorial= 1
for(let i=1; i<=10; i++){
    factorial*=i;
}
console.log("El factorial de: ",numero, "es: ", factorial);