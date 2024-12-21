const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();
const mesActual = fechaActual.getMonth();
const diaActual = fechaActual.getDate();

const edad = anioActual - 1990;

const cumpleanios = new Date(anioActual, mesActual, diaActual)


console.log("Tienes "+edad +" años")
