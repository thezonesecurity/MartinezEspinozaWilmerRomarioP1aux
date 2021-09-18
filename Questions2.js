"use strict";
//TAREA 1
/**
 Calcule la propina, dependiendo del valor de la factura. Cree una variable
llamada ‘tip' para esto. No está permitido usar una declaración if / else
 */

//let factura = 120;
let factura = 200;
//let factura= 275;
const calcularPropina = (fac, porcentaje) => {
  let result = (fac * porcentaje) / 100;
  return result;
};
//console.log(calcularPropina(factura, 15));
const tip = function (fac) {
  let res;
  fac < 300
    ? (res = calcularPropina(fac, 15)) //console.log(calcularPropina(fac, 15))
    : (res = calcularPropina(fac, 20)); //console.log(calcularPropina(fac, 20));
  return res;
};
console.log("------------- tarea 1 -------------");
console.log(tip(factura));
//TAREA 2
/**
 Imprima una cadena en la consola que contenga el valor de la factura, la
propina y el valor final. (factura + propina). Ejemplo: "La factura fue 275, la
propina fue 41,25 y el valor total 316.25 "
 */
const calcPropina = tip(factura);
let showDate = `La factura fue ${factura}, la
propina fue ${calcPropina} y el valor total ${factura + calcPropina}`;
console.log("------------- tarea 2 -------------");
console.log(showDate);
//TAREA 3
/**
 Escriba una arrow function 'calcTip' que tome un valor de factura como entrada
y devuelva la propina correspondiente, calculada según las reglas anteriores.
 */
const calcTip = (fac) => {
  //return (res = tip(fac));
  if (fac < 300) {
    return (fac * 15) / 100;
  } else return (fac * 20) / 100;
};
console.log("------------- tarea 3 -------------");
console.log(calcTip(factura));

//___________________________________PARTE 2 _____________________________________
//PARTE 4
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//PARTE 5
let tips = [];
let totals = [];
//PARTE 6
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log("------------- tarea 4, 5, 6 -------------");
console.log(tips);
console.log(totals);
//PARTE 7
/**
 Cree una función para calcular el promedio de cualquier array que se le pase
como argumento y úselo para calcular el promedio de los tres arrays que tiene
(‘bills’, ‘tips’ y ‘totals’)
 */
const CalcArrayPromedio = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log("------------- tarea 7 -------------");
console.log(`promedio de Bills es: ${CalcArrayPromedio(bills)} `);
console.log(`promedio de propinas es: ${CalcArrayPromedio(tips)} `);
console.log(`promedio total es: ${CalcArrayPromedio(totals)} `);
