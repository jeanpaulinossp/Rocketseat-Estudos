let getFlagValue = require("./flags")

console.log(`Oi ${getFlagValue("--name")}. ${getFlagValue("--greeting")}`)