const fs = require("fs")
let array1 = fs.readFileSync("./Base de datos/Faq.JSON", "utf8")
let array = JSON.parse(array1)

let respuesta = "Preguntas Frecuentes"
respuesta += "Preguntas Totales: " + array.length
array.forEach(x => respuesta += `\n\nP: ${x.faq_title} \nR: ${x.faq_answer} \n\n
-------------------------------------------------------------------------------------------------------------------------------`)


module.exports = respuesta;
