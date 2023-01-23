const mongoose = require("mongoose")
const headerSchema = new mongoose.Schema({
        nav: String,
        href: String,
        submenu: Array
})

module.exports = mongoose.model("tests",headerSchema)
