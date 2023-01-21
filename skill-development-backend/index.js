const express = require('express')
const cors=require('cors')
const dbCon=require('./mongodb/connection')
const ObjectId= require('mongodb');
const app= express();
app.use(cors())

app.use(express.json())

// send navigation data using api....
app.get("/api/header",async (req,res)=>{
   
     let headerData= await dbCon('header');
     let record= await headerData.find().toArray();
    
    res.json(record)
    
})

// send content data using api....
app.get("/api/home2",async (req,res)=>{
    let HomeData= await dbCon('HomeData');
     let record= await HomeData.find().toArray();

    res.json(record);
})


//set data through dashboard and store in db...

app.get("/getheader",async (req,res)=>{
     let data= await dbCon('test')
     let email= await data.find().toArray()
     console.log("sending data")
     res.json(email)
})

app.get("/getheaderid/:id",async (req,res)=>{
    
    console.log(req.params.id)
     let data= await dbCon('test')
      data= await data.find({_id:ObjectId.ObjectId(req.params.id)}).toArray()
     res.json(data)
     console.log("getting data:"+data);
    
})

app.post("/setheader",async (req,res)=>{
    console.log(req.body)  
    let data= await dbCon('test')
    await data.insertOne(req.body)
    res.send("i get data...")
})

app.put("/updateHeader/:id", async (req,res)=>{
    console.log("getting data"+req.body)
    let data= await dbCon('test')
  
    await data.updateOne(
         {
            _id: ObjectId.ObjectId(req.params.id)
         },
         {
            $set: {nav:req.body.nav,
                    submenu: req.body.submenu
                    }
         }
    )
    res.send("data is updated")
})

app.delete("/deleteHeader/:id",async (req,res)=>{
     console.log(req.params.id)
     let data= await dbCon('test')
     await data.deleteOne({_id: new ObjectId.ObjectId(req.params.id)})
     res.send("data is deleted")
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })