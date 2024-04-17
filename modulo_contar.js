import { numeros } from "./ejercicio2.js";

export function contarpar() {

  let contpar = 0

  for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 == 0) {
      contpar++;
    }

  }

  return contpar
}

export function contarpri() {

  let contpri = 0

  for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] === 1) {
      continue;
    }

    let esPrimo = 0;

    for (let j = 2; j < numeros[i]; j++) {

      if (numeros[i] % j == 0) {
        esPrimo = 1;
        break;
      }
      break;
    }

    if (esPrimo === 0) {
      contpri++;
    }
  }

  return contpri
}

