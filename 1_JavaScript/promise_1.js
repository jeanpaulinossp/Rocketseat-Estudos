//promise - Uber

let aceitar = true

console.log("pedir uber")

const promessa = new Promise((resolve, reject) => {
    if (aceitar === true) {
        return resolve("carro chegou")
    }else {
        return reject("pedido negado")
    }
})

console.log("aguardando")

promessa
.then(result => console.log(result)) //retorna o cumprimento da promessa
.catch(erro => console.log(erro)) //retorna que a promessa não foi cumprida
.finally(() => console.log ("finalizada")) //retorna uma resposta final