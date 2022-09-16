//o nome foi passado no terminal (node 001_process Jean Paulino)

// console.log(process.argv)

// firstName = process.argv[2]
// lastName = process.argv[3]

// console.log (`Meu nome é ${firstName} ${lastName}!`)

nome = process.argv.indexOf(--nome)
saudacao = process.argv.indexOf(--greeting)

console.log (`Meu nome é ${nome}, ${saudacao}`)