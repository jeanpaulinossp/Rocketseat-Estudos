// convertendo tipos
let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

//contar caracteres
let word = "Paralelepipedo"
console.log(word.length)
let n1 = 1234
console.log(String(n1).length)

//limitar casas decimais e trocar ponto por virgula
let n2 = 43520.5555555
console.log(number.toFixed(2))//limitar as casas decimais
console.log(number.toFixed(2).replace(".",","))

//transforme letras minúsculas em maiúsculas e vice versa
let word1 = "Programar é muito bacana!!!"
console.log(word1.toLowerCase())
console.log(word1.toUpperCase())

//verificar se o texto contém uma palavra
let phrase = "Eu quero viver o amor!"
console.log(phrase.toUpperCase().includes("AMOR"))

//separar um texto em arrays
let phrase1 = "Eu quero viver o armoço kkk"
let myArray = phrase1.split(" ")
console.log(myArray);
let phraseJunta = myArray.join("_")
console.log(phraseJunta)

//criar array com constructor
let myArray2 = new Array(10)
console.log(myArray2)

//contar elementos de um array
console.log (["a", {type: "array"}, function() {return "algo"}].length)

//transformar cadeia de caracteres em elementos de um array
let word3 = "manipulação"
console.log(Array.from(word3))

//manipulação de Arrays
let techs = ["html", "css", "js"]
console.log(techs.push("nodejs")) //adiciona um elemento ao final da array
console.log(techs.unshift("sql")) //adiciona um elemento no inicio da array
console.log(techs.pop()) //remove um elemento do final do array
console.log(techs.shift())//remove um elemento do começo do array
console.log(techs.slice(1, 2))//cria uma nova array com os parametros passados
console.log(techs.splice(1,2))//retorna uma lista contendo os elementos removidos
console.log(techs.indexOf("css"))//é usado para encontrar um elemento em uma Array