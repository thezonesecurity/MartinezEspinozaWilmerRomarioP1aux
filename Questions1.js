-"use strict";
/* Hay dos equ-ipos de gimnasia, Ricks y Mortys. Compiten entre ellos 3 veces. ¡El
ganador con la puntuación promedio más alta gana un pase de aventura!
 */

//let Ricks = [4, 4, 4];
//let Mortys = [8, 8, 10];
let Ricks = [96, 108, 89];
let Mortys = [88, 91, 110];
let RicksD2 = [97, 112, 101];
let MortysD2 = [109, 95, 123];
let RicksD3 = [97, 112, 101];
let MortysD3 = [109, 95, 106];
function sumarPuntaje(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//console.log(sumarPuntaje(Ricks));
//console.log(sumarPuntaje(Mortys));

//TAREA 1
/*Calcule el puntaje promedio de cada equipo, utilizando los datos de prueba
proporcionados al final del enunciado.*/
function Promedio(arr) {
  let sum = sumarPuntaje(arr);
  return sum / arr.length;
}
console.log("--------- tarea 1 ---------");
console.log(Promedio(Ricks));
console.log(Promedio(Mortys));
//TAREA 2
/*Compare los puntajes promedio del equipo para determinar el ganador de la
competencia, e imprimirlo en la consola. No olvides que puede haber un
empate, así que toma en cuenta ese caso también. */
const promRicks = Promedio(Ricks);
const promMortys = Promedio(Mortys);
const winner = () => {
  if (promRicks > promMortys) {
    return `Equipo ganador: Team Ricks`;
  } else if (promMortys > promRicks) {
    return `Equipo ganador: Team Mortys`;
  }
  return `Equipo ganador: Equipos Empatados`;
};
console.log("--------- tarea 2 ---------");
console.log(winner());
//TAREA 3
/*Incluya el requisito de una puntuación mínima de 100. Con esta regla el equipo
solo gana si tiene una puntuación más alta que el otro equipo, y además tiene
una puntuación de al menos 100 puntos. */
let scoreRicks = sumarPuntaje(Ricks);
let scoreMortys = sumarPuntaje(Mortys);
const requisitoMinimo = () => {
  if (scoreRicks >= 100 || scoreMortys >= 100) {
    return winner();
  }
  return "puntos obtenidos insuficientes";
};
console.log("--------- tarea 3 ---------");
console.log(requisitoMinimo());
//TAREA 4
/*la puntuación mínima también se aplica a un empate! Entonces, un empate
solo ocurre cuando ambos equipos tienen la misma puntuación y ambos tienen
una puntuación mayor o igual a 100 puntos. De lo contrario, ningún equipo
gana el premio. */
const puntuacionMinima = () => {
  if (scoreRicks >= 100 || scoreMortys >= 100) {
    if (scoreMortys === scoreRicks) {
      return `Equipo ganador: Equipos Empatados`;
    }
    return `EL premio se lleva el ${winner()}`;
  }
  return "puntos obtenidos insuficientes";
};
console.log("--------- tarea 4 ---------");
console.log(puntuacionMinima());
//TAREA 5
//Cree una arrow function 'calcAverage' para calcular el promedio de 3
//puntuaciones
const calcAverage = (d1, d2, d3) => {
  let promTotal = Promedio(d1) + Promedio(d2) + Promedio(d3);
  return promTotal;
};
//TAREA 6
console.log("--------- tarea 5 y 6 ---------");
console.log(calcAverage(Ricks, RicksD2, RicksD3));
console.log(calcAverage(Mortys, MortysD2, MortysD3));
//TAREA 7
/*Cree una función 'checkWinner' que tome la puntuación media de cada equipo.
como parámetros ('avgRIcks' y 'avgMortys'), y luego muestre el ganador, junto
con los puntajes, de acuerdo con la regla anterior. Ejemplo: "Los koalas ganan
(30 contra 13)"*/

const checkWinner = (avgRIcks, avgMortys) => {
  if (avgRIcks > avgMortys) {
    return `Los Ricks ganan contra los Mortys
    (${avgRIcks} contra ${avgMortys})`;
  }
  return `Los Mortys ganan contra los Ricks
  (${avgMortys} contra ${avgRIcks})`;
};
//TAREA 8
let avgRIcks = sumarPuntaje(Ricks, RicksD2);
let avgMortys = sumarPuntaje(Mortys, MortysD2);
console.log("--------- tarea 8  ---------");
console.log(checkWinner(avgRIcks, avgMortys));
