/* 5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
clase con los siguientes metodos:
a. Suma
b. Resta
c. Multiplicación
d. División
Al momento de realizar cada operación el sistema debe validar que no se
presenten errores, si al momento de su ejecución se presenta algún error, el
sistema debe enviar un mensaje personalizado indicando el tipo de error
para que el usuario lo solucione y continue realizando los cálculos básicos
de las matemáticas. 
*/

import { calculadora } from "./calculadora.js";

let num1 = null
let num2 = null;

while (num1 === null) {
    let num = parseFloat(prompt("INGRESE EL PRIMER NÚMERO"));
    if (isNaN(num)) {
        alert("INGRESE SOLO NÚMEROS O NO DEJE VACÍO EL PRIMER NÚMERO");
    } else {
        num1 = num;
    }
}

while (num2 === null) {
    let num = parseFloat(prompt("INGRESE EL SEGUNDO NÚMERO"));
    if (isNaN(num)) {
        alert("INGRESE SOLO NÚMEROS O NO DEJE VACÍO EL SEGUNDO NÚMERO");
    } else {
        num2 = num;
    }
}


let resultado = new calculadora();
let divvalid = false;

while (!divvalid) {
  try {
    alert(`EL RESULTADO DE LA SUMA ES ${resultado.suma(num1, num2)}
    EL RESULTADO DE LA RESTA ES ${resultado.resta(num1, num2)}
    EL RESULTADO DE LA MULTIPLICACION ES ${resultado.multi(num1, num2)}
    EL RESULTADO DE LA DIVISION ES ${resultado.divi(num1, num2)}`);
    divvalid = true; 
  } catch (error) {
    console.error(error.message);
    alert(error.message);
    num2 = parseFloat(prompt("INGRESE DE NUEVO EL VALOR DEL DIVISOR"));
  }
}

