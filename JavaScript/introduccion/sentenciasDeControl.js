let notaMedia = 0.5;

if (notaMedia < 0 || notaMedia > 10) {
  console.log("Nota incorrecta");
} else if (notaMedia < 5) {
  console.log("Suspenso");
} else if (notaMedia < 7) {
  console.log("aprobado");
} else if (notaMedia < 9) {
  console.log("Notable");
} else if (notaMedia < 10) {
  console.log("Sobresaliente");
} else if (notaMedia == 10) {
  console.log("Matricula de honor");
}

let mes = 7;
switch (mes) {
  case 1:
        crearUsuario();
    break;
  case 2:
        editarUsuario();
    break;
  case 3:
        eliminarUsuario();
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
        break;
    default:
            console.log("Valor incorrecto")
    break;
}
