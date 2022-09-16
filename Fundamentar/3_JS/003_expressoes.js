//criar um novo objeto (new)
let name = new String("Jean")
surName = "Paulino"
let age = new Number(23)
console.log(surName, age)

//descobrir tipo de dado (typeof) e deletar (delete)
const person = {
    name: "Jean",
    age: 29
}
console.log(person)
console.log(typeof(person))

delete person.age
console.log (person)

//condicional ternário
let pao = true
let queijo = true

const niceBreakFast = pao && queijo ? "Café top!" : "Café ruim"

console.log(niceBreakFast)

//falsy => Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
// thruty => Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)