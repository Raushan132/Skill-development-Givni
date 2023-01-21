const mongoose = require("mongoose")
const headerSchema = new mongoose.Schema({
        nav: String,
        submenu: Array
})

module.exports = mongoose.model("headers",headerSchema)
