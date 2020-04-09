const http = require ("http")
const Movies = require("./movies")
const Faq = require("./faq")
const Sucursales = require("./sucursales")
const Home = require("./home")
const Contacto = require("./contacto")
const Votadas = require("./votadas")

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type' : "text/play; charset = utf-8"})
    let respuesta = "";
    console.log(req.url)
    switch (req.url) {
        case '/' : respuesta = Home; break;
        case '/en-cartelera' : respuesta = Movies ; break;
        case "/mas-votadas": respuesta = Votadas; break;
        case '/sucursales' : respuesta = Sucursales; break;
        case 'contacto' : respuesta = Contacto; break;
        case 'preguntas frecuentes' : respuesta = Faq; break;
        default: respuesta = "Error";

    }
    res.end(respuesta)
}).listen(300, "localhost")

