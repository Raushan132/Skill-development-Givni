const mongoObj = require("mongodb")
const multer = require("multer")
require("./schema/config")
const imageProduct = require("./schema/imageSchema")


const upload = multer({
    storage: multer.diskStorage({
         destination:function(req,file,cb){
            cb(null,"C:\\Users\\LENOVO\\Pictures\\Saved Pictures")
         },
          filename:function(req,file,cb)
          {
            console.log("data is comming here");
            cb(null,"test.jpg")
          }
    })
}).single("userImage");

module.exports =function(app){

    app.get("/getImages",async (req,res)=>{
        console.log("after upload:"+req.query)
       let data= await imageProduct.find()
       res.json(data);
    })
    app.get("/getImage/:id",async (req,res)=>{
        console.log("send single image");
        let data = await imageProduct.find({_id:mongoObj.ObjectId(req.params.id)})
        res.json(data);
    })

    app.post("/uploadImage",upload,(req,res)=>{
         res.send("upload")
    })


}