let cadena = " Hola-que-tal? ";

console.log(typeof cadena)

console.log(cadena.length) // 16
console.log(cadena.charAt(2)) // o
console.log(cadena.charAt(3)) // l
console.log(cadena.indexOf('a')) // 4
console.log(cadena.lastIndexOf('a')) // 12
console.log(cadena.slice(2,-4))  // ola, que t
console.log(cadena.substring(2, 5))  // ola
console.log(cadena.toLowerCase())  //  hola, que tal?
console.log(cadena.toUpperCase())  //  HOLA, QUE TAL?
console.log(cadena.trim().length) //14 (sin espacios antes y final)
console.log(cadena.replace('a','&')) // Reemplaza la primera ocurrencia de a por &
console.log(cadena.replaceAll('a', '&')) //Reemplaza todas las ocurrencias de a por &
console.log(cadena.split('-')) //Devuelve array con los trozos de la cadena separados por '-'
console.log(cadena.includes('H')) // Devuelve booleano si incluye el caracter dentro de la cadena
console.log(cadena.trim().startsWith('H')) // Devuevle booleano si empieza por caracter dado
console.log(cadena.endsWith(' ')) //Si termina en el caracter dado
console.log(cadena.concat(" como estás? "))
console.log(cadena.repeat(10)) //Repite la cadena n veces
console.log(cadena.charCodeAt(4))  //Devuelve el codigo ASCII del caracter dado a partir del indice
