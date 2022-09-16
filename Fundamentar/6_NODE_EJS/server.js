const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "A mais braba"
        },
        {
            title: "I",
            message: "Insista, persista, mas nunca desista"
        },
        {
            title: "S",
            message: "Sempre avante."
        }
    ]
    //por padrão o arquivo dex fica dentro de uma pasta com nome views
    res.render("pages/index", {
        qualitys: items
    })
})

app.get("/sobre", function(req, res) {
    res.render("pages/about")
})

app.listen(8080);
console.log("Rodando")