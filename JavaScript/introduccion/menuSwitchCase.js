console.log("Elige una opcion: ");
console.log("1- Sumar dos numeros");
console.log("2- Mostrar fecha de hoy");
console.log("3- Ver el tipo de una variable");
console.log("4- Salir");
let opcion = 5;

switch (opcion) {
  case 1:
    let num1 = 8;
    let num2 = 6.25;
    console.log(num1 + num2);
    break;
  case 2:
    let date = new Date();
    console.log(
      date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
    break;
  case 3:
    let variable = "Hola!";
    console.log(typeof variable);
    break;
  case 4:
    console.log("Adios!");
    break;
  default:
    console.log("Opcion incorrecta");
    break;
}
