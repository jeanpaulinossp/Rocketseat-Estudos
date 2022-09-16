// cancelar um time out

let timeOut = 3000 //3 segundos
let finished = () => console.log("done!")

let timer = setTimeout(finished, timeOut) // chama a função finished após 3 segundos(timeout)

clearTimeout(timer)