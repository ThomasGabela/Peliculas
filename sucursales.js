const fs = require("fs")
let array1 = fs.readFileSync("./Base de datos/Sucursales.JSON", "utf8")
let array = JSON.parse(array1)

let respuesta = "Tambien puede ver las peliculas en nuestras salas. \n"


let salasTotal = 0;
let salasLista = "";
array.forEach(x => {salasLista += `\n\nNombre: ${x.name} \nDireccion: ${x.address} \nDescripcion: ${x.description} \n\n
-------------------------------------------------------------------------------------------------------------------------------\n\n`; salasTotal += x.total_rooms})

respuesta += "Cantidad de salas disponibles: " + salasTotal;
respuesta += salasLista;

module.exports = respuesta
