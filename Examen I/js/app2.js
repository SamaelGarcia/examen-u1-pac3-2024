/* Calificación Final (25%):
a. Escribe un programa que reciba una calificación numérica entre 0 y 100 y luego imprima su equivalente
en letras, de acuerdo con la siguiente tabla:
i. 90-100: A
ii. 80-89: B
iii. 70-79: C
iv. 60-69: D
v. 0-59: F
*/

let calificación = prompt("Ingrese la calificacion entre 1 y 100");

/*while (calificación === 1 || calificación === 101) {
    prompt("Ingrese una calificacion valida [0-100]");
}*/

if (calificación <= 100 && calificación >= 90) {
    console.log("Calificaion: A");
}if (calificación <= 89 && calificación >= 80) {
    console.log("Calificaion: B");
    }if (calificación <= 79 && calificación >= 70) {
        console.log("Calificaion: C");
        }if (calificación <= 69 && calificación >= 60) {
            console.log("Calificaion: D");
         }if (calificación <= 59 && calificación >= 0) {
            console.log("Calificaion: F");
        }
        
    
