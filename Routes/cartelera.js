let fs = require ("fs")

let leerJson = fs.readFileSync("./Base de datos/Peliculas.JSON", "utf8")
let js = JSON.parse(leerJson)
let cantidad = js.length

let name = [];
let reseña = [];

let respuesta = "En Cartelera";

respuesta += "\nExiste un total de : " + cantidad;

js.forEach(elemento => respuesta += "\n\n\ntitulo: " + elemento.title + "\nreseña: " + elemento.overview + "\n---------------------------------------------------------------------------------\n") 
 

/*js.forEach(elemento => name.push(elemento.title));
js.forEach(elemento => reseña.push(elemento.overview));

for (i = 0; i < name.length; i++){
    respuesta += "\n\n\n" + name[i] + "\n" + reseña[i] + "\n----------------------------------------------------------------\n"
 }*/


 
 module.exports = respuesta;


