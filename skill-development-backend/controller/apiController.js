const express= require('express')
const cors= require("cors")
const app = express();

// const mongoObj = require('mongodb')
require("./schema/config")
const headerProduct = require("./schema/headerSchema")


app.use(cors())
app.use(express.json())

app.get("/api/header",async (req, res)=>{
    
     let headerData = await headerProduct.find()
     res.json(headerData)
     
     console.log("req is accepted:"+headerData)
})





const server=app.listen(8083, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})