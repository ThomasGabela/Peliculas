const http = require ("http")
const Faq = require("./Routes/faq")
const Sucursales = require("./Routes/sucursales")
const Home = require("./Routes/home")
const Contacto = require("./Routes/contacto")
const Votadas = require("./Routes/votadas")
const cartelera = require("./Routes/cartelera")

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type' : "text/play; charset = utf-8"})
    let respuesta = "";
   
    switch (req.url) {
        case '/' : respuesta = Home; break;
        case '/en-cartelera' : respuesta = cartelera ; break;
        case "/mas-votadas": respuesta = Votadas; break;
        case '/sucursales' : respuesta = Sucursales; break;
        case '/contacto' : respuesta = Contacto; break;
        case '/preguntas_frecuentes' : respuesta = Faq; break;
        default: respuesta = "Error Pagina no Encontrada";

    }
    res.end(respuesta)
}).listen(300, "localhost")

