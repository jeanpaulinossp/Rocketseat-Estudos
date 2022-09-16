//for ... of

let nome = "Jean"
let names = ["João", "Paulo", "Pedro"]

for (let char of nome) {
    console.log(char)
}

for (let name of names) {
    console.log(name)
}

// for ... in

let person = {
    name: "Jean",
    age: 29,
    weight: 80
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}