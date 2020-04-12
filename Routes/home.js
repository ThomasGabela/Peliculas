const fs = require("fs")

let array1 = fs.readFileSync("./Base de datos/Peliculas.JSON", "utf8")
let movies = JSON.parse(array1)

let nombre = [];
let respuesta = "Bienvenidos a DH Movies el mejor sitio para enbcontrar las mejores peliculas, incluso mucho mejor que Netflix, Cuevana y demas.\n"


respuesta += "\nCantidad de peliculas: "+movies.length


movies.forEach(element => nombre.push(element.title))
nombre.sort()
nombre.forEach(element => respuesta += "\n"+ element)
respuesta += "\n\nRecorda que podes visitar las secciones: \nEn cartelera\nMas Votadas\nSucursales\nContacto\nPreguntas Frecuentes"


module.exports = respuesta;

