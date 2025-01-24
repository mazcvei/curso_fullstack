let numeros = new Array(3, 6, 4, 7, 8,5,3,1);

/*
mix.push("Sol")
mix.unshift("Luna")

console.log(mix)
console.log(mix.shift());
console.log(mix)
console.log(mix.pop())
console.log(mix)
*/

let numerosMayores5 = numeros.filter( (n) => {
   return n>=5
})

let numerosPor2 = numeros.map((n) => {
    return n * 2;
})

let algunCero = numeros.some((n) => {
    return n == 0;
})

let todosPositivos = numeros.every((n) => {
    return n >= 0;
})


numeros.forEach((n) => {
    console.log(n)
})
console.log(numeros.sort())
console.log(numeros.indexOf(6))
console.log(numeros.fill(-1, 0, 10))
console.log(numeros)