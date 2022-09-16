let path = require('path')

console.log(path.basename(__filename))

let myModule = require("./001_exports")

console.log(myModule)