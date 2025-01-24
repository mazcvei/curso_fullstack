let texto = "Con la ayuda de error_log, los registros de errores," //17
  + "puede registrar y analizar los errores del navegador o del servidor." //24
  + "Para activar error_log, añada las siguientes lineas de codigo a un archivo php.ini " //31
  + "en la carpeta donde desea activar error_log: "; //16
    
/*
Contar el nº de vocales en el texto
*/
text = texto.trim().replaceAll(' ', '');
console.log(text.length)
let vocales = 0;
for (let i = 0; i < texto.length; i++){
  if (texto.charAt(i) == 'a' || texto.charAt(i) == 'e' || texto.charAt(i) == 'i'
    || texto.charAt(i) == 'o' || texto.charAt(i) == 'u') {
    vocales++;
  }
}
console.log("El numero de vocales es: "+vocales)
  