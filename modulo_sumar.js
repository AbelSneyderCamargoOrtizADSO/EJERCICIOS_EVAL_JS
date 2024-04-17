import { numeros } from "./ejercicio2.js";

export function sumar() {
  let suma = 0;

  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i]
  }

  return suma
}

