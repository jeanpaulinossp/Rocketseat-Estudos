//Manipulando conteúdo

//textContent
let element = document.querySelector("h1")
element.textContent += ", Olá Devs!"
console.log(element.textContent)

//innerText
let element1 = document.querySelector("h2")
element1.innerText += " Me chamo Jean Paulino"
console.log(element1.innerText)

//innerHTML => permite usar tags HTML
let element2 = document.querySelector("h3")
element2.innerHTML += " e atualmente estou me especializando na Emsoft" 
console.log(element2.innerHTML)

//value => usado para alterar a tag input
let element3 = document.querySelector("input")
element3.value = "Essa é minha caixa de texto"

let element4 = document.querySelectorAll("input")
console.log(element4)
element4[1].value = "outro valor"

//setAttribute
let header = document.querySelector("header")
header.setAttribute("id", "header")
let headerID = document.querySelector("#header")
console.log(headerID.getAttribute("id"))
header.removeAttribute("id")
console.log(headerID)

//style
let element5 = document.querySelector("body")
element5.style.backgroundColor = "green"

//classList - Estilos
let element6 = document.querySelector("h2")
element6.classList.add("active") // adiciona a classe
element6.classList.remove("active") // remove a classe
element6.classList.toggle("active") // ativa ou desativa classe

//parentNode parentElement => Navegar pelos elementos pai
let element7 = document.querySelector("body")
console.log(element7.parentNode)
console.log(element7.parentElement)

//cildNodes children => Navegador pelos elementos filho
let element8 = document.querySelector("body")
console.log(element8.childNodes)
console.log(element8.children)
console.log(element8.firstElementChild)
console.log(element8.children[5])

//nextSibling nextElementSibling => Navegar pelos elementos irmãos
let element9 = document.querySelector("header")
console.log(element9.nextSibling)
console.log(element9.nextElementSibling)

//createElement => Criar elementos dentro do html
let element10 = document.createElement("div")
element10.innerText = "Hello World!!!"
let element11 = document.querySelector("body")
element11.append(element10) // adiciona no final do elemento
element11.prepend(element10) // adiciona no começo do elemento

//insertBefore
let element12 = document.querySelector("body")
let element13 = document.querySelector("header")
element12.insertBefore(element10, element13) // insere depois
element12.insertBefore(element10, element13.nextSibling) // insere antes
