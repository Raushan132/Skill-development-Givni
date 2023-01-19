const mongoose= require("mongoose")
const HeaderObj = new mongoose.Schema({
    nav: String,
    submenu: Array
})

module.exports=mongoose.model('tests',HeaderObj);