/* 4. Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores. */

let n = parseInt(prompt("INGRESE LA CANTIDAD DE PALABRAS"))

let palabras = [];

for (let i = 1; i <= n; i++) {

  let pal = prompt("INGRESE LA PALABRAS " + i)

  if (!isNaN(pal)) {
    alert("INGRESE SOLO PALABRAS")
    i--;
  }else{
    palabras.push(pal)
  }
}

let DeterminarMayorlongitud = function (...palabras){
  let mayorLongitud= "";

  for (const index of palabras) {
    if (index.length > mayorLongitud.length) {
      mayorLongitud = index;
    }
  }

  return mayorLongitud;
}

let Determinarmayor = function (...palabras){
  let mayor= "";

  for (let index of palabras) {
    if (index > mayor) {
      mayor = index;
    }
  }

  return mayor;
}

alert(`LA PALABRA MAYOR ES: ${Determinarmayor(...palabras)}
LA PALABRA DE MAYOR LONGITUD ES: ${DeterminarMayorlongitud(...palabras)}`
)
