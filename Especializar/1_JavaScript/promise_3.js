const promessa = new Promise (function(resolve, reject) {
    //return resolve("ok")
    return reject ("deu ruim")
})

async function start() {
    try {
        const result = await promessa
        console.log(result)
    } catch (erro) {
        console.log(erro)
    }finally {
        console.log("rodar sempre")
    }
}

start()