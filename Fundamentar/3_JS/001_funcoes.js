// função modelo antigo
const soma = function(x, y) {
    let total = (x + y)
    return total
}
// nova forma de escrever função
const soma1 = (a, b) => {
    let total1 = a + b;
    return total1
}

let n1 = 20
let n2 = 30
total_soma = soma(n1, n2)
total_soma1 = soma1(n1, n2)

console.log(`A soma total entre ${n1} e ${n2} é igual a ${total_soma}`)
console.log(`A soma total entre ${n1} e ${n2} é igual a ${total_soma1}`)

//--------------------------------------------------------------------------------------------------------//

// função callback
function sayMyName(name) {
    console.log("Antes de executar a função callback")
    name()
    console.log("Depois de executar a callback")
}

sayMyName( () => {
    console.log("estou em uma callback")
})

//--------------------------------------------------------------------------------------------------------//

//função constructor
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const jean = new Person("Jean")
const joao = new Person("João")

console.log(jean.walk())
console.log(joao.walk())