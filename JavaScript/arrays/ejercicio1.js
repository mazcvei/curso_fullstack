let frutas = [
  "Manzana",
  "Plátano",
  "Naranja",
  "Fresa",
  "Pera",
  "Uva",
  "Sandía",
  "Melón",
  "Kiwi",
  "Papaya",
  "Mango",
  "Cereza",
  "Limón",
  "Mandarina",
  "Durazno",
];
let contador = 0;
//Cuantas frutas terminan en 'a'
frutas.forEach((f) => {
    if (f.length >= 6) {
        contador++;
        console.log(f)
    }
})
console.log("Hay "+contador+" frutas que tienen 6 o mas letras")
