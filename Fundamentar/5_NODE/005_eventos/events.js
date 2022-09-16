//puxar o evento
const { EventEmitter } = require("events")
const ev = new EventEmitter()

//ouvir evento on => ouvir sempre / once => ouve uma unica vez
ev.on("saySomething", (message) => {
    console.log("Eu ouvi você!!!", message)
})

//emitir o evento
ev.emit("saySomething", "Jean")

//--------------------------------------------------------------------------------

const { inherits } = require("util")

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")

chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`))

console.log("Oh! E agora, quem poderá me defender?")
chapolin.emit("help")
