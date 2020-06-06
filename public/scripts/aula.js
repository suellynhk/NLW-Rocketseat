/*
//document.write("Hello")

//VARIAVEIS, tipos de dados (armazena algum dado para ser usado depois)
var myvar
myvar= "Hello"
document.write(myvar)

//constante- não muda
const myconst = "HE"
document.write(myconst)

//string
const s1= "isso é"
const s2= " uma string"
document.write(s1 + s2)

//number
const n1= 1
const n2 = 12
document.write(n1 + n2)

//boolean
const bTrue= true
const bFalse=false
document.write(bFalse)

//OBJETOS- possui propriedades, funções
const pessoa= {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr(){
    document.write("run forest")
    return "run forest"
  }
}
document.write(pessoa.altura)
document.write(pessoa.solteiro)
document.write(pessoa.correr())

//Array- vetores
[....] uma coleção de algo
const colecaoDeBolinhas = ["blue", "green", 1, {name:"my name"}]
document.write(colecaoDeBolinhas[3].name)

//Funções- atalhos- reuso
//registrando a função
function sayMyName() {
  document.write("Suellyn")
}
//executar a função
sayMyName()

//reuso do codigo -passando o valor pra dentro da função
function sayMyName(name) {
  document.write(name)
}
sayMyName("suellyn")
sayMyName("harumi")
sayMyName("kohmoto")

//Condicional
const notaFinal = 4

if(notaFinal < 5) {
  document.write("Reprovado")
}else{
  document.write("Aprovado")
}

//Loop- repetições
for(i=0; i<10; i++){
  document.write(`<p>${i}</p>`)
}


// REFERENCIAR O JS no doc HTML (dentro do body):
<script src="/scripts/nome-do-doc.js"></script>

//NA TELA f12 (live server) a aba Console roda código do js

*/
