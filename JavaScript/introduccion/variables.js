const numeroConst = [4,6];
console.log(typeof numeroConst)

//Number, String, object, undefined, Boolean, function, symbol
let a = 1.4;
a = "Hola"

//Operadores artmeticos
//Operadores logicos => Devuelven boolean  [ && , || ] //F (false o 0) V (true o 1)
//Operadores de comparacion  => Devuelven boolean [ < > <= >= != ! == === ]

console.log(false && true)

console.log( !(1<2) || !(4!=3) ) //=> false

console.log("2" == 2)
console.log("2" === 2)


console.log( ((2 != 3) && ("2" === 2) ) || ( (1==="1") && ("3" == (2+1)) ) ) 

let A = 0, B = 0, C = 1, D = -1 
if (((A >= B) || (B < A)) && ((B > A) || (C == 1))) {
  console.log("dentro de true")
} else {
    console.log("dentro de else")
}

// if(expresion logica){
    //entra si es true
//}else{
    //Entra si es false
//}




