const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

//configurar pasta publica
server.use(express.static("public"))

//utilizando template engine
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicacao
//pagina inicial
//req: Requisicao
//res: Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)