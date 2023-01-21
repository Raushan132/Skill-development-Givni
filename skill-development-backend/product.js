const express= require("express")
const mongoObj=require("mongodb")
require('./mongodb/mongConfig')
const product = require("./mongodb/HeaderObject")
const app= express();
const cors=require('cors')

app.use(cors())
app.use(express.json())


app.get("/getTest",async (req,res)=>{
      let data= await product.find();
      console.log("getting data...")
      res.send(data);
      
})

app.get("/test/:id",(req,res)=>{
     console.log("testing data"+req.params.id);
     res.send("update");
})

app.post("/addNav", async (req,res)=>{
     let data= await new product(req.body);
     data = await data.save();
     res.send(data);
})

app.put("/updateData/:id", async (req,res)=>{
        console.log("getting data from rajeev"+req.params.id);
         let data = await product.updateOne(
            {_id: mongoObj.ObjectId(req.params.id)},
            {
                $set:{
                     "nav": req.body.nav,
                    submenu:req.body.submenu
                    }
            }
         )
         res.send("updated")
})

app.put("/addSubData/:id", async (req,res)=>{
    console.log("data");
     let data = await product.updateOne(
        {_id: mongoObj.ObjectId(req.params.id)},
        {
            $push:{submenu:{$each:req.body[0].submenu}}
        }
     )
     res.send("updated")
})

app.put("/addNavData/:id", async (req,res)=>{
     let data= await product. updateOne(
        { _id: mongoObj.ObjectId(req.params.id) },
        {
            $set:{nav: req.body[0].nav}
        }
     )
     res.send("Nav is updated");
})

app.delete("/deleteNav/:id", async (req,res)=>{
     let data= await product.deleteOne({_id: mongoObj.ObjectId(id)});
     res.send("data is deleted");
})

app.get("/", (req,res)=>{
      res.send("hello")

})


var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })