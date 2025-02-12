let persona = {
    nombre: "Mario",
    edad: 20,
    notas: [3, 7.2, 5, 6, 9],
    direccion: {
        calle: "calle falsa",
        cp: 14354,
        ciudad: "Madrid",
        geolocalizacion: {
            lat: "6.4632",
            long: "51.245"
        }
    },
    calculoIMC: function (altura, peso) {
        return peso / (altura * altura);
    }
}
console.log(persona.direccion.cp);
console.log(persona.calculoIMC(1.70, 65));
console.log(persona.direccion.geolocalizacion.long);
persona.apellidos = "Perez gonzalez";
persona.edad = 25;
console.log(persona)