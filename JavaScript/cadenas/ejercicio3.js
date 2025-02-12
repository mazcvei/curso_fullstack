let palabras = [
  "cielo",
  "montaña",
  "libro",
  "piedra",
  "gato",
  "ordenador",
  "luz",
  "sueño",
  "árbol",
  "mar",
  "café",
  "tormenta",
  "música",
  "ventana",
  "sal",
  "espejo",
  "llave",
  "silla",
  "nieve",
  "y",
];
// Obtener la palabra de mayor longitud
// Obtener la palabra de menos longitud
let mayorLongitud = 0;
let menorLongitud = 99999;
let indiceMayor = 0;
let indiceMenor = 0;
palabras.forEach((palabra, indice) => {
  if (palabra.length > mayorLongitud) {
    mayorLongitud = palabra.length;
    indiceMayor = indice;
  }
  if (palabra.length < menorLongitud) {
    menorLongitud = palabra.length;
    indiceMenor = indice;
  }
});

console.log("Mayor longitud: " + mayorLongitud+" ("+palabras[indiceMayor]+")");
console.log("Menor longitud: " + menorLongitud+" ("+palabras[indiceMenor]+")");

