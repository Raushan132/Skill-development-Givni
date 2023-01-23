const mongoose = require('mongoose')
const imageSchema = mongoose.Schema({
    img:String,
    alt:String
})

module.exports= mongoose.model("images",imageSchema)