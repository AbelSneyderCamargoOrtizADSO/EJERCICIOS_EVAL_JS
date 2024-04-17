import { numeros } from "./ejercicio2.js";

export function prompar() {

  let suma = 0
  let contpar = 0

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      suma += numeros[i];
      contpar++;
    }
  }

  let prom = suma / contpar;

  return prom
}

export function promprimos() {

  let suma = 0;
  let contpri = 0

  for (let i = 0; i < numeros.length; i++) {

    let esPrimo = 0;

    for (let j = 2; j < numeros[i]; j++) {

      if (numeros[i] % j == 0) {
        esPrimo = 1;
        break;
      }
      break;
    }

    if (esPrimo === 0) {
      suma += numeros[i];
      contpri++;
    }
  }

  let prom = suma / contpri;

  return prom
}