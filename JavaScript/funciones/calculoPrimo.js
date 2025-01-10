const cuentaDivisores = (numero) => {
    let divisores = 0;
    for (let i = 1; i <= numero; i++){
        if (numero % i == 0) {
            //console.log(i + " es divisor de " + numero)
            divisores++;
        }
    }
    return divisores;
}

const esPrimo = (min, max) => {
    
    for (let i = min; i <= max; i++){
        if (cuentaDivisores(i) == 2) {
            console.log(i)
        }
    }
    return 0;
}
//1 al 1000
console.log(esPrimo(1,10))
