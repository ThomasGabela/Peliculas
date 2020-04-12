const fs = require("fs")

let array1 = fs.readFileSync("./Base de datos/Peliculas.JSON", "utf8")
let movies = JSON.parse(array1)


let respuesta = "Mas votadas\n\n"
let votos = movies.filter(x => x.vote_average >= 7)

respuesta += "Cantidad de peliculas mas votadas: " + votos.length +"\n\n"


let votosTotal = 0
votos.forEach((x) => votosTotal += x.vote_average)
votosTotal = votosTotal/votos.length
let average = votosTotal.toFixed(3)


respuesta += "Rating promedio: " + average +"\n\nListado de Peliculas: \n\n"

votos.forEach(element => respuesta += `Titulo: ${element.title} \nRating: ${element.vote_average} \nReseña: ${element.overview}\n\n
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
\n\n`);


module.exports = respuesta