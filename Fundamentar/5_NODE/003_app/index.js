let questions = [
    "Qual é o seu nome?",
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

let ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

let answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim() + "\n")
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
    
})

process.on("exit", () => {
    console.log(`Show de Bola ${answers[0]}
    
    O que você aprendeu hoje foi: ${answers[1]}
    
    O que te deixou aborrecido foi: ${answers[2]}
    
    O que você pode fazer pra melhorar é: ${answers[3]}
    
    O que te deixou feliz hoje foi: ${answers[4]}
    
    E você ajudou ${answers[0]} hoje.
    
    Você está indo muito bem, volte amanhã para novas reflexões.`)
})

ask()
