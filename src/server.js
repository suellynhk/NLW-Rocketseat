//criar um servidor
//faz a requisição do express e armazena na variavel, depois executa na variavel "server"
const express = require("express")
const server = express()

//pegar o banco de dados (importar)
const db = require("./database/db")


//configurar pasta public no servidor /para encontrar todos os arquivos css, svg etc
server.use(express.static("public"))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extend:true }))

//utilizando template engine (nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true//configurando para não armazenar na memoria, p/ que no prox acesso ele atualize
})

//configurar caminhos da minha aplicação
//página inicial-home "/"  -> res-resposta req-requisição
server.get("/", (req, res) => { //título dinâmico html com {}
    return res.render("index.html", {title:"Seu marketplace de coleta de resíduos"}) //resposta.enviarAqruivo(2underline__dirname"caminho/arquivo")
})

//criar rota para as páginas que não estão abrindo:
//pag cadatro de ponto de coleta e resultados de pesq
server.get("/create-point", (req, res) => {
    //console.log(req.query)    query strings da nossa url pra tirar a duvida 

    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) => {
    //console.log(req.body)  //corpo do nosso form

    //inserir dados no banco de dados
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`

const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
]

//caso dê algum erro
function afterInsertData(err) {
    if(err){
        console.log(err)
       // return res.send("Erro no cadastro!")
       return res.render("create-point.html", {erro: true})
    }
    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved: true})

}    
    db.run(query, values, afterInsertData)

})


server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
         return res.render("search-results.html", {total: 0})        
    }
    
    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err){
            return console.log(err)
        }

        const total = rows.length

        //mostrar a pag html com os dados do banco de dados
        return res.render("search-results.html", {places: rows, total: total})        
    })
})


//ligar o servidor. toda vez q vc faz uma alteração, precisa religar o servidor (nodemon)
server.listen(3000) //o servidor fica "ouvindo" a porta 3000 na hora q o arq é executado
