
const recursiva = (n) => {
    if (n == 0) {
        console.log(n);
        console.log("Fin de la cuenta!")
    } else {
        console.log(n);
        recursiva(n - 1);
    }
  
}
   

const no_recursiva = (n) => {
    if (n == 0) {
        console.log("Fin de la cuenta!")
        return n;
    } else {
        return n;
    }
  
}
for (let i = 10; i >= 0; i--){
    console.log(no_recursiva(i))
}

console.log(recursiva(10));
//n, n-1, n-2 0