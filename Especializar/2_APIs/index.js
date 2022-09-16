//puxar o módulo express (framkework)

const express = require("express")


const app = express()

// => função listen fica ouvindo o navegador (usado para inicializar o servidor)
// => para inicializar o servidor (no terminal => node index.js)
app.listen("3000")

// ------------------------------------------------------------------------------------------------------------------

// ANCHOR => GET => Somente fornece informações
// => criar a rota, seleciona o método (get) e cria a requisição e resposta, após isso retorna a resposta através do send
// app.route("/").get( (req, res) => res.send("hello") )
// app.route("/sobre").get( (req, res) => res.send("Sobre") )

// ------------------------------------------------------------------------------------------------------------------

// ANCHOR => POST => Recebe informações de uma API externa

// => middleware (ao iniciar um post, primeiro ele sai do insomnia, passa pelo middleware e após isso é mostrado)
// => express.json() => para usar arquivos json

// => importar o json para trabalhar com arquivos JSON
// app.use(express.json())

// => É necessário uma resposta e uma requisição para retornar o arquivo
// => Deve ser iniciado no insomnia o arquivo
// app.route("/").post ( (req, res ) => res.send(req.body) )

// ------------------------------------------------------------------------------------------------------------------

// ANCHOR => PUT => Recebe e edita informações

// => middleware
//app.use(express.json())

//let author = "Jean"

//app.route("/").get( (req, res) => res.send(author) )

// app.route("/").put( (req, res) => {
//     author = req.body.author
//     res.send(author)
// })

// ------------------------------------------------------------------------------------------------------------------

// ANCHOR => DELETE => Apaga alguma informação

// => Para passar uma variável na página, se coloca o dois pontos (:) e o nome da variável
// => o params traz todas as variaveis passadas
// app.route("/:identificador").delete( (req, res) => {
//     res.send(req.params.identificador) })

// ------------------------------------------------------------------------------------------------------------------

//ANCHOR => BODY Params => O body pode ser trabalho usando o post, put e patch
//app.use(express.json())

//app.route("/").post( (req, res) => {
//    const {nome, cidade} = req.body
//    res.send(`Meu nome é ${nome} e minha cidade é ${cidade}`)
//} )

// ------------------------------------------------------------------------------------------------------------------

//ANCHOR => ROUTE Params => Envia informações através da rota
// app.route("/").get( (req, res) => res.send("oi") )
// app.route("/:nome").get( (req, res) => res.send(req.params.nome) )
// app.route("/identidade/:nome").get( (req, res) => res.send ( req.params.nome) )

//------------------------------------------------------------------------------------------------------------------

//ANCHOR => QUERY Params => Envia dados com variaveis criadas diretamente na aquisição (localhost/?nome=jean&idade=18)

//app.route("/").get( (req, res) => res.send( req.query ) )

//------------------------------------------------------------------------------------------------------------------

//ANCHOR => API com AXIOS

// => puxando a biblioteca axios

const axios = require("axios")

app.route("/").get( (req, res) => {
    axios.get("https://api.github.com/users/jeanziiin")
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})