/*Calificación Final (20%):
a. Crear un programa en JavaScript que solicite al usuario un número y determine si ese número es múltiplo
de 3, múltiplo de 5 o de ambos.
i. Ejemplo:
1. Si el usuario ingresa 15, el programa debe imprimir: "El número es múltiplo de 3 y de
5."
ii. Pistas:
1. Usa el operador módulo (%) para comprobar si un número es divisible por 3 o 5.
2. Usa la función prompt() para pedir el número.
*/

let numero = prompt('Ingresa un numero');

console.log(numero);

//Determinar si el numero es multiplo de 3, 5 o ambos
if (numero%3 === 0 && numero%5 === 0) {
    console.log("El numero es divisible por 3 y 5");
} else {
    if(numero%3 === 0){
        console.log("El numero es divisible con 3");
    }else{
        console.log("EL numero no es divisible con 3");
    }
    if (numero%5 === 0) {
        console.log("El numero es divisible con 5");
    }else{
        console.log("EL numero no es divisible con 5");
    }
}

