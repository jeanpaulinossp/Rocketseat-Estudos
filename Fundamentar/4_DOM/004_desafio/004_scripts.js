let buttonOpenModal = document.getElementById ("openModal")

let modalWrapper = document.querySelector (".modal-wrapper")

console.log(modalWrapper)

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove("invisible")
}

document.addEventListener("keydown", function(event) {
    let isEscKey = event.key === "Escape"

    if (isEscKey) {
        modalWrapper.classList.add("invisible")
    }
})