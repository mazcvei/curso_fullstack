let texto =
    "En la gráfica de uso de almacenamiento disponible en el "+
    "siguiente enlace: Storage Use Over Time Graphic, los puntos de la gráfica no corresponden con la " +
    "información presentada en la columna de la izquierda.";

let texto2 = '';
texto2[0] = texto[0].toUpperCase();
texto2[1] = texto[1].toLowerCase();
/*
    for (let i=0; i < texto.length; i++){
      if (i%2 == 0){
        texto[i] = texto[i].toUpperCase(); 
      } else {
        texto[i] = texto[i].toLowerCase();         
      }
}
      */
    
console.log(texto2)