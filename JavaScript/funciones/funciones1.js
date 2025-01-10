/*
function calculo_raro(var1, var2) {
    let res = var1 + var2;

    return Math.pow(res,3);
}
*/

const calculo_raro = (var1, var2) => { 
    return Math.pow((var1 + var2),3);
}


const saludo = () => "hola!"



console.log(calculo_raro(1,4));
console.log(calculo_raro(2, 6));

console.log(calculo_raro(9, 0));
console.log(saludo())
