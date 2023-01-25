const mongoObj = require("mongodb")
const multer = require("multer")
require("./schema/config")
const imageProduct = require("./schema/imageSchema")

const whitelist=[
    'image/png',
    'image/jpeg',
    'image/jpg',
    
]


const upload = multer({
    storage: multer.diskStorage({
         destination:function(req,file,cb){
            cb(null,"C:\\Users\\LENOVO\\Pictures\\Saved Pictures")
         },
         
          filename:async function(req,file,cb)
          {
            console.log("data is comming here:");
            console.log(req.params.id)
            let data = await imageProduct.find({_id:mongoObj.ObjectId(req.params.id)})
            let filename=data.map(result=>{return result.alt})
            console.log(filename[0])
            cb(null,filename[0])
           
          }

          
    }),
    fileFilter: function(req, file,cb){
         if(!whitelist.includes(file.mimetype)){
                
                   return cb("false")

         }
         cb(null,true)
    }
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

    app.post("/uploadImage/:id",upload,(req,res)=>{
        console.log(req.body)
        //  res.send("upload")
    })


}