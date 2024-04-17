/* 2. Diseñar un programa que me solicite ingresar n cantidad de números por
teclado, luego de ingresar los números el programa me debe solicitar que
operación deseo realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares
Para este ejercicio se solicita trabajar con módulos.
*/

import { sumar } from "./modulo_sumar.js";
import { contarpar, contarpri } from "./modulo_contar.js";
import { prompar, promprimos } from "./modulo_promedio.js";



let n = parseInt(prompt("INGRESE LA CANTIDAD DE NUMEROS"))

export let numeros = [];

for (let i = 1; i <= n; i++) {
  let num = parseFloat(prompt("INGRESE EL " + i + " NUMERO"))
  numeros.push(num)
}

let elec = prompt(`QUE OPERACION DESEA REALIZAR:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares`).toLowerCase();

if (elec === "a") {
  alert(sumar())
} else if (elec === "b") {
  alert(contarpri())
} else if (elec === "c") {
  alert(contarpar())
} else if (elec === "d") {
  alert(promprimos())
} else if (elec === "e") {
  alert(prompar())
}







