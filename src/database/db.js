//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()
 
//criar o objeto que fará operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")


// exportar o arquivo para usar em ooutro local
module.exports = db

/*
//utilizar o objeto de banco de dados para as operações
db.serialize(() => {
  
    //Comandos sql:
    //1-criar uma tabela /obs:o uso da crase permite a quebra de linha, aspas simple sou dupla não.
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT 
        ); 
    `) 
    //só vai criar a tabela se não existir, se já existir n faz nada

    //2-inserir dados na tabela (campos e valores)
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
        "https://images.unsplash.com/photo-1567093321629-c23611f44d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "N° 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos eletrônicos, Lâmpadas"
    ]

    //caso dê algum erro
    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }    

    //db.run(query, values, afterInsertData) //executa tudo, qndo retornar uma resposta vai executar a function (callback)
   
    //comando para verificar se deu certo: node src/database/db.js

    //3-consultar os dados da tabela: * são todos os dados, ma spoderia especificar, como name, image, city, etc
    db.all(`SELECT * FROM places`, function(err, rows) {
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)        
    })

    //4-deletar um dado da tabela 

    db.run(`DELETE FROM places WHERE id = ?`, [8], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    })

*/



