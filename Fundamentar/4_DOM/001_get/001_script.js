//getElementById() => retorna um element
let element = document.getElementById("blog-title")
console.log(element)

//getElementByClassName => retorna um HTMLCollection
let element1 = document.getElementsByClassName("blog-subtitle")
console.log(element1)

//getElementbyTagName => retorna um HTMLCollection
let element2 = document.getElementsByTagName("h3")
console.log(element2)

//querySelector() - Pega somente o primeiro encontrado  => retorna um element
let element3 = document.querySelector("meta")
console.log(element3)

//querySelectorAll() - Pega todos os seletores => Retorna um NodeList **Mais Indicado
let element4 = document.querySelectorAll("h4")
console.log(element4)