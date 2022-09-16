//Eventos

//onclick
function print() {
    let element = document.querySelector("h2")
    element.innerText += " É muito legal,"
}

//onkeydown / onkeyup / onkeypress
let input = document.querySelector("input")
input.onkeydown = function() {
    console.log("rodei")
}

//addEventListener
let h3 = document.querySelector("h3")
h3.addEventListener("click", print2)

function print2() {
    console.log("print")
}

//event
input.onkeyup = function (event) {
    console.log(event.currentTarget)
}