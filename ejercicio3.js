/* 3. Diseñar un programa que me solicite por teclado n cantidad de números, al
finalizar la carga de los números el programa debe enviar los números a
una función expresada como único parámetro rest donde serán ordenados
de mayor a menor para luego mostrarlos en una tabla por consola. */

let n = parseInt(prompt("INGRESE LA CANTIDAD DE NUMEROS"));

let numeros = [];

for (let i = 1; i <= n; i++) {
  let num = parseFloat(prompt("INGRESE EL " + i + " NUMERO"));
  numeros.push(num);
}

let ordenar = function (...numeros) {
  return numeros.sort((a, b) => b - a);
}

console.table(ordenar(...numeros));

