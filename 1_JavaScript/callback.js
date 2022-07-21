//callback é quando se chama a propria função dentro dela mesmo, chamando ela de volta

function imprimirDado(dado) {
    console.log("outras tarefas")
    console.log(dado())
}

function soTestes(dado) {
    console.log("testando")
    console.log(dado())
}

soTestes(function() {
    return "Hello World!"
})