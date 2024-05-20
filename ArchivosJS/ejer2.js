let num1= parseFloat(prompt("Introduce el número 1: "));
let num2= parseFloat(prompt("Introduce el número 2: "));
let operacion= prompt("Introduce la operacion (+,-,*,/): ");
switch(operacion){
    case "+":
        break;
        console.log(`La suma es: ${num1+num2}`);
    case "-":
        console.log(num1-num2);
        break;
    case "*":
        console.log(num1*num2);
        break;
    case "/":
        console.log(num1/num2);
        break;
    default:
        console.log("Operación no válida");
        break;
}