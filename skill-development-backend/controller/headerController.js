const mongoObj = require("mongodb")
require("./schema/config")
const headerProduct = require("./schema/headerSchema")

const express = require("express")
const cors = require("cors")
const app= express()

app.use(cors())
app.use(express.json())




/**
 *  <p>sendind data form mongodb to rest api...</p>
 */
app.get("/getTest",async (req,res)=>{
    console.log("sending data...")
    let navData= await headerProduct.find()
    res.json(navData)
})


/**
 *  getting data from rest api to mongodb...
 */
app.post("/addNav",async (req,res)=>{
    console.log("Nav data is addeding...")
    let navData= await new headerProduct(req.body);
    navData=await navData.save().then(()=>{
        console.log("Nav is added")
        res.send(true)
    })
    .catch((err)=>{
        console.log(err);
        res.send(false)
    })
    

})

/**
 * updateing data form rest api to mongodb...
 */

app.put("/updateData/:id", async (req,res)=>{
    console.log("Nav and subnav getting updateing")
    let navData = await headerProduct.updateOne(
         {_id: mongoObj.ObjectId(req.params.id)},
         {
            $set:{
                "nav": req.body.nav,
                "href": req.body.href,
                submenu:req.body.submenu
            }
         }

    ).then(()=>{
        console.log("Nav is updated")
        res.send(true)
    })
    .catch((err)=>{
        console.log(err)
        res.send(false)
    })
})

/**
 * deleteing navigation data....    
 */

app.delete("/deleteNav/:id", async (req,res)=>{
    console.log("nav is deleting...")
    let data= await headerProduct.deleteOne({_id: mongoObj.ObjectId(req.params.id)}).then(()=>{
        console.log("Nav is deleted")
        res.send(true)
    })
    .catch((err)=>{
        console.log("Nav is deleted")
        res.send(false)
    });
    
})


const imageServer= require("./imageController")
imageServer(app);


const server = app.listen(8084,function (){
    var host = server.address().address
    var port = server.address().port
    
    console.log("app listening at http://%s:%s", host, port)
})
