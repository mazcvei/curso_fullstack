const numerosAleatorios = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));
//Obtener suma de los elementos
//El minimo, el maximo
//La media de los elementos
let mayor = 0;
let menor = 9999;
console.log(numerosAleatorios)
let sumaNumero = 0;
numerosAleatorios.forEach((numero) => {
    sumaNumero += numero;
    if (numero > mayor) {
        mayor = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
})
console.log("Suma de elementos: "+sumaNumero)
console.log("Media de elementos: " + sumaNumero / numerosAleatorios.length)
console.log("El valor mayor es: "+mayor)
console.log("El valor menor es: "+menor)