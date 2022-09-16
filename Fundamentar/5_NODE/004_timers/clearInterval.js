let timeOut = 1000
let checking = () => console.log("checking")

let interval = setInterval(checking, timeOut)

setTimeout( () => clearInterval(interval), 3000)