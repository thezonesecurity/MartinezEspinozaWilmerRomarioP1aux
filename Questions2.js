//console.log("w");
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
let calcPropina = tip(factura);
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
  // return (res = tip(fac));
  if (fac < 300) {
    return (fac * 15) / 100;
  } else return (fac * 20) / 100;
};
console.log("------------- tarea 3 -------------");
console.log(calcTip(factura));
